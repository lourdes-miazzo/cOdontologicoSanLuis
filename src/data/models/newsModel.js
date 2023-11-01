import mongoose, { Schema } from "mongoose";

const newsCollection= "News"
const newsSchema= new mongoose.Schema({
    title: {type: Schema.Types.String, required: true},
    text: {type: Schema.Types.String, required: true},
    img:  {type: Schema.Types.String, required: true},
    alt:  {type: Schema.Types.String, required: true},
    date: {type: Schema.Types.Date, default: Date.now()}
})

export const newsModel= mongoose.model(newsCollection, newsSchema)