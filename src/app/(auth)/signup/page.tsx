import SignupForm from "@/features/auth-signup/components/SignupForm";
import Headline from "@/shared/components/auth/Headline";
import ArrowBackButton from "@/shared/components/buttons/ArrowBackButton";

export default function SignupPage() {
  return (
    <section className="max-w-[598px] max-h-[630px] flex flex-col py-[48px] px-[88px] bg-white rounded-[30px] shadow-[0px_0px_14px_3px_#0000000A] relative">
      <ArrowBackButton className="absolute top-[75px] left-[48px]" />
      <Headline name="Sign up" />
      <SignupForm />
    </section>
  );
}
