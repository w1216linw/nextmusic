import useSpotify from "@/hooks/useSpotify";
import { SpeakerWaveIcon as VolumeDown } from "@heroicons/react/24/outline";
import { SpeakerWaveIcon as VolumeUp } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
const VolumeController = () => {
  const spotifyApi = useSpotify();

  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (volume < 0 || volume > 100) return;

    const timer = setTimeout(() => {
      spotifyApi.setVolume(volume);
    }, 1000);

    return () => clearTimeout(timer);
  }, [volume]);

  return (
    <div className="flex items-center justify-end gap-3 md:gap-6">
      <VolumeDown
        className="button"
        onClick={() => volume > 0 && setVolume(volume - 5)}
      />
      <input
        className="w-16 md:w-32"
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        name="speakerVolume"
        id="speakerVolume"
      />
      <VolumeUp
        className="button"
        onClick={() => volume < 100 && setVolume(volume + 5)}
      />
    </div>
  );
};

export default VolumeController;
