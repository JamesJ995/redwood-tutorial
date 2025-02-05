import {
  transactionses,
  transactions,
  createTransactions,
  updateTransactions,
  deleteTransactions,
} from './transactionses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('transactionses', () => {
  scenario('returns all transactionses', async (scenario) => {
    const result = await transactionses()

    expect(result.length).toEqual(Object.keys(scenario.transactions).length)
  })

  scenario('returns a single transactions', async (scenario) => {
    const result = await transactions({ id: scenario.transactions.one.id })

    expect(result).toEqual(scenario.transactions.one)
  })

  scenario('creates a transactions', async () => {
    const result = await createTransactions({
      input: { amount: 8648647 },
    })

    expect(result.amount).toEqual(8648647)
  })

  scenario('updates a transactions', async (scenario) => {
    const original = await transactions({
      id: scenario.transactions.one.id,
    })
    const result = await updateTransactions({
      id: original.id,
      input: { amount: 2945155 },
    })

    expect(result.amount).toEqual(2945155)
  })

  scenario('deletes a transactions', async (scenario) => {
    const original = await deleteTransactions({
      id: scenario.transactions.one.id,
    })
    const result = await transactions({ id: original.id })

    expect(result).toEqual(null)
  })
})
