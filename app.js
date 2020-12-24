function newItem() {
  console.log("Inside newItem");
  var item = document.getElementById("input").value;
  console.log(item);

  // store the unordered list as a variable (we refer to it as "ul")
  var ul = document.getElementById("list");

  // creating a list item tag
  var li = document.createElement("li");

  // now put text in list item
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  document.getElementById("input").value = "";

  li.onclick = removeItem; // run removeItem when the li is clicked
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    console.log("enter clicked!");
    newItem();
  }
};

function removeItem(e) {
  e.target.remove()
}

