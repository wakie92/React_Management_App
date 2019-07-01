import React, { Component, FormEvent } from 'react';
import RegisterForm from 'components/RegisterForm';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import {
  userRegisterActions,
  RegisterFormType,
} from 'store/modules/workerRegister';
import { bindActionCreators } from 'redux';
import Register from 'components/Register';

interface IProps {
  register: RegisterFormType;
  UserRegisterActions: typeof userRegisterActions;
}
interface IState {}
class RegisterContainer extends Component<IProps, IState> {
  handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    const { UserRegisterActions } = this.props;
    UserRegisterActions.setUserData({ value, key: name });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {UserRegisterActions} = this.props;
    const {email, workerName, join_date, grade, birth,salary} = this.props.register
    if([email, workerName, join_date, grade, birth].includes('') && salary === 0)
      return UserRegisterActions.setErrorMessage('모든항목을 다 채워주세요');
    
    
    try {

    } catch{

    }
  };
  // checkValidity( value, rules ) {
  //     let isValid = true;
  //     if(!rules) {
  //         return true;
  //     }
    
  //     if(rules.required) {
  //         isValid = value.trim() !== '' && isValid;
  //     }
  //     if(rules.minLength) {
  //         isValid = value.length >= rules.minLength && isValid
  //     }
    
  //     if (rules.isEmail) {
  //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //         isValid = pattern.test( value ) && isValid
  //     }
  //     return isValid;
  //   }
  render() {
    const { handleChange, handleSubmit } = this;
    console.log(this.props.register);

    return (
      <>
        <Register>
          <RegisterForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            data={this.props.register}
            errorMsg = {<p>에러메세지</p>}
          />
        </Register>
      </>
    );
  }
}

export default connect(
  ({ userRegister }: StoreState) => ({
    register: userRegister.register,
  }),
  dispatch => ({
    UserRegisterActions: bindActionCreators(userRegisterActions, dispatch),
  }),
)(RegisterContainer);
