"use strict";
//1.1
var zahlen=[];
var n=prompt("Wieviele Zahlen im Array?");
var a=prompt("Wo starten?");
var b=prompt("Wo enden?");
function fillarray(a,b,n) {
    for (var i=0;i<n;i++) {
        zahlen[i]=Math.floor(Math.random()*b+a);
        console.log(zahlen[i]);
    }        
        return zahlen;
}
fillarray(a,b,n);


//1.2
