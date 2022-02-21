import { useRouter } from "next/router";
import Seo from "../../components/Seo";


export default function Detail({params}) {
    const router = useRouter();
    const [title , id , star, sum ] = params || [];
    console.log(router);
    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
            <p>{sum}</p>
            <p>{star}</p>
        </div>

    );
}

export function getServerSideProps({params : { params }}) {
    return {
        props : {
            params,
        },
    };
}