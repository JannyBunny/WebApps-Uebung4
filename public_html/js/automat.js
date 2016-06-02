"use strict";
//Declaration and initialization
console.log("automat.js loaded");
var yMax = 10;
var xMax = 5;
var arr = new Array();

//main
document.write("<pre>");

arrayFill(arr,xMax,yMax);
getLife(arr,xMax,yMax);
arrayOutput(arr);

document.write("</pre>");

//functions

function arrayFill(array,x,y){
	for (var i=0;i<=y;i++) {
		array[i]=new Array();
		for (var j=0;j<=x;j++) {
			array[i][j]=0;
		}
	}
	array[0][0]=1;
	array[0][1]=1;
	array[0][2]=1;
	array[0][3]=0;
	array[0][4]=1;
	array[0][5]=0;

	return array;
}

function getLife(array,x,y){
	var value;
    var temp;
    var counter;
	for(var row = 1; row <=y;row++){
    	for(var col = 0; col <= x ; col++){
        value = 0;
        counter = 0;
        	if(col === 0){
            	value = array[row-1][0]+array[row-1][1]+array[row-1][2]
        	}else if(col === 1){
        		value = array[row-1][0]+array[row-1][1]+array[row-1][2]+array[row-1][3]
        	}else{
        		do {
                	temp = col-2+counter;
                    value += array[row-1][temp];

                    if(temp-1 === x){
                    	counter++;
                    }else if(temp === x){
                    	counter+=2;
                    }
                    counter++;
      			} while (counter < 5);
        	}
        if(value === 2 || value === 4 ){array[row][col] = 1;}
            else {array[row][col] = 0;}
        }
    }
}

function arrayOutput(array){
	for(var y = 0; y<=yMax;y++){
	    for(var x = 0; x<=xMax;x++)
	    {
	        if(array[y][x] === 1){
	            document.write("+");
	        }else{
	            document.write("-");
	        }
	    }
	    document.write("<br>");
	}
}


