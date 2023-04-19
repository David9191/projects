import { Schema } from 'mongoose';

const NonUserSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    moblieNumber : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
}, {timestamps : true });

export default NonUserSchema;