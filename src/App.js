import React, { useContext, useState } from 'react'

// first we will make a new context
const MyContext = React.createContext()

// Then create a provider Component
function MyProvider(props) {
  const initialState = {
    name: 'Wes',
    age: 29,
    cool: true
  }

  const [state, setState] = useState(initialState)

  return (
    <MyContext.Provider value={{
      state: state,
      growAYearOlder: () => setState({
        ...state,
        age: state.age + 1,
      })
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

const Family = () => (
  <div className="family">
    <Person />
  </div>
)

function Person() {
  const context = useContext(MyContext)
  return (
    <div className="person">
      <p>Age: {context.state.age}</p>
      <p>Name: {context.state.name}</p>
      <p>Cool: {context.state.cool ? 'Yess!' : 'umpumm...'}</p>
      <button onClick={context.growAYearOlder}>
        🍰🍥🎂
      </button>
    </div>
  )
}

const App = () => {
  return (
    <MyProvider>
      <p>I am the app</p>
      <Family />
    </MyProvider>
  )
}

export default App
