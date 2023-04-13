import './style.css';

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');

let nameArr = []
let ageArr = []

getRandomUser()

async function getRandomUser() { 
  const data = await fetch ('https://randomuser.me/api/')
  .then((response) => {
    concole.log(response);
    let fetchData = response.json().then(
      data
    );
    console.log(fetchData);
  });

  
}

function addperson (name, age) {
  //personDiv is the container for 'name and 'age' divs
  const personDiv = document.createElement('div');
  personDiv.classList = 'person';
  personDiv.innerHTML = 'Hello';
  peopleConatiner.appendChild(personDiv);

  console.log(peopleContainer);

  //create and append nameDiv to personDiv
  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = 'Name: ${name}';
  personDiv.appendChild(nameDiv);

  //create and append ageDiv to personDiv
  const ageDiv = document.createElement('div');
  ageDiv.innerHTML = 'age: ${age}';
  personDiv.appendChild(ageDiv);

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

const peopleConatiner = document.querySelector('.people');