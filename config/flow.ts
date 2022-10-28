
export enum PageName {
  Intro = 'intro',
  EnterPhone = 'enter-phone',
  EnterOTP = 'enter-otp',
  Email = 'email',
  ChooseId = 'choose-id',
  SelectDriversLicenseState = 'select-drivers-license-state',
  AddDriversLicenseNumber = 'add-drivers-license-number',
  AddDriversLicenseName = 'add-drivers-license-name',
  AddDateOfBirth = 'add-date-of-birth',
  AddAddress = 'AddAddress',
  ConfirmIdData = 'confirm-id-data',
  AddBank = 'add-bank',
  SelectBankAccount = 'select-bank-account',
  AddDirectDebit = 'direct-debit',
  TermsAndConditions = 'terms-and-conditions',
  PaymentConfirmationPostSignUp = 'payment-confirmation-post-sign-up',
  PaymentSuccess = 'payment-success',
}

export const registrationFlow = {
  [PageName.Intro]: {
    href: '/intro',
    progressValue: 0,
    previousPage: null,
    nextPage: [PageName.EnterPhone]
  },
  [PageName.EnterPhone]: {
    href: '/phone',
    progressValue: 0,
    previousPage: [PageName.Intro],
    nextPage: [PageName.EnterOTP]
  },
  [PageName.EnterOTP]: {
    href: '/phone/otp',
    progressValue: 0,
    previousPage: [PageName.EnterPhone],
    nextPage: [PageName.Email]
  },
  [PageName.Email]: {
    href: '/customer/123/register/email',
    progressValue: 8,
    previousPage: null,
    nextPage: [PageName.ChooseId]
  },
  [PageName.ChooseId]: {
    href: '/customer/123/register/choose-id',
    progressValue: 16,
    previousPage: [PageName.Email],
    nextPage: [PageName.SelectDriversLicenseState]
  },
  [PageName.SelectDriversLicenseState]: {
    href: '/customer/123/register/drivers-license',
    progressValue: 24,
    previousPage: [PageName.ChooseId],
    nextPage: [PageName.AddDriversLicenseNumber]
  },
  [PageName.AddDriversLicenseNumber]: {
    href: '/customer/123/register/drivers-license/[state]',
    progressValue: 32,
    previousPage: [PageName.SelectDriversLicenseState],
    nextPage: [PageName.AddDriversLicenseName]
  },
  [PageName.AddDriversLicenseName]: {
    href: '/customer/123/register/drivers-license/[state]/name',
    progressValue: 40,
    previousPage: [PageName.AddDriversLicenseNumber],
    nextPage: [PageName.AddDateOfBirth]
  },
  [PageName.AddDateOfBirth]: {
    href: '/customer/123/register/date-of-birth',
    progressValue: 48,
    previousPage: [PageName.AddDriversLicenseName],
    nextPage: [PageName.AddAddress]
  }, 
  [PageName.AddAddress]: {
    href: '/customer/123/register/address',
    progressValue: 56,
    previousPage: [PageName.AddDateOfBirth],
    nextPage: [PageName.ConfirmIdData]
  }, 
  [PageName.ConfirmIdData]: {
    href: '/customer/123/register/confirm',
    progressValue: 64,
    previousPage: [PageName.AddAddress],
    nextPage: [PageName.AddBank]
  }, 
  [PageName.AddBank]: {
    href: '/customer/123/bank/add',
    progressValue: 72,
    previousPage: [PageName.ConfirmIdData],
    nextPage: [PageName.SelectBankAccount]
  }, 
  [PageName.SelectBankAccount]: {
    href: '/customer/123/bank/select-account',
    progressValue: 80,
    previousPage:  [PageName.AddBank],
    nextPage: [PageName.AddDirectDebit]
  }, 
  [PageName.AddDirectDebit]: {
    href: '/customer/123/bank/direct-debit',
    progressValue: 88,
    previousPage:  [PageName.SelectBankAccount],
    nextPage: [PageName.TermsAndConditions]
  }, 
  [PageName.TermsAndConditions]: {
    href: '/customer/123/legal/terms',
    progressValue: 96,
    previousPage:  [PageName.SelectBankAccount],
    nextPage: [PageName.PaymentConfirmationPostSignUp]
  }, 
  [PageName.PaymentConfirmationPostSignUp]: {
    href: '/customer/123/payment/confirm-post-sign-up',
    progressValue: 100,
    previousPage:  null,
    nextPage: [PageName.PaymentSuccess]
  }, 
  [PageName.PaymentSuccess]: {
    href: '/customer/123/payment/success',
    progressValue: 100,
    previousPage:  null,
    nextPage: null
  }, 
}

export const getNextPageLink = (nextPageName: PageName) =>   registrationFlow[nextPageName].href
export const getPreviousPageLink = (previousPageName: PageName) =>   registrationFlow[previousPageName].href