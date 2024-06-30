import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {type : String, required :true, unique : true},
    password: {type : String,
         required : true, 
         validate: pass =>{
            if(!pass?.lenght || pass.lenght < 5){
                new Error('password should be at least 8 characters');
                return false;
            }
            pass;
         }}
}, {timestamps : true})
export const User = models?.User || model('User', UserSchema);
