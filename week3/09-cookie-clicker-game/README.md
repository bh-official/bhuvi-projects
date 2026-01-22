# 🍪 Cookie Clicker Game

A fun incremental / idle game built using **HTML, CSS, and JavaScript**.  
Click the cookie to earn cookies, buy upgrades to increase your production, and customize your experience using the settings menu.

This project was built as part of a JavaScript assignment to practice:

- DOM manipulation  
- Event handling  
- Fetching data from APIs  
- Local Storage  
- Timers (`setInterval`)  
- UI/UX improvements  

---

## 🚀 Live Demo

👉 Play here:  
https://bh-official.github.io/bhuvi-projects/week3/09-cookie-clicker-game/

👉 GitHub Repo:  
https://github.com/bh-official/bhuvi-projects/tree/main/week3/09-cookie-clicker-game

---

## 🎮 How to Play

- Click the 🍪 cookie to earn cookies.
- Cookies increase automatically every second based on your **CPS (Cookies Per Second)**.
- Go to the 🛒 Shop and buy upgrades to increase CPS.
- Use ⚙️ Settings to:
  - Enable / disable sound
  - Toggle dark mode
- Your progress is **automatically saved** and restored when you reload the page.

---

## ✨ Features

- Clickable cookie with press animation
- Floating text animations when clicking and buying upgrades
- Automatic cookie generation every second
- Shop system built dynamically from API data
- Upgrade purchasing system that increases CPS
- Persistent save using Local Storage (cookies, CPS, settings)
- Settings menu:
  - Sound ON/OFF
  - Dark mode ON/OFF
- Sound effects for clicking and buying upgrades
- Dark mode UI
- Error handling for API failures using try/catch

---

## 🛠️ Technologies Used

- HTML  
- CSS (Flexbox + Grid)  
- JavaScript  
- Fetch API  
- Local Storage  
- setInterval  

---

## 📦 API Used

Upgrade data is fetched from: https://cookie-upgrade-api.vercel.app/api/upgrades


---

## 🧠 Reflection

### 🎯 What requirements did you achieve?

- Fetched upgrade data from an API and generated the shop dynamically
- Implemented a shop system with upgrades that affect CPS
- Used event listeners for all user interactions (cookie click, buy buttons, settings toggles)
- Used Local Storage to save and restore:
  - Cookie count
  - CPS
  - Sound setting
  - Dark mode setting
- Used setInterval to update the game every second
- Used functions to keep the code organised and reusable
- Added animations, sound effects, dark mode, and a settings menu
- Added error handling using try/catch for API requests

---

### ❓ Were there any requirements or goals that were difficult?

- Understanding how to structure the game logic and game loop
- Managing UI updates and game state together
- Positioning floating animations correctly on the screen
- Connecting the settings menu to real game behaviour (sound and theme)

---

### 🧩 What errors or bugs did you encounter?

- Floating text appearing in the wrong position
- Layout overflow and scrolling issues
- Dark mode styling problems for the settings panel
- Error messages affecting the shop layout

These were solved by:

- Using `getBoundingClientRect()` and mouse coordinates for correct positioning
- Improving layout structure using Flexbox and Grid
- Adding proper dark mode styles
- Moving error messages to a dedicated message area in the UI

---

### 🌟 What went well?

- The shop system works dynamically using API data
- The game saves and restores progress correctly
- The UI feels interactive and game-like with animations and sounds
- The settings system makes the game feel more professional and complete

---

### 📚 What external sources helped you?

- MDN Web Docs  
- JavaScript tutorials  
- CSS Flexbox and Grid guides  
- Cookie Upgrade API documentation  

---

## 📸 Screenshot


```md
![Game Screenshot](screenshot.png)


