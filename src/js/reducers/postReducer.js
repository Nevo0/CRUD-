import * as CONST from "../constans/const";

const postReducer = (
  state = {
    postList: [],
    currentPost: {}
  },
  action
) => {
  switch (action.type) {
    case CONST.GET_POST_LIST: {
      return {
        ...state,
        postList: action.payload
      };
    }
    case CONST.GET_POST: {
      return {
        ...state,
        currentPost: action.payload
      };
    }
    case CONST.ADD_POST: {
      return {
        ...state,
        postList: [...state.postList, action.payload]
      };
    }
    case CONST.EDIT_POST: {
      return {
        ...state,
        currentPost: action.payload
      };
    }
    case CONST.DELETE_POST: {
      const postToDelete = state.postList.filter(
        post => post.id === action.payload.id
      )[0];
      const postToDeleteId = state.postList.indexOf(postToDelete);
      // state.authorList.splice(authorToDeleteId,1)
      return {
        ...state,
        currentPost: {},
        postList: [
          ...state.postList.slice(0, postToDeleteId),
          ...state.postList.slice(postToDeleteId + 1)
        ]
      };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
