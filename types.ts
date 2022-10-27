export enum AustralianStateID {
  NSW = 'nsw',
  Victoria = 'victoria',
  Queensland = 'queensland'
}

interface IEmailForm {
  email: string
}

export interface IEmailDriverLicenseName {
  state: AustralianStateID|null,
  licenseNumber: string
}

export interface IRegistrationData extends IEmailDriverLicenseName, IEmailForm {
  id: string
}