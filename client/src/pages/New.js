import React, { Component } from "react";
import Nav from "../components/Nav";
import StarRatingComponent from 'react-star-rating-component';
import { Input, TextArea, FormBtn, SelectList } from "../components/Form";
import API from "../utils/API";
import "./new.css";



class New extends Component {
    state = {
        name: "",
        architect: "",
        neighborhood: "",
        address: "",
        image: "",
        description: "",
        year: "",
        rating: 0,

    };

    componentDidMount() {
        let userid = sessionStorage.getItem("userid");
        if (!userid) {
            alert("To view your enter a building, you must be logged in.")
            window.location.href = "/login"
        }
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            API.saveBuilding({
                name: this.state.name,
                architect: this.state.architect,
                neighborhood: this.state.neighborhood,
                address: this.state.address,
                image: this.state.image,
                description: this.state.description,
                year: this.state.year,
                rating: this.state.rating,
                created_by: sessionStorage.getItem("userid")


            })
                .then(this.clearForm())

                .catch(err => console.log(err));
        }
    };


    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    clearForm = () => {
        this.setState({
            name: "",
            architect: "",
            neighborhood: "",
            address: "",
            image: "",
            description: "",
            year: "",
            rating: 0,
        })
    }


    render() {
        return (
            <div>
                <Nav />

                <div class="container">

                    <h1 className="newBuildingTitle"> Enter a New Building</h1>
                    <div class="mainFormArea">
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name of Building" />
                        <Input
                            value={this.state.architect}
                            onChange={this.handleInputChange}
                            name="architect"
                            placeholder="Architect" />
                        <SelectList onChange={this.handleInputChange}
                            id="formDropdown"
                            name="neighborhood"
                            placeholder="Neighborhood">
                            <option value="Loop" key="Loop">Loop</option>
                            <option value="South Side" key="South Side" >South Side</option>
                            <option value="North Side" key="North Side">North Side</option>
                            <option value="Northwest Side" key="Northwest Side">Northwest Side</option>
                            <option value="West Side" key="West Side">West Side</option>
                        </SelectList>

                        <Input
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            name="address"
                            placeholder="Address" />
                        <Input
                            value={this.state.image}
                            onChange={this.handleInputChange}
                            name="image"
                            placeholder="Image URL" />

                        <TextArea
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Description" />

                        <Input
                            value={this.state.year}
                            onChange={this.handleInputChange}
                            name="year"
                            placeholder="Year" />

                        <div className="formBottom">
                            <h6>Rating</h6>
                            <StarRatingComponent
                                name="rating"
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                            <FormBtn id="newBuildingButton"
                                disabled={!(this.state.name)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
              </FormBtn>

                        </div>
                    </div>
                </div>
            </div>


        )
    }

}
export default New;
