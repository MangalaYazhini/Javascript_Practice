// While Loop : It repeat the code until the condition is true
// For Loop : It is used to iterate over the list of items

let loggedIn = false ; 
let username ; 
let password ; 


const myUsername = "Mangala Yazhini"; 
const myPassword = "Abc123#*"; 
const passLength = 8; 
const maxLoginAttempts = 3;

let loginAttempts = 0 ; 
let coursesList = [] ; 


while(!loggedIn  && loginAttempts < maxLoginAttempts)
{
  alert("Login using your credentials");
  username = window.prompt("Enter you username : ");

  let attempts = 0 ; 
  
  do{ 
    if(attempts ==0) 
      password = window.prompt("Enter you password : "); 
    else
    {
      password = window.prompt("Incorrect! \nEnter you password : "); 
    }
      
    attempts += 1; 
  }while(password.length !== passLength && attempts < 3)


    
  if(username === myUsername && password === myPassword)
  {
    loggedIn = true; 
    alert("You are logged In");
    console.log("You are logged In");
  }
  else
  {
    window.alert('Invalid credentials, Please try again!')
    console.log("Invalid credentials, Please try again!");
    loginAttempts++; 
  }
}

if(!loggedIn)
{
  alert("Try after 10 minutes!")
}
else
{
  window.alert('Select the courses you want to join \n1.Java \n2.Python \n3.Javascript \n4.PHP');
  let courses =  window.prompt("Enter courses you want to join: ");
  console.log(`courses = ${courses} , ${typeof courses}`);

  coursesList = courses.split(", ")
  
  

  window.alert("Your Selected Courses\n");

  for (let course of coursesList)
  {
    window.alert(`${course}`);
  }
}



