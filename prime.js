let a=13;
let Count=0;
for(let i=2;i<=Math.sqrt(a);i++){

if(a%i==0){

Count++;
break;
}
  
}

if(Count==0){
  console.log("prime");
}
else{
console.log(" not prime");
}