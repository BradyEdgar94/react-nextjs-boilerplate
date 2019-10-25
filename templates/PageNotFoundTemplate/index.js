import React from 'react'
import ArticleHero from '../../components/molecules/ArticleHero'

export default ({ page }) =>
  <main className="default-template" data-test="page-not-found">
    <ArticleHero title="Page Not Found" />
  </main>
