"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { createCourseSchema } from '@/lib/FormValidation/course/courseSchema';
import { addNewCourse } from '@/app/actions/course';
import SubmitButton from '@/components/globals/SubmitButton/SubmitButton';

const CreateCourseForm = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(createCourseSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values) => {
        try {
            const newCourse = await addNewCourse(values);
            router.push(`/dashboard/courses/${newCourse?._id}`);
            toast.success('Course created');
        } catch (error) {
            toast.error(error.message);
        }
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                {/* title */}
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Title</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isSubmitting}
                                    placeholder="e.g 'Reactive Accelerator'"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* description */}
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Course overview'
                                    className='resize-none'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Write a brief description of your course
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex items-center gap-x-2'>
                    <Link href='/dashboard/courses'>
                        <Button variant='outline' type='button'>
                            Cancel
                        </Button>
                    </Link>
                    <SubmitButton loading={isSubmitting} disabled={!isValid}>
                        Continue
                    </SubmitButton>
                </div>
            </form>
        </Form>
    );
};

export default CreateCourseForm;