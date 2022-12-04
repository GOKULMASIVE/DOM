console.log("Hi hello");

setTimeout(() => {
    console.log("First timeout funct 😉")
},5000);

setTimeout(timer,7000);

function timer(){
    console.log("Sec time")
}
console.log("There u go")

setTimeout(function(a,b){
    console.log("FastTrack......",a+b)
}(1,20),2000)

var count=0;
const head=document.createElement('h1');
a=setInterval(function (){
    count++;
    console.log(count)
   
    head.innerHTML=count
    document.body.append(head)
    if(count===10){
        clearInterval(a)
        const h=document.createElement('h1')
        head.innerHTML='Hello frnds'
        document.body.append(h)
    }

},1000)
