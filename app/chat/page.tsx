"use client";

import { useRouter } from "next/navigation";
import { X, CheckCheck, Smile, Send } from "lucide-react";
import { Thumb } from "@/components/ui/thumb";
import { avatar } from "@/data/menu";
import { cn } from "@/lib/cn";

type Msg = {
  from: "me" | "them";
  text: string;
  time: string;
  read?: boolean;
};

const messages: Msg[] = [
  { from: "me", text: "Are you coming?", time: "8:10 pm", read: true },
  { from: "them", text: "Hay, Congratulation for order", time: "8:11 pm" },
  { from: "me", text: "Hey Where are you now?", time: "8:11 pm", read: true },
  { from: "them", text: "I'm Coming , just wait ...", time: "8:12 pm" },
  { from: "me", text: "Hurry Up, Man", time: "8:12 pm", read: false },
];

export default function ChatPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <header className="flex items-center gap-4 px-6 pt-4">
        <button
          onClick={() => router.back()}
          aria-label="Close"
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-surface text-ink"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[17px] font-bold text-ink">Robert Fox</h1>
      </header>

      <div className="flex-1 space-y-6 px-6 py-8">
        {messages.map((m, i) =>
          m.from === "me" ? (
            <div key={i} className="flex flex-col items-end">
              <span className="mr-16 text-[14px] text-muted">{m.time}</span>
              <div className="mt-1.5 flex items-center gap-3">
                <CheckCheck
                  className={cn(
                    "h-4 w-4",
                    m.read ? "text-primary" : "text-muted",
                  )}
                />
                <div className="max-w-[240px] rounded-[16px] bg-primary px-5 py-3.5 text-[16px] font-medium text-white">
                  {m.text}
                </div>
                <Thumb src={avatar(8)} alt="You" className="h-[55px] w-[55px] shrink-0 rounded-full" />
              </div>
            </div>
          ) : (
            <div key={i} className="flex flex-col items-start">
              <span className="ml-16 text-[14px] text-muted">{m.time}</span>
              <div className="mt-1.5 flex items-end gap-3">
                <Thumb src={avatar(3)} alt="Robert Fox" className="h-[55px] w-[55px] shrink-0 rounded-full" />
                <div className="max-w-[240px] rounded-[16px] bg-surface px-5 py-3.5 text-[16px] text-ink-2">
                  {m.text}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* input */}
      <div className="px-6 pb-8">
        <div className="flex items-center gap-3 rounded-[16px] bg-surface px-5 py-3">
          <Smile className="h-6 w-6 text-muted-3" />
          <input
            placeholder="Write somethings"
            className="flex-1 bg-transparent text-[16px] text-ink placeholder:text-muted-3 focus:outline-none"
          />
          <button
            aria-label="Send"
            className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-white text-primary shadow"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
