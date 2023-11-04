//TODO: slateなど固定で利用する色を定義しておきたい。

export default function Home() {
  const TODOS = [
    { id: 1, text: 'foo', isDone: false },
    { id: 2, text: 'bar', isDone: true },
  ];
  return (
    <div>
      <h3 className="text-3xl mb-4">TODO一覧</h3>
      <section className="flex flex-col gap-1">
        {TODOS.map((todo) => (
          <div key={todo.id}>
            <label className=" flex items-center gap-2 text-xl">
              <input type="checkbox" checked={todo.isDone} className="w-5 h-5" />
              {todo.text}
            </label>
          </div>
        ))}
      </section>
    </div>
  );
}
