import React, { Component, FormEvent } from 'react';
import RegisterForm from 'components/RegisterForm';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import { userRegisterActions, RegisterState } from 'store/modules/workerRegister';
import { bindActionCreators } from 'redux';

interface IProps {
  UserRegisterActions : typeof userRegisterActions,
  freshMan : RegisterState,
}
interface IState {}
class RegisterContainer extends Component<IProps,IState> {
  handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    this.props.UserRegisterActions.setUserData({name, value});
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {};
  render() {
    const { handleChange, handleSubmit } = this;
    console.log(this.props.freshMan);
    return (
      <>
        <RegisterForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          data={this.props.freshMan}
        />
      </>
    );
  }
}

export default connect(({userRegister } : StoreState) => ({
  freshMan : userRegister
}),
  (dispatch) => ( {
    UserRegisterActions : bindActionCreators(userRegisterActions, dispatch)
  })
)(RegisterContainer);
