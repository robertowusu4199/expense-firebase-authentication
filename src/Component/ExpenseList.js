import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllExpenseActions } from '../actions/ExpenseAction';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    useEffect(() => {
        props.getAllExpenseActions();
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
    getAllExpenseActions,
};

export default  connect(mapStateToProps,mapDispatchToProps)(ExpenseList);

