/* @flow */
import { h as createElement } from 'preact'

import RendererProvider from './RendererProvider'

import deprecate from './_deprecate'

export default function Provider(props) {
  deprecate(
    'Importing `Provider` from preact-fela is deprecated. Import `RendererProvider` instead.\nSee http://fela.js.org/docs/api/bindings/renderer-provider'
  )

  return createElement(RendererProvider, props)
}
