// Log a statment using console.log()
console.log('Hello from Anna')

//Learning to use variables
let age = 22
console.log(age)

//adding variable using let is dynamic

//values of const cannot be changed
const salary = 10101
console.log(salary)

//learning about loops
const a = 4;

if(a>5){
    console.log("Greater");
}
else{
    console.log("Smaller");
}

for(let i = 0; i<5; i++){
    console.log(i);
}

//learning about functions

//traditional method
function add(a,b){
    return a+b;
}

console.log(add(5,3));

//modern way
let add_new = (a,b) =>{
    return a+b;
}

//checking output sequence
async function main(){
    console.log("First");
    async function secondTask(){
        await new Promise(function(resolve, reject){
            setTimeout(function (){
                try{
                    console.log("Second");
                    resolve();
                }
                catch(err){
                    reject();
                }
            } ,2000);   
        })
    }
    await secondTask();
}

main();
console.log("Third");