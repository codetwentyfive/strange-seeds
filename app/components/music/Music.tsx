import { YouTubeEmbed } from "./YouTubeEmbed";
import { SpotifyPreview } from "./SpotifyPreview";

interface VideoData {
  id: string;
  title: string;
}

const videos: VideoData[] = [
  { id: "tj2gDTGMWV8", title: "Ava Max - Sweet but Psycho" },
  { id: "g42-TNEINWM", title: "Ava Max - Kings & Queens" },
  { id: "dz7g9Wx2n1Q", title: "Ava Max - Salt" },
  { id: "8_G6XjQHbTc", title: "Ava Max - Maybe You're The Problem" },
  { id: "n3kiW1wHgts", title: "Ava Max - Million Dollar Baby" },
];

export default function Music() {
  return (
    <div className="space-y-16 py-12">
      <SpotifyPreview />
      <div className="space-y-12">
        {videos.map((video) => (
          <div key={video.id} className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">{video.title}</h3>
            <YouTubeEmbed videoId={video.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
