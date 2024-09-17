// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import { generateClient } from 'aws-amplify/api';
import { createTodo, updateTodo } from './graphql/mutations';
import { listTodos, getTodo } from './graphql/queries';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Graph from './components/Graph/Graph';
import DesignPage from './components/DesignPage/DesignPage';
import GraphTest from './components/GraphTest/GraphTest';

import { useState } from 'react';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);
const client = generateClient();

function App() {

  const [sortedItems, setSortedItems] = useState([]);

  async function storeTodo() {
    const result = await client.graphql({
      query: createTodo,
      variables: {
        input: {
          name:"Dump1",
          description:"29/08/2024",
        }
      }
    });
    console.log(result)
  }
  
  async function changeTodo() {
    const result = await client.graphql({
      query: updateTodo,
      variables: {
        input: {
          id: "4c4c35e2-ab77-4e9c-aa0a-ca55ada16170",
          name:"Dump11",
        }
      }
    });
    console.log(result)
  }

  async function fetchTodos() {
    const result = await client.graphql({
      query: listTodos,
    });
    // console.log(result.data.listTodos.items)
    // sorted items return as per description
    const sortedNames = result.data.listTodos.items
    .sort((a, b) => a.description.localeCompare(b.description))
    .map(item => {
      return { 
        id: item.id, name: item.name, description: item.description
      }
    });
    console.log(sortedNames);
    setSortedItems(sortedNames);
  }

  async function fetchTodo() {
    const result = await client.graphql({
      query: getTodo,
      variables: { id:"6dd10ceb-f482-404b-bbcc-f762694f102f" }
    });
    console.log(result);
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Welcome {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>
          <button onClick={storeTodo}>New Todo</button>
          <button onClick={fetchTodos}>Fetch Todos</button>
          <button onClick={fetchTodo}>Fetch Todo - test</button>
          <button onClick={changeTodo}>Change Todo - test</button>
  
          <Router>
            <div>
              <Routes>
                <Route path="/graph" element={<Graph items={sortedItems} />} />
                <Route path="/designPage" element={<DesignPage />} />
                <Route path="/graphTest" element={<GraphTest />} />
              </Routes>
            </div>
          </Router>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
