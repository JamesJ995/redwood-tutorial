import User from 'src/components/User/User'

export const QUERY = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }) => {
  return <User user={user} />
}
