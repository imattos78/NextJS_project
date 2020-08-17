import Container from "../components/container"
import Head from "next/head"
import fetch from 'isomorphic-fetch';
import Users from '../components/users';

const Index = (props) => {
    console.log(props)
    return (
        <Container>
            <Head>
                <title>Next Project - Home</title>
            </Head>
            <h1>Next</h1>
            <Users users={props.users}/>

        </Container>



    )
}
Index.getInitialProps =  async (ctx) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {users:data}
 
}

export default Index