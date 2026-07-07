"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";
import { useAuth } from "@/store/auth";
import { RequireAuth } from "@/components/auth/require-auth";
import { fileToAvatarDataUrl } from "@/lib/image";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EditProfilePage() {
  return (
    <RequireAuth next="/edit-profile">
      <EditProfileForm />
    </RequireAuth>
  );
}

function EditProfileForm() {
  const router = useRouter();
  const user = useAuth((s) => s.user);
  const updateProfile = useAuth((s) => s.updateProfile);

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [bio, setBio] = useState(user?.bio ?? "");
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar ?? "");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    form?: string;
  }>({});

  const fileRef = useRef<HTMLInputElement>(null);

  async function onPickAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-picking the same file
    if (!file) return;
    try {
      const url = await fileToAvatarDataUrl(file);
      setAvatarUrl(url);
      setErrors((prev) => ({ ...prev, form: undefined }));
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Could not load image." });
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";

    if (nextErrors.name || nextErrors.email) {
      setErrors(nextErrors);
      return;
    }

    const res = updateProfile({ name, email, phone, bio, avatar: avatarUrl || undefined });
    if (!res.ok) {
      setErrors({ form: res.error });
      return;
    }
    router.push("/profile");
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white pb-8">
      <ScreenHeader title="Edit Profile" back="/profile" />

      <div className="mt-6 flex justify-center">
        <div className="relative">
          <Thumb
            src={avatarUrl || avatar(5)}
            alt={name}
            className="h-[130px] w-[130px] rounded-full"
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            aria-label="Change photo"
            className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white active:scale-95"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onPickAvatar}
            className="hidden"
          />
        </div>
      </div>

      <form className="mt-8 flex flex-1 flex-col px-6" onSubmit={onSubmit} noValidate>
        <div className="space-y-6">
          <Field
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <Field
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Field
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="block">
            <span className="caps-label mb-3 block text-[13px] font-medium text-ink-2">
              Bio
            </span>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full resize-none rounded-[10px] bg-surface px-5 py-4 text-[14px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </label>

          {errors.form && (
            <p className="rounded-[10px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {errors.form}
            </p>
          )}
        </div>

        <Button type="submit" className="mt-auto">
          Save
        </Button>
      </form>
    </div>
  );
}
