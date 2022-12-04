/*const cont=document.createElement('div')
cont.innerHTML='<div class="row"><div class="col">Hello</div></div>'
document.body.append(cont)*/

const cont1=document.createElement('div')
cont1.setAttribute('class','container')

const row=document.createElement('div')
row.classList.add('row')

const col=document.createElement('div')
col.setAttribute('class','col')
 const head=document.createElement('h1')
 head.innerHTML="Hello friends😊"

 cont1.appendChild(row)
 row.appendChild(col)
 col.appendChild(head)

 document.body.append(cont1)

 var quer=document.querySelector('.row').innerText
 console.log(quer)
 var quer2=document.querySelectorAll('.container')
 console.log(quer2)
