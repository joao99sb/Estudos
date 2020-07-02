import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const User = ({     users })=>(
    <div>
        <Head>
            <title>Usuários</title>
        </Head>
        <ul>
            {users.map(i=>(
                <li key={i.id}>{i.login}</li>                
            ))}
            <Link href="/">
                <a> clik aqui</a>
            </Link>
        </ul>
    </div>
   
)

User.getInitialProps = async () =>{
    const response = await axios.get(
        'https://api.github.com/orgs/rocketseat/members'
    )
    return {users: response.data}
}



export default User