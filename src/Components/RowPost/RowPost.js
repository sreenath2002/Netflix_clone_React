import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import {imageUrl ,API_KEY} from '../../Constants/constants';
import './RowPost.css';
import Youtube from 'react-youtube';
function RowPost(props) {
    const [movies, setMovies] = useState([]);
     const [urlId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(props.url)
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const otps={
        height:'390',
        width:'100%',
        playervars:{
            autoplay:0,
        }
    };
    const handleMovie=(id)=>{
    
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
        if(res.data.results.length !==0)
        {
        setUrlId(res.data.results[0])
      }})
    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((movie) => (
                    <img onClick={()=>handleMovie(movie.id)}
                        key={movie.id}
                        className={props.isSmall ? 'smallPoster': 'poster'}
                        alt={movie.name}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                ))}
            </div>
         { urlId &&  <Youtube  opts={otps} videoId={urlId.key}/>}
        </div>
    );
}

export default RowPost;
