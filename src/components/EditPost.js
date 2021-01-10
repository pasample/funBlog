import React, { Component } from 'react';

class EditPost extends Component {
    authorRef = React.createRef();
    titleRef = React.createRef();
    contentRef = React.createRef();
    categoryRef = React.createRef();

    editPost = (e) => {
        e.preventDefault();
        const post = {
            author: this.authorRef.current.value,
            title: this.titleRef.current.value,
            body: this.contentRef.current.value,
            category: this.categoryRef.current.value,
            id: this.props.post.id
        }
        this.props.editPost(post);
    }

    loadForm = () => {
        if (!this.props.post) return null;
        const {title, author, body, category} = this.props.post;

        return (
            <form onSubmit={this.editPost} className="col-md-10">
                <legend className="text-center">Edit Post</legend>

                <div className="form-group">
                    <input type="text" ref={this.titleRef} className="form-control"
                           defaultValue={title} placeholder="Title..."
                    />
                </div>

                <div className="form-group">
                    <input type="text" ref={this.authorRef} className="form-control"
                           defaultValue={author} placeholder="Name..."
                    />
                </div>

                <div className="form-group">
                    <textarea className="form-control" rows="7"cols="25" ref={this.contentRef}
                              defaultValue={body} placeholder="What's on your mind?...">
                    </textarea>
                </div>

                <div className="form-group">
                    <select ref={this.categoryRef} className="form-control" defaultValue={category}>
                        <option value="technology">Technology</option>
                        <option value="vacations">Vacations</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" >Save changes</button>
            </form>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
        );
    }
}

export default EditPost;
