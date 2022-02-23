import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
import Genres from "../components/Genres";
export default function about() {
    return (
        <div className="Genres">
            <Seo title ="About"></Seo>
            <Genres/>
            <style jsx>
                {`
                    .Genres {
                        display : flex;
                        justify-content : center;
                        align-items : center;
                    }
                    
                `}
            </style>
        </div>
    );
}