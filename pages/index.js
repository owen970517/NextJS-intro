import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const onClick = (id , title , star , sum )=> {
        router.push(`/movies/${title}/${id}/${star}/${sum}`);
    };
    const [movies ,setMovies] = useState();
    useEffect(()=>{
       (async()=> {
           const {results} = await ( await fetch(`/api/movies`)).json();
           setMovies(results);
       })();
    },[]);
    return (
        <div className="container">
            <Seo title="Home"></Seo>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie)=>(
                <div onClick={()=> onClick(movie.id ,movie.original_title , movie.vote_average , movie.overview)} className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <h4> 
                        <Link href={`movies/${movie.original_title}/${movie.id}`}>
                            <a>{movie.original_title} </a>
                        </Link>
                    </h4>
                    <p> {movie.overview}</p>
                    <p> 평점 : {movie.vote_average}</p>
                    <p> 득표수 : {movie.vote_count}</p>
                </div>
        
                
                ))}
            <style jsx>
                {`
                    .container {
                        display:grid;
                        grid-template-columns : 1fr 1fr;
                        padding : 20px;
                        gap:20px;
                        text-align : center;
                    }
                    .movie {
                        cursor : pointer;
                    }
                    .movie a {
                        text-decoration : none;
                    }
                    .movie img {
                        max-width : 100%;
                        border-radius : 12px;
                    }
                    .movie h4 {
                        text-align : center;
                        font-size : 20px;
                    }
                
                
                `}
            </style>
        </div>
    );
}

// 이 함수는 서버 쪽에서만 실행 됨
// API 를 다 받아서 정보를 가져올때 까지 아무런 정보를 보여주지 않을 때 사용
/*
export async function getServerSideProps() {
    const {results} = await ( await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props : {
            results,
        },
    };
} */
