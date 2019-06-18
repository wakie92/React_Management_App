import React from 'react';
import classes from './Register.module.scss';
import { Button, Form, DatePicker, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';


const Register: React.FC<FormComponentProps> = ({ form }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-pickers' : fieldsValue['date-pickers'].format('YYYY-MM-DD')
      };
      console.log('Received values of form: ', values);
    });
  };
  const checkPrice = (rule:any, value:any, callback:any) => {
    console.log(parseInt(value))
    if (parseInt(value)> 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="이름">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="생년월일">
        {form.getFieldDecorator('date-picker', config)(<DatePicker />)}
      </Form.Item>
      <Form.Item label="입사일">
        {form.getFieldDecorator('date-pickers', config)(<DatePicker />)}
      </Form.Item>
      <Form.Item label="연봉">
        {form.getFieldDecorator('연봉', {
          rules: [{ required: true,  validator : checkPrice}],
        })(<Input />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
    </Form>
  );
};
export default Form.create<FormComponentProps>({})(Register);
