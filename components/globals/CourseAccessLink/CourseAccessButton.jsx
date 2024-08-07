"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner/Spinner";

const CourseAccessButton = ({ variant, size, className }) => {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                disabled={pending}
                type='submit'
                className={cn(buttonVariants({ variant: variant ?? "default", size: size }), "w-full disabled:opacity-70 disabled:bg-opacity-70 disabled:cursor-not-allowed flex items-start gap-1.5", className)}
            >
                {pending && <Spinner className="dark:!text-gray-200" />} Access Now
            </Button>
        </>
    );
};

export default CourseAccessButton;