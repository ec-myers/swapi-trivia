import React from 'react';
import './Scroll.scss'


const Scroll = ({movie}) => {
  const {title, scrollText, episode} = movie;
  return (
    <>
    < div class="fade" ></div >
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <p>Episode {episode}</p>
            <h1>{title}</h1>
          </div>
          <p>{scrollText}</p>
        </div>
      </section>
      </>
  )
}

export default Scroll