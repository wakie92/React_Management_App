import React, { useEffect } from 'react';
import classes from './Home.module.scss';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import 'antd/dist/antd.css';
interface LoginFormProps extends FormComponentProps {
  email?: string;
  logIn: any;
  logOut: any;
}

const Home: React.FC<LoginFormProps> = ({ form, logIn, logOut }) => {
  useEffect(() => {
    form.validateFields();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const emailError =
    form.isFieldTouched('email') && form.getFieldError('email');
  const passwordError =
    form.isFieldTouched('password') && form.getFieldError('password');

  console.log(logIn);

  return (
    <div className={classes.Home_box}>
      <div className={classes.Home_outbox}>
        <div className={classes.Home_input}>
          <div className={classes.Home_content}>
            <ul className={classes.Home_message}>
              <li className={classes.Home_message_li}>Welcome Back</li>
            </ul>
            <Form onSubmit={handleSubmit} className={classes.Home_inputbox}>
              <Form.Item
                validateStatus={emailError ? 'error' : ''}
                help={emailError || ''}
              >
                {form.getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'fuck',
                    },
                    {
                      required: true,
                      message: 'Please input your email!',
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
                <Button type="primary" htmlType="submit" onClick={logIn}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={classes.Picture}>
          <img
            src="https://dspncdn.com/a1/media/236x/ed/d7/da/edd7dad1071f3c982dd9efab0b68af41.jpg"
            alt="Mistake"
          />
        </div>
      </div>
    </div>
  );
};

export default Form.create<LoginFormProps>({})(Home);
