import { AuthForm } from "@/features/authForm-slice/auth";
import { AppLayout } from "@/shared/layouts/appLayout";
import { Helper } from "@/widgets/helper-slice/helper";

export default function Home() {
  return (
    <>
      <AppLayout>
        <AuthForm />
        <Helper/>
      </AppLayout>
    </>
  );
}
