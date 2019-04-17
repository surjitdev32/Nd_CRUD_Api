import * as mongoose from 'mongoose';
let Schema = mongoose.Schema;

//create a category schema
const categorySchema = new mongoose.Schema({
	brand: String,
	user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },categorytype:{
    	type: String,	
    } 
});
const Category = mongoose.model("Category",categorySchema);
export default Category;