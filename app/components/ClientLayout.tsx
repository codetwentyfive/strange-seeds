'use client';

import { useState, useEffect, Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

interface ClientLayoutProps {
  children: React.ReactNode;
}

function BackgroundTexture() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url("/images/bg-texture.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        opacity: 0.1,
      }}
    />
  );
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Suspense fallback={<BackgroundTexture />}>
          <BackgroundTexture />
          <Suspense fallback={<div className="min-h-screen" />}>
            {children}
          </Suspense>
        </Suspense>
      </div>
    </>
  );
} 