"use client";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Player from "next-video/player";
import VideoUploader from "@/components/globals/VidoeUploder/VideoUploader";
import OthersUploader from "./others-upload";
<<<<<<< HEAD
=======
import ReactPlayer from 'react-player/youtube';
>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456

export const VideoUrlForm = ({ initialData, lessonId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOthers, setIsOthers] = useState(false);
  const [videoUrl, setVideoUrl] = useState(initialData?.url);
  const [isUploading, setIsUploading] = useState(false);

  const toggleEdit = useCallback(() => setIsEditing((current) => !current), []);
  const toggleOthers = useCallback(() => setIsOthers((current) => !current), []);

  return (
    <div className="p-4 mt-6 bg-gray-100 border rounded-md dark:bg-gray-800/70 dark:border-gray-700">
      <div className="flex items-center justify-between font-medium">
        Video Upload
        <div className="flex items-center gap-3">
          <Button onClick={toggleOthers} variant="secondary">
<<<<<<< HEAD
            Others
=======
            {isOthers ? "Cancel" : "Others"}
>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456
          </Button>
          <Button disabled={isUploading} variant="ghost" onClick={toggleEdit}>
            {isEditing ? <>Cancel</> : <><Pencil className="w-4 h-4 mr-2" /> Edit</>}
          </Button>
        </div>
      </div>

      {/* Render logic based on state */}
      {isOthers ? (
        <div className="mt-4">
<<<<<<< HEAD
          <OthersUploader />
=======
          <OthersUploader lessonId={lessonId} toggleOthers={toggleOthers} />
>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456
        </div>
      ) : (
        <>
          {isEditing ? (
            <div className="mt-4">
              <VideoUploader
                lessonId={lessonId}
                onVideoUrl={setVideoUrl}
                initialData={initialData}
                toggleEdit={toggleEdit}
                setIsUploading={setIsUploading}
                isUploading={isUploading}
              />
            </div>
          ) : (
            videoUrl ? (
              <div className="w-full mt-4 h-60">
<<<<<<< HEAD
                <Player className="object-cover w-full h-full" src={"//streamtape.com/get_video?id=W9Pyq3e2o3FbzLm&ip=F0OPKRWPDy9XKxR&token=oyNozItMoWIH&stream=1"} />
=======
                {
                  initialData?.youtube ? (
                    <div className="w-full h-full">
                      <ReactPlayer width="100%" height="100%" className="object-cover w-full h-full" url={initialData?.url} />
                    </div>
                  ) : (
                    <Player className="object-cover w-full h-full" src={videoUrl} />
                  )
                }
>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456
              </div>
            ) : (
              <div className="mt-4">
                <VideoUploader
                  lessonId={lessonId}
                  onVideoUrl={setVideoUrl}
                  initialData={initialData}
                  toggleEdit={toggleEdit}
                  setIsUploading={setIsUploading}
                  isUploading={isUploading}
                />
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};
