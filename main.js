


//RESPONSIVE NAV
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validation() {

  var firstName=document.getElementById("fname").value
  var lastName=document.getElementById("lname").value
  var email=document.getElementById("email").value
  
  
  if ( firstName=="" || lastName ==""|| email=="" )
      {alert("Please enter all the required info, if not we can not continue")}

  else 

  {
    
      onSubmitted()
      
      
  }

}


//FUNCTION FOR
function onSubmitted () {

 /* let checkedLanguage;

  if(document.getElementById("english").checked === true)
  
  {checkedLanguage = "english"}

  else if(document.getElementById("deutsch").checked === true)
  
  {checkedLanguage = "deutsch"}

  else if(document.getElementById("spanish").checked === true)
  
  {checkedLanguage = "spanish"}*/

  sessionStorage.setItem("firstName", document.getElementById("fname").value);
  sessionStorage.setItem("lastName", document.getElementById("lname").value);
  sessionStorage.setItem("email",document.getElementById("email").value);
  sessionStorage.setItem("lenguage", document.getElementById("lenguage").value);
  sessionStorage.setItem("text",document.getElementById("text").value);

  

  alert("Now you will be redirected");

  window.open('confirmation.html');

  window.close('form.html');
  
  
}







function newPage (){
    
        
  var firstname = sessionStorage.getItem("firstName");
  var lastname = sessionStorage.getItem("lastName");
  var email=sessionStorage.getItem("email");
  var lenguage=sessionStorage.getItem("lenguage");
  

alert("lenguage is"+lenguage);
alert("lastname is"+lastname);
alert("firstname is"+firstname);
alert("email is"+email);

  if(lenguage==[0]) 
  {
      document.getElementById("result").innerHTML = firstname+" "+lastname+" Thanks for choosing our ENGLISH course, we will send the details to confirm at "+email
  }

  else if (lenguage==[1])
  {
      document.getElementById("result").innerHTML = firstname+" "+lastname+"Vielen Dank, dass Sie sich für unseren Deutschkurs entschieden haben. Wir senden Ihnen die Details zur Bestätigung an "+email
  }

  else if(lenguage==[2]) 
  {
      document.getElementById("result").innerHTML = firstname+" "+lastname+" Muchas gracias por elegir el curso, le enviaremos los detalles de confirmacion a su email en "+email
  } else {

  document.getElementById("result").innerHTML ="Your first name is"+lastname
  }

}