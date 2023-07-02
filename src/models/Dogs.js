import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    phoneNumber: { type: Number, required: true},
    city: { type: String, required: true},
    created_at: { type: Date, default: Date.now },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

export const DogModel = mongoose.model("dogs", DogSchema);