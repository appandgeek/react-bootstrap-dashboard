import React, { Component } from "react";
import Basictable from "./basictable";
import Advancetable from "./advancedtable";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

class Tables extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="u-body" style={{ 'textAlign': 'left' }}>
        <h1 className="h2 font-weight-semibold mb-4">Tables</h1>
        <Basictable
          basic={this.props.basic_table}
          submit={this.props.handleSubmit}
          handled={this.props.deleteBasicRecord}
          showmodal={this.props.showModal}
          addModal={this.props.addModal}
          handleshort={this.props.handleShort}
          shortmenu={this.props.shortMenu}

        />

        <Advancetable
          basic={this.props.advanced}
          clicked={this.props.deleteRecord}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    advanced: state.advanced_tbl,
    basic_table: state.basic_table,
    showModal: state.addModal,
    shortMenu: state.shortMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRecord: id => dispatch({ type: actionTypes.DELETERECORD, val: id }),
    deleteBasicRecord: nam =>
      dispatch({ type: actionTypes.DELETE_BASIC_RECORD, name: nam }),
    addModal: () => dispatch({ type: actionTypes.ADD_MODAL }),
    handleShort: () => dispatch({ type: actionTypes.SHORTMENU }),
    handleSubmit: event => {
      event.preventDefault();
      dispatch({
        type: actionTypes.ADD_NEW_ELEMENT,
        result: new FormData(event.target)
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tables);
