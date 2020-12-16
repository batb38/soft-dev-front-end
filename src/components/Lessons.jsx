import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Spinner from "./Spinner";
import authService from "../services/auth.service";
import history from "../assets/history";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default class Lessons extends Component {
  state = {
    error: null,
    loading: false,
    lessons: [],
  };

  
  componentDidMount = () => {
    this.setState({ loading: true });
    const base64 = require("base-64");
    const currentUser = authService.getCurrentUser();

    if (currentUser === null) {
      console.log(currentUser);
      history.push("/login");
    }

    axios
      .get("http://localhost:8081/api/lessons")
      .then((result) => {
        console.log(result);
        this.setState({ loading: false, lessons: result.data });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err.response });
      });
  };

  render() {
    return (
      <div className="uk-container container">
        <h1 className="title" style={{margin: "25px 0" , display: "flex" , justifyContent: "space-between", alignItems: "center"}}>Сургалтууд
        <Button
          style={{backgroundColor:"#59886b", color: "#fff", width: "150px", height: "35px"}}
          color="primary"
          size="big"
          onClick={() => {
            history.push("/create-lesson");
          }}
        >
          Add + 
        </Button></h1>

        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="columns is-multiline">
            {this.state.lessons.map((el) => (
              <Card
                style={{
                  maxWidth: 345,
                }}
              >
                <CardActionArea
                  key={el.id}
                  onClick={() => {
                    history.push(`/lesson/${el.id}`);
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="zurag"
                    height="140"
                    image={el.photo}
                    title={el.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {el.shortInfo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    key={el.id}
                    size="small"
                    color="primary"
                    onClick={() => {
                      history.push(`/lesson/${el.id}`);
                    }}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
