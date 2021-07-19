import { getFirestore } from "redux-firestore";


export function addExpense(newExpense) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').add(newExpense)  
        } catch (error) {
            console.log(error);
        }
    }  
}

export  function getAllExpenseAction() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('expenses')
       .onSnapshot(
        (results)=>{
            let notes =[];
            results.forEach((doc)=>{
                notes.push({...doc.data(), id: doc.id});
            });
            dispatch({
                type: 'SET_ALL_EXPENSES',
                payload: notes,
              });
        },
        (err) => {
            console.log(err);
          }   
       );
       
    };
   
}

export function deleteExpense(id) { 
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    } 
}

export  function updateExpense(id,updatedExpense) {    
    console.log("nau",updatedExpense)
     
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('expenses').doc(id).update(updatedExpense);
        } catch (error) {
            console.log(error);
        }
    } 
}








//Before the Authentication
/* export function addExpense(newExpense) {
    return{
        type:"SET_ADD_EXPENSE",
        payload: newExpense
    }
}

export function deleteExpense(id) { 
    return{
       type:"SET_DELETE_EXPENSE",
       payload: id
    }
}

export  function updateExpense(id,updatedExpense) {    
    return{
       type:"SET_UPDATE_EXPENSE",
       payload:{ id:id , updatedExpenseinfo:updatedExpense}
    }
} */


//Adding the Authentication

/*export function addExpense(newContact) {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .add(newContact)
            .then(() => {
                dispatch({
                    type: "SET_ADD_EXPENSE",
                    payload: newContact
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


export function getAllContactsAction() {
    return (dispatch, state, { getFirestore }) => {
        const db = getFirestore()
        db.collection('Contacts')
            .get()
            //this gives you a snapshot of all the documents in the collection
            //you can give it any variable, which i have named results
            .then((results) => {
                let contactsindb = []//create an array to take all users from the database
                results.forEach((doc) => { //send each document to the users array
                    let contact = doc.data()
                    contact.id = doc.id
                    contactsindb.push(doc.data())
                })

                dispatch({ //now send the data to the reducer
                    type: "GET_ALL_CONTACTS",
                    payload: contactsindb
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }


}*/