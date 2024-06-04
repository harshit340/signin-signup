"use client"
import {  Button, Card, Form, Image, Input, Select, SelectProps, Space, Typography } from 'antd'
import React from 'react'
import '../signup/signup-style.css'
import google from '../assets/lavelisProPic.jpg'

import { options ,sweetenerOptions,fatOilOptions,seasoningOptions} from '../Components/MainIngredient' 
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};




export default function SignUp() {
  return (
    <>
    <header className='header-style'>
      <span style={{padding:"30px 0 0 60px" , fontSize:"20px" , color:"white"}}>LOGO-SPACE</span>
      <div style={{padding:"30px 60px 0 0"  }}>
      <Button type='primary' style={{padding:"5px 20px 5px 20px"}}><span>SignUp</span></Button>
      </div>
    </header>
    <Card className='card-parent' >
    <span  className='heading-signup'>CraveFeed</span>
    <Space direction="vertical" size="middle">
     
     <Card className='card-child1' >
     <Image className="avatar" width={70} height={68} src={google.src}/>
     
    <div style={{textAlign:"start",paddingBottom:"20px",fontWeight:"bold"}}><span >-- Personal-Info --</span></div>
      
     <div className='align-first'>
      
     <Form.Item
      label={<span style={{color:'black'}}>First Name</span>}
      name="First Name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input/>
    </Form.Item>
     <Form.Item
      label={<span style={{color:'black'}}>Last Name</span>}
      name="Last Name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
     </div>
     <div>
     <Form.Item
      label={<span style={{color:'black'}}>Email</span>}
      name="email"
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
     </div>


     <div className='align-first'>

     <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

  
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
     </div>
     <div>
     <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
     </div>
     
     </Card>
     <Card className='card-child2'>
     <div style={{textAlign:"start",paddingBottom:"20px",fontWeight:"bold"}}><span >-- General-Info --</span></div>
      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      
     
      <Form.Item
        name="Main Ingredient"
        label="Main Ingredient"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Main Ingredient"
  
    options={options}
    optionRender={(option) => (
      <Space>
        {option.data.desc}
      </Space>
    )}
  /></Form.Item>
   <Form.Item
        name="Sweetner"
        label="Sweetner"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Sweeteners"
    
    options={sweetenerOptions}
    optionRender={(option) => (
      <Space>
        {option.data.desc}
      </Space>
    )}
  /></Form.Item>
      
      
      <Form.Item
        name="Fat/Oil"
        label="Fat/Oil"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Fat/Oil"
  
    options={fatOilOptions}
    optionRender={(option) => (
      <Space>
        {option.data.desc}
      </Space>
    )}
  /></Form.Item>
   <Form.Item
        name="Seasoning"
        label="Seasoning"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Seasoning"
    
    options={seasoningOptions}
    optionRender={(option) => (
      <Space>
        {option.data.desc}
      </Space>
    )}
  /></Form.Item>
     

      <Form.Item
        name="Allergence"
        label="Allergence"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
      
      
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Allergence"
  
    options={options}
    optionRender={(option) => (
      <Space>
        {option.data.desc}
      </Space>
    )}
  /></Form.Item>
     
     <Button type='primary'>SignUp</Button>
     
     </Card>
    </Space>
    </Card>
    </>
  )
}
