import React, { Component } from 'react'
import "./Dogs.css"


export default class DogIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ""
        }
    }

    fetchImage = () => {
        const API = 'https://dog.ceo/api/breeds/image/random'
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    img: data.message
                })
            })

            .catch(error => console.log('Error', error));
    }

    componentDidMount() {
        this.fetchImage()
    }

    render() {

        const { img } = this.state;
        return (
            <div id="dogImage">
                <img id="img" alt="" src={img}></img>
                <button id="button" onClick={this.fetchImage}>Fetch a new image!</button>
            </div>
        )
    }
}


