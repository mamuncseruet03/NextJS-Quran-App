import VideoCard from "@/components/VideoCard";

const videos = [
  {
    id: "Nv5l-TSbPcQ",
    title: `QSRF: শব্দচর্চার সালাহা-১০`,
    channel: "Saifur Rahman",
    views: "",
    thumbnail: "https://www.youtube.com/watch?v=Nv5l-TSbPcQ",
  },

  {
    id: "J36uY6ydrvY",
    title: `QSRF: শব্দচর্চার সালাহা-১২`,
    channel: "Saifur Rahman",
    views: "",
    thumbnail: "https://www.youtube.com/watch?v=Nv5l-TSbPcQ",
  },
  {
    id: "Nv5l-TSbPcQ",
    title: `QSRF: শব্দচর্চার সালাহা-১০`,
    channel: "Saifur Rahman",
    views: "",
    thumbnail: "https://www.youtube.com/watch?v=Nv5l-TSbPcQ",
  },
  {
    id: "0gBdnFGAorw",
    title: `QSRF: শব্দচর্চার ফিকির-১`,
    channel: "Saifur Rahman",
    views: "",
    thumbnail: "https://www.youtube.com/watch?v=Nv5l-TSbPcQ",
  },
];

export default function VideosPage() {
  return (
    <main className="w-full px-4 md:px-8 py-6">
      <div className="mx-auto max-w-7xl">
        {/* Video Grid */}
        <div
          className="grid gap-6
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4"
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
