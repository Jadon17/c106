Webcam.set(
    {
        width : 350,
        height : 300,
        image_format : 'png',
        png_quality : 90
    }
);

camera = document.getElementById("Webcam").innerHTML;

Webcam.attach('#Webcam');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '">';
    });

}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/U_haafhGF/model.json', modelloaded);

function modelloaded(){
    console.log("Model is loaded !");
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, result){
    if (error){
        console.log(error);
    }

    else{
        console.log(result);
        document.getElementById("result_objectname").innerHTML = result[0].label;
        document.getElementById("result_objectaccuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}