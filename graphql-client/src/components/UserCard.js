import { Card } from 'antd'

const UserCard = ({user}) => {
    return (
        <div>
            <Card
                size="large"
                title={user.username}
                extra={<a href={`${user.id}`}>More</a>}
                style={{
                    width: 300,
                }}
            >
                <h1>{user.name}</h1>
                <p>Phone: {user.phone}</p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
            </Card>
        </div>
    )
}

export default UserCard