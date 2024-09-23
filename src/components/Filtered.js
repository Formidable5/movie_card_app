import React,{useState} from 'react'

function Filtered({onFliter}) {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')

  const handleFilter = () => {
    onFliter({title, rating})
  }
  return (
    <div className='flex flex-col md:flex-row justify-center gap-4 mb-4'>
        <input type='text' placeholder='Filter By Title' className=' border p-2 rounded' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type='number' placeholder='Filter By Rating' className='border p-2 rounded'value={rating} onChange={(e) => setRating(e.target.value)}/>
        <button className='bg-green-600  text-white p-2 rounded w-[150px] m-auto' onClick={handleFilter}>Filter</button>
    </div>
  )
}

export default Filtered