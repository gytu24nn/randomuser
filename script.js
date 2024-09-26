//Här Skapar jag jag variablerna som jag hämtar i från HTML både div och button.
let btn = document.getElementById("btn");
let userInfo = document.getElementById("userInfo");

//Här deklerar jag och skapar jag elementen för namn, email och foto. 
const userName = document.createElement("h3");
const eMail = document.createElement("h3");
const picture = document.createElement("img");

// Här gör jag en funktion som använder fetch där den hämtar information från ett API som sedan skrivs ut när man trycker på knappen
function getRandomUser() {
    fetch("https://randomuser.me/api/")
    .then(function(response) {
    return response.json();
    })
    .then(function(json) {
        console.log(json);

        let user = json.results[0];
        
        userName.innerText = `För och efternamn: ${user.name.first} ${user.name.last}`;
        eMail.innerHTML = `E-mail: ${user.email}`;
        picture.src = user.picture.large;

        userInfo.appendChild(userName);
        userInfo.appendChild(eMail);
        userInfo.appendChild(picture);
    });
}
//Här trycker jag på knappen i den sen kallar jag på min funktion. 
btn.addEventListener("click", function(){
    getRandomUser();

});
    