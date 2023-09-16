let username=document.body.querySelector("#username").value;
let state=document.body.querySelector("#state").value;
let pincode=document.body.querySelector("#pincode").value;
let email=document.body.querySelector("#email").value;
let password=document.body.querySelector("#password").value;
const update = () => {
    username = document.body.querySelector("#username").value;
    state = document.body.querySelector("#state").value;
    pincode = document.body.querySelector("#pincode").value;
    email = document.body.querySelector("#email").value;
    password = document.body.querySelector("#password").value;
}
const createnewaccount = () => {
    console.log("hello")
    user = {
        "name":username,
        "email":email,
        "state":state,
        "pincode":pincode,
        "password":password
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
        "http://localhost:7000/api/auth/createuser",
        options);
    let result=fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
            if(d.success){
                alert("success fully created")
                localStorage.setItem("authtoken",d.authtoken)
            }
            else{
                alert("invalid credentcal")
            }
        })
        
        

}