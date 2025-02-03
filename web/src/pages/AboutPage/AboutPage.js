import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        This site was started using the redwoodjs tutorial, I am expanding it to
        be a fun and hopefully useful tool for a friend to improve toward their
        chess goals.
      </p>
    </>
  )
}

export default AboutPage
