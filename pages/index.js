import Container from "../components/Container"
import Head from "next/head"
import Users from '../components/Users'


const Index = (props) => {
    return (
        <Container>
            <Head>
                <title>Next Project - Home</title>
            </Head>
            <h1>Users</h1>
            <Users users={props.users}/>

        </Container>



    )
}
Index.getInitialProps =  async (ctx) =>{
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json()
    return {users:resJSON.data}
 
}

export default Index