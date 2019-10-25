import 'isomorphic-fetch'
import { API, API_BASE } from './globals'

const api = {
  site: {
    async getPageData (slug) {
      const response = await fetch(`${API}/pages?slug=${slug}`)
      const data = await response.json()

      return data[0]
    },
    async getHeaderMenu () {
      const response = await fetch(`${API_BASE}/wp-json/wp-api-menus/v2/menus/2`)
      const data = await response.json()

      return data.items
    },
    async getFooterMenu () {
      const response = await fetch(`${API_BASE}/wp-json/wp-api-menus/v2/menus/3`)
      const data = await response.json()

      return data.items
    },
    async getArticles () {
      const response = await fetch(`${API}/posts`)
      const data = await response.json()

      return data
    },
    async getArticle (slug) {
      const response = await fetch(`${API}/posts?_embed&slug=${slug}`)
      const data = await response.json()

      return data[0]
    },
    async getPreviewData (id, wpnonce) {
      const response = await fetch(`${API_BASE}/wp-json/__/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`, { credentials: 'include' })
      const data = await response.json()

      return data
    }
  }
}

export default api
