import { replaceMongoIdInObject } from '@/lib/convertData';
import Lesson from '@/modals/lessons-modal';
import Module from '@/modals/modules-modal';

export const getModuleById = async (moduleId) => {
    try {
        const getModule = await Module.findById(moduleId)
            .populate({
                path: 'lessonIds',
                model: Lesson
            })
            .lean();
        return replaceMongoIdInObject(getModule);
    } catch (error) {
        throw new Error(error);
    }
};

export const getModuleByLesson = async (moduleId, isLength) => {
    try {
        const getModule = await Module.findById(moduleId)
            .populate({
                path: 'lessonIds',
                model: Lesson
            })
            .lean();
        return isLength ? getModule?.lessonIds?.length : getModule;
    } catch (error) {
        throw new Error(error);
    }
};

export const findLessonByModule = async (lessonId) => {
    try {
        const getModule = await Module.find().lean();
        return getModule.find((module) =>
            module.lessonIds.find((lesson) => lesson.toString() === lessonId)
        );
    } catch (error) {
        throw new Error(error);
    }
};
