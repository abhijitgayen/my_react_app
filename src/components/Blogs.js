import React, { Component } from 'react';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';
import blog_4 from '../images/blog4.jpg';
import blog_5 from '../images/blog5.jpg';
import blog_6 from '../images/blog6.jpg';

export class Blogs extends Component {
    constructor(props){
        super(props);

        this.state={
            blogs:[
                {
                    id:0,
                    date : '21st May , 2021',
                    author:'Abhijit',
                    title:'Blog 1 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1
                },
                {
                    id:1,
                    date:'25st May , 2021',
                    author:'Abhijit',
                    title:'Blog 2 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_2
                },
                {
                    id:2,
                    date : '21st May , 2021',
                    author:'Abhijit',
                    title:'Blog 3 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img:blog_3
                },
                {
                    id:3,
                    date : '21st May , 2021',
                    author:'Abhijit',
                    title:'Blog 4 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img:blog_4
                },
                {
                    id:4,
                    date : '21st May , 2021',
                    author:'Abhijit',
                    title:'Blog 5 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img:blog_5
                },
                {
                    id:5,
                    date : '21st May , 2021',
                    author:'Abhijit',
                    title:'Blog 6 Title',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img:blog_6
                }
            ],
        };
    }
   
   
    render() {
    const allblog=this.state.blogs.map((blog)=>{
    return(
        <div key={blog.id} className="box">
            <div className="image">
                <img src={blog.img} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="/#"> <i className="fa fa-calendar"></i>{blog.date}</a>
                    <a href="/#"> <i className="fa fa-user"></i> {blog.author} </a>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <a href="/#" className="btn"> read more <i className="fa fa-link"></i> </a>
            </div>
        </div>
        );
    });
    
        return (
            <div>
            <section className="blogs" id="blog">
                <h1 className="heading"> <span>my</span> blogs </h1>
                <div className="box-container"> {allblog}</div>
            </section>   
            </div>
        );
    }
}

export default Blogs
