import { createStore, applyMiddleware, compose, } from "redux";
import ExpenseApp from "../Reducers/ExpenseReducer";
import firebase from '../firebase/config'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'


const store = createStore(ExpenseApp, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
    ));

export default store;