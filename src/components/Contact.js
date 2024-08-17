import React from 'react';
import emailjs from 'emailjs/browser';
import { ToastContainer, toast, Flip } from 'react-toastify';
import './../css/Toast.css';

const Contact = () => {
    
    const notify = () => toast.success('Sent!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7z8bwyp', 'template_soryv8m', e.target, {publicKey: 'lYPDqWbwbsFTQDuJz'})
            .then((result) => {
                console.log(result.text);
                notify();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div class="container">
            <div class="section-title">
                <h2>Contact</h2>
                <p>Let's connect! Feel free to reach out and network with me!</p>
            </div>
            <div class="row aos-init aos-animate" data-aos="fade-in">
                <div class="mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form onSubmit={handleSubmit} class="php-email-form">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" id="name" required/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" required/>
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                    <ToastContainer
                        class="toast"
                        position="bottom-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        transition={Flip}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;