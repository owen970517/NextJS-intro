import { useEffect } from "react"

export default function Genres({setActiveGenre , activeGenre , setFiltered , movies}) {
    useEffect(()=> {
        if(activeGenre === 0) {
            setFiltered(movies);
            return;
        }
        const filtered = movies.filter((movie)=>
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    },[activeGenre])
    return (
        <div className="Genres">
            <button onClick={()=> setActiveGenre(0) }>All</button>
            <button onClick={()=> setActiveGenre(28)}>Action</button>
            <button onClick={()=> setActiveGenre(35)}>Comedy</button>
            <button onClick={()=> setActiveGenre(80)}>Crime</button>
            <style jsx>
                {`
                    .Genres {
                        text-align : center;
                    }
                    button {
                        margin-right :20px;
                        font-size : 30px;
                        padding : 10px;
                        border-radius : 20px;
                        width : 10%;
                        color :#6ea2fa;
                    }
                    button.active {
                        background : #6ea2fa;
                        color :#000;
                    }
                
                `}
            </style>
        </div>
    )
}