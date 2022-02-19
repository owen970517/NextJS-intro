import Layout from "../components/Layout";
// 호출하고 싶은 페이지를 첫 번째 component prop 에 넣는다
// 
export default function App({Component , pageProps}) {
    return (
        <div>
            <Layout>
                <Component {...pageProps}/>
                <style jsx global>{`
                a {
                    color : #000;
                }
            
            `}</style>
            </Layout>
        </div>
    )
}