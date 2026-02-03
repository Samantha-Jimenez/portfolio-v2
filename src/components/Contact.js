import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touched, setTouched] = useState({});

    const notifySuccess = () => toast.success('Message sent successfully!',
        {
          position: 'bottom-center',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
    );

    const notifyError = () => toast.error('Failed to send. Please use the mail icon instead.',
        {
          position: 'bottom-center',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
    );

    const form = useRef();

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'from_name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'reply_to':
                if (!value.trim()) return 'Email is required';
                if (!validateEmail(value)) return 'Please enter a valid email address';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 3) return 'Message must be at least 3 characters';
                return '';
            default:
                return '';
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Only validate if field has been touched
        if (touched[name]) {
            setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const validateForm = () => {
        const formData = new FormData(form.current);
        const errors = {};
        
        errors.from_name = validateField('from_name', formData.get('from_name') || '');
        errors.reply_to = validateField('reply_to', formData.get('reply_to') || '');
        errors.message = validateField('message', formData.get('message') || '');
        
        setFormErrors(errors);
        setTouched({ from_name: true, reply_to: true, message: true });
        
        return !Object.values(errors).some(error => error !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields before submission
        if (!validateForm()) {
            toast.error('Please fix the errors in the form', {
                position: 'bottom-center',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
            );
            console.log(result.text);
            notifySuccess();
            e.target.reset();
            setFormErrors({});
            setTouched({});
        } catch (error) {
            console.log(error.text);
            notifyError();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2 className=''>Contact</h2>
                <p data-aos="fade-up" data-aos-duration="1000">Let's connect! I'd love to hear from you — reach out to collaborate or network.</p>
            </div>
            <div className="row aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form ref={form} onSubmit={handleSubmit} className="php-email-form" noValidate>
                        <div className="row">
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="from_name">Name</label>
                                <input 
                                    type="text" 
                                    name="from_name" 
                                    className={`form-control w-full rounded-lg pl-3 ${formErrors.from_name && touched.from_name ? 'border-red-500 border-2' : ''}`}
                                    id="name" 
                                    autoComplete="name" 
                                    required
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    aria-invalid={formErrors.from_name ? 'true' : 'false'}
                                    aria-describedby={formErrors.from_name ? 'name-error' : undefined}
                                />
                                {formErrors.from_name && touched.from_name && (
                                    <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                                        {formErrors.from_name}
                                    </p>
                                )}
                            </div>
                            <div className="form-group col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="reply_to">Email</label>
                                <input 
                                    type="email" 
                                    className={`form-control w-full rounded-lg pl-3 ${formErrors.reply_to && touched.reply_to ? 'border-red-500 border-2' : ''}`}
                                    name="reply_to" 
                                    id="email" 
                                    autoComplete="email" 
                                    required
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    aria-invalid={formErrors.reply_to ? 'true' : 'false'}
                                    aria-describedby={formErrors.reply_to ? 'email-error' : undefined}
                                />
                                {formErrors.reply_to && touched.reply_to && (
                                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                                        {formErrors.reply_to}
                                    </p>
                                )}
                            </div>
                            <div className="form-group col-md-6 hidden" data-aos="zoom-in" data-aos-duration="1000">
                                <label htmlFor="site_name">Site Name</label>
                                <input type="hidden" name="site_name" defaultValue="Personal Website" />
                            </div>
                        </div>
                        <div className="form-group" data-aos="zoom-in" data-aos-duration="1000">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                className={`form-control w-full ${formErrors.message && touched.message ? 'border-red-500 border-2' : ''}`}
                                id="message" 
                                name="message" 
                                rows="10" 
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                aria-invalid={formErrors.message ? 'true' : 'false'}
                                aria-describedby={formErrors.message ? 'message-error' : undefined}
                            />
                            {formErrors.message && touched.message && (
                                <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                                    {formErrors.message}
                                </p>
                            )}
                        </div>
                        <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`relative inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-150 ease-out
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--button-selected)]
                                    hover:translate-y-[1px] hover:shadow-lg active:translate-y-[2px] active:shadow-md
                                    bg-[var(--button-color)] text-white
                                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    )
}

export default Contact;
