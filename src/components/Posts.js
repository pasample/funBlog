import React, { Component } from 'react';
import Listing from './Listing';
import './Post.css';

class Posts extends Component {
    render() {
        return (
            <form className="col-md-10">
                <legend className="page_title">Say Good-bye to 2020!</legend>
                <Listing
                    posts={this.props.posts}
                    deletePost={this.props.deletePost}
                />
            </form>
        );
    }
}

export default Posts;
