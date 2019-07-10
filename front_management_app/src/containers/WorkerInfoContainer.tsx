import React, { Component, useState } from 'react';
import ListInfo from 'components/WorkersList/ListInfo';
import { WorkerInfo, workersActions } from 'store/modules/workers';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import { bindActionCreators } from 'redux';

interface IProps {
  staff: WorkerInfo;
  key: number;
  WorkerActions: typeof workersActions;
  selectedInfoType: string;
  selectedInfo: boolean;
}

interface IState {
  selectedInfoJSX: JSX.Element;
}
class WorkerInfoContainer extends Component<IProps, IState> {
  style: Object = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '550',
  };
  state = {
    selectedInfoJSX: <div style={{ visibility: 'hidden' }} />,
  };
  makeInfoBox = (info: null | number | string, infoType: string) => {
    let { selectedInfoType, WorkerActions } = this.props;
    let infoBox: JSX.Element = (
      <div style={this.style}>
        {infoType} : {info}
      </div>
    );
    if (selectedInfoType === '' || selectedInfoType !== infoType) {
      WorkerActions.selectedInfoType(infoType);
      WorkerActions.selectedInfo(true);
      this.setState({ selectedInfoJSX: infoBox });
    } else if (selectedInfoType === infoType) {
      this.setState({
        selectedInfoJSX: <div style={{ visibility: 'hidden' }} />,
      });
      WorkerActions.selectedInfo(false);
      WorkerActions.selectedInfoType('');
    }
  };
  onShowInfoBox = (info: null | number | string, infoType: string) => {
    switch (infoType) {
      case '사원번호':
      case '이메일':
      case '입사날짜':
        return this.makeInfoBox(info, infoType);
      default:
        return null;
    }
  };
  render() {
    const { staff, selectedInfo } = this.props;
    const { onShowInfoBox } = this;
    const { selectedInfoJSX } = this.state;
    return (
      <ListInfo
        id={staff.id}
        key={staff.id}
        name={staff.name}
        grade={staff.grade}
        joinDate={staff.join_date}
        email={staff.email}
        clicked={onShowInfoBox}
        selectedInfo={selectedInfo}
        selectedInfoJSX={selectedInfoJSX}
      />
    );
  }
}

export default connect(
  ({ workers }: StoreState) => ({
    selectedInfoType: workers.selectedInfoType,
    selectedInfo: workers.selectedInfo,
  }),
  dispatch => ({
    WorkerActions: bindActionCreators(workersActions, dispatch),
  }),
)(WorkerInfoContainer);
