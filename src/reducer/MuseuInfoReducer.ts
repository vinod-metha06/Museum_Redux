export const infoinitailState = {
  loading: true,
  info: {},
  error: '',
};

export const MuseumInfoReducer = (state = infoinitailState, action: any) => {
  switch (action.type) {
    case 'FETCH_INFO':
      console.log("fetch info")
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'error',
      };

    default:
      return state;
  }
};
