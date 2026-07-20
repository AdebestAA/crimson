export function VideoComponent({
  link = "",
  type = "youtube",
}: {
  link?: string;
  type?: "youtube" | "mp4";
}) {
  if (!link) {
    return <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">Video coming soon</div>;
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-lg">
      {type === "mp4" ? (
        <video className="h-full w-full object-cover" controls playsInline preload="metadata">
          <source src={link} type="video/mp4" />
        </video>
      ) : (
        <iframe
          className="h-full w-full"
          src={link}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
