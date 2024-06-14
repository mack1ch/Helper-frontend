"use client";

import { AuthForm } from "@/features/authForm-slice/auth";
import { AppLayout } from "@/shared/layouts/appLayout";
import { Helper } from "@/widgets/helper-slice/helper";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { uid } from "uid";

export default function Home() {
  return (
    <>
      <AppLayout>
        <AuthForm />
        <Helper />
      </AppLayout>
    </>
  );
}
