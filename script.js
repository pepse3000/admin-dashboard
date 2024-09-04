var coll = document.getElementsByClassName("collapsible");
console.log(coll)
var i;

for (i = 0; i < coll.length; ++i) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var content = coll[1].nextElementSibling;
content.style.maxHeight = content.scrollHeight + "px";
