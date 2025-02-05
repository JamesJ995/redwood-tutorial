import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/email'

import { createAudit } from '../audits/audits'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const emailUser = async ({ id }) => {
  const user = await db.user.findUnique({
    where: { id },
  })

  await sendTestEmail(user.email)
  await createAudit({
    input: { userId: id, log: 'Admin sent test email to user' },
  })

  return user
}

function sendTestEmail(emailAddress) {
  const subject = 'Welcome to The Sami Chess Dojo'
  const text = 'Welcome to the Dojo.\n\n'
  const html = 'Welcome to the Dojo.<br><br>'
  return sendEmail({ to: emailAddress, subject, text, html })
}
