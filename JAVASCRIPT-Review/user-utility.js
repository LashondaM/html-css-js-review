// http://localhost:21959/user-detail.html?id=1
// grabs the URL as a string, then it splits into an array
const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    //console.log(parts)
    let kvpair = parts[1].split("=")
    //console.log(url);
    return +kvpair[1];
}


const displayBoolean = (aBoolean) => {
    return aBoolean ? "YES" : "NO"
}