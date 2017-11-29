import React, { Component } from 'react';
import axios from 'axios';
// import './style.css';
import logo1 from './images/react.png'
import logo2 from './images/react2.png'
import logo3 from './images/react3.png'

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
              <img style={{width: 200}} src={logo1} alt="alt"/>
              <img style={{width: 200}} src={logo2} alt="alt"/>
              <img style={{width: 200}} src={logo3} alt="alt"/>
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