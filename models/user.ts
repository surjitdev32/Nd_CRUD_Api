import * as mongoose from 'mongoose';
// create a user schema
const userSchema = new mongoose.Schema({

   email: {
       type:String
   },
   password:{
   	type:String
   },
   username:{
   	type: String
   }
  
});


userSchema.pre('save', function(next) {

   next();
});


const User = mongoose.model('User', userSchema);

export default User;