"use client";

import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/auth-top";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const router = useRouter();
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Please sign in to your existing account"
      back="/login"
    >
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/verification");
        }}
      >
        <Field label="Email" type="email" placeholder="example@gmail.com" />
        <Button type="submit">Send Code</Button>
      </form>
    </AuthLayout>
  );
}
