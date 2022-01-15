import data from "./scrims.json" assert { type: "json" };

// document.getElementById("content").innerText = JSON.stringify(data);

console.log(data);

var html = "";

for (var date of data) {

    html += `<h2>${date["date"]}</h3>`;

    for (var map of date["matches"]) {

        html += `<h4>${map["map"]}</h4>`;

        for (var log in map["logs"]) {

            html += `<h5><a href="https://logs.tf/${map["logs"][log]}" target="_blank">Logs</a>&nbsp;&nbsp;&nbsp;&nbsp;`;

            html += `<a href="https://demos.tf/${map["demos"][log]}" target="_blank">Demos</a></h5>`;

        }

    }

}

document.getElementById("scrims").innerHTML = html;