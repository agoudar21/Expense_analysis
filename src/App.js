import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses" ;
import NewExpense from "./components/NewExpense/NewExpense" ;

const DUMMY_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
