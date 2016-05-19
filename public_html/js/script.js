"use strict";
//1.1
var zahlen=[];
var n=prompt("Wieviele Zahlen im Array?");
var a=prompt("Wo starten?");
var b=prompt("Wo enden?");
function fillarray(a,b,n) {
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("n= "+n);
    
    for (var i=0;i<n;i++) {
        zahlen[i]=Math.floor((Math.random()*b)+a);
        console.log("schleifendurchlauf "+i+" mit dem Wert: "+zahlen[i]);
    }        
        return zahlen;
}
fillarray(a,b,n);


//1.2
function alleAusgeben(zahlen) {
    for (var i=0; i<zahlen.length;i++) {
        if (i%10===0)
            document.write("<br />");
        document.write(zahlen[i]+", ");
    }
}

alleAusgeben(zahlen);


//1.3
function summe(zahlen) {
    var gesamtsumme=0;
    for (var i=0; i< zahlen.length; i++) {
        gesamtsumme+=zahlen[i];
    }
    return gesamtsumme;
}
console.log("gesamtsumme:"+summe(zahlen));
summe(zahlen);

//1.4
function ersetzeZahl(i,n,zahlen) {
    if (i<array.length) {
        zahlen[i]=n;
    }
    else 
        console.log("array out of bounds!!!");
}