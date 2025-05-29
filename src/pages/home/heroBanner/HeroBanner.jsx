import React from 'react'
import './style.scss'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useFetch} from '../../../hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { useSelector } from "react-redux";
import Img from '../../../components/lazyLoadingImage/Img'

const HeroBanner = () => {
    const[background,setBackground] = useState("");
    const[query,setQuery] = useState("");
    const navigate  = useNavigate();
     const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");  

   useEffect(() => {
  if (data?.results?.length && url?.backdrop) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const backdropPath = data.results[randomIndex]?.backdrop_path;
    

    if (backdropPath) {
      setBackground(url.backdrop + backdropPath);
    }
  }
}, [data, url.backdrop]);


    const searchQueryHandler=(event)=>{
        if(event.key === "Enter" && query.length>0){
            navigate(`/search/${query}`);
        }
    };

  return (
    <>
    <div className="heroBanner section-padding">
        {!loading &&(
            <div className="backdrop-img">
               <Img src={background} />
            </div>
        )}

        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">WELCOME</span>
            <span className="subtitle">Smart movie discovery at your fingertips. Search, filter, and explore your favorite genres with ease.</span>

            <div className="searchInput">
                <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder="search your favorite movies" onKeyUp={searchQueryHandler} />

                <button>Search</button>
            </div>
            </div>

        </ContentWrapper>

    </div>
     
    </>
  )
}

export default HeroBanner
