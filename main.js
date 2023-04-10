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
  

}


submitButton.addEventListener('click', clickHandler);
