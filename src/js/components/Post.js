import React from "react";

export default function Post(postList, edit, delatePost) {
  return (
    <div>
      {postList &&
        postList.map(post => {
          return (
            <div key={post.id}>
              <h5>
                <span class="d-inline-block bg-info text-white px-2 py-1">
                  {post.id}
                </span>
                {post.post_title}
              </h5>

              <p class="text-muted pb-3">{post.post_content}</p>
              <button
                class="btn btn-primary btn-sm"
                onClick={() => this.openAddEditModal(post)}
              >
                edit
              </button>
              <button
                class="btn btn-secondary btn-sm mx-3"
                onClick={() => delatePost(post)}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
}
