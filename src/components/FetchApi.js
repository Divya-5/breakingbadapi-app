import React, { Component } from 'react'
import './fetchApi.css';


class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        const url = "https://www.breakingbadapi.com/api/characters"
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts })
    }
    render() {
        const { posts } = this.state;
        return (
            <>
                <h1>
                  Breaking Bad React API
            </h1>
                <div className='content-wrapper'>
                    {posts && posts.length && posts.map(posts => <div key={posts.char_id}>
                        <div className="container">
                            <div className="img-container">
                                <img src={posts.img} alt={posts.name} />
                            </div>
                            <div className="info">
                                <span className="number">{posts.char_id}</span>
                                <h3 className="name">{posts.name}</h3>
                                <span><strong>Status:</strong>{posts.status}</span>
                                <div classNameName='gender'>
                                    <strong>Birthday: </strong> {posts.birthday}
                                </div>
                                <div>  <strong> Nickname: </strong>{posts.nickname}</div>
                                <div className="species"><strong> Portrayed: </strong><span>{posts.portrayed}</span></div>
                            </div>
                        </div>
                    </div>
                    )
                    }
                </div>
            </>

        )
    }
}
export default PostList