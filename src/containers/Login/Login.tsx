import React from 'react';

import RenderCount from './RenderedCount';
import { Form, Field, FormSpy } from 'react-final-form';

export interface LoginContainerProps {
    subscription?: any;
}
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
const required = (value: any) => (value ? undefined : 'Required');
const onSubmit = async (values: any) => {
    await sleep(300)
    window.alert(JSON.stringify(values))
}

const MyForm:React.FC<LoginContainerProps> = ({ subscription }) => (
    <Form
    onSubmit={onSubmit}
    subscription={subscription}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" validate={required} render={(props: any)=> (<input type="text" {...props.input}/>)}/>
        <Field name="lastName" validate={required} render={(props: any)=> (<input {...props.input}/>)} />
        <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <pre>
                <RenderCount/>
                {JSON.stringify(values)}
              </pre>
            )}
          </FormSpy>
      </form>
    )}
  />
  )

export default MyForm;