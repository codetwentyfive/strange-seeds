import { YouTubeEmbed } from "./YouTubeEmbed";
import { SpotifyPreview } from "./SpotifyPreview";
import { ErrorBoundary } from "../ErrorBoundary";

interface VideoData {
  id: string;
  title: string;
}

const videos: VideoData[] = [
    { id: "g42-TNEINWM", title: "Mary Jane" },
    { id: "n3kiW1wHgts", title: "Plant" },
];

export default function Music() {
  return (
    <div className="space-y-16 py-12 mt-28 sm:mt-28 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <ErrorBoundary fallback={
          <div className="p-4 text-center">
            <p>Failed to load Spotify preview. Please try again later.</p>
          </div>
        }>
          <SpotifyPreview />
        </ErrorBoundary>
      </div>
      <div className="space-y-12 max-w-3xl mx-auto w-full">
        {videos.map((video) => (
          <div key={video.id}>
            <h3 className="font-display text-3xl font-bold  sm:text-4xl mb-4 text-center">{video.title}</h3>
            <ErrorBoundary fallback={
              <div className="p-4 text-center">
                <p>Failed to load YouTube video. Please try again later.</p>
              </div>
            }>
              <YouTubeEmbed videoId={video.id} />
            </ErrorBoundary>
          </div>
        ))}
      </div>
    </div>
  );
}
