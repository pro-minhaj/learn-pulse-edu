import { getLessonBySlug } from '@/queries/lesson';
import { findLessonByModule } from '@/queries/module';
import { VideoPlayer } from '../video-player';

const VideoPlayerComponent = async ({ courseId, lesson_slug }) => {
    const lessonSlug = lesson_slug.replace(/-/g, '0');
    const lesson = await getLessonBySlug(lessonSlug);
    const findModule = await findLessonByModule(lesson.id);

    return (
        <>
            <VideoPlayer
                courseId={courseId}
                lessonId={lesson.id}
                moduleId={findModule?._id.toString()}
                url={lesson.video?.url}
            />
        </>
    );
};

export default VideoPlayerComponent;
