import React, { Component } from 'react';
import PostDetails from './PostDetails';
import './Post.css';

class Listing extends Component {
    showPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;
        return (
            <div classname="post_list_item"><React.Fragment>
                {Object.keys(posts).map(post =>(
                    <PostDetails
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />

                ) )}
            </React.Fragment></div>
        )
    }

    render() {
        return (
            <div classname="post_list">
                {this.showPosts() }
            </div>
        );
    }
}

export default Listing;
