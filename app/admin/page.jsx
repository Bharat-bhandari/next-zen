import React from "react";
import { getIsAdmin } from "@/utils/getUserSession";
import { redirect } from "next/navigation";

const page = async () => {
  const isAdmin = await getIsAdmin();

  console.log(isAdmin);

  if (!isAdmin) return redirect("/");

  return <div>page</div>;
};

export default page;
