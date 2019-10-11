import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Profile = props => {
  console.log(props);
  return (
    <div className="person" key={props.index}>
      <CardImg width="100%" src="src/sw-bg.jpg" alt="Card image cap" />
       
      <Card body inverse style={{ backgroundColor: 'orange', borderColor: '#333', width: '700px', margin: "20px", padding: "20px", borderRadius: "2rem" }}>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Birth: {props.birth}</CardText>
        <CardText>Eye Color: {props.eye}</CardText>
        <CardText>Height: {props.height}</CardText>
        <CardText>Mass: {props.mass}</CardText>
        <Button>Homeworld{props.homeworld}</Button>
        <Button>Species{props.species}</Button>
        <Button>Starships{props.starships}</Button>
        <Button>Films{props.films}</Button>
      </Card>
    </div>
  );
};
export default Profile;
