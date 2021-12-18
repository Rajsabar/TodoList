// let addbtn=document.getElementById("submit");
// let tocontainer=document.getElementById("todocontainer");
// let inputfield=document.getElementById('inputarea');

// addbtn.addEventListener('click',function(){
//     var paragraph=document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText=inputfield.value;
//     tocontainer.appendChild(paragraph);


//     var myDiv = document.getElementById("todocontainer");
//     var button=document.createElement('BUTTON');
//     button.classList.add('edit');
//     button.innerHTML="Edit";
//     myDiv.appendChild(button);


//     var myDiv1 = document.getElementById("todocontainer");
//     var button1=document.createElement('BUTTON');
//     button1.classList.add('remove');
//     button1.innerHTML="Remove";
//     myDiv1.appendChild(button1);

//     inputfield.value="";
// })


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var bt=document.createElement("border-bottom");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
//   li.add(bt);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}