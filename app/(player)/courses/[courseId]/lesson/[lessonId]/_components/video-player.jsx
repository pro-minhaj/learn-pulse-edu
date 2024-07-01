"use client";
import { watchUpdate } from '@/app/actions/watch-histories';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Player from "next-video/player";
<<<<<<<< HEAD:app/(player)/courses/[courseId]/lesson/[lesson_slug]/_components/video-player.jsx
========
import ReactPlayer from 'react-player/youtube';
>>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456:app/(player)/courses/[courseId]/lesson/[lessonId]/_components/video-player.jsx

export const VideoPlayer = ({ video, courseId, lessonId, moduleId }) => {
  const router = useRouter();

  const handleOnStart = useCallback(async () => {
    const data = {
      courseId,
      lessonId,
      moduleId,
      state: 'watching',
      lastTime: 0,
    };
    try {
      await watchUpdate(data);
    } catch (error) {
      throw new Error(error);
    }
  }, [courseId, lessonId, moduleId]);

  const onEnded = useCallback(async () => {
    const data = {
      courseId,
      lessonId,
      moduleId,
      state: 'completed',
      lastTime: 0,
    };
    try {
      await watchUpdate(data);
      router.refresh();
    } catch (error) {
      throw new Error(error);
    }
  }, [courseId, lessonId, moduleId, router]);

  return (
    <div className="relative w-full aspect-video">
<<<<<<<< HEAD:app/(player)/courses/[courseId]/lesson/[lesson_slug]/_components/video-player.jsx
      <Player
        onPlay={handleOnStart}
        onEnded={onEnded}
        className="object-cover w-full h-full"
        src={url}
      />
========
      {
        video?.youtube ? (
          <div className="w-full h-full">
            <ReactPlayer
              onPlay={handleOnStart}
              onEnded={onEnded}
              controls={true}
              width="100%"
              height="100%"
              className="object-cover w-full h-full"
              url={"https://youtu.be/sutdp-aD748"}
            />
          </div>
        ) : (
          <Player
            onPlay={handleOnStart}
            onEnded={onEnded}
            className="object-cover w-full h-full"
            src={video?.url}
          />
        )
      }

>>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456:app/(player)/courses/[courseId]/lesson/[lessonId]/_components/video-player.jsx
    </div>
  );
};
