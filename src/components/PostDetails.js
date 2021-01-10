import React, { Component } from 'react';
import Swal from 'sweetalert2';
import './Post.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';

class PostDetails extends Component {
    confirmDeletion = () => {
        const {id} = this.props.info;

        Swal.fire({
            title: 'Remove this one?',
            text: "Are you sure?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DC143C',
            cancelButtonColor: '#0F52BA',
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
                Swal.fire(
                    'Proceeding',
                    'The post has been deleted',
                    'success'
                )
            }
        })
    }

    render() {
        const {id, title, body, category, datestamp} = this.props.info;

        return (
            <Paper className="post">
                <p className="post_title" cols="10">
                    <b><span className='post-preview'>
                    {title.length > 15 ? `${title.substr(0, 15)}...` : title}
                </span></b>
                </p>
                <Divider light />
                <p className="post_body">
                    <span className='post-preview'>
                        {body.length > 50 ? `${body.substr(0, 50)}...` : body}
                    </span>
                </p>
                <Divider light />
                <p className="post_category"><b>{category}</b></p>
                <Divider light />
                <p className="post_datestamp"><b>{moment(datestamp).fromNow()}</b></p>
                <div className="post_button">
                    <ul>
                        <li className="ind_button">
                            <Link to={`/edit/${id}`} className="btn btn-warning"> Edit </Link>
                        </li>
                        <li className="ind_button">
                            <Button variant="contained" color="secondary"
                                    onClick={this.confirmDeletion}> Delete
                            </Button>
                        </li>
                    </ul>
                </div>
            </Paper>
        );
    }
}
export default PostDetails;
