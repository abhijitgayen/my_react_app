import React from 'react';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';

function About()
{
    return (
<div>
        {/*section portfolio */}
<section className="portfolio" id="work">

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

export default About;