import mongoose from 'mongoose';

const blobSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name feild is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name feild is required']
    },
    available: {
        type: Boolean,
        default: false
    }
});


export default mongoose.model('blobs', blobSchema);
