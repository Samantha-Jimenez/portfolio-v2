import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const notifySuccess = () => toast.success('Sent!',
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

    const notifyError = () => toast.error('Error! Use mail icon instead',
        {
          position: 'bottom-center',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            width: '261px',
          },
        }
    );

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
        )
            .then((result) => {
                console.log(result.text);
                notifySuccess();
            }, (error) => {
                console.log(error.text);
                notifyError();
            });
        e.target.reset();
    }

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2 className=''>Contact</h2>
                <p data-aos="fade-up" data-aos-duration="1000">Let’s connect! I’d love to hear from you — reach out to collaborate or network.</p>
            </div>
            <div className="row aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form ref={form} onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="from_name">Name</label>
                                <input type="text" name="from_name" className="form-control w-full rounded-lg pl-3" id="name" autoComplete="name" required/>
                                <div className="validate"></div>
                            </div>
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="reply_to">Email</label>
                                <input type="email" className="form-control w-full rounded-lg pl-3" name="reply_to" id="email" data-rule="email" autoComplete="email" data-msg="Please enter a valid email" required/>
                                <div className="validate"></div>
                            </div>
                            <div className="form-group col-md-6 hidden" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="site_name">Site Name</label>
                                <input type="hidden" name="site_name" defaultValue="Personal Website" />
                            </div>
                        </div>
                        <div className="form-group" data-aos="zoom-in" data-aos-duration="1000">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control w-full" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
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