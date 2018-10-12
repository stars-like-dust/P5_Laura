var lsz = 27;

var Year = Array([lsz]);
var Generation = Array([lsz]);
var Recovery = Array([lsz]);
var Discards = Array([lsz]);

Year[3] = "1990";
Generation[3] = "34";
Recovery[3] = "1";
Discards[3] = "34";

Year[4] = "1991";
Generation[4] = "35";
Recovery[4] = "1";
Discards[4] = "35";

Year[5] = "1992";
Generation[5] = "37";
Recovery[5] = "1";
Discards[5] = "36";

Year[6] = "1993";
Generation[6] = "38";
Recovery[6] = "1";
Discards[6] = "37";

Year[7] = "1994";
Generation[7] = "39";
Recovery[7] = "2";
Discards[7] = "37";

Year[8] = "1995";
Generation[8] = "38";
Recovery[8] = "2";
Discards[8] = "36";

Year[9] = "1996";
Generation[9] = "40";
Recovery[9] = "2";
Discards[9] = "37";

Year[10] = "1997";
Generation[10] = "43";
Recovery[10] = "2";
Discards[10] = "41";

Year[11] = "1998";
Generation[11] = "45";
Recovery[11] = "2";
Discards[11] = "42";

Year[12] = "1999";
Generation[12] = "48";
Recovery[12] = "3";
Discards[12] = "46";

Year[13] = "2000";
Generation[13] = "51";
Recovery[13] = "3";
Discards[13] = "48";

Year[14] = "2001";
Generation[14] = "52";
Recovery[14] = "3";
Discards[14] = "49";

Year[15] = "2002";
Generation[15] = "55";
Recovery[15] = "3";
Discards[15] = "52";

Year[16] = "2003";
Generation[16] = "56";
Recovery[16] = "3";
Discards[16] = "53";

Year[17] = "2004";
Generation[17] = "59";
Recovery[17] = "3";
Discards[17] = "56";

Year[18] = "2005";
Generation[18] = "59";
Recovery[18] = "4";
Discards[18] = "55";

Year[19] = "2006";
Generation[19] = "60";
Recovery[19] = "4";
Discards[19] = "56";

Year[20] = "2007";
Generation[20] = "62";
Recovery[20] = "4";
Discards[20] = "58";

Year[21] = "2008";
Generation[21] = "61";
Recovery[21] = "4";
Discards[21] = "56";

Year[22] = "2009";
Generation[22] = "60";
Recovery[22] = "4";
Discards[22] = "56";

Year[23] = "2010";
Generation[23] = "63";
Recovery[23] = "5";
Discards[23] = "58";

Year[24] = "2011";
Generation[24] = "64";
Recovery[24] = "5";
Discards[24] = "58";

Year[25] = "2012";
Generation[25] = "64";
Recovery[25] = "6";
Discards[25] = "58";


//Generation trace
var traceGeneration = {
 x: Year,
 y: Generation,
 type: "line",
 name: "Generated Plastics",
 marker: {
   color:'#4d88ff'
 }
};
//IN BILLIONS OF POUNDS

//Discard trace
var traceDiscards = {
 x: Year,
 y: Discards,
 type: "line",
 name: "Discarded Plastics",
 marker: {
   color:'#4dd2ff'
 }
};

//Recovery trace
var traceRecovery = {
 x: Year,
 y: Recovery,
 type: "line",
 name: "Recovered Plastics",
 marker: {
   color:'#ff4d4d'
 }
};


var data = [traceGeneration, traceDiscards, traceRecovery];


Plotly.newPlot("plot", data);