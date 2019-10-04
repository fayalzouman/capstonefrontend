import React, { Component } from "react";
import { View } from "react-native";
import { Redirect } from "react-router-dom";
import authStore from "../../store/authStore";
import { Button, Card, Body } from "react-bootstrap";
import category from "./data";

// Style
//import styles from "./styles";

class HighSchoolList extends Component {
  handleClick = () => {
    navigation.navigate("HighSchoolCategoryList", {
      categoryID: category.id,
      categoryName: category.name
    });
  };
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    return (
        <Card button onClick={handleClick}>
          <Card.Body >
            {category.name}
          </Card.Body>
        </Card>
      </ListItem>
    );
  }
}

export default HighSchoolList;
