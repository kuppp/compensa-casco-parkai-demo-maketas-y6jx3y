import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyListService {
  constructor(private http: HttpClient) {}

  getPolicyMedium() {
    return this.http
      .get<any>('assets/policy-list.json')
      .toPromise()
      .then((res) => <Policy[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
export interface Fleet {
  issueDate: string | Date;
  startDate: string |Date;
  endDate: string | Date;
  number: string;
  policyholder: string;
  policyholderCode: string;
  numberOfObjects: number;
  numberOfCurrentObjects: number;

}
export interface Schedule {
  number?: number;
  date?: string | Date;
  paymentSum?: number;
  paidSum?: number;
}
export interface Policy {
  flag?: number;
  plId?: number;
  policy?: string;
  beginDate?: string | Date;
  endDate?: string | Date;
  canceationDate?: string | Date;
  vehicle?: Vehicle;
  error?: string;
  premium?: number;
  additionalInsurance?: Insurance;
  status?: string;
  schedule: Schedule;
}

export interface Vehicle {
  plateNo?: string;
  vinNo?: string;
  type?: string;
  marke?: string;
  model?: string;
  riskPackageName?: string;
  deductiblePackageName?: string;
  manufYear?: string | Date;
  value?: number;
  signalLevel?: number;
  mass?: number;
  power?: number;
  seats?: number;
  bodyType?: string;
  fuelType?: string;
}

export interface Insurance {
  name?: string;
  premium?: number;
}

export interface Condition {
  conditionType?: string;
  insType?: string;
  ageFrom?: number;
  ageTo?: number;
  value: string;
}
