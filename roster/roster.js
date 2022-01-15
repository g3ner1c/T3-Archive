import data from "./roster.json" assert { type: "json" };

// document.getElementById("content").innerText = JSON.stringify(data);

console.log(data);

var html = "";

for (var player of data) {

    html += `<tr> <td> <a href="${player["RGL"]}" target="_blank">${player["name"]}</a> </td>`;

    for (var role of Object.keys(player["roles"])) {

        switch (player["roles"][role]) {

            case "main":

                html += '<td bgcolor="#008c3a">&#8203</td>';
                break;

            case "sub":

                html += '<td bgcolor="#c27b00">&#8203</td>';
                break;
            
            case "altmain":

                html += '<td bgcolor="#94c699">&#8203</td>';
                break;

            case "altsub":

                html += '<td bgcolor="#e9bb88">&#8203</td>';
                break;

            default:

                html += '<td>&#8203</td>';

        }

    }
    
    

    html += '</tr>';

}

document.getElementById("rosterBody").innerHTML = html;