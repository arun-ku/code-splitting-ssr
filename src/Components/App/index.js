import React, { Component } from 'react';
import axios from 'axios';
// import './style.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
    if (props.staticContext) {
      this.state = {posts: props.staticContext.initialData};
    } else {
      this.state = {posts: window.initialData || []};
    }
  }

  componentDidMount() {
    App.need().then(res => this.setState({posts: res.data}))
  }

    render() {
        return (
            <div className="main">
              React App
              {
                this.state.posts.map((post, key) => (
                  <div className="post" key={key}>
                    {post.body}
                  </div>
                ))
              }
            </div>
          
        );
    }
}

App.need = () => axios.get('https://jsonplaceholder.typicode.com/comments');