export const Types = {
  MESSAGE: `person/MESSAGE`,
};

const INITIAL_STATE = {
  message: `HELLO WORLD`,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.MESSAGE:
      return { ...state, message: payload };
    default:
      return state;
  }
};

export const Creators = {
  setMessage: message => ({
    type: Types.MESSAGE,
    payload: message,
  }),
};
