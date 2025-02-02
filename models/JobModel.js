import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min: 1
    }
});

export const JobModel = mongoose.model('Job', jobSchema);