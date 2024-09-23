import React, { useRef, useState } from 'react'

function AddMovies({onAdd}) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    postalURl: "",
    rating: "",
  })

  const fileInputRef = useRef(null)

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMovie({...newMovie, posterURL: reader.result});
      };
      reader.readAsDataURL(file)
    }
  };

  
  const handleSumit = () => {
    onAdd(newMovie);
    setNewMovie({
      title: '',
      description: '',
      postalURl:'',
      rating: ''
    });

    if(fileInputRef.current){
      fileInputRef.current.value = ''
    }

  }

  const handleTextChange = (e) => {
    const{name, value} = e.target;
    setNewMovie({...newMovie,[name]: value});
  }
  return (
    <div className='flex flex-col gap-4 mb-4'>
        <input type='text' name='title' placeholder='Movie_Title..' className='border rounded-md max-w p-2'onChange={ handleTextChange} value={newMovie.title}/>
        <input type='text' name='description' placeholder='Description' className='border rounded-md max-w p-2 'onChange={ handleTextChange} value={newMovie.description}/>
        <input type='file' name='postalUrl' placeholder='Postal Url' className='border rounded-md max-w p-2'onChange={ handleFileChange} accept='image/*' ref={fileInputRef}/>
        <input type='number' name='rating' placeholder='Rating' className='border rounded-md max-w p-2'onChange={ handleTextChange} value={newMovie.rating}/>
        <button className='bg-green-600  text-white p-2 rounded w-[150px] m-auto'onClick={handleSumit}>Add Movie</button>
       
       
       

    </div>
  ) 
}

export default AddMovies