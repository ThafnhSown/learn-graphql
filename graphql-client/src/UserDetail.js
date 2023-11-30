import { useQuery } from '@apollo/client'
import { getUserById } from './graphql/query'
import { useParams } from 'react-router-dom'
import PostList from './components/PostList'

const UserDetail = () => {
    const {id} = useParams()
    const { loading, error, data} = useQuery(getUserById ,{
        variables : {
            id: id
        }
    })
    if (loading) return <p>Loading user....</p>
	if (error) return <p>Error loading user!</p>
    return (
        <div>
            <div key={data.user.id}>
                <h1>{data.user?.name}</h1>
                <div>Phone: {data.user?.phone}</div>
                <li>Street: {data.user.address.street}</li>
                <li>Suite: {data.user.address.suite}</li>
                <li>City: {data.user.address.city}</li>
            </div>
            <h1>POST BY USER</h1>
            <PostList data={data.user.posts}/>
        </div>
    )
}

export default UserDetail