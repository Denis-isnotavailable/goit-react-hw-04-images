import React, { Component } from "react";
import { FormComponent } from "components/FormComponent/FormComponent";
import PropTypes from 'prop-types';
import { SearchBarStyled } from "./Searchbar.styled";


export class SearchBar extends Component {


    render() {

        return (
            <SearchBarStyled>
                <FormComponent onSubmit={this.props.onSubmit} />               
            </SearchBarStyled>
        );
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}