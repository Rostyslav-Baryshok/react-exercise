import React, { Component } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import { PrimaryButton } from 'components/user-interface/buttons';
import { FormikInput, FormikSelect } from 'components/user-interface/inputs';
import { currencies } from 'constants';
import styled from 'styled-components';
import { Label } from 'components/user-interface/Label';
// import { type } from '@testing-library/user-event/dist/type';

const StyledFormikForm = styled(FormikForm)`
  width: 500px;
  margin: 0 auto;
`;

export class Form extends Component {
  validationSchema = yup.object().shape({
    amount: yup.string().required('This field is required'),
    fee: yup.string().required('This field is required'),
  });

  options = [
    {
      label: currencies.USD,
      value: currencies.USD,
    },
    {
      label: currencies.UAN,
      value: currencies.UAN,
    },
  ];

  render() {
    return (
      <Formik
        initialValues={{ amount: '', fee: '' }}
        onSubmit={values =>
          this.props.onSubmit({
            ...values,
            type: this.props.type,
            created: new Date().getTime(),
          })
        }
        validationSchema={this.validationSchema}
      >
        {({ setFieldValue, values }) => (
          <StyledFormikForm>
            <Label>
              <FormikInput name="amount" type="input" />
            </Label>
            <Label>
              <FormikSelect
                field={{ name: 'fee' }}
                form={{ setFieldValue, value: values.fee }}
                options={this.options}
              />
            </Label>
            <PrimaryButton type="submit">Add {this.props.type}</PrimaryButton>
          </StyledFormikForm>
        )}
      </Formik>
    );
  }
}
