export const schema = gql`
  type Audit {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    userId: Int!
    user: User!
    log: String!
  }

  type Query {
    audits: [Audit!]! @requireAuth
    audit(id: Int!): Audit @requireAuth
  }

  input CreateAuditInput {
    userId: Int!
    log: String!
  }

  input UpdateAuditInput {
    userId: Int
    log: String
  }

  type Mutation {
    createAudit(input: CreateAuditInput!): Audit! @requireAuth
    updateAudit(id: Int!, input: UpdateAuditInput!): Audit! @requireAuth
    deleteAudit(id: Int!): Audit! @requireAuth
  }
`
