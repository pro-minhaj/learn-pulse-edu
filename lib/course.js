import { getCourseByCourseId } from '@/queries/courses';
import { getModuleByLesson } from '@/queries/module';
import { getAReport } from '@/queries/reports';
import { getUserData } from './getUserData';

export const getCourseProgress = async (courseId) => {
    const user = await getUserData();
    try {
        const filter = {
            user_id: user?.id,
            course_id: courseId
        };

        const report = await getAReport(filter);
        const course = await getCourseByCourseId(courseId);
        const modulesIds = course?.modules;

        const lessons = await Promise.all(
            modulesIds.map(async (module) => {
                return await getModuleByLesson(module);
            })
        );

        const totalLessonCount = await lessons?.reduce((acc, les) => acc + les, 0);
        const completedLessonCount = report?.total_completed_lesson;
        const totalProgress =
            totalLessonCount > 0 ? (completedLessonCount / totalLessonCount) * 100 : 0;
        return totalProgress;
    } catch (error) {
        throw new Error(error);
    }
};