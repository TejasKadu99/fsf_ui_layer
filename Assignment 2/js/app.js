const lb_1 = document.getElementById("ul");

function addhobby(){
    let hobbies = document.getElementById("hobby").value;
    let textbox1 = document.createElement("li");
    textbox1.appendChild(document.createTextNode(hobbies));
    lb_1.appendChild(textbox1);
}