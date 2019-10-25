import React from 'react'
import dynamicContentLoader from '../../lib/dynamicContentLoader'

export default ({ layout, props }) =>
  <main data-test="dynamic">
    { dynamicContentLoader(layout) }
  </main>
