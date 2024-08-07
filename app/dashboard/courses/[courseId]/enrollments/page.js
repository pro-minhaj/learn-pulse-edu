import BreadcrumbSection from '@/components/globals/Breadcrumb/BreadcrumbSection';
import EnrollmentPageContent from './_components/EnrollmentPageContent';

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
        label: 'Enrollments',
        current: true
    }
];

const EnrollmentsPage = async ({ params: { courseId } }) => {
    return (
        <>
            <BreadcrumbSection items={items} />
            <EnrollmentPageContent courseId={courseId} />
        </>
    );
};

export default EnrollmentsPage;
