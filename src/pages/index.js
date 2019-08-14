import React, { memo } from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Home from '../Home'

const IndexPage = () => (
  <Layout>
    <SEO title="Strove" />
    <Home />
  </Layout>
)

export default memo(IndexPage)
