import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDfjq02TpfEQ4ofhHynAHy9Q0Ben6Dtjls",
    authDomain: "final-4975d.firebaseapp.com",
    projectId: "final-4975d",
    storageBucket: "final-4975d.appspot.com",
    messagingSenderId: "641738054434",
    appId: "1:641738054434:web:41032c3b13ea2590e9e37b",
    measurementId: "G-Z4X7L6T8SZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



let name = document.getElementById("name")
let fathername = document.getElementById("fathername")
let rollNumber = document.getElementById("rollNumber")
let contact = document.getElementById("contact")
let CNIC = document.getElementById("CNIC")
let course = document.getElementById("course")
let sir = document.getElementById("sir")

let picture = document.getElementById("picture")
var reader;
var uploadedImage;
picture.addEventListener("change", function () {
    reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#showPic").style.backgroundImage = `url(${uploadedImage})`;
        document.querySelector("#showPic").style.width = "100px"
        document.querySelector("#showPic").style.height = "100px"
        document.querySelector("#showPic").style.marginLeft = "70px"
        document.querySelector("#showPic").style.borderRadius = "10px"
    });
    reader.readAsDataURL(this.files[0]);
});
const sendstudentDAta = async () => {
    if (name.value != "" && fathername.value != "" && rollNumber.value != "" && contact.value != "" && CNIC.value != "" && picture.files != "" && course.value != "" && sir.value != "") {
        await addDoc(collection(db, "Students"), {
            studentname: name.value,
            fathername: fathername.value,
            rollNumber:rollNumber.value,
            contact: contact.value,
            CNIC: CNIC.value,
            sirName: sir.value,
            course: course.value,
        });
        swal({
            title: "succesfully!",
            text: "You clicked the button!",
            icon: "success",
            button: "done!",
        });
        name.value = ""
        fathername.value = ""
        contact.value = ""
        CNIC.value = ""
        rollNumber.value = ""

    }
    else {
        swal("Please Enter Values")
    }
}

window.sendstudentDAta = sendstudentDAta