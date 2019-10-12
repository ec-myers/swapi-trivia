import React from 'react';
import './Scroll.scss'


const Scroll = ({selectedMovie}) => {
  const {title, scrollText, episode} = selectedMovie;
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