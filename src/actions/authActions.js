import { getFirebase } from "react-redux-firebase"

export function signup(username, email, password) {
    return async(dispatch, state ,{getFirebase})=>{
        const firebase =getFirebase();
        try {
            const user = 
            await firebase.auth().createUserWithEmailAndPassword(username, email, password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
}

export function login(email , password) {
    return async(dispatch, state ,{getFirebase})=>{
        const firebase =getFirebase();
        try {
            const userCredentials = 
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(userCredentials)
        } catch (error) {
            console.log(error)
        }
    }
}

export function signOutAction(){
    return async(dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase()
        try {
            await firebase.auth().signOut()
        } 
        catch (error) {
            console.log(error)
        }
    }
}