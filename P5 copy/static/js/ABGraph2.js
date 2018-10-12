var lsz = 9;

var Year = Array([lsz]);
var California = Array([lsz]);
var UnitedStates = Array([lsz]);

Year[0] = "2007";
California[0] = "0.8";
UnitedStates[0] = "0";

Year[1] = "2008";
California[1] = "0.8";
UnitedStates[1] = "0";

Year[2] = "2009";
California[2] = "0.9";
UnitedStates[2] = "0.1";

Year[3] = "2010";
California[3] = "0.9";
UnitedStates[3] = "0.7";

Year[4] = "2011";
California[4] = "2.6";
UnitedStates[4] = "1.7";

Year[5] = "2012";
California[5] = "4.6";
UnitedStates[5] = "3.5";

Year[6] = "2013";
California[6] = "7.7";
UnitedStates[6] = "5.1";

Year[7] = "2014";
California[7] = "12.9";
UnitedStates[7] = "5.4";

Year[8] = "2015";
California[8] = "13.0";
UnitedStates[8] = "7.9";


var California = {
 title: 'California vs. United States',
 x: Year,
 y: California,
 name: 'California',
 type: 'bar'
};

var UStates = {
 x: Year,
 y: UnitedStates,
 name: 'Rest of United States',
 type: 'bar'
};


var data = [California, UStates];
var layout = {
 title: 'Population Under Plastic Bag Bans and Charges in the United States, 2007-2015                    ',
 barmode: 'stack'};

Plotly.plot('plot2', data, layout);