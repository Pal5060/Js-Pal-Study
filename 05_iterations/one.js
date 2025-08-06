// for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
       // console.log("Found 5, breaking the loop");
    }
    // console.log(element);

}

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop: ${j} of outer loop ${i}`);
       //  console.log(i + '*' + j + '=' + i * j);
        
    }
    
}

let myArray = ["batman", "superman", "spiderman", "ironman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);   
}

// Break AND Continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
       // console.log("Found 5, breaking the loop");
        break; // exits the loop when i is 5
    }
   // console.log(`value of i is ${i}`);
    
    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Found 5, breaking the loop");
        continue // exits the loop when i is 5
    }
    console.log(`value of i is ${i}`);
    
    
}