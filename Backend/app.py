from flask import Flask, request, render_template_string
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

GMAIL_ADDRESS = os.getenv('GMAIL_ADDRESS')
GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD')


@app.route('/')
def index():
    return render_template('contact_form.html')


@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    # Get phone number, with a default of an empty string if it's not provided
    phone = request.form.get('phone', '')
    subject = request.form['subject']
    message = request.form['message']

    try:
        msg = MIMEText(
            f"Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}")
        msg['Subject'] = subject
        msg['From'] = email  # Set the "From" field to the sender's email address
        msg['To'] = "themasteryhouse@gmail.com"
        msg['Reply-To'] = email

        with smtplib.SMTP_SSL('smtp.gmail.com') as server:
            server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
            server.sendmail(GMAIL_ADDRESS, GMAIL_ADDRESS, msg.as_string())

        return "Email sent successfully!"
    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run(debug=True)
