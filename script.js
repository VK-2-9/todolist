
var studentName= document.getElementById("studentName");
var studentAge= document.getElementById("studentAge");
var course =document.getElementById("course");
var gender =document.getElementById("gender");
var mail= document.getElementById("mail");
var submit =document.getElementById("submit");
var table=document.getElementById("table");
var remove=document.getElementById("remove");
var edit=document.getElementById("edit");



submit.addEventListener("click",function(){
    event.preventDefault()
    var newList= document.createElement("tr");
    newList.innerHTML=
   `<td>${studentName.value}</td>
    <td>${studentAge.value}</td>
    <td>${gender.value}</td> 
    <td>${course.value}</td> 
    <td>${mail.value}</td>
    <td>
    <button id="edit" onclick="editList(event)" class=" bg-green-500  rounded-2xl btn ">Edit</button>
    <button id="remove" onclick="removeList(event)" class=" bg-red-500   rounded-2xl btn ">Delete</button>
    </td>`;
    alert("Data has been submitted")
    table.append(newList);
})



function removeList(event){
var list=event.target.closest("tr")
list.remove()

}

function editList(event){
    var row= event.target.closest("tr");
    var cells=row.querySelectorAll("td");
    studentName.value=cells[0].innerHTML;
    studentAge.value=cells[1].innerHTML;
    gender.value=cells[2].innerHTML;
    course.value=cells[3].innerHTML;
    mail.value=cells[4].innerHTML;
    row.remove();
}






