import { ComponentChildren, JSX } from "react";

export default function ({
  featuredImage,
  title,
}: {
  featuredImage: string;
  title: string;
}) {
  return (
    <div class="group  relative h-64 bg-gray-800 flex flex-col justify-center items-center overflow-hidden rounded-lg border border-gray-700 ">
      <div class="aspect-w-3 z-0 absolute animate__fadeIn animate__animated animate__delay-2s inset-0 aspect-h-2 bg-gray-900  h-64">
        <img
          src={featuredImage}
          alt={title}
          decoding="async"
          loading="lazy"
          class="h-full w-full object-cover opacity-80 object-center group-hover:opacity-30 duration-300 sm:h-full sm:w-full"
        />
      </div>
      <div class="flex  p-3 relative z-10 flex-col">
        <h3 class="text-2xl font-medium opacity-10 group-hover:opacity-100 font-serif text-gray-100 line-clamp-2 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
