import React from 'react';
import user from '../images/abhijit.jpg';
import { BsFillPersonFill } from "react-icons/bs";
import '../App.css'


function Home()
{
    const aboutMe = {
        height: '25px',
        width: '25px',
        fontSize: '25px',
        textAlign: 'center',
        background: '#fff',
        color: 'crimson',
        borderRadius: '20%',

      };
    return (
         <>
<section className="home-section">
  <div className="home">
    <div className="image">
        <img src={user} alt="Abhijit Gayen"/>
    </div>

    <div className="content">
        <h3>hi, i am Abhijit Gayen</h3>
         <span id="typing" className="typing">Student</span>
        {/*<span>front-end developer</span>*/}
        <p className="home_text">I am a Postgraguate Student of Mathematics and Computing at Indian Institute of Technology Guwahati . I am a full Stack Web Developer in freelancer.As well as i am a math tutor in TutorBin .For more details see below. </p>   
        <a href="/#" className="btn"> about me <i><BsFillPersonFill style={aboutMe}/> </i> </a>
    </div>
  </div>
</section>
         </>
    );
}

export default Home;
