"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/auth-top";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUpPage() {
  const router = useRouter();
  const register = useAuth((s) => s.register);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
    form?: string;
  }>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Password is required.";
    else if (password.length < 6)
      nextErrors.password = "Password must be at least 6 characters.";
    if (confirm !== password) nextErrors.confirm = "Passwords do not match.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const res = register(name, email, password);
    if (!res.ok) {
      setErrors({ form: res.error });
      return;
    }
    router.replace("/location");
  }

  return (
    <AuthLayout title="Sign Up" subtitle="Please sign up to get started" back="/login">
      <form className="space-y-6" onSubmit={onSubmit} noValidate>
        <Field
          label="Name"
          placeholder="John doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
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
        <Field
          label="Re-Type Password"
          password
          placeholder="••••••••••"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={errors.confirm}
        />

        {errors.form && (
          <p className="rounded-[10px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
            {errors.form}
          </p>
        )}

        <Button type="submit" className="mt-2">
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
}
