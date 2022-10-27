
export enum PageName {
  Intro = 'intro',
  Email = 'email',
  ChooseId = 'choose-id',
  DriversLicenseChooseState = 'drivers-license-state',
  DriversLicenseNumber = 'drivers-license-license-number',
  DriversLicenseName = 'drivers-license-name',
  DateOfBirth = 'date-of-birth',
  Address = 'address',
  Confirm = 'confirm-kyc',
//   Bank = 'bank-account',
//   DirectDebit = 'direct-debit',
}

export const registrationFlow = {
  [PageName.Intro]: {
    href: '/register',
    progressValue: 0,
    previousPage: null,
    nextPage: [PageName.Email]
  },
  [PageName.Email]: {
    href: '/register/email',
    progressValue: 10,
    previousPage: null,
    nextPage: [PageName.ChooseId]
  },
  [PageName.ChooseId]: {
    href: '/register/choose-id',
    progressValue: 20,
    previousPage: [PageName.Email],
    nextPage: [PageName.DriversLicenseChooseState]
  },
  [PageName.DriversLicenseChooseState]: {
    href: '/register/drivers-license',
    progressValue: 30,
    previousPage: [PageName.ChooseId],
    nextPage: [PageName.DriversLicenseNumber]
  },
  [PageName.DriversLicenseNumber]: {
    href: '/register/drivers-license/[state]',
    progressValue: 40,
    previousPage: [PageName.DriversLicenseChooseState],
    nextPage: [PageName.DriversLicenseName]
  },
  [PageName.DriversLicenseName]: {
    href: '/register/drivers-license/[state]/name',
    progressValue: 50,
    previousPage: [PageName.DriversLicenseNumber],
    nextPage: [PageName.DateOfBirth]
  },
  [PageName.DateOfBirth]: {
    href: '/register/date-of-birth',
    progressValue: 60,
    previousPage: [PageName.DriversLicenseName],
    nextPage: [PageName.Address]
  }, 
  [PageName.Address]: {
    href: '/register/address',
    progressValue: 70,
    previousPage: [PageName.DateOfBirth],
    nextPage: [PageName.Confirm]
  }, 
  [PageName.Confirm]: {
    href: '/register/confirm',
    progressValue: 70,
    previousPage: [PageName.Address],
    nextPage: null
  }, 
}


export const getNextPageLink = (nextPageName: PageName) =>   registrationFlow[nextPageName].href