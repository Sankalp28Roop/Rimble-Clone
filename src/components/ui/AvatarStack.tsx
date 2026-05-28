"use client";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
];

export function AvatarStack() {
  return (
    <div className="flex items-center pointer-events-auto">
      {avatars.map((src, i) => (
        <div
          key={i}
          className="relative -ml-2 first:ml-0 size-7 overflow-hidden rounded-full border-2 border-[#0a0a2a] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.5)]"
          style={{ zIndex: avatars.length - i }}
        >
          <img src={src} alt="" width={28} height={28} className="size-full object-cover" />
        </div>
      ))}
      <div className="relative -ml-2 flex size-7 items-center justify-center rounded-full border-2 border-[#0a0a2a] bg-white/[0.08] text-[9px] font-medium text-white/50">
        +4
      </div>
    </div>
  );
}
