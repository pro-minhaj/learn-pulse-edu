"use client";
import FormControl from "@/app/(auth)/register/_components/FormControl";
<<<<<<< HEAD
import SubmitButton from "@/components/globals/SubmitButton/SubmitButton";
import { toast } from "sonner";

const OthersUploader = () => {

    const handleUpload = async (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleUpload} className="w-full">
            <div className="space-y-3">
                <FormControl id="videoUrl" name="videoUrl" type="url" label="Video URL" placeholder="Enter Your Video URL..." />
                <FormControl id="duration" name="duration" type="number" label="Video Duration" placeholder="Enter Your Video duration..." />
=======
import { updateLesson } from "@/app/actions/lesson";
import SubmitButton from "@/components/globals/SubmitButton/SubmitButton";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const OthersUploader = ({ lessonId, toggleOthers }) => {
    const { refresh } = useRouter();

    const handleUpload = async (formData) => {
        const url = formData.get('url');
        const duration = formData.get('duration');
        try {
            await updateLesson(lessonId, {
                duration,
                video: {
                    url,
                    youtube: true
                }
            });
            refresh();
            toast.success("Video updated successfully")
            toggleOthers()
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form action={handleUpload} className="w-full">
            <div className="space-y-3">
                <FormControl
                    id="url"
                    name="url"
                    type="url"
                    label="Video URL"
                    placeholder="Enter Your Video URL..."
                />
                <FormControl
                    id="duration"
                    name="duration"
                    type="number"
                    label="Video Duration"
                    placeholder="Enter Your Video duration..."
                />
>>>>>>> 9f9f3117e268bee5aa5b08410bd35db42fd51456
            </div>
            <SubmitButton className="w-full mt-4">
                Submit
            </SubmitButton>
        </form>
    )
}


export default OthersUploader;