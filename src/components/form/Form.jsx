import React, { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Form = () => {
    const formRef = useRef();
    const sendRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRef.current.setAttribute("disabled", "disabled");
        emailjs.sendForm('service_5858csb', 'template_xey7l6r', formRef.current, 'user_nP9AOSXYsjJsdscGRzVl4')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            swal({
                title: "Email sent!",
                text: "I'll contact you as soon as possible!",
                icon: "success",
              });
            sendRef.current.removeAttribute("disabled", "disabled");
        }, (error) => {
            swal({
                title:"Problem",
                text: "It seems there has been a problem please address your message to santiagochantada@gmail.com",
                icon: "warning",
            })
            console.log(error.text);
        });

    }

    return(
        <section className="s2">
            <div className="main-container">
                <h3 style={{textAlign: 'center'}}>Get In Touch</h3>

                <form ref={formRef} onSubmit={handleSubmit} id="contact-form">

                    <label>Name</label>
                    <input className="input-field" type="text" name="name"/>

                    <label>Subject</label>
                    <input className="input-field" type="text" name="subject"/>

                    <label>Email</label>
                    <input className="input-field" type="text" name="email"/>

                    <label>Message</label>
                    <textarea className="input-field" type="text" name="message"></textarea>

                    <input id="submit-btn" ref={sendRef} type="submit" value='Send' />
                    <input id="reset-btn" type="reset" value="Reset" />
                
                </form>
            </div>
        </section>
    );
}

export default Form;