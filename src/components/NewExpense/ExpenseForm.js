import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    /*
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
     Can Be used but might run into problems depending on complexity of code*/

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        entredAmount: '',
        enteredDate: ''
    });

     
    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value) <<< Can be used, but might run into some problems depending on complexity of code
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };
    const amountChangeHandler = (event) => {
        // keeps it always up to date. always getting newest version
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;