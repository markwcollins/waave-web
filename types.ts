export enum AustralianStateID {
  NSW = 'nsw',
  Victoria = 'victoria',
  Queensland = 'queensland'
}

export interface IEmailForm {
  email?: string|null
}

export interface IPhoneForm {
  phone?: string|null
}

export interface IDirectDebitForm {
  bsb?: number|null
  accountNumber?: number|null
}

export interface IEmailDriverLicenseName {
  state?: AustralianStateID|null
  licenseNumber?: string|null
  cardNumber?: string|null
}

export interface IDateOfBirthForm {
  day?: number|null
  month?: number|null
  year?: number|null
}

export enum IdMethod {
  Passport = 'passport',
  DriversLicense = 'drivers-license'
}

export interface IRegistrationData extends IEmailForm, IPhoneForm {
  id: string
  idMethod: IdMethod|null,
  driversLicense: IEmailDriverLicenseName
  dateOfBirth: IDateOfBirthForm 
  directDebit: IDirectDebitForm
  insertedAt: Date
  updatedAt: Date
}