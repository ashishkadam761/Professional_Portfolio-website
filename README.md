# Personal Portfolio Website

This repository contains my personal portfolio website built using Flask, HTML, CSS, Bootstrap, and JavaScript. The website serves as a central place to present my projects, technical skills, resume, and contact information.

The goal of this project was to design and develop a simple but professional portfolio that demonstrates both front-end design and basic back-end functionality using Python.

---

## Features

- Responsive portfolio layout
- Project showcase with slider
- Resume viewer and download option
- Skills section with progress bars
- Contact form with email functionality
- Clean and structured navigation

---

## Tech Stack

- Python (Flask)
- HTML5
- CSS3
- Bootstrap
- JavaScript
- SMTP (for email handling)

---

## Project Structure

<<<<<<< HEAD
```text
=======
```
>>>>>>> be6d780 (added gunicorn for deployment)
portfolio-website/
│
├── app.py
├── requirements.txt
├── Procfile
├── README.md
│
├── templates/
│   ├── index.html
│   ├── info.html
│   ├── resume.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
│
├── static/
│   ├── css/
<<<<<<< HEAD
│   ├── js/
│   └── images/
=======
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
```

---
>>>>>>> be6d780 (added gunicorn for deployment)

## Running Locally

### 1. Clone the repository

```
git clone https://github.com/yourusername/portfolio-website.git
```

### 2. Navigate into the project directory

```
cd portfolio-website
```

### 3. Install dependencies

```
pip install -r requirements.txt
```

### 4. Run the Flask application

```
python app.py
```

The application will start on:

```
http://127.0.0.1:5000/
```

---

## Deployment

The project is configured for deployment on **Render**, using **Gunicorn** as the production server.

---

## Author

Ashish Kadam