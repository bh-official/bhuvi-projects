# 🍪 Cookie Clicker Game

A fully interactive incremental / idle game built using **HTML, CSS, and JavaScript**.  
The player clicks the cookie to earn cookies, buys upgrades from a dynamic shop to increase CPS (Cookies Per Second), and customizes the game using a settings menu. The game automatically saves progress and restores it when the page is reloaded.

This project was built as part of a JavaScript assignment to practice **real-world JavaScript concepts** such as DOM manipulation, event handling, fetching data from APIs, timers, and local storage.

---

## 🚀 Live Demo

🔗 Live site:  
https://bh-official.github.io/bhuvi-projects/week3/09-cookie-clicker-game/

🔗 GitHub repository:  
https://github.com/bh-official/bhuvi-projects/tree/main/week3/09-cookie-clicker-game

---

## 🎮 How the Game Works

- Clicking the main 🍪 cookie increases the cookie count.
- Every second, cookies automatically increase based on **CPS (Cookies Per Second)** using `setInterval`.
- The shop is loaded dynamically from an external API.
- Each upgrade increases CPS and costs cookies.
- When the player buys an upgrade:
  - Cookies are deducted
  - CPS is increased
  - A floating animation appears
  - A sound plays (if enabled)
- The game progress (cookies, CPS, settings) is saved in **Local Storage** and restored on reload.
- A ⚙️ Settings menu allows:
  - Enabling/disabling sound
  - Toggling dark mode
  - Pausing / resuming the game
  - Resetting the game
  
---

## ✨ Features

- Clickable cookie with animation
- Automatic cookie generation using `setInterval`
- Dynamic shop built from API data
- Upgrade purchasing system
- Disabled buy buttons if not affordable
- Floating text animations
- Sound effects
- Dark mode
- Settings menu
- Pause / Resume system
- Reset game system
- Local storage save system
- Error handling using `try/catch`
- Responsive layout using Flexbox & Grid

---

## 🧰 Built-in JavaScript Learnt from this project

- getBoundingClientRect() — to calculate exact screen positions for floating text animations.
- Audio() — to create and play sound effects.
- play() — to play sound effects when clicking or buying upgrades.
- Number() — to convert stored string values into numbers.
- confirm() — to show a confirmation dialog before resetting the game.
- location.reload() — to reload the page after resetting the game.
- Error() — to create a custom error object when something goes wrong (e.g., API failure).
- throw — to manually stop execution and trigger error handling.
- try / catch — to safely handle errors like failed network requests without crashing the app.
- console.error() — to log error messages in the browser console for debugging.
- remove() — to remove a DOM element from the page (used for deleting floating text after animation).
- classList.add() — to add CSS classes dynamically (used for dark mode and opening panels).
- e.clientX, e.clientY — to get the mouse click position on the screen (used to position floating text).

---

## 🛠️ Technologies Used

- HTML  
- CSS (Flexbox, Grid, Animations, Dark Mode)  
- JavaScript  
- DOM Manipulation  
- Event Listeners  
- Fetch API  
- Async / Await  
- Local Storage  
- setInterval  
- try / catch error handling  
- getBoundingClientRect for animation positioning  
- Dynamic element creation using `document.createElement()` 

---

## 📦 API Used

Upgrade data is fetched from: https://cookie-upgrade-api.vercel.app/api/upgrades

The shop UI is generated dynamically from the API response.

---

## 🧠 Code Structure & Design

- The game state is stored in variables: `cookieCount` and `cps`
- The game updates every second using `setInterval`
- All upgrades are handled by a **single reusable function**
- The shop UI is created dynamically from fetched data
- Floating text animations are positioned using `getBoundingClientRect()`
- Settings are saved and restored using `localStorage`
- UI state is kept in sync using updateShopButtons()

---

## ⚠️ Error Handling

- The shop fetch request is wrapped in a `try/catch`
- If the API fails, an error message is shown to the user
- If the player tries to buy an upgrade without enough cookies, a warning message appears
- The game does not crash if something goes wrong

---

## 🧩 Challenges Faced and How I Overcame Them

This project was much more difficult than it looked at the beginning. Even though the game seems simple, building it using JavaScript involved many different concepts working together.

### 1. Understanding How to Structure the Game Logic

