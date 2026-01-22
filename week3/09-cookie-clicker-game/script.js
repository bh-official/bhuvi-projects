let cookieCount=0;
let cps=1;

let savedCps=localStorage.getItem("cps");
let savedCookies=localStorage.getItem("cookieCount");
if(savedCookies!==null)
    cookieCount=Number(savedCookies);

if(savedCps!==null)
    cps=Number(savedCps);

const cookieCountDisplay=document.getElementById("cookieCount");
const cpsDisplay=document.getElementById("cps");
const image=document.querySelector("img");
const shop=document.getElementById("shop");
const message = document.getElementById("message");
const openSettings = document.getElementById("openSettings");
const closeSettings = document.getElementById("closeSettings");
const settingsPanel = document.getElementById("settingsPanel");
const soundToggle = document.getElementById("soundToggle");
const darkModeToggle = document.getElementById("darkModeToggle");
const clickSound = new Audio("./audio/click.wav")
const buySound = new Audio("./audio/buy.wav");

// open close menus
openSettings.addEventListener("click", () => {
    settingsPanel.classList.remove("hidden");
});

closeSettings.addEventListener("click", () => {
    settingsPanel.classList.add("hidden");
});

// saving the settings in local storage 

soundToggle.addEventListener("change", () => {
    localStorage.setItem("soundEnabled", soundToggle.checked);
});

darkModeToggle.addEventListener("change", () => {
    localStorage.setItem("darkMode", darkModeToggle.checked);
    applyTheme();
});

// applying theme

function applyTheme() {
    const darkMode = localStorage.getItem("darkMode") === "true";

     if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// sound settings
function playClickSound() {
    const soundEnabled = localStorage.getItem("soundEnabled") === "true";
    if (!soundEnabled) return;

    clickSound.play();
}



cookieCountDisplay.innerText=cookieCount;

image.addEventListener("click", function(e){
    cookieCount++;
    cookieCountDisplay.innerText=cookieCount;
    console.log(cookieCount);
    
    showFloatingText("+1", e.clientX, e.clientY);

    playSound(clickSound);
});

setInterval(function(){
    cookieCount=cookieCount+cps;
    cookieCountDisplay.innerText=cookieCount;
    cpsDisplay.innerText=cps;
    localStorage.setItem("cookieCount", cookieCount);
    localStorage.setItem("cps",cps);
},1000)

function buyUpgrade(upgrade, event){
    if(cookieCount>=upgrade.cost){
        cookieCount=cookieCount-upgrade.cost;
        cps=cps+upgrade.increase;

        cookieCountDisplay.innerText=cookieCount;
        cpsDisplay.innerText=cps;
        
        // floating text positioning 
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top;

        showFloatingText("+" + upgrade.increase + " CPS", x, y);
        // if the floating text pops out play the buy sound
        playSound(buySound);

    }
    else{
        message.textContent = "❌ Not enough cookies!";
        setTimeout(() => {
        message.textContent = "";
        }, 1500);
    }
}

async function fetchData(){
    try { //stretch goal
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data=await response.json()
    console.log(data)

    data.forEach(function (upgrade){
        const upgradeDiv=document.createElement("div");

        const name=document.createElement("p");
        name.textContent=upgrade.name;
        name.classList.add("upgrade-name");

        const cost=document.createElement("p");
        cost.textContent="Cost: "+ upgrade.cost;

        const increase=document.createElement("p");
        increase.textContent=`Increase: ${upgrade.increase} CPS`;
        
        const button=document.createElement("button");
        button.textContent= "Buy";

        button.addEventListener("click", function(e){
            buyUpgrade(upgrade, e);
        });

        upgradeDiv.appendChild(name);
        upgradeDiv.appendChild(cost);
        upgradeDiv.appendChild(increase);
        upgradeDiv.appendChild(button);

        shop.appendChild(upgradeDiv);
    });

} catch (error) { // try/catch stretch goal
    console.error("Failed to load upgrades:", error);
    message.textContent = "❌ Failed to load shop. Please refresh the page.";
  }
}

fetchData()

// floating text for stretch goals
function showFloatingText(text, x, y) {
    const floating = document.createElement("div");
    floating.textContent = text;
    floating.classList.add("floating-text");

    floating.style.left = x + "px";
    floating.style.top = y + "px";

    document.body.appendChild(floating);

    setTimeout(() => {
        floating.remove();
    }, 1000);
}

// function to play audio from the settings
function playSound(sound) {
    const soundEnabled = localStorage.getItem("soundEnabled") === "true";
    if (!soundEnabled) return;

    sound.currentTime = 0; // rewind so it can play again quickly
    sound.play();
}


// Load setting on startup
function loadSettings() {
    const sound = localStorage.getItem("soundEnabled") === "true";
    const dark = localStorage.getItem("darkMode") === "true";

    soundToggle.checked = sound;
    darkModeToggle.checked = dark;

    applyTheme();
}

loadSettings();
