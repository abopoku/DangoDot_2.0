import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/Watchlist.css';

const Watchlist = () => {
  return (
    <body>
        <Navbar />
        <header>
            <div class="watchlist-container">
                <h1 class="header-title">My Watchlists</h1>
            </div>
        </header>

        <main>
          {/* Favorites */}
          <section class="favorites-container" id="favorites-container">
            <h1 class="favorites-heading">Favorites</h1>
            <div class="favorites-box">
              {/* <img src=images/demonslayer.jpg></img> */}
            </div>
          </section>
          <br></br>
          
          {/* Watch Later */}
          <section class="later-container" id="later-container">
            <h1 class="later-heading">Watch Later</h1>
            <div class="later-box">
              {/* <img src=images/demonslayer.jpg></img> */}
            </div>
          </section>
          <br></br>
        </main>
    </body>
  )
}

export default Watchlist