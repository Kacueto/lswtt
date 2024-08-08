import React from 'react';
import './ContactUs.css';
import Footer from '../components/Footer';
import Swal from 'sweetalert2'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "88c52647-88c4-4d71-aa54-6146858e9a95");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Thank You!",
                text: "Your message was sent",
                icon: "success"
            });
        }
    };
    return (
        <div className="contact-us-container-super">
            <div className="contact-us-container">
                <h1>Tell us what topic<br /> you would like to<br /> appear in the next video</h1>
                <section className="contact-us">
                    <form onSubmit={onSubmit}>
                        <h2>Leave your message</h2>
                        <div className='input-container'>
                            <label>Full Name</label>
                            <input name='name' type='text' className='field' placeholder='Enter your full name' required />
                        </div>
                        <div className='input-container'>
                            <label>Email Address</label>
                            <input name='email' type='email' className='field' placeholder='Enter your email' required />
                        </div>
                        <div className='input-container'>
                            <label>Your Message</label>
                            <textarea name='message' className='field mess' placeholder='Enter your message' required></textarea>
                        </div>
                        <button type='submit' >Send Email</button>
                    </form>
                </section>


            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;