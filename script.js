let pass1 = document.getElementById('pas1');
let pass2 = document.getElementById('pas2');


let passCheck = function pC(event) {
  let pass11 = pass1.value
  let pass22 = pass2.value
  if (pass11 === pass22) {
    console.log('SAME')
    console.log(pass11)
    console.log(pass22)
    // event.preventDefault()
    return true;
  } else {
    // event.preventDefault()
    console.log('DIFFERENT')
    console.log(pass11)
    console.log(pass22)
    alert('Passwords do not match!')
    pass1.classList.add('wrong-pass')
    pass2.classList.add('wrong-pass')
    return false;
  }
}