import { useQuery } from '@apollo/client'
import { getUsers } from './graphql/query'
import UserCard from './components/UserCard'

const UserList = () => {
    const { loading, error, data} = useQuery(getUsers)
    if (loading) return <p>Loading users....</p>
	if (error) return <p>Error loading users!</p>
    return (
        <div>
            {
                data.users.map(user => (
                    <div key={user.id}>
                        <UserCard user={user} />
                    </div>
                ))
            }
        </div>
    )
}

export default UserList