import mongoose, { Schema } from "mongoose";

const usersCollection = 'Users'
const userSchema = new mongoose.Schema({
    userName: {type: Schema.Types.String, required: true, trim: true},
    email: {type: Schema.Types.String, required: true, unique:true, trim: true},
    password: {type: Schema.Types.String, required: true}}, 
    {timestamps: true})

export const UserModel = mongoose.model(usersCollection, userSchema)