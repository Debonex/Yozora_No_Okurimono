import React from 'react'
import LoadView from '../containers/LoadView'
import Top from '../containers/Top'

export default function ({ chapter }) {
  switch (chapter) {
    case 'load':
      return <LoadView />
    case 'top':
      return <Top />
    default:
      return <Top />
  }
}
