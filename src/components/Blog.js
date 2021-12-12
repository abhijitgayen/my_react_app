import React from 'react'
//import { FaHome,FaBriefcase,FaList,FaAddressBook } from 'react-icons/fa';
//import { BsPersonSquare } from 'react-icons/bs';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';
import blog_4 from '../images/blog4.jpg';
import blog_5 from '../images/blog5.jpg';
import blog_6 from '../images/blog6.jpg';




export default function Blog() {
    return (
        <> 
<section className="blogs" id="blog">

    <h1 className="heading"> <span>my</span> blogs </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src={blog_1} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog_2} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog_3} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog_4} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog_5} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog_6} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i> 21st may, 2021 </a>
                    <a href="/#"> <i className="fa fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>

    </div>

</section>


        </>
    )
}
 