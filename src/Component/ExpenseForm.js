import React, { useState } from "react"
import { connect } from "react-redux";
import {addExpense} from "../actions/ExpenseAction";

function ExpenseForm(props) {
    const [state,setstate] =useState({
        date:"",
        category:"",
        amount:"",
        item:"",
    })

    function handleOnChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        let expenseId = 10000 + Math.random() * 10000000;
        let expense = { ...state, id: expenseId}
        props.addExpense(expense);
    }

return(
    <div>
        <form>
        <h1>Record New Expense</h1>

        <div>
          <fieldset>
            <br />
            <label className="check">Date</label><br />
            <input type="date" id="textboxid" name="date"  value={state.date} onChange={handleOnChange}></input>
          </fieldset>
        </div> 

        <fieldset>
          <br />
          <label className="check">Category</label><br />
          <select name="category" id="cag1" value = {state.category} onChange = {handleOnChange}>
                        <option value="" disabled>Select</option>
                        <option value="Food and Drinkss">Food and Drinks</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Accomodation">Accomodation</option>
                        <option value="Housing">Housing</option>
                        <option value="Housing">Home Appeliance</option>
                        <option value="Housing">Phones</option>
                        <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </fieldset> 
        
        <div>
          <fieldset>
            <br />
            <label className="check">Item/Service</label><br />
            <textarea  id="textboxid2"  name="item" value={state.item} onChange={handleOnChange}></textarea>
          </fieldset>
        </div> 

        <div>
          <fieldset>
            <br />
            <label className="check">Amount</label><br />
            <textarea  id="textboxid2"  name="amount" value={state.amount} onChange={handleOnChange}></textarea>
          </fieldset>
        </div>

        <div>
          <br />
          <button type="button" id="b100" onClick={handleonSubmit}>Save</button><br />
        </div>

      </form>
    </div>
)



}

export default  connect(null, {addExpense})(ExpenseForm)