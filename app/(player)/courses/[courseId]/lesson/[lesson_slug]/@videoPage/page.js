import { buttonVariants } from '@/components/ui/button';
import VideoDescription from '../_components/video-description';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { getCourseByCourseId } from '@/queries/courses';
import VideoPlayerComponent from '../_components/VideoPage/VideoPlayerComponent';
import { Suspense } from 'react';
<<<<<<<< HEAD:app/(player)/courses/[courseId]/lesson/[lesson_slug]/@videoPage/page.js
========
import { getLessonById } from '@/queries/lesson';
>>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456:app/(player)/courses/[courseId]/lesson/[lessonId]/@videoPage/page.js

const Course = async ({ params: { courseId, lessonId } }) => {
    const lesson = await getLessonById(lessonId);

    if (!lesson) {
        return <div>Lesson not found</div>;
    }

    const course = await getCourseByCourseId(courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    const allLessons = course?.modules?.reduce(
        (lessons, module) => lessons.concat(module.lessonIds),
        []
    );
    const currentLessonIndex = allLessons?.findIndex(
        (lesson) => lesson?._id?.toString() === lessonId
    );

    const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
    const nextLesson =
        currentLessonIndex < allLessons?.length - 1 ? allLessons[currentLessonIndex + 1] : null;

    const prevLessonId = prevLesson?._id.toString() ?? null;
    const nextLessonId = nextLesson?._id.toString() ?? null;

    return (
        <div className='flex flex-col'>
            <div className='w-full'>
                <Suspense fallback={<div className='text-center'>Video Loading...</div>}>
<<<<<<<< HEAD:app/(player)/courses/[courseId]/lesson/[lesson_slug]/@videoPage/page.js
                    <VideoPlayerComponent courseId={courseId} lesson_slug={lesson_slug} />
========
                    <VideoPlayerComponent courseId={courseId} lessonId={lessonId} />
>>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456:app/(player)/courses/[courseId]/lesson/[lessonId]/@videoPage/page.js
                </Suspense>
            </div>
            <div>
                <div className='flex flex-col items-center justify-between py-3 md:py-4 md:flex-row'>
                    <h2 className='mb-2 text-xl font-semibold md:text-2xl'>{lesson.title}</h2>
                    <div className='flex items-center gap-3'>
                        <Link
                            href={
                                prevLessonId ? `/courses/${courseId}/lesson/${prevLessonId}` : '#'
                            }
                            className={cn(
                                buttonVariants({ variant: 'secondary' }),
                                !prevLessonId && 'bg-opacity-50 opacity-50 cursor-not-allowed',
                                'h-7 md:h-auto rounded-3xl'
                            )}
                        >
                            Back
                        </Link>
                        <Link
                            href={
                                nextLessonId ? `/courses/${courseId}/lesson/${nextLessonId}` : '#'
                            }
                            className={cn(
                                buttonVariants({ variant: 'primary' }),
                                !nextLessonId && 'bg-opacity-50 opacity-50 cursor-not-allowed',
                                'h-7 md:h-auto rounded-3xl'
                            )}
                        >
                            Next
                        </Link>
                    </div>
                </div>
                <VideoDescription description={lesson.description} />
            </div>
        </div>
    );
};

export default Course;
