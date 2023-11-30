import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Route, Routes } from "react-router-dom";
import UserList from './UserList'
import UserDetail from './UserDetail'

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
	cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/:id' element={<UserDetail />}/>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
