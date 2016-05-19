"use strict";
//1.1
var zahlen=[];
var n=+prompt("Wieviele Zahlen im Array?");
var a=+prompt("Wo starten?");
var b=+prompt("Wo enden?");
function fillarray() {
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("n= "+n);
    
    for (var i=0;i<n;i++) {
        zahlen[i]=Math.floor((Math.random()*(b-a))+a);
        console.log("schleifendurchlauf "+i+" mit dem Wert: "+zahlen[i]);
    }        
        return zahlen;
}
fillarray();


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
    if (i<zahlen.length) {
        zahlen[i]=n;
    }
    else 
        console.log("array out of bounds!!!");
}
function groessteZahl(zahlen) {
    var i=zahlen;
    var groesste = i.sort(function(a,b){return b-a});
    return groesste[0];
}

groessteZahl(zahlen);
console.log(groessteZahl(zahlen));