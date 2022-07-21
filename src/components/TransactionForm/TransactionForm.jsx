import React, { Component } from 'react';
import { Container } from 'components/user-interface/Container';
import {
  PrimaryButton,
  SecondaryButton,
} from 'components/user-interface/buttons';
import { transactionType } from '../../constants/transactionType';
import styled from 'styled-components';
import { Form } from './Form/Form';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
    };
  }

  ClickOnWithdraw() {
    this.setState({
      type: transactionType.WITHDRAW,
    });
  }

  ClickOnDeposit() {
    this.setState({
      type: transactionType.DEPOSIT,
    });
  }

  handleSubmit(transaction) {}

  render() {
    return (
      <Container>
        <ButtonsWrapper>
          <SecondaryButton
            onClick={() => {
              this.ClickOnWithdraw();
            }}
          >
            Withdraw
          </SecondaryButton>
          <PrimaryButton
            oonClick={() => {
              this.ClickOnDeposit();
            }}
          >
            Deposit
          </PrimaryButton>
        </ButtonsWrapper>
        {this.state.type && (
          <div>
            <Form type={this.state.type} />
          </div>
        )}
      </Container>
    );
  }
}
