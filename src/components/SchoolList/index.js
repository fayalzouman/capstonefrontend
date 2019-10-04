import React, { Component } from "react";
import { View } from "react-native";
import { Redirect } from "react-router-dom";
import authStore from "../../store/authStore";
import { Button, ListItem, Card, Body } from "react-bootstrap";
import school from "./data";
// Style
//import styles from "./styles";

class SchoolList extends Component {
  handleClick = () => {
    navigation.navigate("SchoolList", {
      schoolID: school.id,
      schoolName: school.name
    });
  };
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    return (
      <Card button onClick={handleClick}>
        <Card.Body>{school.name}</Card.Body>
      </Card>
    );
  }
}

export default SchoolList;
