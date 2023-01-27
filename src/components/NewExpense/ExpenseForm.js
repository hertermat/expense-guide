import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // Can Be used but might run into problems depending on complexity of code

    /*
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        entredAmount: '',
        enteredDate: ''
    });
    cleaner way to use useState() but a bit more complex
    */

     
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value) //Can be used, but might run into some problems depending on complexity of code
        /*
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        }); << // keeps it always up to date. always getting newest version
        Better and cleaner way to use useState() but a bit more complex
        */
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    // By standart, page will reload once the button is clicked, but we can prevent that from happening.
    //
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        //adding it to reset the fields of the form to an empty string after we click the submit add expense
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
 
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                 type='text' 
                 value={enteredTitle} 
                 onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                 type='number' 
                 min="0.01" 
                 step="0.01" 
                 value={enteredAmount} 
                 onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                 type='date' 
                 min="2019-01-01" 
                 max="2023-12-31" 
                 value={enteredDate} 
                 onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        
    </form>)
};

export default ExpenseForm;