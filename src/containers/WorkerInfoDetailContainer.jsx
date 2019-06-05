import React, { Component } from 'react';
import WorkerInfoDetail from 'components/WorkerInfoDetail';
import workers from 'libs/staffInfo';

class WorkerInfoDetailContainer extends Component {

  state = {
    staffList : []
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  componentDidMount() {
    return this.setState({staffList : workers})
  }
  render() {
    const { staffList } = this.state;
    console.log(this.props);
    let staffId = Number.parseInt(this.props.matchData.params.id);
    let staffInfo = null;
    if(staffList) {
      staffInfo = staffList.filter(staff => {
        return staff.id === staffId ? staff : null 
      })
    } 
    console.log(staffInfo);
    return (
      <WorkerInfoDetail staffInfo = {staffInfo}/>
    );
  }
}
export default WorkerInfoDetailContainer;