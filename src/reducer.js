import { TOGGLE_MESSAGE, TOGGLE_MESSAGEtwo } from './actions';

const initialState = {
  messageVisibility: false,
  messagetwoVisibility: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    case TOGGLE_MESSAGEtwo:
      return {
        ...state,
        messagetwoVisibility: !state.messagetwoVisibility,
      };
    default:
      return state;
  }
}
