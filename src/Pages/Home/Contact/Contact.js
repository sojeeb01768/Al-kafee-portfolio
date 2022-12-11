import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l8txoj4', 'template_isjbgen', form.current, 'HUHuEl-E9M938bhbC')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                Toaster()
            },
                (error) => {
                    console.log(error.text);
                });
    };

    const notify = () => toast('Mail Sent Successful.');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold py-5">Get In Touch</h1>
                </div>

                <div className="card card-body  w-full  shadow-xl bg-base-100 ">
                    <div className="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <label className="label-text">
                                <p>Name</p>
                                <input className='input input-bordered w-full ' type="text" name="user_name" />
                            </label>
                            <label>
                                <p>Email</p>
                                <input className='input input-bordered w-full ' type="email" name="user_email" />
                            </label>
                            <label>
                                <p>Message</p>
                                <textarea className='textarea textarea-success w-full' name="message" /> <br />
                                <input onClick={notify} className=' btn btn-success w-full' type="submit" value="Send" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;