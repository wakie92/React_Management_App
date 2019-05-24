import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActioncreators }from 'redux';
// import * as workerListActions from 'store/modules/user';
import WorkerList from 'components/WorkersList';
import workers from 'libs/staffInfo';
class WorkerListContainer extends Component {

  state = {
    staffs : []
  }

  componentDidMount() {
    this.setState({staffs : workers})
  }  
  render() {
    console.log(this.state.staffs);
    const { staffs } = this.state;
    return (
      <WorkerList
        staffList = {staffs}
      />  
    );
  }
}

export default WorkerListContainer;