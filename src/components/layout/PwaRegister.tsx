'use client';

import { useEffect, useState } from 'react';

export default function PwaRegister() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    function onBeforeInstall(e: Event) {
      e.preventDefault();
      setInstallPrompt(e);
      setShowInstall(true);
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall);
  }, []);

  async function handleInstall() {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
    setShowInstall(false);
  }

  if (!showInstall) return null;

  return (
    <button
      onClick={handleInstall}
      className="fixed bottom-24 left-6 z-[200] bg-navy dark:bg-gold text-gold dark:text-navy-deep text-xs font-mono px-4 py-2.5 border border-gold/40 shadow-lg"
    >
      Install App
    </button>
  );
}
