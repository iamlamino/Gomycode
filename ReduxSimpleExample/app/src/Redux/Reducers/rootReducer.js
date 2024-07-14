import { CHANGE_NAME } from "../Constants/action-types"

const initialState = {
    name : "Mouhamadou Lamine Thiam"
}

export const  rootReducer = (state = initialState, action) => {
  switch (action.type) {

  case CHANGE_NAME:
    return { 
      ...state,
      name: "Aida Sow",
     }

  default:
    return state
  }
}
