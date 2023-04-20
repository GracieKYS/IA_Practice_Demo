import './style.css';
import { db } from './db.js';
import { collection, addDoc } from "firebase/firestore"; 

import Person from './Person.js';

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');
const addRandomPersonButton = document.getElementById('randomPersonButton');
const peopleContainer = document.querySelector('.people');

addData ("Ian", 60);
addData ("George", 20);



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



addRandomPersonButton.addEventListener('click', () =>{
  getRandomUser();
})

let nameArr = [];
let ageArr = [];
let pictureArr = [];

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

  addPerson(formData.get('name'));
  addPerson(formData.get('age'));

//  viewNameArr();
//  viewAgeArr();
}

submitButton.addEventListener('click', clickHandler);

