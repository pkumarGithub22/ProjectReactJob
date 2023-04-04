import React from 'react'
import {AiFillLinkedin}  from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiOutlineInstagram} from 'react-icons/ai'

const Content = () => {
  return (
    <>
  <div className="container">
    <div className="innerContainer">
      <header>
        <div className="containerImg">
          <div className="containerImgInner">
            <img src="assets/H1.png" alt="" />
          </div>
          <div className="containerContent">
            <img src="/assets/H2.png" alt="" />
          </div>
        </div>
      </header>
      <div className="header2">
        <div className="header2Inner">
          <div className="header2Left">
            <img src="/assets/home.png" alt="" />
          </div>
          <div className="header2Right">
            <h2>Who We Are</h2>
            <p>
              The Indian real estate sector is resilient despite global
              headwinds. Returns are impressive and the sector is expected to
              reach US$ 1 trillion in market size by 2030 (Niti Aayog report,
              2021). However, the whole real estate purchase journey is very
              tedious and takes more than 2 years on average. Further, as the
              ticket size of this investment is large, security and trust become
              quite critical. Problems compound when you are currently away from
              your purchase destination. If you are experiencing difficulties in
              the real estate purchase journey, we are here to make it fast and
              transparent.
            </p>
            <div className="btn">
              <button className="bt">
                Contact Now <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <div className="cardContainer">
          <div className="cardContainerTop">
            <div className="cardContainerTitle">
              <h2>Our Offerings</h2>
              <p>
                This whole purchase journey can be divided into three stages.
                For more details, Click Here
              </p>
            </div>
            <div className="cardContainerBtn">
              <div className="cardSingleButton">
                <button>
                  <span>1</span>
                  <span> Pre-Booking</span>{" "}
                </button>
              </div>
              <div className="cardSingleButton">
                <button>
                  <span>2</span>
                  <span>
                    Post-Booking &amp; <br /> Pre-Registration
                  </span>{" "}
                </button>
              </div>
              <div className="cardSingleButton">
                <button>
                  <span>3</span>
                  <span> Post-Registration</span>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="cardContainerCards">
            <div className="card">
              <div className="icon">
                <img src="assets/icon1.png" alt="" />
              </div>
              <div className="content">
                <h3>Virtual site visit</h3>
                <p>
                  Assuring your capital is in safe hands, we provide detailed
                  verification reports of the project and developer. These are
                  customized and detailed...
                </p>
              </div>
              <div className="cardLink">
                <a href="">
                  <button className="bt">
                    Contact us <span>→</span>
                  </button>
                </a>
                <span href="">INR 3000/Project</span>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src="assets/icon2.png" alt="" />
              </div>
              <div className="content">
                <h3>Title ailigence</h3>
                <p>
                  It becomes imperative to observe your apartment or plot very
                  closely before paying the booking amount. We are here to
                  assist with an AI-enabled UAV...
                </p>
              </div>
              <div className="cardLink">
                <a href="">
                  <button className="bt">
                    Contact us <span>→</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src="assets/icon3.png" alt="" />
              </div>
              <div className="content">
                <h3>Title ailigence</h3>
                <p>
                  Due diligence is necessary to prevent real estate malpractices
                  which have contributed to more than 20% of the civil cases in
                  India. We have a panel of...
                </p>
              </div>
              <div className="cardLink">
                <a href="">
                  <button className="bt">
                    Contact us <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardContainer2">
        <div className="cardContainerTop">
          <h2>Our Team Members</h2>
        </div>
        <div className="cardContainerCards">
          <div className="card">
            <div className="icon">
              <img src="assets/ot.png" alt="" />
            </div>
            <div className="content">
              <h3>Brajesh Pathak</h3>
              <p>
                A Chartered Accountant &amp; Company Secretary, has over a
                decade of experience in managing realty focused venture capital
                funds, and was heading Azure Capital Advisors Private Limited.
                He has also been...
              </p>
            </div>
            <div className="cardLink2">
              <a href="">View more</a>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="assets/ot3.png" alt="" />
            </div>
            <div className="content">
              <h3>Deepak Shukla</h3>
              <p>
                Deepak Shukla has completed his B.Tech (hons.) from the Indian
                Institute of Technology (IIT) Kharagpur and obtained an MBA from
                the Indian Institute of Management (IIM) Ahmedabad, India. He
                has an overall experienc....
              </p>
              <div className="none">
                e of 11 years in firms like Credit Suisse, FICO, Alvarez and
                Marsal and The World Bank across geographies. In the past few
                years, his focus is in solving real world challenges using AI.
                He has engaged in development of voicebots for contact centres,
                automated training and validation for Autonomous vehicles
                applications.
              </div>
              <p />
            </div>
            <div className="cardLink2">
              <a href="">View more</a>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="assets/ot1.png" alt="" />
            </div>
            <div className="content">
              <h3>Alok Kumar Singh</h3>
              <p>
                Entrepreneur with pedigree from IIT-BHU and IIML, and more than
                25 years of experience in management responsibilities in top
                tier companies including Infosys, Infosys BPO and Azure Capital.
                Co-Founded Azure Capital, a Rea...
              </p>
              <div className="none">
                l Estate Private Equity Fund and Azven Realty, a full service
                Real Estate Development firm in Bangalore. Set-up and managed a
                SEBI registered VC fund under Azure Capital. Actively involved
                in mentoring and advising seed and growth stage startups at
                C-Level in Visioning, Governance, Strategy Development &amp;
                Implementation, Growth Planning, Goal Setting and Investment
                Structuring &amp; Management.
              </div>
              <p />
            </div>
            <div className="cardLink2">
              <a href="">View more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="cardContainer3">
        <div className="cardContainerTop">
          <h2>Blogs</h2>
        </div>
        <div className="cardContainerCards">
          <div className="card">
            <div className="icon">
              <img src="assets/ho.png" alt="" />
            </div>
            <div className="content">
              <span>Real Estate, Analysis</span>
              <div className="date">
                <div className="datelogo">
                  <div className="datelogoLeft">
                    <h4>09 Jun 2022</h4>
                  </div>
                  <span>By Admin</span>
                </div>
              </div>
              <h3>Guide for personal property Buying</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
            </div>
            <div className="cardLink">
              <a href="">
                <button className="bt">
                  View more <span>→</span>
                </button>
              </a>
              <span href="">INR 3000/Project</span>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="assets/ho1.png" alt="" />
            </div>
            <div className="content">
              <span>Real Estate, Analysis</span>
              <div className="date">
                <div className="datelogo">
                  <div className="datelogoLeft">
                    <h4>09 Jun 2022</h4>
                  </div>
                  <span>By Admin</span>
                </div>
              </div>
              <h3>Guide for personal property Buying </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
            </div>
            <div className="cardLink">
              <a href="">
                <button className="bt">
                  View more <span>→</span>
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src="assets/ho2.png" alt="" />
            </div>
            <div className="content">
              <span>Real Estate, Analysis</span>
              <div className="date">
                <div className="datelogo">
                  <div className="datelogoLeft">
                    <h4>09 Jun 2022</h4>
                  </div>
                  <span>By Admin</span>
                </div>
              </div>
              <h3>Guide for personal property Buying </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
            </div>
            <div className="cardLink">
              <a href="">
                <button className="bt">
                  View more <span>→</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="formInner">
          <div className="formLeft">
            <h4>Get In Touch With Us To Connect</h4>
            <span>Contact us</span>
            <form action="">
              <div className="form2">
                <div className="formSingle">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="firstname" />
                </div>
                <div className="formSingle">
                  <label htmlFor="lname">Email address</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="lorem@gmail.com"
                  />
                </div>
              </div>
              <div className="form2">
                <div className="formSingle">
                  <label htmlFor="fname" />
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="formSingle">
                  <label htmlFor="lname">Country</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Bangalore"
                  />
                </div>
              </div>
              <div className="countryForm">
                <label htmlFor="country">Stages</label>
                <select id="country" name="country">
                  <option value="australia">
                    I have booked but registration is not done
                  </option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <div className="formBtn">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="formRight">
            <img src="/assets/f.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="footerinner">
      <div className="footerLogo">
        <img src="/assets/FooterLogo.png" alt="" />
      </div>
      <ul className="footerList">
        <h3>Company</h3>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Our Offerings</a>
        </li>
        <li>
          <a href="">Our Team</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <ul className="footerList">
        <h3>Useful</h3>
        <li>
          <a href="">Blogs</a>
        </li>
        <li>
          <a href="">FAQ’s</a>
        </li>
      </ul>
      <div className="socialAbout">
        <div className="singleSocial">
          <div className="socialImg">
            <img src="/assets/Vector (2).png" alt="" />
          </div>
          <div className="socialContent">
            <span>Email:</span>
            <p>support@inreglobal.com</p>
          </div>
        </div>
        <div className="singleSocial">
          <div className="socialImg">
            <img src="/assets/Vector (3).png" alt="" />
          </div>
          <div className="socialContent">
            <span>Phone:</span>
            <p>+91 | 7019305889</p>
          </div>
        </div>
      </div>
    </div>
    <div className="lastFooter">
      <div className="lastFooterLeft">
        <span>Copyright 2023. Designed by INRE Global</span>
      </div>
      <div className="lastFooterRight">
          <AiFillLinkedin/>
          <AiFillFacebook/>
          <AiFillTwitterCircle/>
          <AiOutlineInstagram/>
      </div>
    </div>
  </footer>
</>


  )
}

export default Content
