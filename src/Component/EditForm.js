import react, { useState } from "react"
import { connect } from "react-redux";
import { updateExpense } from "../actions/ExpenseAction";

function EditForm(props) {
    const [state,setstate] =useState({
        date: props.expense.date,
        category: props.expense.category,
        amount: props.expense.amount,
        item: props.expense.item,
    })

    function handleOnChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        
        let expense = { ...state, id: props.expense.id};
        props.updateExpense(props.expense.id, expense);
        props.hideModal();
    }

    return (
        <div>
            <form>
                <div>
                    <label>Date</label><br></br>
                    <input
                        type="date"
                        name="date" id="textboxid2"
                        value={state.date}
                        onChange={handleOnChange}
                    /><br></br>
                </div>

                <div>
                    <label>Category</label><br></br>
                    <select name="category" id="cag1" value={state.category} onChange={handleOnChange}>
                        <option value="" disabled>Select</option>
                        <option value="Food and Drinkss">Food and Drinks</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Accomodation">Accomodation</option>
                        <option value="Housing">Housing</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select><br></br>
                </div>

                <div>
                    <label>Item/Service</label><br></br>
                    <input
                        type="text"
                        name="item" id="textboxid2"
                        value={state.item}
                        onChange={handleOnChange}
                    /><br></br>
                </div>

                <div>
                    <label>Amount</label><br></br>
                    <input
                        type="text"
                        name="amount" id="textboxid2"
                        value={state.amount}
                        onChange={handleOnChange}
                    /><br></br>
                </div>


                <div>
                    <br></br>
                    <button type="button" className="createbtn" onClick={handleonSubmit}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

let mapDispatchToProps= {
    updateExpense,
};
let mapStateToProps = () => {};
export default connect (mapStateToProps, mapDispatchToProps) (EditForm);
