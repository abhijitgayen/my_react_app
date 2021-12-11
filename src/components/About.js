import React from 'react'
import { FaReact,FaUserGraduate } from 'react-icons/fa';
import { SiJquery, SiPhp, SiHtml5, SiBootstrap, SiMysql } from 'react-icons/si';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { GiGraduateCap } from 'react-icons/gi';



export default function About() {
    const aboutMe = {
        padding: '3px',
        height: '45px',
        width: '45px',
        fontSize: '35px',
        background: '#fff',
        color: 'crimson',
        borderRadius: '10%',
        fontWeight: 'bolder',
    };
    const education ={
        display:'inline-block',
        padding:'1px',
        fontSize: '4rem',
        color:'#fff',
        background:'crimson',
        borderRadius:'5px',
        fontWeight: 'bolder',
    };

    return (
        <div>
            <section id="about" className="about">

                <h1 className="heading"> about <span>me</span> </h1>

                <div className="row">

                    <div className="info-container">

                        <h1>personal info</h1>

                        <div className="box-container">

                            <div className="box">
                                <h3> <span>name : </span> Abhijit Gayen </h3>
                                <h3> <span>age : </span> 22 </h3>
                                <h3> <span>email : </span> agayen04@gmail.com</h3>
                                <h3> <span>address : </span> Chapla , Raidighi, South 24 pgs, West Bengal-743349 </h3>
                            </div>

                            <div className="box">
                                <h3> <span>freelance : </span> Available </h3>
                                <h3> <span>skill : </span> Front-end </h3>
                                <h3> <span>experience : </span> 1 years </h3>
                                <h3> <span>language : </span>Bengali, Hindi, English </h3>
                            </div>

                        </div>

                        <a href="/#" className="btn"> Download CV <i className="fa fa-download"></i> </a>

                    </div>

                    <div className="count-container">

                        <div className="box">
                            <h3>1+</h3>
                            <p>years of experience</p>
                        </div>

                        <div className="box">
                            <h3>50+</h3>
                            <p>happy clients</p>
                        </div>

                        <div className="box">
                            <h3>90+</h3>
                            <p>project completed</p>
                        </div>

                        <div className="box">
                            <h3>5+</h3>
                            <p>awards won</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="skills">

                <h1 className="heading"> <span>my</span> skills </h1>

                <div className="box-container">

                    <div className="box">
                        <SiHtml5 style={aboutMe} />
                        <h3>html</h3>
                    </div>
                    <div className="box">
                        <DiCss3 style={aboutMe} />
                        <h3>css 3</h3>
                    </div>
                    <div className="box">
                        <DiJavascript style={aboutMe} />
                        <h3>javascript</h3>
                    </div>
                    <div className="box">
                        <SiPhp style={aboutMe} />
                        <h3>Php</h3>
                    </div>
                    <div className="box">
                        <SiJquery style={aboutMe} />
                        <h3>jquery</h3>
                    </div>
                    <div className="box">
                        <SiBootstrap style={aboutMe} />
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="box">
                        <SiMysql style={aboutMe} />
                        <h3>Mysql</h3>
                    </div>
                    {/* <div className="box">
        <SiHtml5 style={aboutMe}/>
        <h3>html</h3>
    </div>    
    <div className="box">
        <SiHtml5 style={aboutMe}/>
        <h3>html</h3>
    </div> */}
                    <div className="box">
                        <FaReact style={aboutMe} />
                        <h3>react.js</h3>
                    </div>
                </div>

            </section>

            <section className="education">

                <h1 className="heading"> <span>my</span> education </h1>

                <div className="box-container">

                    <div className="box">
                        <i>
                        <GiGraduateCap style={education} />
                        </i>
                        <span>2015 - 2016</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i><GiGraduateCap style={education} /></i>
                        <span>2016 - 2017</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i><GiGraduateCap style={education} /></i>
                        <span>2017 - 2018</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i><GiGraduateCap style={education} /></i>
                        <span>2018 - 2019</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i><GiGraduateCap style={education} /></i>
                        <span>2019 - 2020</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i><GiGraduateCap style={education} /></i>
                        <span>2020 - 2021</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                </div>

            </section>


        </div>
    )
}
