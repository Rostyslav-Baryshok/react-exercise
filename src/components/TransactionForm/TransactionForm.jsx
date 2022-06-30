import { Container } from 'components/user-interface/Container';
import { PrimaryButton } from 'components/user-interface/buttons/PrimaryButton';
import React, { Component } from 'react';

export class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
    };
  }

  ClickOnWithdraw() {
    this.setState({
      type: 'withdraw',
    });
  }

  ClickOnDeposit() {
    this.setState({
      type: 'deposit',
    });
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <PrimaryButton
          onClick={() => {
            this.ClickOnWithdraw();
          }}
        >
          Withdraw
        </PrimaryButton>
        <PrimaryButton
          oonClick={() => {
            this.ClickOnDeposit();
          }}
        >
          Deposit
        </PrimaryButton>
      </Container>
    );
  }
}
