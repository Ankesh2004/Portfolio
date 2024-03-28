
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contacts } from "../data/contact"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import toast from 'react-hot-toast';

const Contact = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const form = useRef();
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
    
        console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
        const toastId = toast.loading('Sending Email...');
    
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email Sent Successfully');
                    toast.dismiss(toastId);
                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error('Failed to send Email');
                    toast.dismiss(toastId);
                },
            );
    };
    return (
        <div id="contact" className={`flex ${isMobile ? 'flex-col' : 'flex-row'} my-[4rem]`}>
            <div className={`${isMobile ? 'w-[100%' : 'w-[50%]'} flex flex-col gap-[1rem] items-center `}>
                <h2>Get in Touch</h2>
                <p>Have a project idea? Elevate your vision - Reach Out and Let's Make It Happen. </p>
                {/* <p>Feel free to reach out to me for any queries or collaborations.</p> */}
                <div className="flex flex-row gap-[1rem]">
                    {
                        contacts.map((contact) => (
                            <div key={contact.id} className="p-[0.2rem] w-[3rem] bg-white rounded-2xl">
                                <a href={contact.link} >
                                    <Image src={contact.icon} alt="contact" width={40} height={40} />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Contact form  */}
            <div className={`flex flex-col gap-[0.4rem] ${isMobile ? 'w-[100%]' : 'w-[50%]'} text-center gap-[1rem]`}>
                <h1>Contact Me</h1>
                <form form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[1rem] items-center text-black">
                    <input type="text" name='user_name' placeholder="Name" className="p-[0.5rem] w-[90%] rounded-lg" />
                    <input type="email" name='user_email' placeholder="Email" className="p-[0.5rem] w-[90%] rounded-lg" />
                    <textarea placeholder="Message" name='message' className="p-[0.5rem] w-[90%] h-[8rem] rounded-lg" />
                    <button type='submit' className="p-[0.5rem] bg-[#d64531] w-[8rem] text-white rounded-lg">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact