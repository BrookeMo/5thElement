import React, { Component } from "react";
import Review from "./../../components/review";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from './../../utils/API'

class Reviews extends Component {
state = {
    reviewlist: [],
    text: "",
    location: "",
    author: ""
  };

  componentDidMount() {
    this.loadReviews();
  };

  loadReviews = () => {
    API.getReviews()
      .then(res =>
        this.setState({ review: res.data, location: "", author: "", text: "" })
      )
      .catch(err => console.log(err));
  };

  deleteReview = id => {
    API.deleteReview(id)
      .then(res => this.loadReviews())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.location && this.state.author) {
      API.saveReview({
        location: this.state.location,
        author: this.state.author,
        text: this.state.text
      })
        .then(res => this.loadReviews())
        .catch(err => console.log(err));
    }
  };


render (){
  return (
    <main>
      <div className="row">
        <div className="col s12">
          <div className="card-panel hotels">
            <div className="row">
              <div className="col s4">
                <h5>Reviews</h5>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <form>
                  <Input
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="Location (required)"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    name="text"
                    placeholder="Text (Optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.location && this.state.author)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Review
                  </FormBtn>
                </form>
              </div>
              <div className="col s2 offset-s4">
              <p>
                    <Review />
                  </p>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="container">
                  {/* <p>
                    <Review />
                  </p> */}
                  {/* <div className="card-panel hotel"></div>
                                            <div className="card-panel hotel"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
};
export default Reviews;
