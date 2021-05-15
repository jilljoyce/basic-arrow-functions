//deel a

const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!")
  
ikRockArrowFunctions()

//deel b

const fivePlusSeven = () => 5 + 7    //arrow functions hebben een implicit return statement wanneer je de code op 1 regel kunt schrijven. (1 uitzondering, bij het returnen van een object, dan moet je deze ook tussen haakjes zetten)

fivePlusSeven()

//deel c

const myFunction = (a, b) => a + b
  
myFunction()

//deel d

const addFive = a => a + 5    //1 parameter mag zonder haakjes

addFive()

//deel e

const createObject = () => ({greeting: "hoi"})  

createObject()