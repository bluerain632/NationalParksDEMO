import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Intro from './intro';

function Parks({db}){
    const [viewPark,setViewPark]=useState("");
    const [lockedOnPark,setLockedOnPark]=useState("P001");
    const nav=useNavigate();
    const MoreDetail=(e,id)=>{
        e.preventDefault();
        nav(`/detail/${id}`);
    }
    return(
        <div>
            <nav className="topnav">
                <span style={{backgroundColor:"green",color:"white"}} onClick={(e)=>{e.preventDefault();nav('/')}}>Home</span>
                <input type="text" id="search" name="search" placeholder="Enter park name"
                    style={{position:"absolute",left:"28.5%",borderRadius:"10px"}}
                    onChange={(e)=>setViewPark(e.target.value.toLowerCase())}/>
                <span style={{position:"absolute",right:"7.5%"}} 
                    onClick={(e)=>{e.preventDefault();nav('/about')}}>About us</span>
            </nav>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{width:"30%",textAlign:"left",objectFit:"cover"}}>
                    {
                        db.filter((x)=>{
                            return ((viewPark===""?x:x.name.toLowerCase().includes(viewPark))
                            &&(x.status==="open"))
                        }).map(x=>(
                            <div style={{paddingTop:10}}>
                                <button className="select" type="button" style={{width:"90%",backgroundColor:(x.id===lockedOnPark)?"blue":"",color:(x.id===lockedOnPark)?"yellow":""}} 
                                onClick={(e)=>{e.preventDefault();setLockedOnPark(x.id)}}
                                >{x.id}.{x.name}</button></div>
                        ))
                    }
                </div>
                <div style={{width:"70%",objectFit:"cover"}}>
                    {
                        lockedOnPark&&(
                            <div>
                                <Intro park={lockedOnPark}/>
                                <br/>
                                <button onClick={e=>MoreDetail(e,lockedOnPark)}>SEE MORE DETAILS</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Parks;