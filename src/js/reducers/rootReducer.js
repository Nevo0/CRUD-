import * as CONST from "../constans/const";

const rootReducer = (
  state = {
    loading: false
  },
  action
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default rootReducer;
