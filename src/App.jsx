import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import GlobalStyle from 'style-config/GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <TransactionTable />
      <TransactionForm />
    </>
  );
}

export default App;
