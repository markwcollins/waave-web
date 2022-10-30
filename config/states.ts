import { AustralianStateID } from "../types";

export interface IState {
  id: AustralianStateID
  text: string
}

export const states: IState[] = [
  {
    id: AustralianStateID.NSW,
    text: 'NSW'
  },
  {
    id:  AustralianStateID.Victoria,
    text: 'Victoria'
  },
  {
    id: AustralianStateID.Queensland,
    text: 'Queensland'
  }
]
