import CourseAccessLink from "@/components/globals/CourseAccessLink/CourseAccessLink";
import EnrollButton from "@/components/globals/EnrollButton/EnrollButton";
import { getImage } from "@/lib/getImage";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";
import { VideoPlayer } from "@/components/globals/VideoPlayer/VideoPlayer";

const CourseInfo = async ({ course, alreadyEnrolledCourse }) => {
    const {
        id,
        title,
        sub_title,
        thumbnail: { url }
    } = course;

    // Image Placeholder
    const { base64, img } = await getImage(url);

    return (
        <div className='overflow-x-hidden'>
            <section className='py-8 sm:py-12'>
                <div className='container'>
                    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                        <div className='max-w-2xl mx-auto text-center'>
                            <h2 className='px-6 text-lg text-gray-600 dark:text-gray-400 font-inter'>
                                {sub_title}
                            </h2>
                            <h1 className='mt-5 text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-poppins'>
                                <span className='relative inline-flex sm:inline'>
                                    <span className='relative'>{title}</span>
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Back Ground Gray din */}
                    <>
                        <div
                            aria-hidden='true'
                            className='absolute inset-x-0 overflow-hidden pointer-events-none -top-16 -z-10 transform-gpu blur-3xl sm:-top-40'
                        >
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                                }}
                                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:bg-gray-800'
                            />
                        </div>
                    </>

                    <div className='mt-6'>
                        <div className='relative'>
                            <div className='absolute inset-0 h-2/3'></div>
                            <div className='relative mx-auto'>
                                <div className='lg:max-w-3xl lg:mx-auto'>
                                    {
                                        course?.introductionVideo ?
                                            (
                                                <div className="w-full">
                                                    <VideoPlayer
                                                        className="object-cover w-full h-full overflow-hidden rounded-lg"
                                                        url={course?.introductionVideo?.url}
                                                    />
                                                </div>
                                            )
                                            : (
                                                <Image
                                                    {...img}
                                                    alt={title}
                                                    className="w-full h-full rounded-lg"
                                                    placeholder='blur'
                                                    quality={100}
                                                    blurDataURL={base64}
                                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                                    priority
                                                />
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3 mt-6 md:gap-5'>
                        {/* Enroll Course */}
                        {alreadyEnrolledCourse ? (
                            <CourseAccessLink
                                courseId={id}
                                variant="primary"
                                size="lg"
                                className="w-40 tracking-wide rounded-3xl"
                            />
                        ) : (
                            <>
                                <div
                                    className="text-2xl font-semibold tracking-wide"
                                >
                                    {course?.price === 0 ? "Free" : formatPrice(course.price)}
                                </div>
                                <EnrollButton courseId={id} price={course?.price} />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseInfo;