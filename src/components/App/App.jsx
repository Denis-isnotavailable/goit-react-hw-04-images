import { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner';
import { Button } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { SearchBar } from "components/Searchbar/Searchbar";
import { AppStyled } from "./App.styled";


const API_KEY = "29475888-3f29fbe102866df87d5390f6d";
const API_URL = "https://pixabay.com/api/";

export const App = () => {

  const [searchWord, setSearchWord] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [totalHits, setTotalHits] = useState(0); 


  useEffect(() => {   
    
    function fetchImages() {    
      const url = `${API_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;  

      fetch(url)
        .then(response => response.json())
        .then(data => {
                   
          setTotalHits(data.totalHits);

          if (data.hits.length !== 0) {
            const arr = data.hits.map(image => {
              return { id: image.id, webformatUrl: image.webformatURL, largeImageUrl: image.largeImageURL };
            });

            setImages(images => [...images, ...arr]);          
          }         
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);        
        });
    }
    
    if (searchWord !== "") {
      fetchImages();
    }    

  }, [searchWord, page]);

  const formSubmitHandler = data => {    
    if (data.trim() !== "" && searchWord !== data) {
      setSearchWord(data);
      setPage(1);
      setImages([]);
      setLoading(true);
      setTotalHits(0);
      // setError(false);           
    }    
  }  

  const onClickLoadMore = () => {
    setPage(page => page + 1);    
  }

  const onClickZoomImage = data => {
    setLargeImageUrl(data);    
  }

  const closeModal = () => {
    setLargeImageUrl("");     
  }

  return (
      <AppStyled>
        <SearchBar onSubmit={formSubmitHandler} />

        {loading ? <Audio /> : <ImageGallery images={images} onClick={ onClickZoomImage } />}

        {(totalHits - 12 >= images.length) && <Button onClick={onClickLoadMore}/>}
        
        {largeImageUrl && <Modal onClose={closeModal}><img src={largeImageUrl} alt="photodescription" /></Modal>}        
        
      </AppStyled>      
    );  
};
