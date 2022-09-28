import { Component } from "react";
import { Audio } from 'react-loader-spinner';
import { Button } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { SearchBar } from "components/Searchbar/Searchbar";
import { AppStyled } from "./App.styled";


const API_KEY = "29475888-3f29fbe102866df87d5390f6d";
const API_URL = "https://pixabay.com/api/";

export class App extends Component {

  state = {
    searchWord: '',
    page: 1,
    images: [],
    largeImageUrl: '',
    loading: false,
    error: false,
  }

  componentDidUpdate(_, prevState) {
    const { searchWord, page } = this.state;
    if (searchWord !== prevState.searchWord || page !== prevState.page) {
      this.fetchImages();
    }
  }

  formSubmitHandler = data => {    
    if (data.trim() !== "" && this.state.searchWord !== data) {      
      this.setState({ searchWord: data, page: 1, images: [], loading: true, });      
    }    
  }

  fetchImages() {
    const { searchWord, page } = this.state;
    const url = `${API_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;  

    fetch(url)
      .then(response => response.json())
      .then(data => {       

        // убираем кнопку Load more, если больше нет картинок
         if (data.totalHits - 12 <= this.state.images.length) {
          this.setState({ error: true, });
        }

        if (data.hits.length !== 0) {
          const arr = data.hits.map(image => {
            return { id: image.id, webformatUrl: image.webformatURL, largeImageUrl: image.largeImageURL };
          });
          
          return this.setState(prevState => ({images: [...prevState.images, ...arr]}));
        } 

        this.setState({ error: true, });
      })
      .catch(error => {
        this.setState({error: true})
      })
      .finally(() => {
        this.setState({ loading: false, });
      });
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, }));    
  }

  onClickZoomImage = data => {
    this.setState({ largeImageUrl: data });
  }

  closeModal = () => {
    this.setState({ largeImageUrl: '' });
  }


  render() {
    const { images, loading, largeImageUrl, error } = this.state;

    return (
      <AppStyled>
        <SearchBar onSubmit={this.formSubmitHandler} />

        {loading ? <Audio /> : <ImageGallery images={images} onClick={ this.onClickZoomImage } />}

        {images.length !== 0 && <Button onClick={this.onClickLoadMore} disable={ error } />}
        
        {largeImageUrl && <Modal onClose={this.closeModal}><img src={largeImageUrl} alt="photodescription" /></Modal>}        
        
      </AppStyled>      
    );
  }  
};
