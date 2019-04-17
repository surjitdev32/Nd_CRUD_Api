import config from '../config/config';
import User from '../models/user';
import BaseController from './baseController';
import Category from'../models/category';


export default class CategoryController {



addCategory = (req,res)=>{
    console.log('called addCategory');
    if(!req.body.brand || !req.body.user || !req.body.categorytype){
        res.send({success:false , message: 'something is missing'});
    }
    const user2 = new Category({
        brand: req.body.brand,
         user: req.body.user,
         categorytype: req.body.categorytype
    });
    
        user2.save((err,savedCategory) =>{
        if (err){
            res.status(400).json({
                'success': false,
                'code':err.code,
                'error':err.errmsg
            });
        }
        res.status(200).json({
            
            'success': true,
            'result': user2
        });
    });
  }
}

//  getAll = (req,res)=>{
//     console.log('get the data');
  

//     Category.find({}).populate('user').exec().then((Category)=>{
//            return res.status(200).json({
//             success: true,
//             message: 'a list of all category',
//             Category: Category,

//         });
//     }).catch((err) =>{
//         res.status(500).json({
//             success: false,
//             message: 'server error',
//             error: err.message,
//         });
//     });
// }
//  getById = (req, res) => {

//         Category.findOne({ _id: req.params.id }).populate('user').exec().then((Category) => {
//         return res.status(200).json({
//             success: true,
//             message: 'category find by id',
//             Category: Category,
//         });
//     }).catch((err)=>{
//         res.status(500).json({
//             success: false,
//             message: 'server error',
//             error: err.message,
//         });
//     });

//     }

// updateCategory = (req,res)=>{
//     const id = req.params.userId;
//     const updateObject =req.body;
//      Category.update({_id:id},{$set:updateObject})//.select('user')
//     .exec().then((Category) =>{
//         res.status(200).json({
//             success: true,
//             message: 'Category is updated',
//             updateCategory: updateObject,
//         });
//     }).catch((err)=>{
//         res.status(500).json({
//             success: false,
//             message: 'Server error'
//         });
//     });
// }



// deleteCategory=(req,res)=>{
//     console.log('user delete');
//     const id = req.params.userId;
//     Category.findByIdAndRemove(id).exec()
//     .then(()=>res.send({
//         success: true,
//         message:'Category must be deleted'

//     })).catch((err) => res.status(500).json({
//         success: false,
//         message: 'not deleted'
//     }));
//  }
// }



