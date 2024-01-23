import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact(props){
    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [phone,setPhone]=useState("");
    const [title,setTitle]=useState("");
    const [message,setMessage]=useState("");
    const validmail=new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-z-0-9]{2,6}.[a-z]{2,4}$');
    const validphone=new RegExp('^[0-9]{1,3}[ ]{0,}[0-9]{0,3}[ ]{0,}[0-9]{0,4}$');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.length===0){
            alert("Name is required. Please enter!");
            document.getElementById("name").focus();
            return;
        }
        if(!mail.match(validmail)){
            alert("Invalid email address. Please re-enter!");
            document.getElementById("mail").focus();
            return;
        }
        if(!phone.match(validphone)){
            alert("Invalid phone number. Please re-enter!");
            document.getElementById("phone").focus();
            return;
        }
        if(message.length===0){
            alert("Message is required. Please finish your message!");
            document.getElementById("message").focus();
            return;
        }
        alert("MESSAGE SENT");
        nav('/');
    }
    const nav=useNavigate();
    return(
        <div>
             <nav className="topnav">
                <span onClick={(e)=>{e.preventDefault();nav('/')}}>Home</span>
                <span style={{position:"absolute",left:"38.5%",backgroundColor:"green",color:"white"}} 
                    onClick={(e)=>{e.preventDefault();nav('/contact')}}>Contact us</span>
                <span style={{position:"absolute",right:"7.5%"}} 
                    onClick={(e)=>{e.preventDefault();nav('/about')}}>About us</span>
            </nav>
            <hr/>
            <section>
                <h3 >Contact Info:</h3>
                <p style={{fontStyle:"italic",textAlign:"center",fontSize:"24px"}}>
                We look forward to hearing from you. Do not hesitate to contact if you have any question, proposal, or support.
                </p>
                <h5 style={{paddingRight:"80%"}}>
                Below is our contact information:
                </h5>
                <address>
                    <strong>Address: </strong> [590 CMT8. Ward 11, District 10, Ho Chi Minh City]
                    <br />
                    <strong>Email:</strong> <a href="mailto:abc@gmail.com">mailto:abc@gmail.com</a>
                    <br />
                    <strong>Tele:</strong> (+84) 123 456 789
                </address>
            </section>
            <section>
                <iframe title="Google Map" width="400" height="200" frameBorder="0"
                style={{ border: 0 }} allowFullScreen=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3253163053178!2d106.66372207480508!3d10.786376989362989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704905213670!5m2!1svi!2s">
                </iframe>
            </section>
                <h5 style={{paddingRight:"80%"}}>Contact Form:</h5>
                <p>
                If you would like to share your opinion, contribute or have any requests, please use the form below. We will respond to you as soon as possible.
                </p>
           
            {/* Thong tin doanh nghiep */}
            {/* San pham / Dich vu */}
            <center>
                <form onSubmit={e=>handleSubmit(e)}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Name</label></td>
                                <td><input type="text" id="name" value={name} placeholder="Enter your name"
                                onChange={e=>setName(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label>Email</label></td>
                                <td><input type="email" id="mail" value={mail} placeholder="Enter email address"
                                onChange={e=>setMail(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label>Phone</label></td>
                                <td><input type="tel" id="phone" value={phone} placeholder="Enter phone number"
                                onChange={e=>setPhone(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label>Title</label></td>
                                <td><input type="text" id="title" value={title}
                                onChange={e=>setTitle(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label>Comment</label></td>
                                <td><textarea id="message" value={message} placeholder="Write your message"
                                onChange={e=>setMessage(e.target.value)}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </center>
        </div>
    );
}
export default Contact;