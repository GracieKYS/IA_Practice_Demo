import { gsap } from "gsap";

export default class Person {

   constructor(name, age, picture = null) {
   this.name = name; 
   this.age = age; 
   this.picture = picture;
   this.container = document.querySelector('.people');
   this.createElement();
   }
  
   createElement() {
   //personDiv is the container for 'name' and 'age' divs
   const personDiv = document.createElement('div');
   personDiv.addEventListener('mouseenter', () => {
    gsap.to(personDiv, {
      boxShadow: '10px 10px 20px 5px rgba(0, 0, 0, 0.7)'
    });
   });

   personDiv.addEventListener('mouseleave', () => {
    gsap.to(personDiv, {
      boxShadow: '10px 10px 20px 5px rgba(0, 0, 0, 0.294)'
    });
   });

   personDiv.className = 'person';
   gsap.to(personDiv, { 
    delay: 3,
    width: '50vw',
    height: '15vh',
    ease:'bounce',
      });
      let pictureIMG

    if (this.picture) {
      const pictureIMG = document.createElement('img');
      pictureIMG.src = this.picture;
      pictureIMG.className = 'picture';
     
      gsap.to(pictureIMG, { duration: 5, delay: 3, opacity: 1 });
     
      personDiv.appendChild(pictureIMG);
    }

   this.container.appendChild(personDiv);
   personDiv.addEventListener('click', () => {
    const pictureIMG = document.createElement('img');
    gsap.to(pictureDiv, {
      duration: 2,
      opacity: 0,
      height: 0,
      width: 0,
    })

    gsap
    .to(personDiv, {
      opacity: 0,
      duration: 2,
      height: 0,
      width: 0,
      
    }).then(() => {
      personDiv.remove();
    });

   });
  
   //create and append nameDiv to personDiv 
   const nameDiv = document.createElement('div');
   setTimeout(() => {
    nameDiv.innerHTML
   })
   nameDiv.innerHTML = `Name: ${this.name}`;
   personDiv.appendChild(nameDiv);
  
   //create and append ageDiv to personDiv
   const ageDiv = document.createElement('div');
   ageDiv.innerHTML = `Age: ${this.age}`;
   personDiv.appendChild(ageDiv);
   }
  }