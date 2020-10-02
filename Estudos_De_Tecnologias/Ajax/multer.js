const multer = require('multer');
const path = require('path');



module.exports={
    dist: path.resolve(__dirname,'upload'),
    storage:  multer.diskStorage({
        destination: function (req,file,callback){
            callback(null,path.resolve(__dirname,'upload'),)
        },
        filename: function(req,file,callback){
            callback(null,`${Date.now()}_${file.originalname}`)
        }
    }),
    limit:{
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'image/gif',
            
            "application/pdf"
        ]
        if(allowedMimes.includes(file.mimetype)) {
            callback(null, true)
        }else{
            callback(new Error('invalid file type'))
        }
    }

}