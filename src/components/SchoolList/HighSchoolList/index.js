import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authStore from "../../store/authStore";
import { Card } from "react-bootstrap";
import category from "./data";
import { observer } from "mobx-react";

// Style
//import styles from "./styles";

class HighSchoolList extends Component {
  handleClick = () => {
    alert(`Hello`);
  };
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    return (
      <Card
        style={{
          width: "18rem"
        }}
        button
        onClick={this.handleClick}
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> Hi </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>{" "}
          {/* <Button variant="primary">Go somewhere</Button> */}{" "}
        </Card.Body>{" "}
      </Card>
    );
  }
}
export default observer(HighSchoolList);
