import axios from "axios";
import { useEffect, useState } from "react";
import Detail from "./detail";
import "./home.css"
import { Router, Routes } from "react-router";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Route } from "react-router";


function Home () {
  let { id } = useParams()
  let [title, setTitle] = useState ([])
  console.log(title,"ini title")


  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setTitle(response.data)

      });
  }, []);

  return (
    <div>
      <div className="displayCard">
      
        {title.map ((title, id) => (
          <div className="card" key={title.id} >
              <div className="cardBody">
              <Link className="gameTittle" to={`/detail/${id}`}> {title.title} </Link>
              <Routes path={`/detail/${id}/`} render={() => <Detail detailId={title}/>} />
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home