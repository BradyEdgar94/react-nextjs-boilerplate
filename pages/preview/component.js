import React from 'react'
import Layout from '../../components/molecules/Layout'
import Error from 'next/error'

export default ({ error, ...props }) => error
  ? <Error statusCode={404} />
  : <Layout {...props} />
