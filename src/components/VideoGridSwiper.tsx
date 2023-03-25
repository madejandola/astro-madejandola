import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CollectionEntry } from "astro:content";
import createSlug from "@/lib/createSlug";

export default function VideoGrid({
  videos,
}: {
  videos: CollectionEntry<"tramas">[];
}) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation
        grabCursor
        className="!px-1 !pt-3 !pb-20 animate__fadeIn !bg-gray-900 animate__animated animate__delay-2s animate__faster"
        pagination={{ clickable: true }}
      >
        {videos.map(({ data }: any) => {
          return (
            <SwiperSlide key={data?.title} className="">
              <div className="relative flex flex-col items-center ring ring-gray-800 shadow-xl justify-center  overflow-hidden bg-gray-800 border border-gray-700 rounded-lg group ">
                <div className="z-0  bg-gray-900">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={data?.featuredImage}
                    alt={data?.title}
                    className="object-cover object-center w-full h-full duration-700 scale-125 opacity-70 group-hover:scale-110 group-hover:md:opacity-40 sm:h-full sm:w-full"
                  />
                </div>
                <div className="absolute  bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 left-0 bottom-0 right-0 z-10 flex flex-col p-3">
                  <a
                    href={`/videos/${createSlug(data?.title)}`}
                    rel="prefetch"
                    className="p-2 pb-4 hover:underline underline-offset-4 font-sans text-2xl font-bold text-left text-white duration-700  line-clamp-3"
                  >
                    {data?.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-center mt-4 m-0.5 bg-gray-800/20">
        <div className="-translate-y-8 !opacity-30 spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="absolute left-0 right-0 flex items-center justify-between px-3 bottom-6">
          <div className="w-5 h-9 bg-white rounded-md animate-pulse opacity-10"></div>
          <div className="h-6 bg-white rounded-md w-52 animate-pulse opacity-10"></div>
          <div className="w-5 h-9 bg-white rounded-md animate-pulse opacity-10"></div>
        </div>
      </div>
    </div>
  );
}

{
  /* <VideoCard {...data} /> */
}
