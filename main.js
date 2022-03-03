


//RESPONSIVE NAV
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//FUNCTION VALIDATION 


  
  function validation() {

  var firstName=document.getElementById("fname").value
  var lastName=document.getElementById("lname").value
  var email=document.getElementById("email").value
  
  
  if ( firstName=="" || lastName ==""|| email=="" )
      {alert("Please enter all the required info, if not we can not continue");
      
    return false
    }

  else 

  {
    
      onSubmitted()
      
      
  }

};

function onSubmitted () {

  let checkedLanguage;

  if(document.getElementById("english").checked === true)
  
  {checkedLanguage = "english"}

  else if(document.getElementById("deutsch").checked === true)
  
  {checkedLanguage = "deutsch"}

  else if(document.getElementById("spanish").checked === true)
  
  {checkedLanguage = "spanish"}

  sessionStorage.setItem("firstName", document.getElementById("fname").value);
  sessionStorage.setItem("lastName", document.getElementById("lname").value);
  sessionStorage.setItem("email",document.getElementById("email").value);
  sessionStorage.setItem("lenguage",checkedLanguage);
  sessionStorage.setItem("text",document.getElementById("text").value);

  

  alert("Now you will be redirected");
  //window.close('form.html');
  //window.open('confirmation.html');

  
  
  
}

function newPage (){
    
        
  var firstname = sessionStorage.getItem("firstName");
  var lastname = sessionStorage.getItem("lastName");
  var email=sessionStorage.getItem("email");
  var lenguage=sessionStorage.getItem("lenguage");
  var text=sessionStorage.getItem("text");
  

//alert("lenguage is"+lenguage); THIS WAS A FORM OF CHECKING THAT RUNS
//alert("lastname is"+lastname);
//alert("firstname is"+firstname);
//alert("email is"+email);
//alert("text is "+text);

  if(lenguage=="english") 
  {
      //document.getElementById("result").innerHTML = firstname+" "+lastname+" Thanks for choosing our ENGLISH course, we will send the details to confirm at <br>"+email
      document.getElementById("result").innerHTML = firstname+" "+lastname+" Thanks for choosing our ENGLISH course, we will send the details to confirm at <br>"+email
      document.getElementById("textarea").innerHTML ="Here is the copy of your comments: "+text
  }

  else if (lenguage=="deutsch")
  {
      document.getElementById("result").innerHTML = firstname+" "+lastname+" Vielen Dank, dass Sie sich für unseren Deutschkurs entschieden haben. Wir senden Ihnen die Details zur Bestätigung an "+email
      document.getElementById("textarea").innerHTML ="Hier ist die Kopie Ihrer Kommentare: "+text
  }

  else if(lenguage=="spanish") 
  {
      document.getElementById("result").innerHTML = firstname+" "+lastname+" Muchas gracias por elegir el curso, le enviaremos los detalles de confirmación a su email en "+email
      document.getElementById("textarea").innerHTML ="Aqui dejamos una copia de sus comentarios: "+text
  } else {

  document.getElementById("result").innerHTML ="Please contact customer service or call +41 076 265 5785 "
  }

}

