import React, { Component } from "react";
import PostForm from "./PostForm";

export default class PostDetails extends Component {
  state = {
    isOpenAddEditModal: false,
    isOpenDeleteModal: false
  };

  openAddEditModal(post) {
    this.setState({
      isOpenAddEditModal: true,
      init: post
    });
  }

  closeAddEditModal() {
    this.setState({ isOpenAddEditModal: false });
  }

  submitAddEditModal(data) {
    this.props.edit(data);
    this.setState({ isOpenAddEditModal: false });
  }

  render() {
    const { postList, delatePost, edit } = this.props;
    // console.log(this.props);
    // console.log(postList);

    return (
      <div className="container ">
        <div className="bg-white box-shadow py-5 px-4 ">
          <div className="row">
            {postList &&
              postList.map(post => {
                return (
                  <div
                    className="col-md-8 col-lg-6  col-xl-4  mb-2"
                    key={post.id}
                  >
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="card-title">
                          <h5>
                            <span className=" bg-info text-white ">
                              {post.id}
                            </span>
                            {post.post_title}
                          </h5>
                        </div>
                        <div className="card-text">
                          <p className="text-muted pb-3">{post.post_content}</p>
                        </div>
                      </div>
                      <div className="mx-3 my-3">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => this.openAddEditModal(post)}
                        >
                          Edytuj
                        </button>
                        <button
                          className="btn btn-danger btn-sm mx-3"
                          onClick={() => delatePost(post)}
                        >
                          Usuń
                        </button>
                      </div>
                      <div className="card-footer text-muted">
                        Posted on {post.post_date} by{" "}
                        {post.post_autor ? post.post_autor : "Googel"}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <PostForm
          isOpenModal={this.state.isOpenAddEditModal}
          onCloseModal={this.closeAddEditModal.bind(this)}
          onSubmit={this.submitAddEditModal.bind(this)}
          initialValues={this.state.init}
        />
      </div>
    );
  }
}
