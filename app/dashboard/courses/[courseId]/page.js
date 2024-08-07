import { BookOpen, CircleDollarSign, LayoutDashboard, ListChecks, Video } from 'lucide-react';
import { CategoryForm } from './_components/category-form';
import { DescriptionForm } from './_components/description-form';
import { ModulesForm } from './_components/module-form';
import { PriceForm } from './_components/price-form';
import { TitleForm } from './_components/title-form';
import { CourseActions } from './_components/course-action';
import AlertBanner from '@/components/globals/AlertBanner/AlertBanner';
import { QuizSetForm } from './_components/quiz-set-form';
import { IconBadge } from '@/components/globals/IconBadge/IconBadge';
import { ImageForm } from './_components/image-form';
import { getCourseDetails } from '@/queries/courses';
import { getCategories } from '@/queries/categories';
import { replaceMongoIdInArray } from '@/lib/convertData';
import { getImage } from '@/lib/getImage';
import { SubTitleForm } from './_components/sub-title-form';
import { LearningForm } from './_components/learning-form';
import { getAllQuizSet, getQuizSetById } from '@/queries/quiz-set';
import IntroductionVideoForm from './_components/introduction-video-form';
import BreadcrumbSection from '@/components/globals/Breadcrumb/BreadcrumbSection';

const items = [
    {
        label: 'Dashboard',
        href: '/dashboard'
    },
    {
        label: 'Courses',
        href: '/dashboard/courses'
    },
    {
        label: 'Edit',
        current: true
    }
];

const EditCoursePage = async ({ params: { courseId } }) => {
    const course = await getCourseDetails(courseId, true);
    const categories = await getCategories();
    const getQuizSets = await getAllQuizSet();
    const quizSet = await getQuizSetById(course?.quizSet);

    // modified Categories
    const modifiedCategories = categories?.map((c) => {
        return {
            id: c.id,
            value: c.title,
            label: c.title
        };
    });

    const modules = replaceMongoIdInArray(course?.modules).sort((a, b) => a?.order - b?.order);

    // Image Placeholder
    const { base64, img } = (await getImage(course?.thumbnail?.url)) || {};

    return (
        <>
            <BreadcrumbSection items={items} />
            {!course?.active && (
                <div className='mt-3'>
                    <AlertBanner
                        label='This course is unpublished. It will not be visible in the course.'
                        variant='warning'
                    />
                </div>
            )}
            <div className='p-6'>
                <div className='flex items-center justify-end'>
                    <CourseActions active={course?.active} courseId={courseId} />
                </div>
                <div className='grid grid-cols-1 gap-6 mt-5 md:mt-10 md:grid-cols-2'>
                    <div>
                        <div className='flex items-center gap-x-2'>
                            <IconBadge icon={LayoutDashboard} />
                            <h2 className='text-xl'>Customize your course</h2>
                        </div>
                        <TitleForm
                            initialData={{
                                title: course?.title
                            }}
                            courseId={courseId}
                        />
                        <SubTitleForm
                            initialData={{
                                sub_title: course?.sub_title
                            }}
                            courseId={courseId}
                        />
                        <DescriptionForm
                            initialData={{ description: course?.description }}
                            courseId={courseId}
                        />
                        <ImageForm
                            initialData={{ img, base64 }}
                            courseId={courseId}
                            imageName={course?.thumbnail?.fileName}
                        />
                        <CategoryForm
                            initialData={course?.category?._id.toString()}
                            options={modifiedCategories}
                            courseId={courseId}
                        />

                        <QuizSetForm
                            selectedQuizSetTitle={quizSet?.title}
                            initialData={course?.quizSet}
                            courseId={courseId}
                            options={getQuizSets}
                        />
                    </div>
                    <div className='space-y-6'>
                        <div>
                            <div className='flex items-center mb-6 gap-x-2'>
                                <IconBadge icon={ListChecks} />
                                <h2 className='text-xl'>Course Modules</h2>
                            </div>

                            <ModulesForm initialData={modules} courseId={courseId} />
                        </div>
                        <div>
                            <div className='flex items-center gap-x-2'>
                                <IconBadge icon={CircleDollarSign} />
                                <h2 className='text-xl'>Sell you course</h2>
                            </div>
                            <PriceForm initialData={course} courseId={courseId} />
                        </div>
                        <div>
                            <div className='flex items-center gap-x-2'>
                                <IconBadge icon={Video} />
                                <h2 className='text-xl'>Introduction Video</h2>
                            </div>
                            <IntroductionVideoForm
                                courseId={courseId}
                                initialData={course?.introductionVideo}
                            />
                        </div>
                        <div>
                            <div className='flex items-center gap-x-2'>
                                <IconBadge icon={BookOpen} />
                                <h2 className='text-xl'>Course Learning</h2>
                            </div>
                            <LearningForm initialData={course?.learning} courseId={courseId} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditCoursePage;
