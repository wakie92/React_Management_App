import React, { FormEvent, useEffect, useCallback } from 'react';
import { WorkerInfo, workersActions } from 'store/modules/workers';
import { useSelector, useDispatch } from 'react-redux';
import { InputType, userRegisterActions } from 'store/modules/workerRegister';
import { StoreState } from 'store/modules';
import InputForm from 'components/InputForm';
import Register from 'components/Register';
import FormTemplate from 'components/UI/FormTemplate';

interface  IProps {
  history : any
}
const RegisterContainer : React.FunctionComponent<IProps> = ({history}) => {
  const { register, inputData, auth, authError } = useSelector(({userRegister}: StoreState) => ({
    register: userRegister.register,
    inputType: userRegister.inputType,
    inputData: userRegister.inputData,
    auth : userRegister.auth,
    authError : userRegister.authError 
  }))
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth) {
      alert(auth.message);
      dispatch(userRegisterActions.resetInputForm());
      history.push('/workersList');
    }
    if(authError) {
      switch(authError.status) {
        case 400 :
        case 409 : 
          alert(authError.data.message);
          break;
        default : 
          break;
      }
    }
  },[auth , authError, dispatch])

  const handleChange = useCallback((
    e: FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
    idNum: number,
    id: string,
  ) => {
    const { value } = e.currentTarget;
    setCheck(value, idNum, id);
  },[])

  const handleDate = useCallback((value: Date | null, idNum: number, id: string) => {
    setCheck(value, idNum, id);
  },[]);

  const setCheck = useCallback((value: string| Date | null, idNum : number, id : string) => {
    const rules =
      inputData !== null && inputData[idNum].inputType.validation.required;
    const validCheck = checkValidity(value, rules, id);
    dispatch(userRegisterActions.setValid({idNum, validCheck}));
    dispatch(userRegisterActions.setUserData({value, key : id}));
  },[])

  const checkValidity = useCallback((value: any, rules: boolean, id: string) => {
    let isValid = true;
    // if (!rules) {
    //   return true;
    // }
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
  },[])
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, name, join_date, grade, birth, salary } = register;
    dispatch(userRegisterActions.register({email, name, join_date, grade, birth, salary}))
  },[register])

  return (
    <Register onSubmit={handleSubmit}>
      <FormTemplate onChange = {handleChange} onDate = {handleDate}/>
    </Register>
  )
}

export default RegisterContainer;