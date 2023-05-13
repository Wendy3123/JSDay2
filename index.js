let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]
//Use a while loop to iterate through the newInventoryCarModels array to get see car's data type. 
//Remember to initialize your i variable to 0 before starting the loop! Print out each car type in 
//a console.log statement.

//Make a new variable called typeS1Count and initialize it to 0. Inside your loop from step 2, check 
//and see if the car type is equal to "S1". If it is, increment the typeS1Count variable by one. Outside 
//the loop, log "Number of S1 Cars is:" and then the value of the typeS1Count variable. Hint: You will need
// to make an if statment inside your loop!
let typeS1Count=0       //initialize the variable typeS1count so we can keep track of all future S1 cars
let i=0                    //initialize i so we can use in while loop
while(i<newInventoryCarModels.length){  //while loop use the i < the length of models to go through this array
    console.log(newInventoryCarModels[i])   //prints out each car model in order as the array above
    if(newInventoryCarModels[i]==='S1'){    //if the model in array == S1 
        typeS1Count++                       //then we add 1 to typeS1count to keep track
    }
    i++                                    //now move on to text item in array newInventoryCarModels
}
console.log("Number of S1 Cars is:", typeS1Count) //put this outside the loop so it doesnt reprint 6 times

//Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through 
//an array. We can use either type and accomplish the same objective. Outside of this second loop, make a 
//variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model 
//is "Lorrie". After the loop is closed, print out how many lorries you found.

let x;
let lorries = 0;

for (let x =0; x < newInventoryCarTypes.length; x++) {
    if(newInventoryCarTypes[x]==="Lorrie"){
        lorries++;
    }
}
console.log("Number of Lorries:", lorries)

//Here's a challenge for you,Determine the average age of each new train car the company is receiving. 
//All you have is the year each car was built, knowledge of loops, and your wits!

let y;
let age=2023;
let sum = 0;
for(let y=0; y<newInventoryYearBuilt.length;y++){
    sum += (age - newInventoryYearBuilt[y])
}
console.log("Average (age) Year of vehicles is :" , sum / newInventoryYearBuilt.length , "years")



//trying out arrow function for fun 
const sayHello = () => {
    console.log("helloworld")
}
sayHello()