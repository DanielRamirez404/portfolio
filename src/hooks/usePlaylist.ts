import { useAudio } from "./useAudio";

import { useRef, useState } from "react";
import { lofiSongs } from "#data/songs:";

export function usePlaylist() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const currentPlaying = lofiSongs[currentIndex].title;

  const skipToNextRef = useRef<() => void>(() => {});

  const onend = () => skipToNextRef.current()

  const songsOptions = lofiSongs.map(song => ({
    onend,
    ...song
  }));

  const playlist = songsOptions.map(useAudio);
  
  const totalSongs = playlist.length;

  const skipToNext = () => {
    playlist[currentIndex].stop();
    const nextIndex = (currentIndex + 1) % totalSongs;
    setCurrentIndex(nextIndex);
    playlist[nextIndex].play();
    setIsPlaying(true);
  };

  skipToNextRef.current = skipToNext;

  const skipToPrev = () => {
    playlist[currentIndex].stop();
    const prevIndex = currentIndex === 0 ? totalSongs - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    playlist[prevIndex].play();
    setIsPlaying(true);
  };

  const resume = () => {
    setIsPlaying(true);
    playlist[currentIndex].play();
  };

  const pause = () => {
    setIsPlaying(false);
    playlist[currentIndex].pause();
  };

  return {
    isPlaying,
    currentPlaying,
    skipToNext,
    skipToPrev,
    resume,
    pause,
  };
}
