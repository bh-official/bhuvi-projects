console.log("Hello");

const form = document.querySelector("form");
const output=document.getElementById("output");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);

    const formData = new FormData(form);
    //returns empty form
    // console.log(formData);

    // Manual way to return the data in the name
    // console.dir(event.target[0].value)

    // Manual way to retun password
    // console.log(event.target.passWORD.value)

    const userData = Object.fromEntries(formData)

    // show data on page
    output.innerHTML =`<p><strong>User Name:</strong>${userData.userName}</p> <p><strong>City:</strong>${userData.City}</p> <p><strong>Hobby:</strong>${userData.Hobby}</p><p><strong>Email:</strong>${userData.userEmail}</p>`;

    console.log(userData);

    // Clear the form
    form.reset();
});

form.addEventListener(`submit`)