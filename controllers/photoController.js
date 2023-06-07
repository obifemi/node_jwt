import Photo from '../models/photoModel.js';
const createPhoto =async (req,res)=>{
try {
    
        console.log(req.body)
        const photo = await Photo.create(req.body)
        res.status(201).json({
            succeded:true,
            photo,
        })
    
    }
    
catch (error) {
    
    res.status(500).json({
        succeded:false,
        message:error.message,
    })
}
}

const getPhotos = async (req,res)=>{
    try {
        const photos = await Photo.find({})
        res.status(200).json({
            succeded:true,
            photos,
        })
    } catch (error) {
        res.status(500).json({
            succeded:false,
            message:error.message,
        })
    }   
}



export {createPhoto,getPhotos};