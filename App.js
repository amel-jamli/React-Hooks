import { useState } from 'react'
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';


function App() {

  const [movieList, setMovieList] = useState([
    {
      Id: 1,
      title: "bloodshot",
      Image: "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg",
      Year: "2020",
      rate: "5",


    },
    {
      Id: 2,
      title: "mantera",
      Image : "https://i.ytimg.com/vi/CwZSR0VNB3s/maxresdefault.jpg",
      Year: "2010",
      rate: "4"

    },
    {
      Id: 3,
      title: "lac des cygnes",
      Image: "https://fr.web.img4.acsta.net/c_310_420/pictures/14/10/30/14/56/383548.jpg",
      Year: "2003",
      rate: "2"

    },
    {
      Id: 4,
      title: "security",
      Image: "https://m.media-amazon.com/images/M/MV5BZmI4OGE0MTktOTQ3ZC00ZDlhLTg1OGMtMjRiMTMwNzgzZDIyXkEyXkFqcGdeQXVyNjc4Nzk3NzU@._V1_.jpg",
      Year: "2017",
      rate: "3"

    },
    {
      id : 5 ,
      title : "mis peregrine" ,
      Image : "https://upload.wikimedia.org/wikipedia/en/7/74/Miss_Peregrine_Film_Poster.jpg",
      Year : "2016" ,
      rate : "4" ,
    } ,
    {
      id : "5" ,
      title : "the descent" ,
      Image : "https://upload.wikimedia.org/wikipedia/en/d/d5/Descentposter.jpg" ,
      Year : "2005" ,
      rate : "1" ,
    }

  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div className="app">
      <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
      <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />




    </div>
  );
}

export default App;
