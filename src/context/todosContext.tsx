import { Todo } from '@/types';
import { useState, createContext, useContext, ReactNode, useMemo, useCallback } from 'react';

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: 'hoge', isDone: true },
  { id: 2, text: 'huga', isDone: false },
];
const INITIAL_FN = () => {
  throw Error('No default value');
};

/**
 * createContextの引数でuseContextの戻り値の初期値を設定できる
 * ただし.Providerで行ったvalueの設定が優先される
 * 基本的にはどちらも設定しておき上書きを前提とするsetTodosのような処理は使用されてはいけないのでErrorをthrowするように設定すると良い
 */
const TodosContext = createContext(INITIAL_TODOS);
const TodosDispatchContext = createContext<{
  toggleIsDone: (id: number) => void;
  addTodo: (text: string) => void;
}>({
  toggleIsDone: INITIAL_FN,
  addTodo: INITIAL_FN,
});

/**
 * Tips:パフォーマンスチューニング
 * stateとsetStateを別々のvalueで渡すことでsetStateだけしか受けとらないコンポーネントの再レンダリングを抑えることができる。
 */
export const useTodosContext = () => useContext(TodosContext);
export const useTodosDispatchContext = () => useContext(TodosDispatchContext);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  console.info(
    'stateの更新によってProviderコンポーネントは再レンダリングされる。この影響でaddTodoなどが再生成されるためuseCallbackとuseMemoを利用する'
  );
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  /**
   * 基本的にロジックはコンポーネント側ではなくstateを管理するほうやカスタムフックに寄せることが大切
   */
  const toggleIsDone = useCallback((id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  }, []);

  const addTodo = useCallback((text: string) => {
    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: prevTodos.length + 1,
        text,
        isDone: false,
      };
      return [...prevTodos, newTodo];
    });
  }, []);

  const todosDispatchValue = useMemo(
    () => ({
      toggleIsDone,
      addTodo,
    }),
    [toggleIsDone, addTodo]
  );

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
