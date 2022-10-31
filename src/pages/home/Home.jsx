import React from 'react'
import './Home.scss'
import { Col, Button, Row } from 'antd';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Profileimage from '../../assets/images/profileimage.jpeg'
import Resume from '../../assets/files/Pravin_Resume.pdf'
import Navbar from '../../components/Navbar/Navbar'
import { DownloadOutlined, UpSquareFilled } from '@ant-design/icons';
import { BackTop } from 'antd';

const Home = () => {

  const style = {

    padding: '8px 0',
  };






  return (
    <div className='main-container'>
      <Navbar />

      <div>
        <Row>
          <Col span={6}>
            <div className='left-container'>
              <div class="img-div">
                <img width={200} className='profileimage'
                  src={Profileimage} />
              </div>
              <div className='icons'>

                <Row
                  gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                  }}
                >
                  <Col className="gutter-row" span={5}>
                    <a href="https://www.facebook.com/thala.praveen2/" className='fb-icon' target="_blank" style={style}><FaFacebookF /></a>
                  </Col>
                  <Col className="gutter-row" span={5}>
                    <a href="https://www.instagram.com/pravinzz_/" className='insta-icon' target="_blank" style={style}><FaInstagram /></a>
                  </Col>
                  <Col className="gutter-row" span={5}>
                    <a style={style} className='linkedin-icon'><FaLinkedinIn /></a>
                  </Col>
                  <Col className="gutter-row" span={5}>
                    <a style={style} className='twitter-icon'><FaTwitter /></a>
                  </Col>
                </Row>
              </div>
              {/* download cv */}

              {/* <div class="resume-section">
              <a href={Resume} icon={<DownloadOutlined />} class="download-btn" target="_blank" download="Pravin_Resume.pdf">
                DOWNLOAD CV
              </a>
              <Button href={Resume} type="primary" class="resume-section" icon={<DownloadOutlined />} download="Pravin_Resume.pdf">
                Download
              </Button>
            </div> */}

              <div className=''>
                <Button href={Resume} type='primary' className='resume-section' icon={<DownloadOutlined />} download="Pravin_Resume.pdf">
                  <span className='download-word'>DOWNLOAD CV</span>
                </Button>
              </div>
            </div>
          </Col>

          <Col span={18}>

            <div className='right-container'>
              <div className='quotes-div'>
                <h2>"The mind is the limit. When you face your <br /> struggles, you overcome them."</h2>
                <p>"Luck favours the Brave & Intelligence."</p>
                <h1>PRAVIN</h1>
                <h1>SOFTWARE DEVELOPER</h1>
              </div>

              <div className='about-div'>
                <div className='aboutme'>
                  <h1>ABOUT</h1>

                </div>
                <hr className='horizontalline' />
                <div className='paragraph-div'>


                  <p>I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
                  </p>

                  <p>Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                  </p>
                  <p>A key strength is communication; building strong relationships with people in order to deliver the best results.
                  </p>
                  <p>
                    Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.
                  </p>
                </div>
              </div>

              <div className='resume-div'>
                <div className='details-div'>
                  <h1>RESUME</h1>
                </div>
                <hr className='horizontalline' />
                <div className='resume-title'>
                  <h2>MY EMPLOYMENT HISTORY</h2>
                  <h2>Software Developer At Furtim technologies</h2>
                  <p>November 2021 - Present</p>
                  <ul>
                    <li>Ensured that published content meets brand guidelines and overall communication styles
                    </li><br />
                    <li>Built relations with the online community
                    </li><br />
                    <li>Implemented social media strategies to increase engagement and followers
                    </li>
                  </ul>
                </div>
              </div>

              <div className='skill-div'>
                <div className='skill-title-div'>
                  <h1>MY SKILLS</h1>
                </div>
                <hr className='horizontalline' />
                <div className='skill-detail-div'>
                  <h2>Soft skills</h2>

                  <ul >
                    <li>I have excelent communication skill and confidence in front of an audience
                    </li> <br />
                    <li>I have a talent for investigating and researching different processes to offer different improvements and solution for the benefit of the organization
                    </li><br />
                    <li>
                      Provided engaging text, image and video content for all social media and professional accounts
                    </li>
                  </ul>

                  <h2>Technical skills</h2>

                  <ul>
                    <li>I have a great experience with React js tools
                    </li><br />
                    <li>I am proficient in technical writing
                    </li><br />
                    <li>Provided engaging text, image and video content for all social media and professional accounts
                    </li>
                  </ul>
                </div>
              </div>


              <div className='education-div'>
                <div className='education-title-div'>
                  <h1>MY EDUCATIONS</h1>
                </div>
                <hr className='horizontalline' />

                <div className='edu-detsils-div'>

                  <h3> Bsc computerscience, College of Bharath University, Chennai </h3>
                  <p>June 2018 - July 2021</p>
                  <h3>Highschool , Vidhya Matric Highschool, Chennai
                  </h3>
                  <p>October 2016 - July 2017

                  </p>

                </div>
              </div>


              <div className='hoobies-div'>
                <div className='hobbies-title-div'>
                  <h1>MY HOBBIES AND INTRESTS</h1>
                </div>
                <hr className='horizontalline' /> <br />
                <div className='hobby-details-div'>
                  <ul>
                    <li>I love mountain hiking and cycling in my free time
                    </li><br />
                    <li>I like to to watch movies in my free times
                    </li> <br />
                    <li>I like to to watch movies in my free times
                    </li>
                  </ul>
                </div>
              </div>

              <div className='contact-div'>
                <div className='contact-title'>
                  <h1>MY CONTACT DETAILS</h1>
                </div>
                <hr className='horizontalline' /> <br />
                <div className='contact-details-div'>
                  <h3>Name: Pravin S</h3>
                  <h3>Address: CBI colony, 600100 chennai, Medavakkam</h3>
                  <h3>Phone number: 8681949275</h3>
                  <h3>E-mail: pravins1848@gmail.com</h3>
                </div>
              </div>

              <div className='footer-div'>
                <hr className='horizontalline-footer' /> <br />
                <p>© 2022 - Pravin</p>
                <p>This website was made with my self intrest</p>

              </div>
            </div>
          </Col>
        </Row>
        
        <BackTop >
          <div className='backtop' ><UpSquareFilled /></div>
        </BackTop>
             </div>
    </div>
  )
}

export default Home;
