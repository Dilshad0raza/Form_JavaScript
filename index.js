let selectedRow=null;

const form=document.getElementById("form");
const formvalue=document.getElementsByClassName("inp");

form.addEventListener("submit",collectData);
function collectData(e){
  e.preventDefault();
   const formdata=readFormdata();
   console.log(formdata);
      if(selectedRow == null){
         InsertRecord(formdata);
      }
      else{
          UpdatedRecord(formdata)
      }
      resetData();
   }


//Retreive data from database

function readFormdata(){
   let formdata={};
   formdata["StudentN"]=formvalue[0].value;
   formdata["StudentI"]=formvalue[1].value;
   formdata["Class"]=formvalue[2].value;
   formdata["RollNumber"]=formvalue[3].value;
   return formdata;
}

//Insert data 

function InsertRecord(data){
   console.log("there is error")
   
   let table=document.getElementById('tbody');
    console.log("there is second error")
   let newRow=table.insertRow(table.length);
    const cell1=newRow.insertCell(0)
       cell1.innerHTML=data.StudentN;
       const cell2=newRow.insertCell(1);
       cell2.innerHTML=data.StudentI;
       const cell3=newRow.insertCell(2);
       cell3.innerHTML=data.Class;
       const cell4=newRow.insertCell(3);
       cell4.innerHTML=data.RollNumber;
       const cell5=newRow.insertCell(4);
       cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`
}
//edit details

function onEdit(td){
   selectedRow=td.parentElement.parentElement;
   formvalue[0].value=selectedRow.cells[0].innerHTML;
   formvalue[1].value=selectedRow.cells[1].innerHTML;
   formvalue[2].value=selectedRow.cells[2].innerHTML;
   formvalue[3].value=selectedRow.cells[3].innerHTML;
}

function UpdatedRecord(formdata){
   selectedRow.cells[0].innerHTML = formdata.StudentN;
   selectedRow.cells[1].innerHTML = formdata.StudentI;
   selectedRow.cells[2].innerHTML = formdata.Class;
   selectedRow.cells[3].innerHTML = formdata.RollNumber;
}


//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
        resetForm();
    }
}

// Reset data

function resetData(){
   for(let i=0;i<formvalue.length;i++){
      formvalue[i].value="";
   }
   selectedRow=null;
}
