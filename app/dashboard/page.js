import { unstable_noStore as noStore } from 'next/cache';
import BarChart from '@/components/globals/BarChart/BarChart';
import { Card, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/formatPrice';
import RecentEnrollCard from './_components/RecentEnrollCard';
import TotalCard from './_components/TotalCard';
import { getUserData } from '@/lib/getUserData';
import { fetchDashboardData } from '@/lib/dashboard-helper';

const DashboardPage = async () => {
    noStore();
    const user = await getUserData();

    if (!user) {
        return (
            <div className='p-6 font-inter'>
                <p className='text-lg font-medium text-center text-muted-foreground'>
                    User data not available
                </p>
            </div>
        );
    }
    const { courses, totalEnroll, totalSalePrice, enrollByInstructorReports, recentEnrollments } =
        (await fetchDashboardData(user?.id)) ?? {};

    return (
        <div className='p-6 font-inter'>
            <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3'>
                {/* total courses */}
                <TotalCard title='Total Courses' count={courses?.length} />
                {/* total enrollments */}
                <TotalCard title='Total Enrollments' count={totalEnroll} />
                {/* total Revenue */}
                <TotalCard title='Total Revenue' count={formatPrice(totalSalePrice)} />
            </div>

            {/* Recent EnrollCard */}
            <div className='grid grid-cols-1 gap-5 pt-3 md:pt-5 xl:grid-cols-3'>
                <Card className='py-3 xl:col-span-2 bg-background/50'>
                    <BarChart data={enrollByInstructorReports} />
                </Card>
                <Card className='p-5 bg-background/50'>
                    <CardTitle className='text-xl font-medium tracking-wide'>
                        Recent Enrollments
                    </CardTitle>
                    <div className='grid grid-cols-1 gap-4 pt-5'>
                        {recentEnrollments?.length === 0 ? (
                            <p className='text-lg font-medium text-center text-muted-foreground'>
                                No Recent Enroll Course
                            </p>
                        ) : (
                            recentEnrollments?.map((enroll) => (
                                <RecentEnrollCard key={enroll.id} enroll={enroll} />
                            ))
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;
