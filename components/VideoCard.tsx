type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
};

export default function VideoCard({ video }: { video: Video }) {
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  return (
    <div className="cursor-pointer">
      {/* Thumbnail */}
      <iframe src={videoSrc} allowFullScreen />
      {/* Info */}
      <div className="mt-3 flex gap-3">
        <div className="h-1/4 w-1/4 rounded-full bg-gray-300" />

        <div>
          <h3 className="font-medium leading-snug line-clamp-2">
            {video.title}
          </h3>
          <p className="text-sm text-gray-500">{video.channel}</p>
          <p className="text-sm text-gray-500">{video.views} views</p>
        </div>
      </div>
    </div>
  );
}
