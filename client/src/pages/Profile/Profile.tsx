import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Head, About, WorkExperience, Education, Skills, Languages, Projects } from '@profile'

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
                <WorkExperience experiences={[{
                    name: "iş", type:"remote", link:"yok", date:"present - tomorrow", position:"remote", description:"yok"
                }]} />
                <Education educations={[{
                    name:"Town", date:"Now", description:"desc"
                }]} />
                <Skills skills={["js", "ts", "react"]} />
                <Languages languages={[{
                    name: 'english',
                    level: 'B2'
                }]} />
                <Projects projects={[
                    {name: 'Resumer', description: "Better project", badges: ["TS", "REACT", "NODE"], link: "URL here"}
                ]} />

            </section>
        </div>
    )
}

export default Profile