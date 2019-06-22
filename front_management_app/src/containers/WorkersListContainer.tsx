import React, { Component } from 'react';
import WorkerList from 'components/WorkersList';
import {bindActionCreators} from 'redux'
import { StoreState } from 'store/modules';
import {
  BoardContent, 
  
} from 'store/modules/board'
import { connect } from 'react-redux';
interface Iprops {
  setBoardList: null | BoardContent[];
}
interface IState {

}

class WorkersListContainer extends Component<Iprops, IState> {
  
  render() {
    console.log(this.props.setBoardList)
    return (
       <WorkerList/>
    );
  }
}

export default connect(
  ({board} :StoreState) => ({
    setBoardList : board.setBoardList
}))(WorkersListContainer);