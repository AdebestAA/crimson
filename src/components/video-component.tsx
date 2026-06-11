export function VideoComponent({
  link = "https://www.youtube.com/embed/i810CxN5Q6Q",
}: {
  link?: string;
}) {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg">
      <iframe
        className="h-full w-full"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
