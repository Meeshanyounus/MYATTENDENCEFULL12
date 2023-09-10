import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {  getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
const db = getFirestore(app);
let name = document.getElementById("name")
let contain = document.getElementById("contain")
window.onload = async() => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let div = `
        <div class="card">
                <div class="img">
                    <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1668262795~exp=1668263395~hmac=865617d225fe7d6915f3243e238414806bcf4930d3b031c6257203c58ffb796d" alt="">
                </div>
                <div class="data">
                    <div class="text">
                        <div class="text_name" id="name">Name</div>
                        <div class="text_data">${doc.data().studentname}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().fathername}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().rollNumber}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Contact</div>
                        <div class="text_data">${doc.data().contact}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">CNIC</div>
                        <div class="text_data">${doc.data().CNIC}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Course Name</div>
                        <div class="text_data">${doc.data().course}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Status</div>
                        <div class="text_data">✔</div>
                    </div>
                </div>
            </div>
        `
        contain.innerHTML += div
    });

}