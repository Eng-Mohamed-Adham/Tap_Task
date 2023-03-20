

function majElement(numes) {
    let count = 0;

    let majority = numes[0];
    let i= 0;

    for(i;i< numes.length;i++){
        if(count === 0){
            majority = numes[i];

        }
        if(numes[i] === majority){
            count++;

        }else{
            count--;
        }
    }
    return majority;
}
// ex1
let nums = [2,2,1,1,1,2,2];
console.log(majElement(nums)); // Output: 2
// ex2
nums = [3,2,3];
console.log(majElement(nums)); // Output: 3
