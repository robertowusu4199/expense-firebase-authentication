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

export  function getAllExpenseActions() {
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
