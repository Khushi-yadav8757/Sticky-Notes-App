# 📝 Sticky Notes Web App

A modern and responsive **Sticky Notes Web Application** built using **HTML, CSS, and Vanilla JavaScript**.

This application allows users to **create, edit, delete, and manage notes directly in the browser**.  
All notes are saved using the **LocalStorage API**, ensuring that the notes remain available even after refreshing the page.

---

## 🚀 Live Features

- ➕ Add new notes
- ✏️ Edit notes (title and description)
- 🗑 Delete notes
- 🔍 Search notes
- 🎨 Multiple note colors
- 🌙 Dark mode toggle
- 💾 Automatic saving using LocalStorage
- 📱 Responsive design for desktop and mobile

---

## 📸 Screenshot

![Sticky Notes App](https://github.com/Khushi-yadav8757/Sticky-Notes-App/blob/main/Screenshot%202026-03-09%20143056.png)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the web app |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla JS) | Application logic |
| LocalStorage API | Store notes in browser |

---

## ⚙️ How the App Works

1. The user clicks the **Add Note** button.
2. A new sticky note card is created.
3. Users can enter a **title and description**.
4. Notes can be **edited anytime**.
5. Clicking the **delete icon** removes the note.
6. The notes are stored using **LocalStorage**.
7. When the page reloads, notes are retrieved and displayed again.

---

## 💾 LocalStorage Implementation

The application stores notes using the **LocalStorage API**.

Saving notes:
Loading notes:

let notes = JSON.parse(localStorage.getItem("notes")) || [];

This ensures that the notes persist even after refreshing the browser.

## 📂 Project Structure
Sticky-Notes-App
│
├── index.html
├── style.css
├── script.js
└── README.md


## 📱 Responsive Design

The application uses CSS Grid Layout to ensure responsiveness.
The layout automatically adjusts for:

Desktop
Tablet
Mobile devices

## 🌟 Learning Outcomes

This project demonstrates important front-end development concepts such as:
DOM Manipulation
Event Handling
LocalStorage Data Persistence
Responsive Web Design
Clean UI Development

## 🚀 Future Improvements

Possible upgrades for this project:
Drag and drop notes
Pin important notes
Note color picker
Export notes as file
Cloud sync using Firebase
User authentication system

## 👩‍💻 Author

Khushi Yadav

Frontend Developer | JavaScript Learner

⭐ If you like this project, consider giving it a star on GitHub.

```javascript
localStorage.setItem("notes", JSON.stringify(notes));
