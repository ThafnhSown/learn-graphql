import { gql } from '@apollo/client'

const getUsers = gql`
    query getUsersQuery {
        users {
            id
            name
            username
            phone
            address {
                street
                suite
                city
            }
        }
    }
`
const getUserById = gql`
	query getUserById($id: ID!) {
		user(id: $id) {
			id
			name
			username
            phone
            address {
                street
                suite
                city
            }
            posts {
                title
                body
            }
		}
	}
`

export { getUsers, getUserById }