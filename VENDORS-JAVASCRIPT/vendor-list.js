// copy in the stuff from post man
//ctrl + h gives us the find and replace
let vendors = [];

const getAllVendors = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:21959/api/vendors", true)
    xhr.onload = () => {
        vendors = xhr.response;
        loaded(vendors);
    }
    xhr.send();
}

// const displayBoolean = (aBoolean) => {
//     return aBoolean ? "Y" : "N"
// }

const loaded = (vendors) => {
    var tbody = document.getElementById("data")
    tbody.innerHTML = "";
    for(let vendor of vendors){
        let tr = "<tr>";
        tr += `<td>${vendor.id}</td>`
        tr += `<td>${vendor.code}</td>`
        tr += `<td>${vendor.name}</td>`
        tr += `<td>${vendor.address}</td>`
        tr += `<td>${vendor.city}</td>`
        tr += `<td>${vendor.state}</td>`
        tr += `<td>${vendor.zip}</td>`
        tr += `<td>${vendor.phone}</td>`
        tr += `<td>${vendor.email}</td>`
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}