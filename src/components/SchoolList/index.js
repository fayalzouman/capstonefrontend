import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authStore from "../store/authStore";
import { Card } from "react-bootstrap";
import school from "./data";
import { observer } from "mobx-react";

// Style
//import styles from "./styles";

class SchoolList extends Component {
  handleClick = () => {
    alert(`Hello`);
  };
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    return (
      <Card button onClick={this.handleClick}>
        <Card.Body>{school.name}</Card.Body>
      </Card>
    );
  }
}

export default observer(SchoolList);
