import * as CONST from "../constans/const";

import axios from "axios";

export function postList() {
  return async dispatch => {
    axios({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET",
      url: CONST.BASE_URL + "posts"
    })
      // axios
      //   .get(CONST.BASE_URL + "posts")
      .then(response => {
        // console.log(response);
        dispatch({
          type: CONST.GET_POST_LIST,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: CONST.GET_POST_LIST,
          payload: []
        });
      });
  };
}

export const addPost = post => {
  //   console.log(JSON.stringify(post));
  return dispatch => {
    return axios({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      url: CONST.BASE_URL + "posts",
      data: JSON.stringify(post)
    }).then(response => {
      dispatch({
        type: CONST.ADD_POST,
        payload: response.data
      });
    });
  };
};

export const editPost = post => {
  return dispatch => {
    return axios({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      url: CONST.BASE_URL + "posts/" + post.id,
      data: JSON.stringify(post)
    }).then(response => {
      dispatch({
        type: CONST.EDIT_POST,
        payload: response.data
      });
    });
  };
};

export const deletePost = post => {
  return dispatch => {
    return axios({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "DELETE",
      url: CONST.BASE_URL + "posts/" + post.id
    }).then(response => {
      dispatch({
        type: CONST.DELETE_POST,
        payload: post
      });
    });
  };
};
