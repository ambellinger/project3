import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
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
<FormBtn/>

</div>
</div>
    )
}

}
export default New;