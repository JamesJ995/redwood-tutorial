import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CrochetPage = () => {
  return (
    <>
      <MetaTags title="Crochet" description="Crochet page" />

      <h1>CrochetPage</h1>
      <p>
        Find me in <code>./web/src/pages/CrochetPage/CrochetPage.jsx</code>
      </p>
      <p>
        My default route is named <code>crochet</code>, link to me with `
        <Link to={routes.crochet()}>Crochet</Link>`
      </p>
    </>
  )
}

export default CrochetPage
