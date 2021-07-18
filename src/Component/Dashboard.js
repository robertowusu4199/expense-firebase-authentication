import React from 'react'
import ExpenseForm from "./ExpenseForm";
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';
import { signOutAction } from '../actions/authActions';

function Dashboard(props) {

    function handlesignout() {
        props.signOutAction()
    }

    return (
        <div>
            <div className='row text-right' style={{ padding: 20 }}>
                <button onClick={signOutAction}>Log Out</button>
            </div>

            <div className="container">
                <div className="row">
                    <h3>My Notes</h3>
                    <div className="col-md-4 expense">

                        <ExpenseForm />
                    </div>

                    <div className="col-md-8 expenselist">
                        <ExpenseList />
                    </div>
                </div>

            </div>

        </div>

    )
}

const mapDispatchToProps = {
    signOutAction
  }
  export default connect(null, mapDispatchToProps)(Dashboard);