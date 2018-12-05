import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }

    PostFetch() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({
                post: json

            }))
    }


    render() {
        return (

            <div className="post">
                {this.state.post.map((item) => 
                    <div>
                    <div>{item.id}</div>
                        <div>{item.userId}</div>
                        <div>{item.title}</div>
                        <div>{item.body}</div>
               </div>
            )
                }
            </div>

        )


    }
}
export default Post


