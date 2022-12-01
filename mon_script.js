
// close and open navbar mobile version

function mobileNav() { 

    var x = document.getElementById("myLinks");

    if (x.style.display === "block") { //if display block = true 
      x.style.display = "none"; //show nothing

    } else {
      x.style.display = "block";// show navbar in a block format
    }

}    
