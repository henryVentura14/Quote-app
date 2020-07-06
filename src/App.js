import React, { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'

//=> Styled components

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContentForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`
// Styled component <==//

const App = () => {
  //==> useState
  const [summary, saveSummary] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })
  const [loading, saveLoading] = useState(false)
  //useState <==//

  //=> extraemos data
  const { quote, data } = summary
  // extraemos data<==

  return (
    <Content>
      <Header title='Insurance quote' />
      <ContentForm>
        <Form saveSummary={saveSummary} saveLoading={saveLoading} />
        {loading ? <Spinner /> : null}
        {!loading ? <Summary data={data} /> : null}
        {!loading ? <Result quote={quote} /> : null}
      </ContentForm>
    </Content>
  )
}

export default App
