import React, {useState, useEffect} from "react";
import Profile from "./Cards";
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import axios from "axios";



export default function Characters() {

  const [swapi, setSwapi] = useState([]);
  const [name, setName] = useState([]);
  const [birth, setBirth] = useState([]);
  const [eye, SetEye] = useState([]);
  const [height, setHeight] = useState([]);
  const [mass, setMass] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        // console.log(response)
        setSwapi(response.data.results)
        setName(response.data.results.name)
        SetEye(response.data.results.eye)
        setHeight(response.data.results.height)
        setMass(response.data.results.mass)
        setHomeworld(response.data.results.homeworld)
        setSpecies(response.data.results.species)
        setBirth(response.data.results.birth_year)
        setStarships(response.data.results.starships)
        setFilms(response.data.results.films)
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (

   

   
      <Container>
        
        <Row>
          {/* <Col xs="3">
          {/* <div className="swapi">
          {swapi.map(swapi => {
            return <Profile homeworld = {swapi.homeworld} species =     {swapi.species}/>
          })}
          </div>  </Col> */}

           <div className="swapi">
           
            {/* <Col xs="6"> */}
            {swapi.map(swapi => {
                return <Profile key = {swapi.index} name={swapi.name} birth = {swapi.birth_year}  eye = {swapi.eye_color} mass = {swapi.mass} height = {swapi.height} />
                })}
            {/* </Col> */}

            </div>
          




        </Row>

      </Container>
  );
}