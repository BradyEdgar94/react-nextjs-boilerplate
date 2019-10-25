import React from 'react'
import ArticleTemplate from './ArticleTemplate'
import BlogLandingPage from './BlogLandingPage'
import DynamicTemplate from './DynamicTemplate'
import PageNotFoundTemplate from './PageNotFoundTemplate'

const Template = ({ children, ...props }) => {
  const renderTemplate = () => {
    let Container = ArticleTemplate

    if (!props.page || !Object.keys(props.page).length) {
      Container = PageNotFoundTemplate
    } else {
      switch (props.page.template) {
        case 'dynamic.php':
          Container = DynamicTemplate
          break
        case 'blog-landing-page.php':
          Container = BlogLandingPage
          break
        default:
          Container = ArticleTemplate
          break
      }
    }

    return (
      <Container {...props}>
        { children }
      </Container>
    )
  }

  return renderTemplate()
}

export default Template
