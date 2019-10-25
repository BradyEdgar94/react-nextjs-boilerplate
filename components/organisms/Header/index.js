import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

class Header extends React.Component {
  formatMenu (menu) {
    return menu.map(({ title, object_slug, children, ...item }) => {
      /*
        Our home page in the cms has a slug of 'home', so if the slug is equal to 'home',
        change the url to '/', otherwise just use the slug for the page that is in the cms
      */
      let slug = object_slug === 'home'
        ? '/'
        : `/${object_slug}`

      // If the custom url from the cms is an anchor link (ex. #service)
      if (item.url.indexOf('#') !== -1) {
        if (item.url === '#') {
          slug = ''
        } else {
          slug = `/${item.url}`
        }
      }

      /*
        Create an object of all the attributes that will be needed in the <a> tags.
        We can then use a spread operator(...) on this object and it will render the
        key/value pairs as attributes/values inside the <a> tag
      */
      const attributes = this.createAttributes(item)

      return ({
        title,
        slug,
        attributes,
        isExternal: !!attributes.href,
        children: this.buildDropDown(children)
      })
    })
  }

  /*
    Create an appropriate object of attributes based on the link type in the cms
    that will be rendered in an <a> tag
  */
  createAttributes ({ title, object, url, children }) {
    let attribute = {}

    // If the menu item in the cms is a custom link
    if (object === 'custom') {
      /*
        check to see if the '#' character exists in in the menu item's url, this
        is so we don't add target="_blank" or other external link attributes for
        anchor links that are meant to be used as a smooth scrolling anchor link
      */
      if (url.indexOf('#') === -1) {
        /*
          Using a spreak operator like so <a {...attribute}>,  on this object will
          render as the following:
          <a
            href="https://some-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
        */
        attribute = {
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      } else {
        // Since this is an anchor link, lets add some smooth scrolling to it
        attribute = {
          onClick: e => this.scroll(url, e)
        }
      }
    }

    return attribute
  }

  // If there are items in the children array, format an array of links for the dropdown
  buildDropDown (dropDown) {
    if (!dropDown || !dropDown.length) {
      return false
    }

    return this.formatMenu(dropDown)
  }

  // Render the msrkup needed for the dropdowns
  renderDropDown = items =>
    <ul>
      {
        items.map(({ title, slug, isExternal, attributes }, i) => isExternal
          ? <li key={i}>
              <a {...attributes}>
                {title}
              </a>
            </li>
          : <li key={i}>
              <Link href="/default" as={slug}><a {...attributes}>{title}</a></Link>
            </li>
        )
      }
    </ul>

  scroll = (slug, e) => {
    e.preventDefault()

    // if no anchor link, do nothing. This is ideal for parent dropdown items with no link
    if (!slug.length || slug === '#') {
      return
    }

    // if there is a slug before the anchor tag, seperate it and remove the slashes
    const path = slug.split('#')[0].replace(/^\/|\/$/g, '')
    //  Get the anchor tag from the slug
    const anchor = slug.split('#')[1]

    const scroll = new SmoothScroll()

    // Only push to the router if we are changing paths
    if (Router.router.pathname !== `/${path}`) {
      Router.push(`/${path}`, `/${path}`, { shallow: true })
      .then(() => {

        const targetAnchor = document.querySelector(`#${anchor}`)
        if (targetAnchor) {
          scroll.animateScroll(targetAnchor, e.target, {
            topOnEmptyHash: false,
            offset: 75,
            updateURL: false
          })
        }
      })
    } else {
      const targetAnchor = document.querySelector(`#${anchor}`)

      if (targetAnchor) {
        scroll.animateScroll(targetAnchor, e.target, {
          topOnEmptyHash: false,
          offset: 75,
          updateURL: false
        })
      }
    }
  }

  render () {
    const { menu } = this.props

    return (
      <header id="header" className="header fixed-top">
          <div className="container">
            <div className="logo float-left">
              <Link href="/">
                <a className="scrollto">
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </a>
              </Link>
            </div>
            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                {
                  this.formatMenu(menu).map(({ title, slug, isExternal, url, children, attributes }, i) => isExternal
                    ? <li key={i} className={children ? 'drop-down' : undefined}>
                        <a {...attributes}>{title}</a>
                        { children && this.renderDropDown(children) }
                      </li>
                    : <li key={i} className={children ? 'drop-down' : undefined}>
                        <Link href="/default" as={slug}><a {...attributes}>{title}</a></Link>
                        { children && this.renderDropDown(children) }
                      </li>
                  )
                }
              </ul>
            </nav>
          </div>
        </header>
    )
  }
}

export default Header
