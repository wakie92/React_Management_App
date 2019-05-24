import React, { Component, Fragment } from 'react';
import ListInfo from 'components/WorkersList/ListInfo';
import { type } from 'os';

class WorkerInfoContainer extends Component {

  state = {
    selectedInfoJsx : null
  }
  style  = {
    'display' : 'flex',
    'justify-content' : 'center',
    'align-items' : 'center'
  }
  onShowInfoBox = (info,infoType) => {
    let infoBox = ''
      switch(infoType) {
        case "id" : 
        infoBox  = (
            <div style = {this.style}> 사원번호 : {info}</div>
             );
          return this.setState({selectedInfoJsx : infoBox})
        case "email" : 
        infoBox  = (
            <div style = {this.style}> 이메일 : {info}</div>
             );
          return this.setState({selectedInfoJsx : infoBox})
        case "joinDate" : 
        infoBox  = (
            <div style = {this.style}> 입사날짜 : {info}</div>
             );
          return this.setState({selectedInfoJsx : infoBox})
        default : 
          return null;
      }
  }
  render() {
    const {staff} = this.props;
       
    return (
      <ListInfo
      id = {staff.id}
      key = {staff.id}
      name = {staff.name}
      grade = {staff.grade}
      joinDate = {staff.join_date}
      email = {staff.email}
      clicked = {this.onShowInfoBox}
      selectedInfo = {this.state.selectedInfoJsx}
    />
    );
  }
}

export default WorkerInfoContainer;