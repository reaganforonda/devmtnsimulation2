const initialState = {
    name : '',
    address : '',
    city : '',
    state : '',
    zipcode : 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
