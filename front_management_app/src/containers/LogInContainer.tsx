import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from 'components/Home';
import { Log_In_Request, LoginState } from 'store/modules/Login';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import 'antd/dist/antd.css';

interface LoginFormProps extends FormComponentProps {
  email?: string;
}

const HomeContainer: React.FC<LoginFormProps> = ({ form }) => {
  useEffect(() => {
    form.validateFields();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((err, { email, password }) => {
      if (!err) {
        console.log('Email: ', email, 'Password: ', password);
      }
    });
  };

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
