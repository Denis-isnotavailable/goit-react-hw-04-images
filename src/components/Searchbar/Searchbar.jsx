import { FormComponent } from "components/FormComponent/FormComponent";
import PropTypes from 'prop-types';
import { SearchBarStyled } from "./Searchbar.styled";


export const SearchBar = ({ onSubmit }) => {


    return (
            <SearchBarStyled>
                <FormComponent onSubmit={onSubmit} />               
            </SearchBarStyled>
        );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}