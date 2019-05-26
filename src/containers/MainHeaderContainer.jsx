import React, { Component } from 'react';
import MainHeader from 'components/UI/Main/MainHeader';
class MainHeaderContainer extends Component {

  state = {
    working : false,
  }

  onWorking = () => {
    this.setState({working : true})
  }

  onLeaving = () => {
    this.setState({working : false})
  }
  render() {
    const {onWorking, onLeaving} = this;
    console.log(this.state);
    return (
      <MainHeader
        working = {onWorking}
        leaving = {onLeaving}
      />
    );
  }
}

export default MainHeaderContainer;