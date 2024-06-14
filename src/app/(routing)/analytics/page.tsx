import { AuthForm } from "@/features/authForm-slice/auth";
import { AppLayout } from "@/shared/layouts/appLayout";

export default function Home() {
  
  return (
    <>
      <AppLayout>
        <AuthForm />
      </AppLayout>
    </>
  );
}
