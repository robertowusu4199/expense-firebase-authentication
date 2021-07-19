const initialState = {
    expenses: []
  };

const ExpenseApp = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ALL_EXPENSES":
        let contactsfromdb = action.payload
        return {
            contacts : contactsfromdb
        }
    default:
        return state;
    }

}
  
export default ExpenseApp;

















//The old contactReducer
{/*const ExpenseApp = (state = initialState, action) => {
  switch (action.type) {
      case "SET_ADD_EXPENSE":
        return { ...state, expenses: [...state.expenses, action.payload] }
        
      case "SET_DELETE_EXPENSE":
        var id=action.payload;
        var newExpense = state.expenses.filter((expense) => expense.id !==id);
        return {expenses:newExpense}

      case "SET_UPDATE_EXPENSE":
        var id=action.payload.id;
        var updatedinfo=action.payload.updatedExpenseinfo;
        var Expenseafterupdate = state.expenses.map((expense) =>{
        if (expense.id===id) {
        return updatedinfo
        }
        return expense
        })
        return{expenses:Expenseafterupdate}
  default:
      return state;
  }

}

//From the ExpenseActions
/*case "GET_ALL_CONTACTS":
let contactsfromdb = action.payload//payload contains the data that is in the db
return {
    contacts : contactsfromdb
}*/}