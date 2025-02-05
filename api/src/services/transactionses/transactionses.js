import { db } from 'src/lib/db'

export const transactionses = () => {
  return db.transactions.findMany({ orderBy: 'asc' })
}

export const transactions = ({ id }) => {
  return db.transactions.findUnique({
    where: { id },
  })
}

export const createTransactions = ({ input }) => {
  return db.transactions.create({
    data: input,
  })
}

export const updateTransactions = ({ id, input }) => {
  return db.transactions.update({
    data: input,
    where: { id },
  })
}

export const deleteTransactions = ({ id }) => {
  return db.transactions.delete({
    where: { id },
  })
}
