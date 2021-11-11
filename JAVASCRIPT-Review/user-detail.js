let user = {}

const remove = () =>{
    console.log("Delete user ...")
}

const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json"
    xhr.open("GET", `http://localhost:21959/api/users/${id}`, true)
    xhr.onload = () => {
        user = xhr.response;
        loaded();
    }
    xhr.send();
}

const loaded = () => {
    var url = getUrlId();

    document.getElementById("xid").value = user.id; // value is how you set the input control, innerHTML is for the td tags
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").innerHTML = user.firstname;
    document.getElementById("xlastname").innerHTML = user.lastname;
    document.getElementById("xphone").innerHTML = user.phone;
    document.getElementById("xemail").innerHTML = user.email;
    document.getElementById("xisreviewer").innerHTML = user.isReviewer ? "Yes" : "No";
    document.getElementById("xisadmin").innerHTML = user.isAdmin ? "Yes" : "No";
}