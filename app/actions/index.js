'use server';

import { nextAndPrevLesson } from '@/lib/lesson';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const formAccessCourse = async (courseId, formatLessonId) => {
    redirect(`/courses/${courseId}/access${formatLessonId && `?lesson=${formatLessonId}`}`);
};

export const lessonNextAccess = async (courseId, lesson) => {
    const { nextLessonId } = await nextAndPrevLesson(courseId, lesson);
    redirect(nextLessonId ? `/courses/${courseId}/access?lesson=${nextLessonId}` : '#');
};

export const lessonPrevAccess = async (courseId, lesson) => {
    const { prevLessonId } = await nextAndPrevLesson(courseId, lesson);
    redirect(prevLessonId ? `/courses/${courseId}/access?lesson=${prevLessonId}` : '#');
};

export const redirectPage = async (path) => {
    redirect(path);
};

export const revalidatePathAction = async () => {
    revalidatePath('/');
};
