interface SpotifyPreviewProps {
  artistId?: string;
}

export function SpotifyPreview({ artistId = "3gwMCAZVLTLsYL2SFOXMYR" }: SpotifyPreviewProps) {
  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-8">
      <iframe
        src={`https://open.spotify.com/embed/artist/${artistId}`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="encrypted-media"
        className="max-w-2xl"
      ></iframe>
    </section>
  );
}
