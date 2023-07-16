import { Container, } from 'semantic-ui-react';
import './App.css';
import MainHeader from './Component/MainHeader';
import NewEntryForm from './Component/NewEntryForm';
import DisplayBalance from './Component/DisplayBalance';
import DisplayBalances from './Component/DisplayBalances';
import EntryLine from './Component/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value='2550.53' size='small' />
      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLine description='Income' value='$10.00 ' />
      <EntryLine description='Expense' value='$10.00 ' isExpense />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
