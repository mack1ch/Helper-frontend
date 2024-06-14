"use client";

import { AuthForm } from "@/features/authForm-slice/auth";
import { AppLayout } from "@/shared/layouts/appLayout";
import { Helper } from "@/widgets/helper-slice/helper";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { uid } from "uid";

export default function Home() {
  const [cookies, setCookie] = useCookies(["user-id"]);
  const isDevMode = process.env.NODE_ENV !== "production";
  useEffect(() => {
    if (cookies["user-id"]) {
    } else {
      setCookie("user-id", uid(16), {
        sameSite: "none",
      });
    }
  }, []);
  return (
    <>
      <AppLayout>
        <AuthForm />
        <Helper />
      </AppLayout>
    </>
  );
}
