import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const notify = () => toast.success('Sent!',
        {
          position: 'bottom-center',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            width: '137px',
          },
        }
    );

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7z8bwyp', 'template_gte2cwa', form.current, { publicKey: 'lYPDqWbwbsFTQDuJz'})
            .then((result) => {
                console.log(result.text);
                notify();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="container">
            <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
            <script type="text/javascript">
                (function(){
                    emailjs.init({
                    publicKey: "lYPDqWbwbsFTQDuJz",
                    })
                })();
            </script>
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2>Contact</h2>
                <p>Let's connect! Feel free to reach out and network with me!</p>
            </div>
            <div className="row aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form ref={form} onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="from_name">Name</label>
                                <input type="text" name="from_name" className="form-control bg-white border w-full rounded-lg pl-3" id="name" autoComplete="name" required/>
                                <div className="validate"></div>
                            </div>
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="reply_to">Email</label>
                                <input type="email" className="form-control bg-white border w-full rounded-lg pl-3" name="reply_to" id="email" data-rule="email" autoComplete="email" data-msg="Please enter a valid email" required/>
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group" data-aos="zoom-in" data-aos-duration="1000">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control bg-white border w-full" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    )
}

export default Contact;