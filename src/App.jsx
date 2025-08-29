import React, { useState, useEffect, useRef, Suspense } from 'react';
import axios from 'axios';
import Modal from './Componants/Modal';
import LazyImage from './Componants/LazyImage';


const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1); 

  const API_KEY = 'U9JYRknVyRwQkhWbpGmOt7hnzg6vEVAk2wkft9uylRENNx7iMI3sjKT0';


  const fetchImages = async (pageNum) => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/curated', {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          page: pageNum,
          per_page: 20, 
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.photos]); 
      setLoading(false);
    } catch (err) {
      setError('Error fetching images');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page); 
  }, [page]);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1); 
    setLoading(true); 
  };

  if (loading && page === 1) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Image Gallery</h2>

  
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <LazyImage
              src={image.src.medium}
              alt={image.alt_description || 'No description'}
              onClick={() => openModal(image.src.original)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              <p className="text-white text-sm">{image.photographer || 'No Description'}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-6">
        <button
          onClick={loadMoreImages}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>

     
      {modalImage && (
        <Suspense fallback={<div className="text-center">Loading Image...</div>}>
          <Modal image={modalImage} onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
