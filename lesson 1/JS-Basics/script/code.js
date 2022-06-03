// first approach

//function myFunction() {
//     alert("Hello! My name is (Taucia)!!");
//     }


//second approach  
    // function display(){
    //     alert('my name is Taucia');
    // }
// function display(){alert('hello world');
// }
//  const btndisplay= document.getElementById('btnmadeby');
//     btndisplay.addEventListener('click',()=>{
//         alert('hello world');
//     }) 
// first task
// function taucia() {
// var text = document.getElementById("btntaucia");
//     if (text.style.display === "none") {
//       text.style.display = "block";
//     } else {
//       text.style.display = "none";
//     }
  
// }
// const btndisplay= document.getElementById('btntaucia');
//     btndisplay.addEventListener('click',()=>{
//      document.getElementbyId('btntaucia').
//      innerText='hello my name is taucia';
//     })
//second task
function Taucia(e){
  var firstName= document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  document.getElementById("show").innerText = firstName+" "+lastName;        
}