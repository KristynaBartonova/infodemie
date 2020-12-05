fetch("https://api.apispreadsheets.com/data/4630/", {
    method: "POST",
    body: JSON.stringify({ "data": { "email": "", "firstName": "", "lastName": "" } }),
}).then(res => {
    if (res.status === 201) {
        console.log("Success");
    } else {
        console.log("Error");
    }
})