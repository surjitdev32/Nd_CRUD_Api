import User from '../models/user';
import * as mongoose from 'mongoose';
import config from '../config/config';
import BaseController from './baseController';
export default class UserController extends BaseController {
	model= User;

addUser = (req, res) => {

console.log("called addUser");
if (!req.body.email || !req.body.password || !req.body.username) {
       res.send({success:false ,message:'something is missing'});
       return;
}

const user = new User({
email:req.body.email,
password:req.body.password,
username:req.body.username
});
user.save((err,savedUser) =>{
        if (err){
            res.status(400).json({
                'success': false,
                'code':err.code,
                'error':err.errmsg
            });
        }
    });

res.status(200).json({
'success':true,
'data':user
});
}

getAll = (req,res)=>{
    console.log('get the data');

    User.find().select('email,password').then((User)=>{
        return res.status(200).json({
            success: true,
            message: 'a list of all user',
            User: User,
        });
    }).catch((err) =>{
        res.status(500).json({
            success: false,
            message: 'server error',
            error: err.message,
        });
    });
}



updateUser = (req,res)=>{
    const id = req.params.userId;
    const updateObject =req.body;
    User.update({_id:id},{$set:updateObject})
    .exec().then(() =>{
        res.status(200).json({
            success: true,
            message: 'User is updated',
            updateUser: updateObject,
        });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    });
}


deleteUser=(req,res)=>{
    console.log('user delete');
    const id = req.params.userId;
    User.findByIdAndRemove(id).exec()
    .then(()=>res.send({
        success: true,
        message:'user must be deleted'

    })).catch((err) => res.status(500).json({
        success: false,
        message: 'not deleted'
    }));
 }
}




//status(204).json
//res.send