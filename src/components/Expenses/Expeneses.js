import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expeneses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectFilterYear) => {
        console.log(selectFilterYear)
        setFilteredYear(selectFilterYear);
    }

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })


    return (
        <>
            <Card className={'expenses'}>
                <ExpenseFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </>
    )
}
export default Expeneses;