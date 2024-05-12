"use client";
import { useEffect } from "react";
import { trpcReact } from "../_trpc/clientReact";

export default function TodoList() {
  const { data, error, isLoading, mutate } = trpcReact.companyUser.createCompanyUser.useMutation();
  const m = async () => {
    mutate({
      name: "adnan",
      email: "adnanfurkan77@gmail.com",
      surname: "aktemur",
      password: "1234",
      role: "super admin",
    });
  };
  useEffect(() => {
    //m();
  }, []);
  if (isLoading) {
    <div>
      <p>Bekleyiniz</p>
    </div>;
  }
  if (error) {
    <p>error</p>;
  }
  if (data) {
    console.log(data);
    return <div>başarılı</div>;
  }
  return <div>asd</div>;
}
