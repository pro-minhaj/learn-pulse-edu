'use server';
import Lesson from '@/modals/lessons-modal';
import Module from '@/modals/modules-modal';
import { deleteFile } from './fileUploader';
import { revalidatePath } from 'next/cache';

export const createLesson = async (data) => {
    try {
        const title = data.get('title');
        const slug = data.get('slug');
        const moduleId = data.get('moduleId');
        const order = parseInt(data.get('order'));

        const createdLesson = await Lesson.create({ title, slug, order });
        const findModule = await Module.findById(moduleId);
        findModule.lessonIds.push(createdLesson._id);
        findModule.save();

        // Revalidate the path
        revalidatePath(`/dashboard/courses`);

        return JSON.parse(JSON.stringify(createdLesson));
    } catch (e) {
        throw new Error(e);
    }
};

export const reOrderLesson = async (data) => {
    try {
        await Promise.all(
            data.map(async (element) => {
                await Lesson.findByIdAndUpdate(element.id, { order: element.position });
            })
        );
    } catch (e) {
        throw new Error(e);
    }
};

export const updateLesson = async (lessonId, updateLesson) => {
    try {
        await Lesson.findByIdAndUpdate(lessonId, updateLesson);
    } catch (error) {
        throw new Error(error);
    }
};

export const lessonPublished = async (lessonId) => {
    try {
        const lesson = await Lesson.findById(lessonId);
        await Lesson.findByIdAndUpdate(lessonId, { active: !lesson.active }, { lean: true });
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteLesson = async (lessonId, moduleId) => {
    try {
        const lesson = await Lesson.findById(lessonId);
        // Delete Lesson Video
        if (lesson?.video?.public_id) {
            await deleteFile(lesson?.video?.public_id);
        }
        // Remove Lesson from Module
        await Lesson.findByIdAndDelete(lessonId);
        await Module.findByIdAndUpdate(moduleId, {
            $pull: { lessonIds: lessonId }
        });

        revalidatePath('/dashboard/courses');
    } catch (error) {
        throw new Error(error);
    }
};
