import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import authService from "../services/auth.service";
import lessonService from "../services/lesson-service";
import history from "../assets/history";
import Spinner from "./Spinner";
import userService from "../services/user.service";

export default class CreateLesson extends Component {
  state = {
    name: null,
    category: null,
    author: null,
    shortInfo: null,
    photo: null,
    price: null,
    content1: null,
    error: null,
    success: null,
    loading: false,
    selectedFile: null,
  };

  componentDidMount = () => {
    const currentUser = authService.getCurrentUser();
    console.log(currentUser);
    this.setState({ author: currentUser.username });
    if (currentUser === null) {
      console.log(currentUser);
      history.push("/login");
    }
  };

  createLesson = () => {
    const data = {
      name: this.state.name,
      category: this.state.category,
      author: this.state.author,
      shortInfo: this.state.shortInfo,
      photo: this.state.photo,
      price: this.state.price,
      content: this.state.content1,
    };
    lessonService.addLesson(data);
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  handleShortInfo = (e) => {
    this.setState({ shortInfo: e.target.value });
  };

  handleContent1 = (e) => {
    this.setState({ content1: e.target.value });
  };

  handlePhoto = (e) => {
    console.log(e);
    const base64 = require("base-64");
    let photo = e.target.files[0];
    console.log(photo);
    let reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({
        photo: reader.result,
      });
    };
  };

  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  handleVideo = (e) => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
    });

    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    lessonService.uploadVideo(formData).then((res) => {
      console.log(res.data);
      alert("File uploaded successfully.");
    });
  };
  render() {
    return (
      <div className="container">
        <div className="uk-container">
          <h1 className="title" style={{ margin: "25px 0" }}>
            Хичээл нэмэх
          </h1>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="create-lesson">
            <form onSubmit={this.createLesson}>
              <div className="lesson-field">
                <label className="label">Хичээлийн нэр</label>
                <input type="text" name="name" onChange={this.handleName} />
              </div>
              <div className="lesson-field">
                <label className="label">Category</label>
                <input
                  type="text"
                  name="category"
                  onChange={this.handleCategory}
                />
              </div>
              <div className="lesson-field">
                <label className="label">Богино тайлбар</label>
                <input
                  type="text"
                  name="shortInfo"
                  onChange={this.handleShortInfo}
                />
              </div>
              <div className="lesson-field">
                <label className="label">Үнэ</label>
                <input type="number" name="price" onChange={this.handlePrice} />
              </div>
              <div className="lesson-field">
                <label className="label">Зураг</label>
                <input type="file" name="photo" onChange={this.handlePhoto} style={{textAlign: "end"}} />
              </div>
              <div className="lesson-field">
                <label className="label">Тайлбар</label>
                <input
                  type="text"
                  name="content1"
                  onChange={this.handleContent1}
                />
              </div>
              <div className="lesson-field">
                <label className="label">Бичлэг</label>
                <input type="file" name="video" onChange={this.handleVideo} />
              </div>
              <Button type="submit">Нэмэх</Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
