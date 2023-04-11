import './style.css';

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');

let nameArr = []
let ageArr = []



function clickHandler(e) {
  e.preventDefault();
  let formData = new FormData(form);

  nameArr.push(formData.get('name'));
  ageArr.push(formData.get('age'));

//  viewNameArr();
//  viewAgeArr();
}

submitButton.addEventListener('click', clickHandler);

function viewNameArr() {

  for(let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i])
  }
}

function viewAgeArr() {

  for(let i = 0; i < ageArr.length; i++) {
    nameArr.forEach((age)=> {
      console.log(age)
    })
  }

}
