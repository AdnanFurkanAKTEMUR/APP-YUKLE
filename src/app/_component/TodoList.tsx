"use client";
import { trpcReact } from "../_trpc/clientReact";

export default function TodoList() {
  const getTodos = trpcReact.getTodos.useQuery()

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
}
