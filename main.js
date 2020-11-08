//Place an event listener on the registration button and call checkInput function when clicked
document.getElementById('registration-button').addEventListener('click',checkInput);


function checkInput(e){
  //Declare variables
  let lastName = document.getElementById('last-name-input').value;
  let firstLetter = lastName[0].toUpperCase();
  let classificationButtons = document.getElementsByName('classification-button');
  let errorMessage = document.getElementById('error-message');
  

  //Loop through classification buttons
  for(let i = 0; i < classificationButtons.length; i++){
    /*if a button is checked and the first character of the last name is a string, call displayResult function and don't
    display an error message*/
    if(classificationButtons[i].checked && typeof firstLetter === 'string'){
      errorMessage.textContent = "";
      displayResult(firstLetter);
      break;
    }
    //If a button isn't checked or the first character of the last name isn't a string, show error message
    else{
      errorMessage.textContent = "*Enter last name and select classification*"
    }
  }
  
  e.preventDefault();
}



function displayResult(firstLetter){
  //Take the first letter from the last name and make it uppercase
  

  let seniorButton= document.getElementById('senior-button');
  let juniorButton= document.getElementById('junior-button');
  let sophomoreButton= document.getElementById('sophomore-button');
  let freshmanButton= document.getElementById('freshman-button');
  let outputTimeDate = document.getElementById('output-time-date-output');
  

  if(seniorButton.checked && firstLetter <="M"){
    outputTimeDate.textContent = 'December 1st 9:00am';
  }else if(seniorButton.checked && firstLetter >="N"){
    outputTimeDate.textContent = 'December 1st 11:00am';
  }else if(juniorButton.checked && firstLetter <="M"){
    outputTimeDate.textContent = 'December 2nd 9:00am';
  }else if(juniorButton.checked && firstLetter >="N"){
    outputTimeDate.textContent = 'December 2nd 11:00am';
  }else if(sophomoreButton.checked && firstLetter <="M"){
    outputTimeDate.textContent = "December 3rd 9:00am";
  }else if(sophomoreButton.checked && firstLetter >="N"){
    outputTimeDate.textContent = 'December 3rd 11:00am';
  }else if(freshmanButton.checked && firstLetter <="M"){
    outputTimeDate.textContent = 'December 4th 9:00am';
  }else if(freshmanButton.checked && firstLetter >="N"){
    outputTimeDate.textContent = 'December 4th 11:00am';
  }

  console.log(outputTimeDate.textContent);

}
  

