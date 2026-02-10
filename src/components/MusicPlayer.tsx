"use client";

import { useRef, useState, useEffect } from "react";

const music = {
  enabled: true,
  autoplay: false,
  musicUrl:
    "https://res.cloudinary.com/dlmjxhsd8/video/upload/v1770681791/New_West_ft._Zeph_-_Those_Eyes_Official_Audio_pbsfiz.mp3",
  startText: "🎵 Play Music",
  stopText: "🔇 Stop Music",
  volume: 0.5, // rango 0–1
};

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // ✅ setear volumen correctamente
  useEffect(() => {
    if (audioRef.current) {
      const v = Math.max(0, Math.min(1, music.volume));
      audioRef.current.volume = v;
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  if (!music.enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src={music.musicUrl}
        loop
      />
      <button
        onClick={toggleMusic}
        className="bg-black text-white px-4 py-2 rounded-xl shadow-lg"
      >
        {playing ? music.stopText : music.startText}
      </button>
    </div>
  );
}
