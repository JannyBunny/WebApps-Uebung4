"use strict";
//1.1

var anzahl=+prompt("Wieviele Zahlen im Array?");
var start=+prompt("Wo starten?");
var ziel=+prompt("Wo enden?");
function fillarray(a,b,n) {
    var zahlen=[];  
    console.log("a= "+a);
    console.log("b= "+b);
    console.log("n= "+n);
    
    for (var i=0;i<n;i++) {
        zahlen[i]=Math.floor((Math.random()*(b-a))+a);
        console.log("schleifendurchlauf "+i+" mit dem Wert: "+zahlen[i]);
    }        
        return zahlen;
}
fillarray(start,ziel,anzahl);


//1.2
function alleAusgeben(zahlen) {
    for (var i=0; i<zahlen.length;i++) {
        if (i%10===0)
            document.write("<br />");
        document.write(zahlen[i]+", ");
    }
}

alleAusgeben(fillarray(start,ziel,anzahl));


//1.3
function summe(zahlen) {
    var gesamtsumme=0;
    for (var i=0; i< zahlen.length; i++) {
        gesamtsumme+=zahlen[i];
    }
    return gesamtsumme;
}
console.log("gesamtsumme:"+summe(fillarray(start,ziel,anzahl)));
summe(fillarray(start,ziel,anzahl));

//1.4

var index = prompt("Index");
var ersatz = prompt("Zu ersetzende Zahl");
function ersetzeZahl(i,n,zahlen) {
    if (i<zahlen.length) {
        zahlen[i]=n;
    }
    else 
        console.log("array out of bounds!!!");
}
ersetzeZahl(index,ersatz,fillarray(start,ziel,anzahl));

//1.5
function groessteZahl(zahlen) {
    var i=zahlen;
    var groesste = i.sort(function(a,b){return b-a});
    return groesste[0];
}

groessteZahl(fillarray(start,ziel,anzahl));
console.log(groessteZahl(fillarray(start,ziel,anzahl)));

//1.6

function dayarray() {
    var dayray = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var datum=new Date();
    var dow=datum.getDay();
    return dayray[dow];
}
console.log(dayarray());
//1.7
function dimX() {
    var dim2 = [[],[]];
    return dim2;
}

console.log(dimX());