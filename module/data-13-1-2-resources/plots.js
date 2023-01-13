Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotTest", [{x: [20,15,10,5], y: [10,20,30,40]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
 };
 Plotly.newPlot("plotArea", [trace], layout);

 var trace2 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };
 var layout2 = {
    title: "% Orders of Nonalcoholic Beverages",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
 };
 Plotly.newPlot("plotTest", [trace2], layout2);

 var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    name: 'trace1',
    mode: 'markers',
    type: 'scatter'
  };
  
var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    name: 'trace2',
    mode: 'lines',
    type: 'scatter'
};
  
var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    name: 'trace3',
    mode: 'lines+markers',
    type: 'scatter'
};
  
var data = [trace1, trace2, trace3];
  
Plotly.newPlot('plotTest', data);

var numbers = [0,2,4,6,8];
console.log(numbers);
console.log(numbers.map(num=>num+5));

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPop = cities.map(city => city.population);
console.log(cityPop);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words.filter(word => word.startsWith('s')));

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

console.log(words.slice(0,3));