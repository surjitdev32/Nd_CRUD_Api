import UserController from '../controllers/userController';
import CategoryController from'../controllers/categoryController';
import * as mongoose from 'mongoose';
import config from '../config/config';
import BaseController from '../controllers/baseController';

export default function setRoutes (app) {

    const userCtrl = new UserController();

     const cateCtrl = new CategoryController();
     
     app.route('/api/register').post(userCtrl.addUser);
     app.route('/api/register/data').post(userCtrl.addUser);
   	 app.route('/api/get').get(userCtrl.getAll);
     app.route('/api/update/:id').put(userCtrl.updateUser);
 	 app.route('/api/delete/:id').delete(userCtrl.deleteUser);
 	 //app.route('/api/get/:id').get(cateCtrl.getById);

 }
