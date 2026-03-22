from dotenv import load_dotenv
import os

load_dotenv()
from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/info")
def info():
    return render_template("info.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/contact", methods=["GET","POST"])
def contact():

    if request.method == "POST":

        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]

        sender_email = "kadamashish720@gmail.com"
        receiver_email = "kadamashish720@gmail.com"

        password = os.getenv("EMAIL_PASSWORD")

        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = receiver_email
        msg["Subject"] = f"Portfolio Contact: {subject}"

        body = f"""
Name: {name}
Email: {email}

Message:
{message}
"""

        msg.attach(MIMEText(body, "plain"))

        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(sender_email, password)

            server.sendmail(sender_email, receiver_email, msg.as_string())

            server.quit()

            print("Email sent successfully!")

        except Exception as e:
            print("Error:", e)

        return render_template("contact.html", success=True)

    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)