import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import './App.css';

function App() {
  return (
    <div className="app">
    <Banner />
    <Row title="NETFLIX ORIGINALS" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow/>

    <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
    <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
    <Row title="Western" fetchUrl={requests.fetchWestern}/>
    </div>
  );
}

export default App;
