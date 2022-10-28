// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IRegistrationData } from '../../types'

const dummyApplication: IRegistrationData = {
  id: 'afskfsjlkfsdhfsdlfhdsjkl',
  phone: null,
  email: null,
  idMethod: null,
  driversLicense: {
    state: null,
    cardNumber: null,
    licenseNumber: null
  },
  directDebit: {
    bsb: null,
    accountNumber: null
  },
  dateOfBirth: {
    day: null,
    month: null,
    year: null
  },
  insertedAt: new Date(),
  updatedAt: new Date()
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRegistrationData>
) {
  if (req.method === 'POST') {
    res.status(200).json(dummyApplication)
  } else {
    res.status(200).json({
      ...dummyApplication,
      ...req.body,

      updatedAt: new Date()
    })
  }
 
}
