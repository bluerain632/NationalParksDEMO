import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {
    const nav=useNavigate();
    return (
        <div>
            <nav className="topnav">
                <span onClick={(e)=>{e.preventDefault();nav('/')}}>Home</span>
                <span style={{position:"absolute",left:"38.5%"}} 
                    onClick={(e)=>{e.preventDefault();nav('/contact')}}>Contact us</span>
                <span style={{position:"absolute",right:"7.5%",backgroundColor:"green",color:"white"}} 
                    onClick={(e)=>{e.preventDefault();nav('/about')}}>About us</span>
            </nav>
            <hr/>
            <h3>Welcome to Vie Park !</h3>     
            <section>
              <p style={{fontStyle:"italic",textAlign:"center",fontSize:"24px"}}>
              We are a non-profit organization committed to conservation and sustainable development of Vietnam's national parks. We believe the national parks are precious natural areas that need to be protected for future generations.
              </p>
            </section>
            <section>
              <h5 style={{paddingRight:"90%"}}>Goal:</h5>
              <p style={{paddingLeft:"80px"}}>
              Protection of national parks' biodiversity
              </p>
              <p style={{paddingLeft:"80px"}}>
              Promote education and raise awareness on the importance of national parks
              </p>
              <p style={{paddingLeft:"80px"}}>
              To develop sustainable tourism in national parks
              </p>
            </section>
            <section>
              <h5 style={{paddingRight:"90%"}}>Our work:</h5>
              <p style={{paddingLeft:"80px"}}>
              Propaganda and education on the importance of national parks
              </p>
              <p style={{paddingLeft:"80px"}}>
              Collaborate with government agencies and local communities to develop sustainable tourism practices
              </p>
            </section>
            <section>
              <h5 style={{paddingRight:"90%"}}>Sincerely Thank You:</h5>
              <p style={{paddingLeft:"80px"}}>
              We hope you have unique experiences from national parks that we recommend.
              </p>
              <p style={{paddingLeft:"80px"}}> 
              Thank you for joining us in exploring and discovering the beauty of nature.
              </p>
            </section>
            <section style={{display:'flex'}}>
              <div style={{width:"25%",border:"solid white"}}><img src={require('../images/C75B28ED-D474-44C5-9397-A075881C80CF.jpg')} alt='' width="100%" height="100%"/>Nguyen Trang Thanh Vu</div>
              <div style={{width:"25%",border:"solid white"}}><img src={require('../images/27F9A142-0C86-4AE2-872D-64925345B4F5.jpeg')} alt='' width="100%" height="100%"/>Que Nghi Tran</div>
              <div style={{width:"25%",border:"solid white"}}><img src={require('../images/IMG_20240120_112715.jpg')} alt='' width="100%" height="100%"/>Son Phi Long</div>
              <div style={{width:"25%",border:"solid white"}}><img src={require('../images/BB175607-33D1-400F-A019-5C8FA808A0DE.jpg')} alt='' width="100%" height="100%"/>Le Tan Phat</div>
            </section>
        </div>
    );
}

export default About;