/*
  Use regex to strip out everything before the slug
  getSlug(https://google.ca/hello-world) => '/hello-world'
*/
const getSlug = link => {
  // If broken like just return home path so we doint break the site
  if (!link) { return '/' }

  // strip protocol and domain from the url
  let slug = link.match(/\/\/[^\/]+\/([^\.]+)/)[1]

  // remove trailing slash from slug
  slug = slug.replace(/\/$/, '')

  return `/${slug}`
}

// check to see a if number is even
const isEven = n => n % 2 == 0


/**************** EXPORTS ******************/

export { getSlug, isEven }
