"use client";
import FormControl from "@/app/(auth)/register/_components/FormControl";
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
            </div>
            <SubmitButton className="w-full mt-4">
                Submit
            </SubmitButton>
        </form>
    )
}


export default OthersUploader;