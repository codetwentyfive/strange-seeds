import { YouTubeEmbed } from "./YouTubeEmbed";
import { SpotifyPreview } from "./SpotifyPreview";

interface VideoData {
  id: string;
  title: string;
}

const videos: VideoData[] = [
    { id: "g42-TNEINWM", title: "Mary Jane" },
    { id: "8_G6XjQHbTc", title: "Gardens of Marakesh" },
    { id: "tj2gDTGMWV8", title: "Mr. Mojo Man live at Rathaus Innenhof Passau" },
    { id: "n3kiW1wHgts", title: "Plant" },
    { id: "dz7g9Wx2n1Q", title: "Backcountry Exile (Live)" },
];

export default function Music() {
  return (
    <div className="space-y-16 py-12 mt-28 sm:mt-28 md:mt-16 lg:mt-20">
      <SpotifyPreview />
      <div className="space-y-12">
        {videos.map((video) => (
          <div key={video.id} className="max-w-3xl mx-auto">
            <h3 className="font-display text-4xl mb-4 text-center">{video.title}</h3>
            <YouTubeEmbed videoId={video.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
