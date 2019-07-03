import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import {
  userRegisterActions,
  RegisterFormType,
  InputType,
} from 'store/modules/workerRegister';
import { bindActionCreators } from 'redux';
import Register from 'components/Register';
import InputForm from 'components/InputForm';
import { workersActions } from 'store/modules/workers';
import { updateNewWorker } from 'libs/api';

interface IProps {
  register: any;
  inputType: {};
  inputData: null | InputType[];
  WorkersActions : typeof workersActions;
  UserRegisterActions: typeof userRegisterActions;
}
interface IState {}

class RegisterContainer extends Component<IProps, IState> {

  handleChange = (e: FormEvent<HTMLInputElement> , idNum: number, id: string) => {
    const { value, name } = e.currentTarget;
    const { UserRegisterActions, inputData } = this.props;
    const rules = inputData !== null && inputData[idNum].inputType.validation.required;
    const validCheck = this.checkValidity(value, rules, id)
    UserRegisterActions.setValid({idNum,validCheck});
    UserRegisterActions.setUserData({ value, key: name });
  };

  handleDate = (value : Date |null,id : string) => {
    const { UserRegisterActions }= this.props;
    UserRegisterActions.setUserData({value, key : id})
  }
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { UserRegisterActions ,inputData, WorkersActions} = this.props;
    const {
      email,
      workerName,
      join_date,
      grade,
      birth,
      salary,
    } = this.props.register;
    // if (
    //   [email, workerName, join_date, grade, birth].includes('') &&
    //   salary === 0
    // )
    console.log('clicked')
    updateNewWorker({email,workerName,
      join_date,
      grade,
      birth,
      salary})
  };
  checkValidity(value: any, rules: boolean, id : string) {
    //유효성검사
    let isValid = true;
    if(!rules) {
        return true;
    }
    if(rules) {
        isValid = value.trim() !== '' && isValid;
    }
    if (id === 'email') {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
    return isValid;
  }
  render() {
    const { handleChange, handleSubmit ,handleDate} = this;
    const { inputData, register, UserRegisterActions } = this.props;
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
    UserRegisterActions.setInputData(formElements);
    console.log(inputData);
    const form = inputData !== null && inputData.map((formType, idx) => {
      return (
        <InputForm
          elementConfig={formType.inputType.elementConfig}
          value={register[`${formType.id}`]}
          valid={formType.inputType.valid}
          rule={formType.inputType.validation}
          id={formType.id}
          onChange={handleChange}
          onDate = {handleDate}
          key={formType.id}
          idNum={idx}
        />
      );
    });
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
    WorkersActions : bindActionCreators(workersActions, dispatch)
  }),
)(RegisterContainer);
