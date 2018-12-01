let img = [];
let body, mk_img, default_img, img_get;


function preload() {
    default_img = loadImage('img1.jpg')

}

function setup() {
    createCanvas(600, 500);
    background(255);

    // making the canvas inside a container  div

    // image(default_img, 0, 0);
    // postFile();
};

function draw() {

};

// get the value of the file beiing uploaded
function postFile() {
    document.querySelector('.button').addEventListener('click', (e) => {
        e.preventDefault();

        let file = document.querySelector('input[type=file]').value;

        if (file && !img.includes(file)) {
            img.push(file);
            console.log(img);

            // the_img = loadImage(file);
            // image(the_img, 0, 0);
            // if (img.length > 0) {
            //     for (let i = 0; i < img.length; i++) {

            //     }
            // }
        } else {
            console.log('please select an image');
        }
    })
}