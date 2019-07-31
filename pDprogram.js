function myFunction() {
    //writing
    document.getElementById("header").style.color = "rgba(0,0,0,0.4)";

    //sun
    document.getElementById("sunray2").style.bottom = "300px";

    //tree    
    document.getElementById("treeshadow").style.backgroundColor = "rgb(140, 187, 47)";
    document.getElementById("treeleaves").style.backgroundColor ="rgb(3, 209, 3)";
    document.getElementById("treetrunk").style.backgroundColor ="rgb(155, 127, 68)";

    //ground
    document.getElementById("ground1").style.backgroundColor = "greenyellow";
    document.getElementById("ground2").style.backgroundColor = "greenyellow";

    //sky
    document.body.style.backgroundColor ="rgb(210, 235, 255)";

    //navbar    
    var nav = document.getElementById("navbar");
    var links = nav.getElementsByTagName("a")
    for (i=0;i<links.length;i++) {
      links[i].style.right = "233px";
    }
  }