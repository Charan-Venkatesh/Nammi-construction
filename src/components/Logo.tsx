'use client';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon Graphic */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House Outline */}
        <path d="M24 6L6 20V42H42V20L24 6Z" stroke="#002855" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Crane Tower */}
        <path d="M34 42V14" stroke="#002855" strokeWidth="2" strokeLinecap="round"/>
        {/* Crane Arm */}
        <path d="M34 14L14 14" stroke="#002855" strokeWidth="2" strokeLinecap="round"/>
        {/* Crane Cable */}
        <path d="M18 14V24" stroke="#002855" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Gear/Sun Element (Orange) */}
        <circle cx="24" cy="30" r="5" stroke="#FF6B00" strokeWidth="2.5" />
        <path d="M24 22V24" stroke="#FF6B00" strokeWidth="2"/>
        <path d="M24 36V38" stroke="#FF6B00" strokeWidth="2"/>
        <path d="M16 30H18" stroke="#FF6B00" strokeWidth="2"/>
        <path d="M30 30H32" stroke="#FF6B00" strokeWidth="2"/>
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-display font-bold text-nammi-navy tracking-tight uppercase">
          NAMMI
        </span>
        <span className="text-[0.6rem] font-bold text-nammi-orange tracking-widest uppercase">
          CONSTRUCTIONS
        </span>
      </div>
    </div>
  );
}
