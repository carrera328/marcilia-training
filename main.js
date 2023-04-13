// const element = document.querySelector('#text-to-update');
// console.log('element', element);




// function myFunction() {
//     document.getElementById("text-to-update").innerHTML = "Hello, my name is Dash Cat!";
//   }

  function myFunction() {
    let changeTxt = document.getElementById("change_txt").value;
    document.getElementById("text-to-update").innerHTML = changeTxt;
    console.log(changeTxt);
  }