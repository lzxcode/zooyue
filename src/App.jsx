import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Routes from '@/router/index.js'
import Header from '@/components/app-header'

const App = memo((props) => {
  console.log(343434);

  return (
    <div>
      <Header></Header>
      <main>
        <Routes></Routes>
      </main>
      <footer>footer</footer>
    </div>
  )
})

App.propTypes = {}

export default App