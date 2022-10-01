import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { FormComponentStyled } from "./FormComponent.styled";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";


const searchPattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const ValidationSchema = Yup.object().shape({
    search: Yup.string()
        .matches(searchPattern, 'letters only')    
        .min(2, 'too short!')
        .max(70, 'too long!')
        .required('required')
});


export const FormComponent = ({ onSubmit }) => {

    const handleSubmit = (values, { resetForm }) => {        
        onSubmit(values.search);
        // resetForm();
    }

    return (<Formik initialValues={{ search: "" }} onSubmit={handleSubmit} validationSchema={ValidationSchema}>

                <FormComponentStyled>
                        <button type="submit">
                            <SearchIcon />
                        </button>

                        <Field
                            name="search"    
                            type="text"
                            autoComplete="off"
                            // autoFocus
                            placeholder="Search images and photos"
                        />
                        <ErrorMessage name="search" component="div" />
                    </FormComponentStyled>
                
            </Formik>)
}

FormComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}