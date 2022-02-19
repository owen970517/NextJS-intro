import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <h1><img src="/vercel.svg"></img></h1>
            <ul>
                <li>
                    <Link href="/">
                        <a className= {router.pathname === "/" ? "active" : ""}>Home</a>
                    </Link>
                </li>
                <li>                    
                    <Link href="/about">
                        <a className= {router.pathname === "/about" ? "active" : ""}>About</a>
                    </Link>
                </li>

            </ul>
            <style jsx>{`
                h1 {
                    margin-left : 30px;
                }
                img {
                    width:60%;
                }
                nav {
                    display :flex;
                    justify-content : space-between;
                    align-items : center;
                }
                ul {
                    display : flex;
                    
                }
                li {
                    list-style : none;
                    margin-right : 30px;
                }
                a {
                    text-decoration : none;
                    font-size : 30px;
                }
                .active {
                    background-color : #000;
                    padding : 10px;
                    border-radius : 20px;
                    color : #fff;
                }

            `}</style>
        </nav>
    )
}