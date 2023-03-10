d3.json("samples.json").then(function(data){
    console.log(data);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
        null);
    console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    subject = Object.entries(data.metadata[0]).forEach(([key, val]) => console.log(key + " : " + val));
});