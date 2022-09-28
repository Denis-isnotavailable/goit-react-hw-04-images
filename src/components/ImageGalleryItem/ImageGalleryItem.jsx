import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from "./ImageGalleryItem.styled";



export class ImageGalleryItem extends Component {

    handleImgClick = () => {
        const { largeImageUrl, } = this.props;
        this.props.onClick(largeImageUrl);
    }

    render() {
        const { webformatUrl, } = this.props;
        return (
            <ImageGalleryItemStyled onClick={this.handleImgClick}>
                <img src={webformatUrl} alt="contextphoto" />
            </ImageGalleryItemStyled>
        );
    }
}


ImageGalleryItem.propTypes = {
    webformatUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}