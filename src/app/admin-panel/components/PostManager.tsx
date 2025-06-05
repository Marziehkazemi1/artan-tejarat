"use client";
import { useEffect, useState } from "react";
import { fetchDataManager } from "@/api/panel";
import { BookIcon } from "@/assets/icon/components/BookIcon";

export default function PostManager() {
  const [posts, setPosts] = useState<{ all: number; created: number; deleted: number }>({
    all: 0,
    created: 0,
    deleted: 0,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await fetchDataManager();
      setPosts(result);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white/10 items-center justify-between lg:gap-4 md:p-4 mt-5 md:mt-10 backdrop-blur-md border border-white/30 rounded-xl shadow-md">
     {
      posts && (
        <>
         <div className="p-4 text-center flex items-center justify-center gap-5">
        <span><BookIcon class="size-8 text-gray-400" /></span>
        <p className="block text-sm text-gray-200 font-bold">کل پست‌ها</p>
        <span className="text-2xl font-bold text-white bg-blue-400 text-[15px] px-4 py-0.5 rounded-lg">
          {posts.all}
        </span>
      </div>
      <div className="md:w-1 md:h-20 w-20 h-1 bg-gray-500"></div>
      <div className="p-4 text-center flex items-center justify-center gap-5">
        <span><BookIcon class="size-8 text-gray-400" /></span>
        <p className="block text-sm text-gray-200 font-bold">پست‌های افزوده‌شده</p>
        <span className="text-2xl font-bold text-white bg-blue-400 text-[15px] px-4 py-0.5 rounded-lg">
          {posts.created}
        </span>
      </div>
      <div className="md:w-1 md:h-20 w-20 h-1 bg-gray-500"></div>
      <div className="p-4 text-center flex items-center justify-center gap-5">
        <span><BookIcon class="size-8 text-gray-400" /></span>
        <p className="block text-sm text-gray-200 font-bold">پست‌های حذف‌شده</p>
        <span className="text-2xl font-bold text-white bg-blue-400 text-[15px] px-4 py-0.5 rounded-lg">
          {posts.deleted}
        </span>
      </div>
      </>
      )
     }
    </div>
  );
}
