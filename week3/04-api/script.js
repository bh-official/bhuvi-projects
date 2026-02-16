console.log("Hello world")
const image=document.getElementById("1");
const image2=document.getElementById("2");


async function fetchData(){
    const response=await fetch("https://randomfox.ca/floof/");
    console.log(response);
    const data= await response.json();
    console.log(data);
    
    image.src=data.image
}

fetchData();

async function getData(){
    const response1=await fetch("https://api.github.com/repos/bh-official/bhuvi-projects");
    console.log(response1);
    const data1=await response1.json();
    console.log(data1);

   
    const count=data1.stargazers_count;
    console.log(count);
    const p=document.createElement("p");
    p.textContent= "Stars: " + count;
    document.body.append(p);


    const count2=data1.forks_count;
    console.log(count2);
    const fork=document.createElement("p");
    fork.textContent= "Fork: "+count2;
    document.body.append(fork);
    

}

getData();

async function showRepo(repoName){
    const response2=await fetch(`https://api.github.com/repos/bh-official/${repoName}`);
    const data2=await response2.json();
    const div=document.createElement("div");

        div.innerHTML= `<h3>${data2.name}</h3> <p> Stars: ${data2.stargazers_count} </p> <p> Forks: ${data2.forks_count}</p>`;
        document.body.append(div);
}

showRepo("bhuvi-projects");
showRepo("bh-official");