export default function SpotifyPreview() {
  return (
    <section className="py-12 bg-background flex justify-center">
      <iframe
        src="https://open.spotify.com/embed/artist/3gwMCAZVLTLsYL2SFOXMYR"
        width="100%"
        height="352"
        frameBorder="0"
        allow="encrypted-media"
        className="max-w-2xl"
      ></iframe>
    </section>
  );
}
