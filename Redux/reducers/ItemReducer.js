import { constants as types } from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState ={
    note: [],
    allNotes:[],
}


const addItemsReducer = (state = initialState,action) =>{
    switch(action.type){
      case types.ADD_ITEM:{
        const newNote = [...state.note, action.payload];
        AsyncStorage.setItem("notesData", JSON.stringify(newNote));
        return {
            ...state,
            note: newNote,
            allNotes: newNote 
        };
      }

                  
        case types.STORE_ITEM:{
            console.log("showing data from storeitem",action.payload)
            return{
                ...state,
                allNotes:action.payload
            }
        }
        default:
            return state;
    }

}

export const deleteItemReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.DELETE_ITEM: {
          try {
              console.log("Deleting item with ID:", action.payload);
              // Filter out the item to be deleted from both 'note' and 'allNotes'
              const updatedNote = state.note.filter(item => item.id !== action.payload);
              const updatedAllNotes = state.allNotes.filter(item => item.id !== action.payload);

              // Update AsyncStorage to reflect the changes
              AsyncStorage.setItem("notesData", JSON.stringify(updatedAllNotes))
                  .then(() => console.log("Item deleted successfully from AsyncStorage"))
                  .catch(error => console.error("Error updating AsyncStorage:", error));

              console.log("Updated note array:", updatedNote);
              console.log("Updated allNotes array:", updatedAllNotes);

              return {
                  ...state,
                  note: updatedNote,
                  allNotes: updatedAllNotes,
              };
          } catch (error) {
              console.error("Error deleting item:", error);
              return state;
          }
      }
      default:
          return state;
  }
};

module.exports ={
    addItemsReducer,
    deleteItemReducer
}