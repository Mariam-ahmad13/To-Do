
var input  = document.getElementById('to-do')
var list = document.getElementById('list')
function addItem(li){
   var li = document.createElement('li');
   var liText = document.createTextNode(input.value);
   li.appendChild(liText);
   


   var delbutton = document.createElement('button');
   var delText = document.createTextNode('Delete');
   delbutton.appendChild(delText);
   li.appendChild(delbutton)
   delbutton.setAttribute('Class', 'btn')
   delbutton.setAttribute('onclick', 'deletebtn(this)')

   var editbutton = document.createElement('button');
   var editText = document.createTextNode('Edit');
   editbutton.appendChild(editText);
   li.appendChild(editbutton);
    editbutton.setAttribute('Class', 'btn')
editbutton.setAttribute('onclick', 'editItem(this)')

   var doneButton = document.createElement('button');
   var doneText = document.createTextNode('Mark as done');
   doneButton.appendChild(doneText);
   li.appendChild(doneButton);
  doneButton.setAttribute('Class', 'btn')
  doneButton.setAttribute('onclick', 'donebtn(this)')
   li.setAttribute("class", "list-group-item")
   list.appendChild(li) ;
    input.value = ' '
}

function deleteAll(){
list.innerText = "";
}


function deletebtn(e){
    e.parentNode.remove()

}

function donebtn(e){
    var li =  e.parentNode;
    li.setAttribute('Id', 'edit')
}

function editItem(e){
    var editText = prompt("What do you want the new value to be.")
    if(editText === " "){
        e.parentNode.firstChild
    }
    e.parentNode.firstChild.nodeValue = editText;
    
}