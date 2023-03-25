import { CollectionEntry } from "astro:content";

import VideoCard from "./VideoCard";
import createSlug from "../lib/createSlug";

export default function VideoGrid({
  videos,
}: {
  videos: CollectionEntry<"tramas">[];
}) {
  return (
    <ul
      role="list"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-3"
    >
      {videos.map(({ data }) => (
        <li>
          <a href={`/video/${createSlug(data.title)}`}>
            <VideoCard {...data} />
          </a>
        </li>
      ))}
    </ul>
  );
}
