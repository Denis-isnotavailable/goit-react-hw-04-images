import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from "./ImageGalleryItem.styled";



export const ImageGalleryItem = ({ webformatUrl, largeImageUrl, onClick }) => {

    const handleImgClick = () => {        
        onClick(largeImageUrl);
    }

    return (
            <ImageGalleryItemStyled onClick={handleImgClick}>
                <img src={webformatUrl} alt="contextphoto" />
            </ImageGalleryItemStyled>
        );
}


ImageGalleryItem.propTypes = {
    webformatUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}