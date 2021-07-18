import React, { useState } from 'react';
import { connect } from "react-redux";
import { deleteExpense } from "../actions/ExpenseAction";
import { Modal } from "react-bootstrap"
import EditForm from './EditForm';

function ExpenseItem(props) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row">
         

            <div className="col-md-2">
                <span><h4>Date</h4>
                </span>{props.expense.date}
            </div>

            <div className="col-md-2">
                <span><h4>Category</h4>
                </span>{props.expense.category}
            </div>

            <div className="col-md-2">
                <span><h4>Amount</h4>
                </span>{props.expense.amount}
            </div>

            <div className="col-md-3">
                <span><h4>Item/Service</h4></span>
                {props.expense.item}
            </div>

            <div className="col-md-3"><h4>Action</h4>
                <button id="b1" onClick={handleShow}>Update</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Expense</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm expense={props.expense} hideModal={handleClose} />
                    </Modal.Body>
                </Modal>

            

                <button className="deletebtn" onClick={() => { props.deleteExpense(props.expense.id) }}>
                    Delete
                </button>
            </div>
        </div>
    );
}

let mapDispatchToProps = {
    deleteExpense,
}
let mapStateToProps = () => { }

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)