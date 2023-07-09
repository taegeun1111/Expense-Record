import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";

const Expeneses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectFilterYear) => {
        console.log(selectFilterYear)
        setFilteredYear(selectFilterYear);
    }

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0){
        expensesContent =  filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <>
            <Card className={'expenses'}>
                <ExpenseFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                {expensesContent}
            </Card>
        </>
    )
}
export default Expeneses;