import { render } from '@redwoodjs/testing/web'

import CrochetPage from './CrochetPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CrochetPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrochetPage />)
    }).not.toThrow()
  })
})
