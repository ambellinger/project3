import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import StarRatingComponent from 'react-star-rating-component';
import { Input, TextArea, FormBtn } from "../components/Form";



class New extends Component{


render(){
    return(
<div>
    <Nav/>
    <Jumbotron/>
<div class ="container">
<h1> hello I will eventually have a form</h1>
<Input/>
<Input/>
<Input/>
<TextArea/>
<StarRatingComponent 
          name="rate1" 
          starCount={10}
          //value={rating}
         // onStarClick={this.onStarClick.bind(this)}
        />
<FormBtn/>

</div>
</div>
    )
}

}
export default New;