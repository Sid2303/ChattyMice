import Logout from "@/components/Logout";
import { loggedInUser } from "@/utils/getUser";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Home() {
  const user = loggedInUser().then((res) => {
    return res?.userId;
  });
  const isLoggedIn = cookies().has("token");
  console.log(isLoggedIn);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-5xl">
      {isLoggedIn && <Logout />}
      <h1>Home Page</h1>
      <Link
        href={"/chats"}
        className="bg-violet-500 p-5 my-16 no-underline text-white"
      >
        Start Chatting
      </Link>
      <p>Is page me styling daal diyo dalle!</p>
      {user}
    </div>
  );
}
