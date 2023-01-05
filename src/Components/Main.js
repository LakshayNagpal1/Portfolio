import React, { useRef } from 'react';
import img1 from '../Images/image.jpg';
import SchoolIcon from '@material-ui/icons/School';
import WorkHistoryIcon from '@material-ui/icons/History';
import Computer from '@material-ui/icons/Computer';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Education from './Education';
import WorkHistroy from './WorkHistory';
import ProgrammingSkills from './ProgrammingSkills';
import {BrowserRouter, Link} from "react-router-dom";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import emailjs from "emailjs-com";

const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01io2jg', 'template_7i8b81m', form.current, 'XnqrgPoLE4jOlEUqe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    
        return (
            <div className='container-fluid' >
                <div className='row' id='id1'>
                    <div className='col' id='navid'>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
    <a className="navbar-brand" href="#">Lakshay</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AboutMe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">ContactMe</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                    </div>
                </div>





            <div className='row ' id='id2'>
                <div className='col' id='col1'>
                      <h2> Hello,I'm Lakshay</h2>
                      <h3>Knack of Building Applications with front and back end operations</h3>
                      <div className='btn' id='btnid1' >Hire Me</div>

                     <a href="https://drive.google.com/drive/my-drive"><div className='btn' id='btnid2' > Get Resume</div></a>
                </div>
                <div className='col' id='col2'>
                      
                </div>
            </div>





            <div className='row' id='id3'>
                <div className='col'>
                     <h3>About me</h3>
                </div>
            </div>
            



            <div className='row' id='id4'>
                  <div className='col'>
                    <h1>Resume</h1>
                    <p1>My Formal Bio Details</p1>
                    </div> 
                    </div>

                    <div className='row' id='id6'> 
                <div className='col' id='waste'>
                        <div className='box' id='boxid2'>
                            <p1><SchoolIcon/></p1>
                            <p1><WorkHistoryIcon/></p1>
                            <p1><Computer/></p1>
                            <p1><InsertChartIcon/></p1>
                            <p1><PlayCircleFilledIcon/></p1>
                        </div>
                    <div className='box' id='boxid'>
                        <p> <Link  to="/Education"> Educations</Link></p>
                         <p><Link  to="/WorkHistory"> Work History</Link></p>
                         <p><Link  to="/Programming"> Programming Skills</Link></p>
                         <p><Link  to="/Project"> Projects</Link></p>
                         <p><Link  to="/Interest"> Interests</Link></p> 
                          
                    </div>
                </div>

                <div className='col' id='details'> 
                <h1><FiberManualRecordIcon/> The Technological Institute of Textile & Science</h1>
                          <p5>Bachelor of Technology in Computer Science</p5>
                          <p />
                          <h1><FiberManualRecordIcon/>Intermediate School Certificate</h1>
                          <p5>Tits ,Bhiwani</p5>
                          <p/>
                          <h1><FiberManualRecordIcon/> Secondary School Certificate</h1>
                          <p5>Vaish Model Sr Sec School ,Bhiwani</p5>
                 
                 </div>
            </div>

<div className='row' id='id5'>
    <div className='col'> 
     <form ref={form} onSubmit={sendEmail} id="form">
      <div className='row pt-5 mx-auto'>
        <div className='col-8 form-group mx-auto'>
          <input type="text" className="form-control" placeholder="Name" name="name"  />
        </div>
        <div className='col-8 form-group mx-auto'>
          <input type="email" className="form-control" placeholder="Email-Address" name="email"  />
        </div>
        <div className='col-8 form-group mx-auto'>
          <input type="text" className="form-control" placeholder="Subject" name="subject"  />
        </div>
        <div className='col-8 form-group mx-auto'>
          <textarea className='form-control' id='' cols="30" rows="8" placeholder="Your Message" name="message" ></textarea>
        </div>
        <div className='col-8 pt-3 mx-auto'>
          <input type="submit" className="btn btn-info" value="Send Message" ></input>

        </div>

      </div>
     </form>

    </div>

</div>
            </div>
        )
        }

export default Main;