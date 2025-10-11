let todo = [];
while(true){
  
let user = prompt("Enter the task :");

  if(!user) continue;
  user = user.trim().toLowerCase();

  if(user == "quit"){
    console.log("You have quit the app.");
    break;
  }

  else if(user === "list"){
    console.log("**********");
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
    console.log("**********");
  }

  else if(user == "add"){
   let task = prompt("Enter the element to add : ");
    todo.push(task);
    console.log(task);
    console.log("item added successfully")

  }
  else if(user ==  "delete"){
  let idx = prompt("Enter the index of item you want to delete");
    todo.splice(idx,1);
    console.log("item deleted successfully");
  }
  else{
    console.log("Invalid command");
  }
}