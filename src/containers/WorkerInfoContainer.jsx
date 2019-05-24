import React, { Component, Fragment } from 'react';
import ListInfo from 'components/WorkersList/ListInfo';
import { type } from 'os';

class WorkerInfoContainer extends Component {

  state = {
    selectedInfoJsx : null,
    selectedInfoType : ''
  }
  style  = {
    'display' : 'flex',
    'justifyContent' : 'center',
    'alignItems' : 'center',
    'fontWeight' : '550'
  }
  makeInfoBox = (info, infoType) => {
    let infoBox  = (
      <div style = {this.style}> {infoType} : {info}</div>
      )
    let { selectedInfoType } = this.state;
    if(selectedInfoType === '' || selectedInfoType !== infoType) {
      return this.setState({
        selectedInfoJsx : infoBox,
        selectedInfoType : infoType
      })
    } else if(selectedInfoType === infoType) {
      return this.setState ({
        selectedInfoJsx : null,
        selectedInfoType: ''
      })
    } 
  }
  onShowInfoBox = (info,infoType) => {
      switch(infoType) {
        case "사원번호" : 
        case "이메일" : 
        case "입사날짜" :
          return this.makeInfoBox(info, infoType);
        default : 
          return null;
      }
  }
  render() {
    const {staff} = this.props;
    const { onShowInfoBox } = this;
    const { selectedInfoJsx } = this.state;
    return (
      <ListInfo
      id = {staff.id}
      key = {staff.id}
      name = {staff.name}
      grade = {staff.grade}
      joinDate = {staff.join_date}
      email = {staff.email}
      clicked = {onShowInfoBox}
      selectedInfo = {selectedInfoJsx}
    />
    );
  }
}

export default WorkerInfoContainer;