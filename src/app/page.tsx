import Image from "next/image";
import TodoList from "./_component/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <Link
          href={"/admin/admin_login"}
          className="flex bg-blue-500 text-white rounded p-1 m-1"
        >
          <div className="text-center w-full">Admin Grişi</div>
        </Link>
        <Link
          href={"/admin/admin_login"}
          className="flex bg-blue-500 text-white rounded p-1 m-1"
        >
          <div className="text-center w-full">firma Grişi</div>
        </Link>
        <Link
          href={"/admin_login"}
          className="flex bg-blue-500 text-white rounded p-1 m-1"
        >
          <div className="text-center w-full">kulanıcı Grişi</div>
        </Link>
      </div>
    </main>
  );
}
