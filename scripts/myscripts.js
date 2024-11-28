
function onClick() {
    //but.style.display = "none";
    //document.body.style.background = "pink";
    var colors = document.getElementsByName("color");
    var selected = false;

    for(var color of colors)
    {
     if(color.checked) {
      document.body.style.background = color.value;
      selected = true;
      break;
     }
    }

    if(!selected)
    {
     alert("Please select a color");
    }

}


function goToSite() {
    location.href = document.body.getElementsByTagName("input")[0].value
}