import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Head, About, WorkExperience } from './index'

const Profile : React.FC = () =>{
    const [data, setData] = useState<any>({})
    const [error, setError] = useState<any>({})
    const [user, setUser] = useState<any>({})
    const { username } = useParams()
    useEffect(()=>{
        async function fetchUsername(){
            await axios.post('http://localhost/api/findUser', {
                username: username
            }).then((res:any)=>{
                setData(res.data)
                setUser(res.data['user'])
            }).catch(err=> setError(err))
        }
        fetchUsername()
    }, [])
    
    return(
        <div id='profileUp'>
            <section id='profile'>
                <Head data={user} />
                <About data={user} />
                <WorkExperience data={user} />
            </section>
        </div>
    )
}

export default Profile