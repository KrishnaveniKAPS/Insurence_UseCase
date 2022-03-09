import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Policy } from '../policy';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent{

  policies : Policy[] | undefined; //array

  mypolicies: Policy[] | undefined;  //added mypolicy array 
   policyService; //variable
 
   constructor()
   {
     //creating an instance for the PolicyService class to access getPolicies()
     this.policyService=new PolicyService();
   }
   //creating a function in app.component to access the getPolicies() from PolicyService
   getPolicies()
  {
     //accessing the getpolicies() method from policyService class
     //and store it in the array policies
     this.policies=this.policyService.getPolicies();
   }
//creating a function in app.component to access the getPolicies() from PolicyService
getmypolicies()
{
   //accessing the getpolicies() method from policyService class
   //and store it in the array policies
   this.mypolicies=this.policyService.getmypolicies();
 }



    //ngStyle
  color: string = '#df4759';

}
