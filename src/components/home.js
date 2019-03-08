import React, { Component } from "react";
import Economy from "./home/economy/economy";
import Incomegraph from "./home/economy/incomegraph";
import Currentprojects from "./home/economy/currentprojects";
import Comments from "./home/economy/comments";
import { connect } from "react-redux";
import * as actionType from "../store/action";
import Revenuechart from "./home/economy/revenuechart";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      economy: [
        { title: "Total Sale", amount: "56400", stats: "65" },
        { title: "Spendings", amount: "6400", stats: "35" },
        { title: "Income", amount: "38200", stats: "60" },
        { title: "Cancels", amount: "3400", stats: "25" }
      ],
      comments: [
        {
          approved: [
            {
              username: "udaya",
              avatar: "./assets/img/avatars/img1.jpg",
              type: "pro",
              comment: "Sample comment done",
              date_commented: "23 jan 2018"
            },
            {
              username: "sekar",
              avatar: "./assets/img/avatars/img2.jpg",
              type: "pro",
              comment: "This is test comment",
              date_commented: "02 feb 2018"
            }
          ],
          pending: [
            {
              username: "sarvesh",
              avatar: "./assets/img/avatars/img3.jpg",
              type: "pro",
              comment: "Sample pending comment",
              date_commented: "23 july 2018"
            },
            {
              username: "sathish",
              avatar: "./assets/img/avatars/img4.jpg",
              type: "pro",
              comment: "This is pending test comment",
              date_commented: "02 august 2018"
            }
          ]
        }
      ],
      current_projects: [
        {
          details: [
            {
              total_projects: 56,
              tasks: 2800,
              compleated: 1050,
              in_progress: 1500
            }
          ],
          projects: [
            { title: "one", assigned_task: 124, finished: 54, budget: 2600 },
            { title: "two", assigned_task: 860, finished: 86, budget: 2600 },
            { title: "one", assigned_task: 110, finished: 80, budget: 2600 }
          ]
        }
      ]
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = e => {
    e.preventDefault();
    const classList = document.querySelector("aside").classList;
    if (!classList.contains("toggled")) {
      classList.add("toggled");
      classList.add("action");
      classList.add("mini");
    } else {
      classList.remove("toggled");
      classList.remove("action");
      classList.remove("mini");
    }
  };

  render() {
    return (
      <div className="u-body">

        {/* <Economy economy={this.state.economy} /> */}
        <Revenuechart />

        <Incomegraph />

        <div className="row">
          <Currentprojects projects={this.state.current_projects} />

          <Comments
            comment={this.state.comments}
            clicked={this.props.changeTab}
            status={this.props.comments}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.commentStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTab: () => dispatch({ type: actionType.TABCHANGE })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
