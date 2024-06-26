import { replaceMongoIdInObject } from '@/lib/convertData';
import Lesson from '@/modals/lessons-modal';

export const getLesson = async (lessonId) => {
    try {
        const lesson = await Lesson.findById(lessonId).lean();
        return replaceMongoIdInObject(lesson);
    } catch (error) {
        throw new Error(error);
    }
};

export const getLessonByOrder = async (order) => {
    try {
        const lesson = await Lesson.findOne({ order: order, active: true }).lean();
        return replaceMongoIdInObject(lesson);
    } catch (error) {
        throw new Error(error);
    }
};

export const getLessonBySlug = async (slug) => {
    try {
        const lesson = await Lesson.findOne({ slug: slug }).lean();
        return replaceMongoIdInObject(lesson);
    } catch (error) {
        throw new Error(error);
    }
};

export const getLessonById = async (lessonId) => {
    try {
        const lesson = await Lesson.findById(lessonId).lean();
        return replaceMongoIdInObject(lesson);
    } catch (error) {
        throw new Error(error);
    }
};
