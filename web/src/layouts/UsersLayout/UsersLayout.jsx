import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const UsersLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.users()} className="rw-link">
            Users
          </Link>
        </h1>
        {/* <Link to={routes.newUser()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Post
        </Link> */}
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default UsersLayout
