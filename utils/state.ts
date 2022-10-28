import { NextRouter } from "next/router"
import { IRegistrationData } from "../types"

export const useInsertApplication = () => {
  const insert = async (): Promise<IRegistrationData> => {
     const res = await fetch('/api/application')
     return await res.json() as IRegistrationData
  } 
  return { insert }
}

export const useUpdateApplication = () => {
  const update = async (id: string|null, data: Partial<IRegistrationData>): Promise<IRegistrationData> => {
    if (!id) throw 'Id missing'
    const res = await fetch('/api/application', { // note we are going to /1
      method: "PATCH",
      body: JSON.stringify(data)
    })
    return await res.json() as IRegistrationData
  } 
  return { update }
}

export const getCustomerIdFromRouter = (router: NextRouter): string|null => {
  const { customerId } = router.query
  return typeof customerId === 'string' ? customerId : null
}

export const getStateRouter = (router: NextRouter): string|null => {
  const { state } = router.query
  return typeof state === 'string' ? state : null
}