function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            myFunction(this);
        }
    };
    xhttp.open("GET", "../../xml/item/items.xml", true);
    xhttp.send();
}

function myFunction(xml){
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>name</th><th>preis</th></tr>";
    var x = xmlDoc.getElementsByTagName("id");
    for(i=0; i<x.length; i++){
        table += "<tr><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("preis")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("itemList").innerHTML = table;
}