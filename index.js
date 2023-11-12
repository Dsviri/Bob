
const bob = document.querySelector('.face');
let count = 0;

//regular function
//function moveBob() {
//  console.log('you clicked me!')
//  count += 100;
//  bob.style.left = count + 'px';
//}

//arrow function
const moveBob = () => {
  console.log('you clicked me!')
  count += 100;
  bob.style.left = count + 'px';
}

bob.addEventListener('click', moveBob);