"use client";

import AdminLayout from "@/app/_component/admin/adminLayout/AdminLayout";
import { trpcReact } from "@/app/_trpc/clientReact";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function adminHomePage() {
 //const { data, mutate } = trpcReact.deneme.sendMailDeneme.useMutation();
 // console.log(data);
  const session = useSession();
  return (
    <AdminLayout>
      <button
        onClick={async () => {
          //mutate();
        }}
        className="p-2 bg-red-400"
      >
        MAil deneme
      </button>
      <div>
        <h2>Admin home page</h2>
        <h2>Hoşgeldiniz {session.data?.user?.name}</h2>
        <Link
          href={"/admin/create_company"}
          className="bg-blue-500 rounded text-white p-1 m-1"
        >
          {" "}
          Yeni Bir Şirket Kaydı Yap
        </Link>
        <Link
          href={"/admin/company_list"}
          className="bg-blue-500 rounded text-white p-1 m-1"
        >
          {" "}
          Var olan şirketleri düzenle
        </Link>
      </div>
    </AdminLayout>
  );
}
