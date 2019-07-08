import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import {
  userRegisterActions,
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
  WorkersActions: typeof workersActions;
  UserRegisterActions: typeof userRegisterActions;
  history: any;
}
interface IState {}

class RegisterContainer extends Component<IProps, IState> {
 
  handleChange = (
    e: FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
    idNum: number,
    id: string,
  ) => {
    const { value } = e.currentTarget;
    this.setCheck(value, idNum, id);
  };

  handleDate = (value: Date | null, idNum: number, id: string) => {
    this.setCheck(value, idNum, id);
  };

  setCheck = (value: string| Date | null, idNum : number, id : string) => {
    const { UserRegisterActions, inputData } = this.props;
    const rules =
      inputData !== null && inputData[idNum].inputType.validation.required;
    const validCheck = this.checkValidity(value, rules, id);
    UserRegisterActions.setValid({ idNum, validCheck });
    UserRegisterActions.setUserData({ value, key: id });
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { UserRegisterActions, history, inputData } = this.props;
    const { email, workerName, join_date, grade, birth, salary } = this.props.register;

    updateNewWorker({
      email,
      name: workerName,
      join_date,
      grade,
      birth,
      salary,
    }).then(res => {
      if (res.status === 200) {
        UserRegisterActions.resetInputForm();
        alert(res.data.message);
        return history.push(`/workersList`);
      }
    }).catch(e => {
      const {data, status} = e.response
      switch(status) {
        case 409 : 
        case 400 : 
          alert(data.message);
          break;
        default :
          break;
      }
    });
  };
  checkValidity(value: any, rules: boolean, id: string) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (id === 'join_date' || id === 'birth') {
      isValid = true;
    } else{
      isValid = value.trim() !== '' && isValid;
    }
    if (id === 'salary') {
      const pattern = /[^0-9]/g;
      isValid = !pattern.test(value) && isValid;
    }
    if (id === 'email') {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }
  render() {
    const { handleChange, handleSubmit, handleDate } = this;
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
          errorMessage: '',
        },
      });
    }
    UserRegisterActions.setInputData(formElements);
    const form =
      inputData !== null &&
      inputData.map((formType, idx) => {
        return (
          <InputForm
            elementConfig={formType.inputType.elementConfig}
            value={register[`${formType.id}`]}
            valid={formType.inputType.valid}
            rule={formType.inputType.validation}
            id={formType.id}
            onChange={handleChange}
            onDate={handleDate}
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
    WorkersActions: bindActionCreators(workersActions, dispatch),
  }),
)(RegisterContainer);
