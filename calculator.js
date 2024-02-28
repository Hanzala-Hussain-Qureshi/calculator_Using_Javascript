let  a = prompt("Entre first number:")
let  b = prompt("Entre second number:")
console.log("Press number from 1-8:\n1 = Addition\n2 = Subtraction\n3 = multiplication \n4 = division\n5 = modulus\n6 = Exponent \n7 = increment\n8 = decrement") 
let  c = prompt("Entre any number from 1-8:")
a = Number.parseFloat(a)
b = Number.parseFloat(b)
c = Number.parseFloat(c)

if (c==1){
    alert("You choose to do Addition")
    console.log("a+b= "+(a+b))
}
else if(c==2) {
    alert("You choose to do Subtraction")
    console.log("a-b= "+(a-b))
}
else if (c==3){
    alert("You choose to do Multiplication")
    console.log("a*b= "+(a*b))
}
else if (c==4){
    alert("You choose to do Division")
    console.log("a/b= "+(a/b))
}
else if (c==5){
    alert("You choose to do Modulus")
    console.log("a%b= "+(a%b))
}
else if (c==6){
    alert("You choose to do Exponentent")
    console.log("a**b= "+(a**b))
}
else if (c==7){ 
    alert("You choose to do Increment")
    console.log("++a= "+(++a))
}
else if (c==8){
    alert("You choose to do Decrement")
    console.log("--a= "+(--a))
}
else {
    alert("please entre a valid number")
}