import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';





function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found</p>
//cleaning the return statement by creating a if statement to filter the year selected, calling it back the variable later.
    if (filteredExpenses. length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount} 
            date={expense.date} />))
    }
    
    return (
        <div>
            <Card className='expenses'>
                
                <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter = {filterChangeHandler} 
                />

                {expensesContent}
                
            </Card>
        </div>
    );

      
    
    

}

export default Expenses;