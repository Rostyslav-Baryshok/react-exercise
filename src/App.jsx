import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import GlobalStyle from 'style-config/GlobalStyle';
import mockTransactions from 'mock/transactions';
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions.transactions);
  }, []);
  return (
    <>
      <GlobalStyle />
      <TransactionTable transactions={transactions} />
      <TransactionForm />
    </>
  );
}

export default App;
