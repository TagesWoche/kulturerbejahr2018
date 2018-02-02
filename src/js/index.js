'use strict'

if (module.hot) {
  module.hot.accept()
}

import { mount } from 'riot'
import contentData from '../data/content.json'
import '../styles/index.scss'
import './components/fotimat-app.tag'
import './components/fotimat-overview.tag'
import './components/fotimat-gallery.tag'

mount('fotimat-app', {
  contentData: contentData
})
