import React, { useEffect, useCallback, FormEvent } from 'react';
import Home from 'components/Home';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import 'antd/dist/antd.css';
import axios from 'axios-base';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from 'store/modules';
import { LoginActions } from 'store/modules/login';

interface LoginFormProps extends FormComponentProps {
  email?: string;
  history: any;
}

const HomeContainer: React.FC<LoginFormProps> = ({ form, history }) => {

  const { isLoggedIn , userInfo } = useSelector(({login} : StoreState) => ({
    isLoggedIn : login.isLoggedIn,
    userInfo : login.userInfo,
  }))

  const dispatch = useDispatch();
  
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    console.log(value)
    dispatch(LoginActions.setInfo({name, value}))
  },[])

  useEffect(() => {
    form.validateFields();
  }, []);

  //로그인성공 받은 상태값마다 다르게 설정해야함 
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((err, value) => {
      const { email, password } = userInfo;
      if (!err) {
        console.log(email, password)
        dispatch(LoginActions.LoginReq({email, password}));
      }
    });
  },[userInfo]);

  const emailError =
    form.isFieldTouched('email') && form.getFieldError('email');
  const passwordError =
    form.isFieldTouched('password') && form.getFieldError('password');

  return (
    <Home>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
        >
          {form.getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '이메일 형식이 맞지 않습니다',
              },
              {
                required: true,
                message: '비밀번호를 확인해주세요',
              },
            ],
          })(
            <Input
              onChange = {handleChange}
              name = 'email'
              prefix={
                <Icon
                  type="mail"
                  style={{
                    color: 'rgba(0,0,0,.25)',
                  }}
                />
              }
              placeholder="E-mail"
            />,
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {form.getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your Password!',
              },
            ],
          })(
            <Input
              onChange = {handleChange}
              name = 'password'
              prefix={
                <Icon
                  type="lock"
                  style={{
                    color: 'rgba(0,0,0,.25)',
                  }}
                />
              }
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Home>
  );
};

export default Form.create<LoginFormProps>({})(HomeContainer);
