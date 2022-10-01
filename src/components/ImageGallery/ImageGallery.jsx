import PropTypes from 'prop-types';
import { ImageGalleryStyled } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, onClick }) => {


  return (
          <ImageGalleryStyled>
            {images.map(({id, webformatUrl, largeImageUrl}) => {
              return <ImageGalleryItem key={id} webformatUrl={webformatUrl} largeImageUrl={largeImageUrl} onClick={ onClick } />
            })}
          </ImageGalleryStyled>  
        );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  })
  ),
  onClick: PropTypes.func.isRequired,
}