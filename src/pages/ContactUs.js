import './ContactUs.css';

const ContactUs = () => {
    return(
        <div className="contact-us-container">
           <h1>Tell us what topic you would like to appear in the next video</h1>
            <section className="contact-us">
                
                <form>  
                    <h2>Contact Us</h2>
                    <div className='input-container'>
                        <label>Full Name</label>
                        <input name='name' type='text'  className='field' placeholder='Enter your full name' required />
                    </div>
                    <div className='input-container'>
                        <label>Email Address</label>
                        <input name='email' type='email'  className='field' placeholder='Enter your email' required />
                    </div>
                    <div className='input-container'>
                        <label>Your Message</label>
                        <textarea name='message' className='field mess' placeholder='Enter your message' required></textarea>
                    </div>
                    <button type='submit'>Send Email</button>
                </form>
            </section>
            

        </div>
    )}

export default ContactUs;