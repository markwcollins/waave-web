export enum AustralianStateID {
  NSW = 'nsw',
  Victoria = 'victoria',
  Queensland = 'queensland'
}

export const states = [
  {
    id: AustralianStateID.NSW,
    text: 'NSW',
    href: '/register/drivers-license/nsw'
  },
  {
    id:  AustralianStateID.NSW,
    text: 'Victoria',
    href: '/register/drivers-license/victoria'
  },
  {
    id: AustralianStateID.Queensland,
    text: 'Queensland',
    href: '/register/drivers-license/queensland'
  }
]
