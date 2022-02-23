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
    }, [activeGenre]);
    return (
        <div className="Genres">
            <button className={activeGenre === 0 ? "active" : ""} onClick={()=> setActiveGenre(0) }>All</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={()=> setActiveGenre(28)}>Action</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={()=> setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 80 ? "active" : ""} onClick={()=> setActiveGenre(80)}>Crime</button>
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
                        border : none;
                    }
                    button.active {
                        background : #6ea2fa;
                        color :#fff;
                        border : none;
                    }
                
                `}
            </style>
        </div>
    )
}