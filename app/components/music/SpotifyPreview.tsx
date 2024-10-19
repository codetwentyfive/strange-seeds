interface SpotifyPreviewProps {
  artistId?: string;
}

export function SpotifyPreview({ artistId = "3gwMCAZVLTLsYL2SFOXMYR" }: SpotifyPreviewProps) {
  return (
    <div className="w-full aspect-[4/3] sm:aspect-[16/9] shadow-md">
      <iframe
        src={`https://open.spotify.com/embed/artist/${artistId}`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="encrypted-media"
        className="max-w-2xl"
      ></iframe>
    </div>
  );
}
