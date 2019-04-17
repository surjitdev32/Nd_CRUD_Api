abstract class BaseController {
    abstract model: any;

    //---------------------------------------------------------------------  
    // Get all
    //---------------------------------------------------------------------  
    getAll = (req, res) => {
        var query = req.body;
        this.model.find(query)
        .exec((err, obj) => {      
           if (err) { 
                return res.status(400).json({
                'success': false,
                'error': err
                });
            }
            res.json({
                'success': true,
                'data': obj
            });
        });

    }

    // // Get all

    // //---------------------------------------------------------------------  
    // // Get by id - generic func to get a record by id
    // // override in child classes, if neeed.
    // //---------------------------------------------------------------------  
    getById = (req, res) => {

        this.model.findOne({ _id: req.params.id })
        .exec((err, obj) => {
        if (err) { 
            return res.status(400).json({
                'success': false,
                'error': err
            });
        }
        res.json({
            'success': true,
            'data': obj
            });
        });

    } //get by id 
    

    // //---------------------------------------------------------------------  
    // // Insert
    // //---------------------------------------------------------------------  
    insert = (req, res) => {
        const obj = new this.model(req.body);
        obj.save((err, item) => {
            if (err) {
                return res.status(400).json({
                    'success': false,
                    'code': err.code,
                    'error': err.errmsg
                });
            }

            res.status(200).json({
                'success': true,
                'data': item
            });
        });

    } // Insert


    // //---------------------------------------------------------------------
    // // Update by id
    // //---------------------------------------------------------------------
    update = (req, res) => {
        this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
            if (err) {  
               return res.status(400).json({
                    'success': false,
                    'error': err
                });
            }
            res.status(200).json({
                'success': true,
                'message':'user updated'
            });
        });

    }// Update by id

    // //---------------------------------------------------------------------
    // // Delete by id
    // //---------------------------------------------------------------------
    delete = (req, res) => {
        this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
            if (err) {  
                return res.status(400).json({
                    'success': false,
                    'error': err
                }); 

            }
            res.status(200).json({
                'success': true,
                'message':'user deleted'
            });
        });

    }// Delete by id

   
}// BaseController 

export default BaseController;
