import React, { Component } from "react";
import axios from "axios";
import history from "../assets/history";

export default class LessonDetail extends Component {
  state = {
    name: null,
    category: null,
    author: null,
    shortInfo: null,
    photo: null,
    price: null,
    content: null,
    error: null,
    success: null,
    loading: false,
    selectedFile: null,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("http://localhost:8081/api/lesson/" + this.props.match.params.id)
      .then((result) => {
        this.setState({ ...result.data, error: null, loading: false });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };
  seeState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="uk-container">
          <h1 className="title" style={{ margin: "25px 0" }}>
            {this.state.name}
          </h1>
          <div className="media">
            <div className="media-left">
              <img alt="zurag" src={this.state.photo} />
            </div>

            <div className="media-content">
              <div className="field">
                <label className="label">Нэр</label>
                <p className="defails">{this.state.name}</p>
              </div>

              <div className="field">
                <label className="label">Үнэ</label>
                <p className="defails">{this.state.price}</p>
              </div>

              <div className="field">
                <label className="label">Category</label>
                <p className="defails">{this.state.category}</p>
              </div>

              <div className="field">
                <label className="label">Багш</label>
                <p className="defails">{this.state.author}</p>
              </div>

              <div className="field">
                <label className="label">Агуулга</label>
                <p className="defails">{this.state.content}</p>
              </div>

              <div className="field">
                <label className="label">Rate</label>
                <p className="defails">{this.state.rating}</p>
              </div>

              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  history.push(`/lessonBuy/${this.state.id}`);
                }}
              >
                <span>Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
