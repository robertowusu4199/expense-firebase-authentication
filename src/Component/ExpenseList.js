import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllExpenseAction } from '../actions/ExpenseAction';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    useEffect(() => {
        props.getAllExpenseAction();
    }, []);

    console.log('expenses',props.expenses)
    return (
        <div>
            <h1>Expense List</h1>
            
            {props.expenses.map((expense) => (<ExpenseItem expense={expense}  />))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
      expenses:state.expenses,
    }
}

const mapDispatchToProps = {
    getAllExpenseAction,
};

export default  connect(mapStateToProps,mapDispatchToProps)(ExpenseList);

