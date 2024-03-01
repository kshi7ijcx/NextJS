import { redirect } from "next/navigation";

const UserInfo = ({ params }) => {
  if (params.id == 5) redirect("/login");
  return <div>UserInfo - {params.id}</div>;
};
export default UserInfo;
