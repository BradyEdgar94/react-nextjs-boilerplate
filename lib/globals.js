import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import { API_HOSTS } from '../app.config.json'

export const suffix = '/wp-json/wp/v2'
export const ENV = publicRuntimeConfig.ENV || 'development'
export const API_BASE = API_HOSTS[publicRuntimeConfig.ENV]
export const API = `${API_BASE}${suffix}`
