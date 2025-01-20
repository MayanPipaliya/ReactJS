import React from 'react'
import Form from './assets/components/Form'
import Timer from './assets/components/Timer'
import Fakeapi from './assets/components/fakeapi'

const App = () => {
  return (
    <div>
      <Form />
      <Timer duration={60} />
      <Fakeapi />

    </div>
  )
}

export default App