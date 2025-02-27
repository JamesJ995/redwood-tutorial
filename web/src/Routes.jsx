// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import UsersLayout from './layouts/UsersLayout/UsersLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/crochet" page={CrochetPage} name="crochet" />
      <Set wrap={ScaffoldLayout} title="Audits" titleTo="audits" buttonLabel="New Audit" buttonTo="newAudit">
        <Route path="/audits/new" page={AuditNewAuditPage} name="newAudit" />
        <Route path="/audits/{id:Int}/edit" page={AuditEditAuditPage} name="editAudit" />
        <Route path="/audits/{id:Int}" page={AuditAuditPage} name="audit" />
        <Route path="/audits" page={AuditAuditsPage} name="audits" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home" roles="admin">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
        <Set wrap={UsersLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/admin/users" page={UserUsersPage} name="users" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
