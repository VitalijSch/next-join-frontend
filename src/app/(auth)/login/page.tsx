import LoginForm from "@/features/auth-login/components/LoginForm";
import Headline from "@/shared/components/auth/Headline";

export default function LoginPage() {
  return (
    <section className="max-w-[652px] max-h-[449px] flex flex-col py-[48px] px-[115px] bg-white rounded-[30px] shadow-[0px_0px_14px_3px_#0000000A]">
      <Headline name="Log in" />
      <LoginForm />
    </section>
  );
}
