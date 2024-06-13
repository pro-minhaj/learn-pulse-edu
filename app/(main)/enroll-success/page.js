import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/stripe';
import { getCourseDetails } from '@/queries/courses';
import { getUserByEmail } from '@/queries/users';
import { CircleCheck } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const PaymentSuccessPage = async ({ searchParams: { session_id, courseId } }) => {
    if (!session_id) throw new Error('Please provide a valid session id that starts with cs_');

    const { user } = await getServerSession();
    if (!user.email) {
        redirect('/login');
    }

    const logInUser = await getUserByEmail(user?.email);
    const { course } = await getCourseDetails(courseId);

    // Check Out Session
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    });

    // Customer info
    const customerName = `${logInUser?.firstName} ${logInUser?.lastName}`;
    const customerEmail = logInUser?.email;
    const productName = course?.title;

    const paymentStatus = checkoutSession?.payment_intent?.status;
    if (paymentStatus === 'succeeded') {
    }

    return (
        <div className='flex flex-col items-center justify-center flex-1 w-full h-full font-poppins'>
            <div className='flex flex-col items-center gap-6 max-w-[600px] text-center'>
                {paymentStatus === 'succeeded' && (
                    <>
                        <CircleCheck className='w-32 h-32 p-0 text-white rounded-full bg-success' />
                        <h1 className='text-xl md:text-2xl lg:text-3xl'>
                            Congratulations, <strong>{customerName}</strong>! Your Enrollment was
                            Successful for <strong>{productName}</strong>
                        </h1>
                    </>
                )}
                <div className='flex items-center gap-3'>
                    <Button asChild size='sm'>
                        <Link href='/courses'>Browse Courses</Link>
                    </Button>
                    <Button asChild variant='outline' size='sm'>
                        <Link href='/think-in-a-redux-way/introduction'>Play Course</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default PaymentSuccessPage;
