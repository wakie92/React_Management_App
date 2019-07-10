import React, { useEffect } from 'react';
import { InputType, userRegisterActions } from 'store/modules/workerRegister';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from 'store/modules';
import InputForm from '../../InputForm';

interface IsProps {
  onChange: (
    e: React.FormEvent<HTMLInputElement>| React.FormEvent<HTMLSelectElement>,
    idNum: number,
    id: string,
  ) => void;
  onDate: (value: Date | null, idNum : number,  id: string) => void;
}
const FormTemplate: React.FunctionComponent<IsProps>  = ({
  onChange, onDate
}) => {
  const { register, inputData,  } = useSelector(({userRegister}: StoreState) => ({
    register: userRegister.register,
    inputData: userRegister.inputData,
  }))
  const dispatch  = useDispatch();
  let formElements: InputType[] = [];
  useEffect(() => {
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
        }
      });
    }
    dispatch(userRegisterActions.setInputData(formElements));
  },[inputData])  
  const form = inputData !== null && inputData.map((formType, idx) => {
    return (
      <InputForm
        elementConfig={formType.inputType.elementConfig}
        value={register[`${formType.id}`]}
        valid={formType.inputType.valid}
        rule={formType.inputType.validation}
        id={formType.id}
        onChange={onChange}
        onDate={onDate}
        key={formType.id}
        idNum={idx}
      />
    )
  })
  return (
    <>
    {form}
    </>
  )
}
export default React.memo(FormTemplate);