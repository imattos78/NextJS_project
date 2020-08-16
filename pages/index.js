import Container from "../components/container"
import Head from "next/head"

const Index = (props) => {
    console.log(props)
    return (
        <Container>
            <Head>
                <title>Next Project - Home</title>
            </Head>
            <h1>Index</h1>
        </Container>



    )
}
Index.getInitialProps =  async (ctx) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    console.log(data)
    return {users:data}
 
}

export default Index