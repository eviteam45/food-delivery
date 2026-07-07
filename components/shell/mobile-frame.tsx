export function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] w-full justify-center bg-[#e9ecf2]">
      <div className="relative flex w-full max-w-[440px] flex-col bg-white shadow-[0_0_60px_rgba(24,28,46,0.12)] min-h-[100dvh]">
        {children}
      </div>
    </div>
  );
}
