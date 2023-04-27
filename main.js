import './style.css';
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { collection, addDoc , getDocs } from "firebase/firestore"; 
import { db, storage } from './db.js';
import Person from './Person.js';


const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');
const addRandomPersonButton = document.getElementById('randomPersonButton');
const peopleContainer = document.querySelector('.people');

let nameArr = [];
let ageArr = [];
let pictureArr = [];
let personArr = [];

//addData ("Ian", 60);
//addData ("George", 20);


/** 
 * DB
 */
async function addData(name, age) {
  try {
    const docRef = await addDoc(collection(db, "people"), {
      name: name,
      age: age,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getData() {
  const querySnapshot = await getDocs(collection(db, "people"));
  querySnapshot.forEach((doc) => {
    nameArr.push(doc.data().name)
    ageArr.push(doc.data().age)

    personArr.push({
      name: doc.data().name, 
      age: doc.data().age,
      favSport: 'Basketball',
    })

    // console.log(`${doc.id} => ${doc.data().age}`);
    addPerson(doc.data().name, doc.data().age);
});
}

getData().then(()=> {
  personArr.forEach((person)=> {
    console.log(person);
  })
})

/**
 * EventListener
 */

addRandomPersonButton.addEventListener('click', () =>{
  getRandomUser();
});


//add data from db
async function getRandomUser() { 
  const data = await fetch ('https://randomuser.me/api/')
  const json = await data.json();
  console.log(json.results[0]);
  let name = json.results[0].name.first;
  let age = json.results[0].dob.age;
  let picture = json.results[0].picture.large;


  addPerson(name, age, picture);
  }


function addPerson (name, age, picture = null) {
  new Person(name, age, picture);
}

function clickHandler(e) {
  e.preventDefault();
  let formData = new FormData(form);

  nameArr.push(formData.get('name'));
  ageArr.push(formData.get('age'));

  addPerson(formData.get('name'), formData.get('age'));

//  viewNameArr();
//  viewAgeArr();
}

submitButton.addEventListener('click', clickHandler);

/**
 * Storage
 */

const myRef = ref(storage);
console.log(myRef);

function uploadPicture() {
  try {
    uploadBytes(storage, './public/IMG_999.jpeg').then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  } catch (error) {
    console.log(error)
  }

}

//upload picture

const storage = getStorage();
getDownloadURL(ref(storage, 'gs://ia-practice.appspot.com/IMG_999.jpeg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
      console.log(blob);
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });

  console.log(newStorage);

