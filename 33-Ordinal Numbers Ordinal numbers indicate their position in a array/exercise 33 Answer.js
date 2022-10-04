//• Store the numbers 1 through 9 in a array.

var nums = [1,2,3,4,5,6,7,8,9];

//• Loop through the array.


//Use an if-else chain inside the loop to print the proper ordinal ending 
// for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 
// 7th 8th 9th", and each result should be on a separate line.

for(var i in nums){
    if(nums[0]===1){
        console.log(nums[0]+"st");
        
    }
   if(nums[1]===2){
        console.log(nums[1]+"nd");
       
    }
     if(nums[2]===3){
        console.log(nums[2]+"rd");
      
    }
    if(nums[3]===4){
        console.log(nums[3]+"th");
       
    }
     if(nums[4]===5){
        console.log(nums[1]+"th");
       
    }
    if(nums[5]===6){
        console.log(nums[5]+"th");
        
    }
   if(nums[6]===7){
        console.log(nums[6]+"th");
        
    }
   if(nums[7]===8){
        console.log(nums[7]+"th");
     
    }
     if(nums[8]===9){
        console.log(nums[8]+"th");
        break;
    }
}