export const standard = defineScenario({
  audit: {
    one: {
      data: {
        log: 'String',
        user: {
          create: {
            email: 'String4302072',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        log: 'String',
        user: {
          create: {
            email: 'String4409299',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
