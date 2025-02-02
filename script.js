// Predefined Traffic Jam Data with Timestamps
let trafficAlerts = [
    { location: "Kollam", message: "Heavy traffic due to roadwork 🚧", timestamp: new Date() },
    { location: "Mumbai", message: "Rush hour congestion 🚗", timestamp: new Date() },
    { location: "Delhi", message: "Accident reported, expect delays ⚠️", timestamp: new Date() }
];

function searchJam() {
    let searchLocation = document.getElementById("search-location").value.toLowerCase();
    let results = trafficAlerts.filter(alert => alert.location.toLowerCase().includes(searchLocation));

    let resultList = document.getElementById("search-results");
    resultList.innerHTML = "";

    if (results.length > 0) {
        results.forEach((alert, index) => {
            let formattedTime = alert.timestamp.toLocaleString();
            let li = document.createElement("li");
            li.innerHTML = `
                ${alert.location}: ${alert.message} <br> <small>Reported at: ${formattedTime}</small> 
                <button onclick="reportFakeAlert(${index})">Report Fake</button>
            `;
            resultList.appendChild(li);
        });
    } else {
        resultList.innerHTML = "<li>No jams found in this location.</li>";
    }
}

function reportFakeAlert(index) {
    let fakeAlert = trafficAlerts[index].location;
    alert(`Fake alert reported for: ${fakeAlert}`);
    trafficAlerts.splice(index, 1);
    searchJam();
}
