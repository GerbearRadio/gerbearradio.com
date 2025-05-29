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


---

## 🔗 How to Add Links

To add a link to any website, use the `<a>` HTML tag. Here’s how:

### Example:

```html
<a href="https://yourwebsite.com" target="_blank">Visit My Website</a>
```

### What This Does:
- `href` sets the destination URL.
- `target="_blank"` opens the link in a new browser tab.
- The text between `<a>` and `</a>` is what users will click.

### Adding a Link to Your Bio:

Find this section in `index.html`:
```html
<p>I'm here to help you with <b>MySpace</b>. ...</p>
```

You can change it to something like:

```html
<p>Check out my portfolio: <a href="https://yourportfolio.com" target="_blank">My Work</a></p>
```

Now your bio includes a clickable link!


---

## 🎨 Tailoring This Page for a Creative Portfolio

You can easily turn this retro Myspace layout into a fun and memorable portfolio to show off your creative work!

Here’s how to use different sections to highlight your skills:

---

### 🖼 Profile Picture

Use a professionally styled image, or a creative avatar that reflects your personal brand.

File: `pictures/tom-pic.jpg`  
Update with your own using the same filename, or change the path in `index.html`.

---

### ✍️ Bio & Blurbs

Use the "About Me" section to tell your story as a creative professional.  
Include your design philosophy, favorite tools, and creative influences.

```html
<h3>About me:</h3>
<p>I’m a graphic designer and video editor passionate about bold color, clean layout, and engaging storytelling. Experienced with Adobe CC, DaVinci Resolve, Blender, and Unreal Engine.</p>
```

---

### 🧑‍💼 Use Interests Section to Highlight Skills

#### Example:

```html
<tr>
  <th>General</th>
  <td>Branding, Typography, Visual Storytelling, Motion Graphics, Layout Design</td>
</tr>
<tr>
  <th>Software</th>
  <td>Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Blender, Unreal Engine</td>
</tr>
<tr>
  <th>Specialties</th>
  <td>Social Media Design, Photo Manipulation, Video Editing, 3D Modeling</td>
</tr>
```

---

### 🎬 Add Video/Animation Work

- Create thumbnails of your video projects.
- Replace friend images (`pictures/*.jpg`) with stills from your work.
- Use links:

```html
<a href="https://vimeo.com/yourproject" target="_blank">
  <img src="pictures/your-thumbnail.jpg" alt="Video Thumbnail">
</a>
```

---

### 🖼 Add a Gallery for Your Designs

Use the Friends or Comments section as a gallery:

```html
<figure>
  <figcaption>Brand Identity for Client X</figcaption>
  <img src="pictures/client-x-brand.jpg" alt="Brand Identity Project">
</figure>
```

You can duplicate these blocks to show multiple pieces.

---

### 📺 Embed Video (Optional)

If you want to embed instead of link:

```html
<iframe width="320" height="240" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

---

### 🎨 Customize Styles

Edit `css/styles.css` to update:

- Colors
- Fonts (use Google Fonts!)
- Layout tweaks

This will help your work stand out and reflect your unique style.

---

## 🚀 Final Tip

Use this layout to **stand out** with personality and nostalgia while still keeping your portfolio focused and professional.

