"use client";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face",
];

const zIndexMap = ["z-20", "z-10", "z-10", "z-10", "z-10", "z-10", "z-10", "z-10", "z-10"];

export function ProfileStack() {
  return (
    <div className="flex origin-center scale-[0.84] items-center pr-1 sm:scale-[0.92]">
      {avatars.map((src, i) => {
        const size = i === 0 ? "size-8 sm:size-9" : "size-6 sm:size-7";
        const ring = i === 0
          ? "ring-white/70 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.5)]"
          : "ring-white/25";
        const hiddenClass = i > 7 ? "max-sm:hidden sm:opacity-70" : "";
        const opacityClass = i > 0 ? "opacity-90" : "";

        return (
          <div
            key={i}
            className={`relative -ml-2.5 first:ml-0 overflow-hidden rounded-full bg-white/12 ring-2 first:ring-offset-0 ${zIndexMap[i]} ${size} ${ring} ${hiddenClass} ${opacityClass}`}
          >
            <img
              src={src}
              alt=""
              width={36}
              height={36}
              className="size-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
