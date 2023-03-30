import React ,{useState} from "react";

import "./ExpenseForm.css" ;
export default function ExpenseForm() {
    const [enteredTitle, setEntererdTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEntererdDate] = useState("");

    const titleChangeHandler = (event)=>{
        setEntererdTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEntererdDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        } ;
        console.log(expenseData);
        setEntererdTitle('');
        setEnteredAmount('');
        setEntererdDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min='0' 
                    step='1' 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min='2023-01-01' 
                    max="2025-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expenses__actions">
                <button type="submit">Add expenses</button>
            </div>
        </form>
    );
}