import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.jpg';
import user from './images/abhijit.jpg';


function App() {
  return (
<div>
 {/* navbar section starts */}

<nav className="navbar">
    <a href="/#" className="active"> <i className="fa fa-home"></i> <span>home</span> </a>
    <a href="/#"> <i className="fa fa-user"></i> <span>about</span> </a>
    <a href="/#"> <i className="fa fa-briefcase"></i> <span>portfolio</span></a>
    <a href="/#"> <i className="fa fa-list"></i> <span>blogs</span> </a>
    <a href="/#"> <i className="fa fa-address-book"></i> <span>contact</span> </a>
</nav>

{/*home section data*/}
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
        <a href="/#" className="btn"> about me <i className="fa fa-user"></i> </a>
    </div>
  </div>

</section>

{/*section portfolio */}
<section className="portfolio" hidden>

    <h1 className="heading"><span>my</span> work </h1>

    <div className="box-container">
        <div className="box">
            <img src={img1} alt=""/>
            <div className="content">
                <h3>project 01</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>
        <div className="box">
            <img src={img2} alt=""/>
            <div className="content">
                <h3>project 02</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>
       
        <div className="box">
            <img src={img3} alt=""/>
            <div className="content">
                <h3>project 03</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img4} alt=""/>
            <div className="content">
                <h3>project 04</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img5} alt=""/>
            <div className="content">
                <h3>project 05</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img6} alt=""/>
            <div className="content">
                <h3>project 06</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="/#">read more</a>
            </div>
        </div>

    </div>

    <a href="/#" className="btn"> load more <i className="fa fa-redo"></i> </a>
    
</section>


    </div>
  );
}

export default App;
