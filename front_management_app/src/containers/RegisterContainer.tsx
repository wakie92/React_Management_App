import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import {
  userRegisterActions,
  RegisterFormType,
} from 'store/modules/workerRegister';
import { bindActionCreators } from 'redux';
import Register from 'components/Register';
import InputForm from 'components/InputForm';

interface IProps {
  register: any;
  inputType: {};
  inputData: any;
  UserRegisterActions: typeof userRegisterActions;
}
interface IState {}

class RegisterContainer extends Component<IProps, IState> {
  handleChange = (e: FormEvent<HTMLInputElement>, idNum: number, id: string) => {
    const { value, name } = e.currentTarget;
    const { UserRegisterActions, inputData } = this.props;
    const rules = inputData[idNum].inputType.validation;
    const validCheck = this.checkValidity(value, rules, id)
    console.log(validCheck);
    console.log(inputData);
    UserRegisterActions.setValid({idNum,validCheck});
    UserRegisterActions.setUserData({ value, key: name });
    
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { UserRegisterActions } = this.props;
    const {
      email,
      workerName,
      join_date,
      grade,
      birth,
      salary,
    } = this.props.register;
    if (
      [email, workerName, join_date, grade, birth].includes('') &&
      salary === 0
    )
      try {
      } catch {}
  };
  checkValidity(value: any, rules: { required : boolean}, id : string) {
    //유효성검사
    let isValid = true;
    if(!rules) {
        return true;
    }
    if(rules) {
        isValid = value.trim() !== '' && isValid;
    }
    // if(rules.minLength) {
    //     isValid = value.length >= rules.minLength && isValid
    // }
    if (id === 'email') {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
    return isValid;
  }
  render() {
    const { handleChange, handleSubmit } = this;
    const { inputType, register, UserRegisterActions } = this.props;
    let formElements = [];
    for (let data in register) {
      formElements.push({
        id: data,
        inputType: {
          elementConfig: {
            name: data,
            placeholder: data.toUpperCase(),
          },
          validation: {
            required: true,
          },
          valid: false,
          errorMessage : ''
        },
      });
    }
    const form = formElements.map((formType, idx) => {
      return (
        <InputForm
          elementConfig={formType.inputType.elementConfig}
          value={register[`${formType.id}`]}
          valid={formType.inputType.valid}
          rule={formType.inputType.validation}
          id={formType.id}
          onChange={handleChange}
          key={formType.id}
          idNum={idx}
        />
      );
    });
    UserRegisterActions.setInputData(formElements);
    return <Register onSubmit={handleSubmit}>{form}</Register>;
  }
}

export default connect(
  ({ userRegister }: StoreState) => ({
    register: userRegister.register,
    inputType: userRegister.inputType,
    inputData: userRegister.inputData,
  }),
  dispatch => ({
    UserRegisterActions: bindActionCreators(userRegisterActions, dispatch),
  }),
)(RegisterContainer);
