import { Injectable } from '@angular/core';
//import module policy.ts
import {Policy} from './policy'
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  public  getPolicies() 
  {
 
    let policies:Policy[]; //array

    policies=
    [
      new Policy(1,'DL01','Term Insurance_Jeevan Labh',900000,'25 Years'),
      new Policy(2,'DL02','Term Insurance_Spouse',65000,'10 Years'),
      new Policy(3,'DL03','Term Insurance_Child',700000,'15 Years'),
      new Policy(4,'DL04','Term Insurance_Coronavirus',30000,'5 Years'),
      new Policy(5,'DL05','Term Insurance_LifeInsurance',100000,'20 Years'),
  ]

    return policies;               
}
}