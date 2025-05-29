# 🧑‍💻 Customize "Tom's Myspace Page"

A static, nostalgic recreation of Tom's original Myspace profile — brought to life with HTML and CSS!  
This project is great for learning how early social media layouts worked — and even better for customizing as your own retro-style portfolio or profile page.

🌐 [Live Demo](https://wittenbrock.github.io/toms-myspace-page/)  
📸 [Archived Original on Archive.org](https://web.archive.org/web/20060423020134/myspace.com/tom)

---

## 🛠 Installation (View it Locally)

1. **Download or Clone the Project**

```bash
git clone https://github.com/wittenbrock/toms-myspace-page.git
```

2. **Open the Page**

Go to the project folder and double-click `index.html` — it’ll open right in your web browser.

---

## 🎨 How to Customize the Page

Everything you see on the page is in plain HTML and CSS. Here’s how you can easily change the content:

### 1. ✏️ Edit the Profile Name, Bio, and Location
Open `index.html`, scroll down to the `<aside class="profile-sidebar">` section.

Change this:
```html
<h1>Tom</h1>
...
<li>Santa Monica,</li>
<li>CALIFORNIA</li>
```

To your own name and city.

---

### 2. 🖼 Change the Profile Picture
Replace the image `pictures/tom-pic.jpg` with your own.

- Just name your image `tom-pic.jpg` (or update the `src` link in the HTML).
- Place it inside the `pictures/` folder.

---

### 3. 🧑‍🤝‍🧑 Change Your Interests, Music, Movies, etc.

These are all inside `<section class="interests">`.

Just update the text between the `<td>` tags to list your own favorite bands, shows, hobbies, etc.

---

### 4. 🏫 Update Schools, Jobs, and Details

Search for this line in `index.html`:

```html
<h2 class="sidebar-table-h2">Tom's Schools</h2>
```

And update each item like:

```html
<li>University Of California-Berkeley</li>
<li>Major: English & Rhetoric</li>
```

To reflect your real (or dream!) background.

---

### 5. 🧑‍🤝‍🧑 Friends & Comments

To change the friend list or comments, scroll to:

- `<section class="friends">`
- `<section class="comment-wall">`

You can swap out names and photo filenames inside the `pictures/` folder.

---

## 🎨 Styling and Layout

All styling is handled by the file:
```
css/styles.css
```

If you want to:

- Change colors
- Update fonts
- Resize images
- Adjust layout

...this is the file to edit!

---

## 📁 Folder Structure

```
toms-myspace-page/
│
├── index.html          # Main page
├── css/
│   ├── normalize.css   # Resets browser styles
│   └── styles.css      # Custom styles
├── pictures/           # All the profile and friend images
└── README.md           # This file!
```

---

## 💡 Tips

- Make backup copies before you change anything.
- Use a simple text editor like VS Code, Atom, or even Notepad.
- Preview your changes often by refreshing your browser.

---

## ✅ Done? Publish it on GitHub Pages!

1. Push your code to GitHub.
2. Go to repo settings → Pages → Set source to `main` and root folder.
3. GitHub will give you a public URL!
