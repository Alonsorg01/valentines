"use client";

import { useRef, useState } from "react";

const music = {
  enabled: true,
  autoplay: true,
  musicUrl: "https://res.cloudinary.com/dlmjxhsd8/video/upload/v1770681791/New_West_ft._Zeph_-_Those_Eyes_Official_Audio_pbsfiz.mp3",
  startText: "🎵 Play Music",
  stopText: "🔇 Stop Music",
  volume: 0.5,
};

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(music.autoplay);

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
        autoPlay={music.autoplay}
        loop
        volume={music.volume}
      />
      <button
        onClick={toggleMusic}
        className="bg-black text-white px-4 py-2 rounded-lg shadow-lg"
      >
        {playing ? music.stopText : music.startText}
      </button>
    </div>
  );
}
