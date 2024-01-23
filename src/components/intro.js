import React from "react";
import data from '../sceneries.json';

function Intro({park}){
    const sceneries=data.filter(x=>x.park===park);
    return(
        <div id="demo" className="carousel slide" data-bs-ride="carousel" 
        style={{width:"100%",textAlign:"center"}}>
            <div className="carousel-indicators">
                {
                    sceneries.map(x=>(x.stt===1)?
                    (<button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>)
                    :(<button type="button" data-bs-target="#demo" data-bs-slide-to={x.stt-1}></button>)
                    )
                }
            </div>
            <div className="carousel-inner">
                {
                    sceneries.map(x=>(x.stt===1)?
                    (
                        (x.image)?(
                            <div className="carousel-item active">
                                <img src={require(`../images/${park}/${x.image}`)} alt={x.name} 
                                className="d-block" style={{width:"800px",height:"600px"}}/>
                            </div>
                        )
                        :(
                            <div className="carousel-item active">
                                <img src={require("../images/notFound.png")} alt="notFound" 
                                className="d-block" style={{width:"800px",height:"600px"}}/>
                            </div>
                        )
                    )
                    :(
                        (x.image)?(
                            <div className="carousel-item">
                                <img src={require(`../images/${park}/${x.image}`)} alt={x.name} 
                                className="d-block" style={{width:"800px",height:"600px"}}/>
                            </div>
                        )
                        :(
                            <div className="carousel-item">
                                <img src={require("../images/notFound.png")} alt="notFound" 
                                className="d-block" style={{width:"800px",height:"600px"}}/>
                            </div>
                        )
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{width:"40%"}}>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{width:"40%"}}>
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}

export default Intro;