import React, { Component } from "react";
import { Form } from "./Form";
import { ButtonList } from "./ButtonList";
import { RandomButtons } from "./RandomButtons";
import { ImageDiv } from "./ImageDiv";
import axios from "axios";

class GetData extends Component {
    state = {
        list: [],
        searchInput: "",
        searchResult: [],
        buttonValue: "",
        rdmButtonvalues: [] 
    };

    componentDidMount = async () => {
        await axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            this.setState({ list });
            this.randomizeButtonValues();
        });
    };

    randomizeButtonValues = () => {
        let rdmButtonvalues = [];
        for (var i = 0; i < 9; i++) {
            var rdmNumber = Object.keys(this.state.list)[
                Math.floor(Math.random() * Object.keys(this.state.list).length)
            ];
            rdmButtonvalues.push(rdmNumber);
        }
        this.setState({ rdmButtonvalues });
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const buttonValue = event.target.innerHTML;
        const { searchInput } = this.state;

        if (searchInput) {
            axios
                .get(`https://dog.ceo/api/breed/${searchInput}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                });
        }

        if (buttonValue) {
            axios
                .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                });
        }
    };

    render() {
        return (
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <ButtonList
                    list={this.state.list}
                    handleSubmit={this.handleSubmit}
                />
                <RandomButtons
                    handleSubmit={this.handleSubmit}
                    rdmButtonvalues={this.state.rdmButtonvalues}
                    randomizeButtonValues={this.randomizeButtonValues}
                />
                <ImageDiv searchResult={this.state.searchResult} />
            </div>
        );
    }
}

export default GetData;
