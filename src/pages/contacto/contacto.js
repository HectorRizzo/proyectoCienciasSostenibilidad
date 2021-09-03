import React,{useState} from 'react'
import {
    Card,
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  const { Option } = Select;

export const Contacto = () => {

    const residences = [
        {
          value: 'Ecuador',
          label: 'Ecuador',
          children: [
            {
              value: 'Guayaquil',
              label: 'Guayaquil',
              children: [
                {
                  value: 'Guayas',
                  label: 'Guayas',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
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
      
        const [form] = Form.useForm();
      
        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };
      
        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
            <Select
              style={{
                width: 100,
              }}
            >
              <Option value="86">+593</Option>
              <Option value="87">+87</Option>
            </Select>
          </Form.Item>
        );
        const suffixSelector = (
          <Form.Item name="suffix" noStyle>
            <Select
              style={{
                width: 70,
              }}
            >
              <Option value="USD">$</Option>
              <Option value="CNY">¥</Option>
            </Select>
          </Form.Item>
        );
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);
      
        const onWebsiteChange = (value) => {
          if (!value) {
            setAutoCompleteResult([]);
          } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
          }
        };
      
        const websiteOptions = autoCompleteResult.map((website) => ({
          label: website,
          value: website,
        }));

    return (
        <div>
            <Card style={{margin:"4rem"}}>
            <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['Ecuador', 'Guayas', 'Guayaquil'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="correo"
        label="Correo"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="asunto"
        label="Asunto"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Ubicación"
        label="Ciudad"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="telefono"
        label="teléfono"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="Comentario"
        label="Comentario"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          He leído los términos y condiciones
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="Enviar">
          Enviar
        </Button>
      </Form.Item>
    </Form>
            </Card>

        </div>
    )
}
