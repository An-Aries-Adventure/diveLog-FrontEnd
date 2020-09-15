import React, { Component } from "react"
import '../app.css'

class Favorite extends Component {
    state = {
        favorite:false
    };

    toggle = () =>{
        console.log(this.state.favorite)
        this.setState({
            favorite: !this.state.favorite
        });
    };


    render() {
        console.log("render favorite", this.state.favorite);
        return(
            <div>
                {this.state.favorite && <h5 className = "favorite">Favorite</h5>}

            <button onClick = {this.toggle}>Make Favorite</button>

            </div>

        )};
  

};
export default Favorite 