At first, I did not know how to even start. I knew I needed a cookie that increases a number, but I could not imagine how to structure the full game. I did not know where to put the logic for CPS, upgrades, auto-increment, and saving data.

I solved this by:
- Breaking the project into very small steps (first only clicking, then auto-increment, then shop, then settings).
- Building features one by one.
- Writing separate functions for each feature.
- Slowly connecting everything together instead of trying to build everything at once.

---

### 2. Managing Cookie Count and CPS Together

At first I mixed up:
- Clicking logic
- Automatic CPS logic

I fixed this by:
- Using two separate variables: `cookieCount` and `cps`
- Using `setInterval` only for automatic increase

---

### 3. Saving and Restoring Game State Using Local Storage

Using `localStorage` was confusing at the beginning. I did not understand:
- When to save
- When to load
- Why my values were sometimes resetting

I overcame this by:
- Saving `cookieCount` and `cps` inside `setInterval`
- Loading them once when the page loads
- Converting strings back to numbers using `Number()`

---

### 4. Fetching Data from the API and Building the Shop

This was one of the hardest parts. 

I Learned:
- How `fetch`, `async`, and `await` work
- How to loop through API data
- How to dynamically create UI elements using JavaScript

---

### 5. Positioning Floating Text Animations Correctly

At first, the floating “+CPS” text was appearing in random places on the screen.

I learned that:
- Mouse position and button position are different
- I needed to use `getBoundingClientRect()` to get the exact position of the clicked button

After using this, the animation started appearing in the correct place.

---

### 6. Handling Errors Without Breaking the Layout

When the API failed, my messages were breaking the layout.

I fixed this by:
- Creating a dedicated `<p id="message">` area in the UI
- Showing all warnings and errors only inside that area
- Using `try/catch` for the API request

---

### 7. Preventing Users from Buying Unaffordable Items

At first, users could click buy even without enough cookies.

I fixed this by:
- Disabling buttons dynamically using `updateShopButtons()`

---

### 8. Implementing Settings (Sound, Dark Mode, Pause, Reset)

This part was confusing because:
- The settings had to persist after reload
- The UI had to change based on saved settings
- Sounds should only play if enabled
- Dame must stop when paused

I solved this by:
- Saving settings in `localStorage`
- Creating `loadSettings()` and `applyTheme()` functions
- Checking settings before playing any sound
- Adding a pause flag `isPaused`

---

### 9. Managing a Large JavaScript File

As the project grew, the file became long and complex.

I improved this by:
- Grouping related logic into functions
- Adding comments
- Keeping each feature in its own section

---

## 📚 What I Learned

- How real JavaScript applications manage state
- How to use APIs in a real project
- How to dynamically create UI from data
- How to use Local Storage properly
- How game loops work using `setInterval` 
- How to structure a larger JavaScript programs
- How to debug UI and logic problems

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

### ❓ Were there any requirements or goals that were unable to achieve?

- All core requirements of the assignment were successfully completed.
- The game includes API integration, automatic cookie generation, a dynamic shop system, local storage saving, settings, animations, and error handling.
- One optional improvement that was not fully implemented is saving the ownership state of each individual upgrade.
- Instead, the game saves and restores the total CPS value, which still correctly restores gameplay progress.
- This decision was made because the current implementation already satisfies all assignment requirements and stretch goals.
- No required features were left incomplete; the remaining ideas are optional enhancements rather than missing functionality.

---

### 🌟 What went well?

- The shop system works dynamically using API data
- The game saves and restores progress correctly
- The UI feels interactive and game-like with animations and sounds
- The settings system makes the game feel more complete and polished

---

### 📚 What external sources helped you?

- MDN Web Docs  
- JavaScript tutorials  
- CSS Flexbox and Grid guides  
- Cookie Upgrade API documentation  

---

## 📸 Screenshot

![Cookie Clicker Game](https://raw.githubusercontent.com/bh-official/bhuvi-projects/main/week3/09-cookie-clicker-game/screenshot.png)

---

## 👤 Author

Built by: **Bhuvaneswari**

---

## 🏆 Final Words

This project helped me move from writing small scripts to building a **real interactive application**. It improved my confidence in JavaScript and helped me understand how real web apps and game systems are structured.


