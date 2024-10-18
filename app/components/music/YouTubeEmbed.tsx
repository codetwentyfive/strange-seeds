export default function YouTubeEmbed() {
  return (
    <section className="py-12 bg-background flex justify-center">
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          src="https://www.youtube.com/embed/g42-TNEINWM"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
