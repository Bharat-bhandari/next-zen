import { getIsAdmin } from "@/utils/getUserSession";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const isAdmin = await getIsAdmin();

  console.log(isAdmin);

  if (!isAdmin) return redirect("/");

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
