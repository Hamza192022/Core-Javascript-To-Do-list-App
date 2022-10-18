showtask()
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click" , function(){
    addtaskinputval = addtaskinput.value 
    if(addtaskinputval.trim()!=0){

        let web = localStorage.getItem("localtask");
        if(web==null){
            taskobj = [];
        }
        else{
            taskobj=JSON.parse(web)
        }
        taskobj.push(addtaskinputval)
        localStorage.setItem("localtask" ,JSON.stringify(taskobj) )
        // addtaskinputval.value= " ";
    }
    showtask()
})

function showtask(){
    let web = localStorage.getItem("localtask");
    if(web==null){
        taskobj =[];
    }
    else{
        taskobj=JSON.parse(web)
    }
     let html ="";
     let addedtasklist = document.getElementById("addedtasklist")
     taskobj.forEach((item,index) => {
        html+=`
        <tr>
            <th scope="row">${index+1}</th>
            <td> ${item}</td>
            <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
            <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`
     });
      addedtasklist.innerHTML=html
      let addtaskinput = document.getElementById("addtaskinput");
      addtaskinput.value=""
}

//                                          EDIT TASK
 function edittask(index){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    let saveindex = document.getElementById("saveindex");
    let web = localStorage.getItem("localtask");
    let taskObj = JSON.parse(web)
    saveindex.value=index
    addtaskinput.value=taskObj[index];
    addtaskbtn.style.display="none"
    savetaskbtn.style.display="block"


 }

 //                            AFTER EDIT WE SAVE TASK
 let savetaskbtn= document.getElementById("savetaskbtn");
 savetaskbtn.addEventListener("click",function(){
    let web = localStorage.getItem("localtask");
    let taskObj = JSON.parse(web)
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex]=addtaskinput.value
    localStorage.setItem("localtask" , JSON.stringify(taskObj))
    
    showtask()
    savetaskbtn.style.display="none"
    addtaskbtn.style.display="block"

 })

 //                         DELETE ITEM
 function deleteitem(index){
    let web = localStorage.getItem("localtask");
    let taskObj = JSON.parse(web)
    taskObj.splice(index,1)
    localStorage.setItem("localtask" , JSON.stringify(taskObj))
    showtask()
 }

 //                       DELETE ALL 

//   let deleteallbtn = document.getElementById("deleteallbtn")
//    deleteallbtn.addEventListener("click",function(){
//     let addtaskbtn = document.getElementById("addtaskbtn");
//     let savetaskbtn = document.getElementById("savetaskbtn");
//     let web = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(web)
//     if(web==null){
//         taskobj =[];
//     }
//     else{
//         taskobj=JSON.parse(web);
//         taskobj =[];
//     }
//     savetaskbtn.style.display="none"
//     addtaskbtn.style.display="block"
//     localStorage.setItem("localtask",JSON.stringify(taskObj))
//     showtask()
//   })

  let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

})
