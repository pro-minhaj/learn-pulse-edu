import { Schema } from 'mongoose';

// Profile Photo Schema
const profilePictureSchema = {
    url: {
        type: String,
        required: false
    },
    public_id: {
        type: String,
        required: false
    }
};

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
            default: 'Student'
        },
        bio: {
            type: String,
            required: false
        },
        socialMedia: {
            type: Object,
            required: false
        },
        profilePicture: profilePictureSchema
    },
    { timestamps: true }
);

export const User = mongoose.models.User ?? mongoose.model('User', userSchema);
