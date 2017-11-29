import React from 'react';
import axios from 'axios';

export default class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
    if (props.staticContext) {
      this.state = {posts: props.staticContext.initialData};
    } else {
      this.state = {posts: window.initialData || []};
    }
  }

  static need = params => {
    console.log('client', params)
    return axios.get('https://jsonplaceholder.typicode.com/comments', {params})
  };

  componentDidMount() {
    Info.need({postId: this.props.match.params.postId}).then((res) => this.setState({ posts: res.data }))
  }

  render () {
    return (
      <div>
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