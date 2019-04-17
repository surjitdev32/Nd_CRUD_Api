import * as mongoose from 'mongoose';
import  User from '../models/user';
import config from '../config/config';

  	const records = [
  	{
        	email: "test@gmail.com",
  			password: "671920"
   	}
]

	mongoose.connection.openUri(config.db_practice);
	 const db = mongoose.connection;
	 console.log("sucess");

	var user = new User(records);
	user.save(function(err,res){
		if(err){
			console.log("error",err);
		}else{
			console.log("record is add");
		}

	});