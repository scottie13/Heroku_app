const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')


// Where to stare images 
const storage_engine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/uploads')
    },
    // get info about images and keep the file extension names
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

// Mutler's storage engine & and what gets stored
const uploads = multer({
        storage: storage_engine,
        limits: {
            fileSize: 1024 * 60
        },
        // filter out the file that you don't want
        fileFilter: (req, file, cb) => {
            const filetypes = /jpeg|jpg/
            const mimetype = filetypes.test(file.mimetype)
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase())

            if (mimetype && extname) {
                return cb(null, true)
            }
            cb('jpg files only')
        }
    })
    //  only one file can be uploaded at a time
    .single('pic')

// remove the msg object
router.use((req, res, next) => {
    setTimeout(() => {
        if (req.body) {
            console.log(req.body)
        } else {
            console.log('no info found!')
        }
    }, 2000)
    next()
})

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Odain\'s site ',
        default_img: 'img1.jpg',
    });
})


// Handale the image uploads
router.post('/', (req, res, next) => {

    // use the multer function 
    uploads(req, res, (err) => {
        // If there's an error catch it
        if (err) {
            res.render('index', {
                msg: 'file to large'
            })
        } else {
            // Check if an image is being uploaded 
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'No file found'
                })

            } else {
                // if everything passes upload images
                res.render('index', {
                    title: 'upload',
                    file: 'uploaded!',
                    img: req.file.filename,
                    filename: req.file.filename
                })
            }
        }
    })
})


module.exports = router;