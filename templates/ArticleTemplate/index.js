import React from 'react'
import ArticleHero from '../../components/molecules/ArticleHero'

export default ({ page }) =>
  <main className="default-template" data-test="default">
    <ArticleHero
      title={page.title.rendered}
      image={{
        url: page._embedded &&
          page._embedded['wp:featuredmedia'] &&
          page._embedded['wp:featuredmedia'][0].source_url,
        alt: page._embedded &&
          page._embedded['wp:featuredmedia'] &&
          page._embedded['wp:featuredmedia'][0].alt_text
      }}
    />
    <section className="content" id="content">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </section>
  </main>
