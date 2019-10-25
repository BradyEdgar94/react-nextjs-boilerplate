import React from 'react'
import { getSlug } from '../../lib/helpers'
import ArticleHero from '../../components/molecules/ArticleHero'
import FloatingCard from '../../components/molecules/FloatingCard'

export default ({ page }) =>
  <main className="blog-landng-page-template" data-test="blog-landng-page-template">
    <ArticleHero title={page.title.rendered} />
    <section className="content" id="content">
      <div className="container">
        {
          !page.articles
          ? <p>Noo Articles</p>
          : page.articles.map(({ title, link, excerpt }) =>
              <FloatingCard
                title={title.rendered}
                caption={excerpt.rendered}
                as={`/blog${getSlug(link)}`}
                href="/blog/article"
              />
            )
        }
      </div>
    </section>
  </main>
