import { CONTACT, WHATSAPP_HREF } from '@/lib/constants';

// Hardcoded per brief: these must always render even if CMS contact data is empty.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4C7.6 4 4 7.6 4 12.05c0 1.42.37 2.8 1.08 4.02L4 21l5.06-1.06a8.1 8.1 0 0 0 3 .58h.01c4.45 0 8.05-3.6 8.05-8.05a7.9 7.9 0 0 0-2.52-5.65zm-5.55 12.4h-.01a6.7 6.7 0 0 1-3.4-.93l-.24-.14-2.53.53.54-2.47-.16-.25a6.68 6.68 0 0 1-1.02-3.56 6.7 6.7 0 0 1 6.72-6.7 6.7 6.7 0 0 1 4.74 1.97 6.65 6.65 0 0 1 1.97 4.74c0 3.7-3 6.71-6.61 6.71zm3.66-5.02c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.85-.31-1.62-1-.6-.53-1-1.19-1.12-1.39-.12-.2-.01-.31.09-.4.09-.1.2-.24.3-.36.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.33-.45-.34-.12-.01-.25-.01-.38-.01a.73.73 0 0 0-.53.25c-.18.2-.7.68-.7 1.66s.72 1.93.82 2.06c.1.13 1.42 2.17 3.44 3.04.48.21.86.33 1.15.42.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.94.17-.46.17-.86.12-.94-.05-.09-.18-.14-.38-.24z" />
        </svg>
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-navy border-2 border-gold text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
