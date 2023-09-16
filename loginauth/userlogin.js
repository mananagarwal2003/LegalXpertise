let email = document.body.querySelector("#useremail").value;
let password = document.body.querySelector("#loginpassword").value;
const update = () => {
    email = document.body.querySelector("#useremail").value;
    password = document.body.querySelector("#loginpassword").value;
}
const login= () => {
    console.log("hello")
    user = {
        "email": email,
        "password": password
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }
    let fetchRes = fetch(
        "http://localhost:7000/api/auth/login",
        options);
    let result = fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
            if (d.success) {
                alert("success login")
                localStorage.setItem("authtoken", d.authtoken)
            }
            else {
                alert("invalid credentcal")
            }
        })



}