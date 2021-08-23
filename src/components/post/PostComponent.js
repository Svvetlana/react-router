import React from 'react';
import './Post.css';

function PostComponent(props) {


  return (
    <div className='container'>
      <div className='post_card'>
        <header>
          <div className='author'>
            <img src={props.photo} alt="" />
          </div>
          <div className='info'>
            <div className="info_name">
              <span>{props.name}</span>
              <span className='nickname'>{props.nickname}</span>
              <span className='date'>{props.date}</span>
            </div>
            <div className="info_text">
              <span>{props.content}</span>
            </div>
          </div>
        </header>
        <main>
          <div className="photo_post">
            <img src={props.image} alt="" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default PostComponent;