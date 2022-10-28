import { IRegistrationData } from "../types"

import create from 'zustand'

export const useInsertApplication = () => {
  const insert = async (): Promise<IRegistrationData> => {
     const res = await fetch('/api/application')
     return await res.json() as IRegistrationData
  } 
  return { insert }
}

export const useUpdateApplication = () => {
  const update = async (id: string, data: Partial<IRegistrationData>): Promise<IRegistrationData> => {
    const res = await fetch('/api/application', { // note we are going to /1
      method: "PATCH",
      body: JSON.stringify(data)
    })
    return await res.json() as IRegistrationData
  } 
  return { update }
}