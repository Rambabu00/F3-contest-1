function PromiseAPI1(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
          res(
            fetch('https://dummyjson.com/Posts')
            .then(response=>response.json())
            .then(data=> data)
            
          )
        }, 1000);
    })
}
function PromiseAPI2(){
  return new Promise((res,rej)=>{
      setTimeout(() => {
        res(
          fetch('https://dummyjson.com/Products')
          .then(response=>response.json())
          .then(data=> data)
          
        )
        
      }, 2000);
  })
}
function PromiseAPI3(){
  return new Promise((res,rej)=>{
      setTimeout(() => {
        res(
          fetch('https://dummyjson.com/todos')
          .then(response=>response.json())
          .then(data=> data)
          
        )
      }, 3000);
  })
}

document.getElementById('button').addEventListener('click',()=>{
 setTimeout(() => {
  document.getElementById('button').style.display='none'
 }, 1000);
  
  let body=document.getElementById('b');
PromiseAPI1().then((data=>{
  console.log(Date())
  document.getElementById('body').style.display='block'
  document.getElementById('table1').style.display='block'
    let arr=data.posts;
    arr.map((obj)=>{
body.innerHTML+=`
<tr>
    <td>
${obj.id}
    </td>
    <td>
${obj.title}
    </td>
    <td>
${obj.tags}
    </td>
    <td>
${obj.body}
    </td>
    <td>
${obj.reactions}
    </td>
    <td>
    ${obj.userId}    
    </td>
</tr>

`
    })
    return PromiseAPI2();
   
}))
.then(data=>{
  console.log(Date())
  document.getElementById('table2').style.display='block';
 let arr=data.products;
 arr.map(obj=>{
  document.getElementById('b1').innerHTML+=`
  <tr>
    <td>
${obj.id}
    </td>
    <td>
${obj.title}
    </td>
    <td>
${obj.description}
    </td>
    <td>
${obj.price}
    </td>
    <td>
${obj.discountPercentage}
    </td>
   
</tr>
  `
 })
 return PromiseAPI3();
})
.then(data=>{
  document.getElementById('table3').style.display='block';
  console.log(Date());
  
  let arr=data.todos;
  arr.map(obj=>{
    document.getElementById('b2').innerHTML+=`
    <tr>
    <td>
${obj.id}
    </td>
    <td>
${obj.todo}
    </td>
    <td>
${obj.userId}
    </td>
    <td>
${obj.completed}
    </td>
    
   
</tr>
    `
  })
})
.catch(err=>{
  console.log(err)
})
 
})