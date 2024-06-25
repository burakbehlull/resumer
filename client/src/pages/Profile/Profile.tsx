import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Head, About, WorkExperience, Education, Skills, Languages, Projects } from './index'

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
                <Head 
                    displayName={user?.displayName}
                    description="xdasdsadsad"
                    location='istanbul'
                    links={[
                        {type: 'email', uri: 'xd'}
                    ]}
                />
                <About text='LOREM İPSUM DOLER DOLARRRR' />
                <WorkExperience data={user} />
                <Education data={user} />
                <Skills skills={["js", "ts", "react"]} />
                <Languages data={user} />
                <Projects data={user} />

            </section>
        </div>
    )
}

export default Profile