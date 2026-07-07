"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FacebookIcon, TwitterIcon, AppleIcon } from "@/components/icons";
import { AuthLayout } from "@/components/auth/auth-top";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/home";
  const login = useAuth((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    form?: string;
  }>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Password is required.";

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    const res = login(email, password);
    if (!res.ok) {
      setErrors({ form: res.error });
      return;
    }
    router.replace(next);
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <Field
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <Field
        label="Password"
        password
        placeholder="••••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />

      {errors.form && (
        <p className="rounded-[10px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
          {errors.form}
        </p>
      )}

      <div className="flex items-center justify-between pt-1">
        <label className="flex items-center gap-2 text-[14px] text-muted-4">
          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 rounded-[6px] border border-line accent-primary"
          />
          Remember me
        </label>
        <Link href="/forgot-password" className="text-[14px] text-primary">
          Forgot Password
        </Link>
      </div>

      <Button type="submit">Log In</Button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout title="Log In" subtitle="Please sign in to your existing account">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>

      <p className="mt-8 text-center text-[16px] text-muted-4">
        Don&rsquo;t have an account?{" "}
        <Link href="/signup" className="font-bold text-primary">
          SIGN UP
        </Link>
      </p>

      <p className="mt-6 text-center text-[16px] text-muted-4">Or</p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <SocialButton className="bg-facebook">
          <FacebookIcon className="h-6 w-6 text-white" />
        </SocialButton>
        <SocialButton className="bg-twitter">
          <TwitterIcon className="h-6 w-6 text-white" />
        </SocialButton>
        <SocialButton className="bg-ink">
          <AppleIcon className="h-6 w-6 text-white" />
        </SocialButton>
      </div>
    </AuthLayout>
  );
}

function SocialButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex h-[62px] w-[62px] items-center justify-center rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
