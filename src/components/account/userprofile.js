import React, { Component } from "react";
import Userdetails from "./userdetails";
import Latestprojects from "./latestprojects";
import Experience from "./experience";
import Education from "./education";
import Certificates from "./certificates";

class userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_details: [
        {
          name: "Udaya Kumara",
          designation: "React developer",
          avatar: "./assets/img/avatars/img1.jpg",
          fb_link: "https://fb.com/udaya.kumara",
          tw_link: "https://twitter.com/udayakariyapla",
          slack_link: "#",
          li_link: "https://www.linked.com/udaya.kariyapla",
          about_user:
            "Hello, In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance in the achievement of increased business exposure and business sales. If your business already has a bunch of printed cards distributed to a number of potential customers and yet you do not see any improvement in your market reach, then it’s high time to revamp your old business card. Take out your business card and look at it in an objective point of view. If you were the customer, would you want to keep the card, or throw it away",
          rating: 4.8,
          total_reviews: 220,
          skills: [
            "react",
            "php",
            "js",
            "Laravel",
            "jquery",
            "css",
            "wordpress",
            "drupal"
          ]
        }
      ],
      latest_projects: [
        { title: "one", avatar: "fab fa-spotify", progress: 86 },
        { title: "two", avatar: "fab fa-google", progress: 36 },
        { title: "three", avatar: "fab fa-twitter", progress: 56 },
        { title: "four", avatar: "fab fa-facebook-f", progress: 90 }
      ],
      education: [
        {
          degree: "BS in compuster science",
          course_duration: "Dec 2012 - Feb 2014",
          university: "Horvard University",
          university_logo: "./assets/img/brands/harvard.png"
        },
        {
          degree: "M.Tech in  Communication",
          course_duration: "Dec 2011 - Feb 2012",
          university: "vishweshwaraiah Technological University",
          university_logo: "./assets/img/brands/berkeley.png"
        },
        {
          degree: "BE in Electronics & Communication",
          course_duration: "Dec 2007 - Feb 2011",
          university: "vishweshwaraiah Technological University",
          university_logo: "./assets/img/brands/berkeley.png"
        }
      ],
      certifications: [
        { course: "AWS cloud", duration: "Feb 2013", institute: "Google" },
        {
          course: "Data Science",
          duration: "Feb 2018",
          institute: "Hackers Rank"
        }
      ],
      experience: [
        {
          designation: "Jr. develeoper",
          duration: "2014-16",
          organization: "Virgosys soft pvt ltd",
          description: "Career started at virgosys pvt ltd"
        },
        {
          designation: "php develeoper",
          duration: "2016-17",
          organization: "Virgosys soft pvt ltd",
          description: "WOrked as backed developer at virgosys pvt ltd"
        },
        {
          designation: "Full stack developer",
          duration: "2017-18",
          organization: "IYUNO media group",
          description: "worked as full stack developer at IYUNO media group"
        },
        {
          designation: "Sr. develeoper",
          duration: "2017-18",
          organization: "VCNR technologies",
          description: "Senior developer at VCNR developer"
        },
        {
          designation: "React developer",
          duration: "2018-present",
          organization: "Questorm technologies",
          description: "React developer at Questorm technologies"
        }
      ]
    };
  }
  render() {
    return (
      <div className="u-body" style={{ 'textAlign': 'left' }}>
        <h2 className="h2">Profile</h2>
        <Userdetails details={this.state.user_details} />

        <div className="card mb-4">
          <header className="card-header d-flex align-items-center">
            <h2 className="h3 card-header-title">Latest Projects</h2>

            <ul className="list-inline ml-auto mb-0">
              <li className="list-inline-item mr-3">
                <a className="link-muted h3" href="#!">
                  <i className="far fa-bell" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="link-muted h3" href="#!">
                  <i className="fa fa-sliders-h" />
                </a>
              </li>
            </ul>
          </header>

          <div className="card-body">
            <div className="row">
              <Latestprojects projects={this.state.latest_projects} />
            </div>
          </div>
        </div>
        <div className="row">
          <Experience experience={this.state.experience} />
          <div className="col-lg-6">
            <Education education={this.state.education} />

            <Certificates certification={this.state.certifications} />
          </div>
        </div>
      </div>
    );
  }
}

export default userprofile;
