import React from 'react';
import Post from './Post';

class Posts extends React.Component{


    constructor(props){
        super(props);
        this.state={
            posts:[],
        };
    }
    loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map(
          (p) => new Post(p.id, p.title, p.body)
        );

        this.setState({ posts: posts });
      });
    }
    componentDidMount(){
        this.loadPosts();

    }
    componentDidCatch(error, info) {
    alert("Error occurred: " + error);
    }
    render(){
        return(
            <div>
                {this.state.posts.map((p)=>(
                    <div key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}
export default Posts;

