const initialState = {
    name : '',
    address : '',
    city : '',
    state : '',
    zipcode : 0,
    img : '',
    mortgage : 0,
    rent : 0
};


// ####################
// ### Action Types ###
// ####################
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UDPATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UDPATE_ZIPCODE";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UDPATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const DONT_YOU_FOREGT_ABOUT_ME = "DONT_YOU_FORGET_ABOUT_ME";

// #######################
// ### ACTION CREATORS ###
// #######################
export function cancel(){
    return {
        type : DONT_YOU_FOREGT_ABOUT_ME,
        payload : initialState
    }
}


export function updateName(name){
    return {
        type : UPDATE_NAME,
        payload : name
    }
};

export function updateAddress(address){
    return {
        type : UPDATE_ADDRESS,
        payload : address
    }
};

export function updateCity(city){
    return {
        type : UPDATE_CITY,
        payload : city
    }
};

export function updateState(state){
    return {
        type : UPDATE_STATE,
        payload : state
    }
};

export function updateZipcode(zipcode){
    return {
        type : UPDATE_ZIPCODE,
        payload : zipcode
    }
};

export function updateIMG(img){
    return {
        type : UPDATE_IMG,
        payload : img
    }
};

export function updateMortgage(mortgage){
    return {
        type : UPDATE_MORTGAGE,
        payload : mortgage
    }
};


export function updateRent(rent){
    return {
        type : UPDATE_RENT,
        payload : rent
    }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case UPDATE_NAME:
      return Object.assign({}, state, {name : action.payload});
      case UPDATE_ADDRESS:
      return Object.assign({}, state, {address : action.payload});
      case UPDATE_CITY:
      return Object.assign({}, state, {city : action.payload});
      case UPDATE_STATE:
      return Object.assign({}, state, {state : action.payload});
      case UPDATE_ZIPCODE:
      return Object.assign({}, state, {zipcode : action.payload});
      case UPDATE_IMG:
      return Object.assign({}, state, {img : action.payload});
      case UPDATE_MORTGAGE:
      return Object.assign({}, state, {mortgage : action.payload});
      case UPDATE_RENT:
      return Object.assign({}, state, {rent : action.payload});
      case DONT_YOU_FOREGT_ABOUT_ME:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
