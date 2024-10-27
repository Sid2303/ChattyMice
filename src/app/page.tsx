import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-5xl">
      <h1>Home Page</h1>
      <Link
        href={"/chats"}
        className="bg-violet-500 p-5 my-16 no-underline text-white"
      >
        Start Chatting
      </Link>
      <p>Is page me styling daal diyo dalle!</p>
      
    </div>
  );
}
