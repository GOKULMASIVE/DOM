const head=document.createElement('p');
head.innerHTML="Hey There😎";
document.body.append(head);

const divi=document.createElement('div')
divi.innerHTML="Hello my frnds✌"
divi.setAttribute('class','cont')
document.body.append(divi)
divi.setAttribute('id','frnd')

var sp=document.createElement('span')
sp.innerHTML='This is super cool😉'
sp.classList.add('main','main1','main2')
document.body.append(sp)

const g_id=document.getElementById('myid1')
console.log(g_id)

const g_id2=document.getElementsByClassName('myclass3')
console.log(g_id2)


const cl_name=document.getElementsByClassName('myclass1')
console.log(cl_name)

const tg_name=document.getElementsByTagName('h2')
console.log(tg_name)