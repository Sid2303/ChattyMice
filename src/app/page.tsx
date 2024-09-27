import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterFrom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {" "}
        <LoginForm />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}
