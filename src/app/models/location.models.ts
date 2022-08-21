export interface Location{
    id:number,
    startDate:Date,
    endDate:Date,
    city:string,
    address:string,
    patientId:string
}
export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY',
    },
  };