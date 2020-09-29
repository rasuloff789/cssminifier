const inputText = document.querySelector(".inputText");
const submitButton = document.querySelector(".btn");
var firstImg = document.querySelector(".jpgImage").innerHTML;

// var remove = document.querySelector(".remove")



console.log(document.querySelector(".inputText").innerHTML);
function generateFunction(){
  var ytyt = inputText.value;
  
  var btbt = ytyt.replace(/\s/g, "");
  
  var textJpg = btbt.replace(/(\/\*)(.|\r|\n)*?(\*\/)/g,"");

  document.querySelector(".jpgImage").innerHTML =  textJpg ;
  
}

function remove(){
inputText.value = '';
document.querySelector(".jpgImage").innerHTML = ''
}
function copyFc() {
  /* Get the text field */
  var copyText = document.querySelector('.jpgImage');

  copyText.select(); 
  copyText.setSelectionRange(0, 99999); 
  /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}