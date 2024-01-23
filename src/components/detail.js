import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from '../landmarks.json';
import data1 from '../animals.json';
import data2 from '../activities.json';
import data3 from '../sceneries.json';
import { Rating } from "@mui/material";

function Detail({db}){
    const {id}=useParams();
    const index=db.map(x=>x.id).indexOf(id);
    const park=db[index];
    const lands=data.filter(x=>x.park===id);
    const animals=data1.filter(x=>x.park===id);
    const activities=data2.filter(x=>x.park===id);
    const sceneries=data3.filter(x=>x.park===id);
    const nav=useNavigate();
    const [yourRate,setYourRate]=useState(0);
    const ratingChange=(e,rate)=>{
        e.preventDefault();
        setYourRate(rate);
        if(localStorage.getItem(`${id}_rating`)) localStorage.setItem(`${id}_rating`,parseInt(localStorage.getItem(`${id}_rating`))+rate);
        else localStorage.setItem(`${id}_rating`,rate);
        if(localStorage.getItem(`${id}_rates`)) localStorage.setItem(`${id}_rates`,parseInt(localStorage.getItem(`${id}_rates`))+1);
        else localStorage.setItem(`${id}_rates`,1);
    }
    let forum=[];
    for (let index = 1; index <= localStorage.getItem(`${id}_count`); index++) {
        forum.push(`<div class="comment">
        <p>${localStorage.getItem(`${id}_name${index}`)}: ${localStorage.getItem(`${id}_title${index}`)}</p><p>${localStorage.getItem(`${id}_message${index}`)}</p></div><br/>`);
        
    }
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
        if(localStorage.getItem(`${id}_count`)) localStorage.setItem(`${id}_count`,parseInt(localStorage.getItem(`${id}_count`))+1);
        else localStorage.setItem(`${id}_count`,1);
        localStorage.setItem(`${id}_name${localStorage.getItem(`${id}_count`)}`,name);
        localStorage.setItem(`${id}_mail${localStorage.getItem(`${id}_count`)}`,mail);
        localStorage.setItem(`${id}_phone${localStorage.getItem(`${id}_count`)}`,phone);
        localStorage.setItem(`${id}_title${localStorage.getItem(`${id}_count`)}`,title);
        localStorage.setItem(`${id}_message${localStorage.getItem(`${id}_count`)}`,message);
    }
    return(
        <div>
            <br/>
            <button type="button" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}} style={{position:"fixed",bottom:"30px",right:"30px"}}><img src={require('../images/scrollToTop.jpg')} alt="" width={50} height={50}/></button>
            <nav className="topnav">
                <span onClick={(e)=>{e.preventDefault();nav('/')}}>Home</span>
                <Rating value={parseInt(localStorage.getItem(`${id}_rating`))/parseInt(localStorage.getItem(`${id}_rates`))} precision={0.1} style={{position:"absolute",left:"40%"}} isHalf={true} readOnly/>
                {
                    (localStorage.getItem(`${id}_rating`))?(
                        <h5 style={{position:"absolute",left:"60%"}}>
                            {(parseInt(localStorage.getItem(`${id}_rating`))/parseInt(localStorage.getItem(`${id}_rates`))).toFixed(1)}/5
                        </h5>
                    ):(<></>)
                }
                <span style={{position:"absolute",right:"7.5%"}} 
                    onClick={(e)=>{e.preventDefault();nav('/about')}}>About us</span>
            </nav>
            <br/><hr/>
            <h2>{park.name}</h2>
            <div id="sceneries" className="carousel slide" data-bs-ride="carousel" 
            style={{width:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"}}>
                <div className="carousel-indicators">
                    {
                        sceneries.map(x=>(x.stt===1)?
                        (<button type="button" data-bs-target="#sceneries" data-bs-slide-to="0" className="active"></button>)
                        :(<button type="button" data-bs-target="#sceneries" data-bs-slide-to={x.stt-1}></button>)
                        )
                    }
                </div>
                <div className="carousel-inner">
                    {
                        sceneries.map(x=>(x.stt===1)?
                        (
                            (x.image!=="")?(
                                <div className="carousel-item active">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                </div>
                            )
                            :(
                                <div className="carousel-item active">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                </div>
                            )
                        )
                        :(
                            (x.image!=="")?(
                                <div className="carousel-item">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                </div>
                            )
                            :(
                                <div className="carousel-item">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800",height:"500px"}}/>
                                </div>
                            )
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sceneries" data-bs-slide="prev"
                style={{width:"40%"}}>
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sceneries" data-bs-slide="next"
                style={{width:"40%"}}>
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <p style={{textAlign:"left"}}>{park.info}</p>
            <h3>Famous landmarks</h3>
            <div id="lands" className="carousel slide" data-bs-ride="carousel" 
            style={{width:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"}}>
                <div className="carousel-indicators">
                    {
                        lands.map(x=>(x.stt===1)?
                        (<button type="button" data-bs-target="#lands" data-bs-slide-to="0" className="active"></button>)
                        :(<button type="button" data-bs-target="#lands" data-bs-slide-to={x.stt-1}></button>)
                        )
                    }
                    <br/><br/><br/><br/>
                </div>
                <div className="carousel-inner">
                    {
                        lands.map(x=>(x.stt===1)?
                        (
                            (x.image!=="")?(
                                <div className="carousel-item active">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item active">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        )
                        :(
                            (x.image!=="")?(
                                <div className="carousel-item">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#lands" data-bs-slide="prev"
                style={{width:"40%"}}>
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#lands" data-bs-slide="next"
                style={{width:"40%"}}>
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <h3>Resident animals</h3>
            <div id="animals" className="carousel slide" data-bs-ride="carousel" 
            style={{width:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"}}>
                <div className="carousel-indicators">
                    {
                        animals.map(x=>(x.stt===1)?
                        (<button type="button" data-bs-target="#animals" data-bs-slide-to="0" className="active"></button>)
                        :(<button type="button" data-bs-target="#animals" data-bs-slide-to={x.stt-1}></button>)
                        )
                    }
                    <br/><br/><br/><br/><br/>
                </div>
                <div className="carousel-inner">
                    {
                        animals.map(x=>(x.stt===1)?
                        (
                            (x.image!=="")?(
                                <div className="carousel-item active">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item active">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        )
                        :(
                            (x.image!=="")?(
                                <div className="carousel-item">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#animals" data-bs-slide="prev"
                style={{width:"40%"}}>
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#animals" data-bs-slide="next"
                style={{width:"40%"}}>
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <h3>Local activities</h3>
            <div id="activities" className="carousel slide" data-bs-ride="carousel" 
            style={{width:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"}}>
                <div className="carousel-indicators">
                    {
                        activities.map(x=>(x.stt===1)?
                        (<button type="button" data-bs-target="#activities" data-bs-slide-to="0" className="active"></button>)
                        :(<button type="button" data-bs-target="#activities" data-bs-slide-to={x.stt-1}></button>)
                        )
                    }
                    <br/><br/><br/>
                </div>
                <div className="carousel-inner">
                    {
                        activities.map(x=>(x.stt===1)?
                        (
                            (x.image!=="")?(
                                <div className="carousel-item active">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item active">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        )
                        :(
                            (x.image!=="")?(
                                <div className="carousel-item">
                                    <img src={require(`../images/${id}/${x.image}`)} alt={x.name} 
                                    className="d-block" style={{width:"800px",height:"500px"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                            :(
                                <div className="carousel-item">
                                    <img src={require("../images/notFound.png")} alt="notFound" 
                                    className="d-block" style={{width:"800px",height:"5"}}/>
                                    <p style={{textAlign:"left"}}>{x.info}</p>
                                </div>
                            )
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#activities" data-bs-slide="prev"
                style={{width:"40%"}}>
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#activities" data-bs-slide="next"
                style={{width:"40%"}}>
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            {
                park&&(
                    <div>
                        {(park.address)?(<p style={{textAlign:"left"}}>Address: {park.address}</p>):(<></>)}
                        {(park.telephone)?(<p style={{textAlign:"left"}}>Telephone: {park.telephone}</p>):(<></>)}
                        {(park.website)?(<p style={{textAlign:"left"}}>Website: <a href={park.website}>{park.website}</a></p>):(<></>)}
                        {(park.means)?(
                            <div>
                                <p style={{textAlign:"left"}}>Visitors can move to the {park.name} Park by a variety of means, including:</p>
                                <p style={{textAlign:"left"}}>{park.means}</p>
                            </div>
                        ):(<></>)}
                        {(park.spending)?(<p style={{textAlign:"left"}}>{park.spending}</p>):(<></>)}
                    </div>
                )   
            }
            <div>
                <iframe src={park.map} width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title={park.name}></iframe>
            </div>
            <Rating value={yourRate} onChange={(e,newRate)=>ratingChange(e,newRate)} size="large"/>
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
                                <td><textarea id="message" value={message} placeholder="Write your comment"
                                onChange={e=>setMessage(e.target.value)}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </center>
            <br/>
            <div id="comments">
                {
                    forum.map(x=>(
                        <div dangerouslySetInnerHTML={{__html:x}}></div>
                    ))
                }
            </div>
            <button type="button" onClick={e=>{
                e.preventDefault();
                localStorage.clear();
                document.getElementById("comments").innerHTML="";
            }} >Clear the comments and rating</button>
        </div>
    );
}

export default Detail;