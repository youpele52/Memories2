import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Movie = forwardRef(({ movie }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  //   console.log(movie)
  return (
    <div
      ref={ref}
      className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <Image
        layout='responsive'
        // some things in the api are not in the proper paths hence the multiple ORs
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        height={1018}
        width={1920}
      />
      <div className='p-2'>
        {/* truncate shortens text if its long  */}
        <p className='truncate max-w-md'>{movie.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {movie.title || movie.orginal_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {/* {movie.media_type && `${movie.media_type} •`}{' '} */}
          {movie.release_date || movie.first_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' />
          {movie.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Movie
