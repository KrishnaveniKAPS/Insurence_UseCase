export class Policy 
{
    constructor(policySrNo:number,   policyID:string,    policyname: string ,   policyrate:string ,   policyterms:string) 
    {
        this.policySrNo=policySrNo;
        this.policyID=policyID;
        this.policyname=policyname;
        this.policyrate=policyrate;
        this.policyterms= policyterms;
    }
 
    policySrNo:number;
    policyID:string ;
    policyname: string ;
    policyrate:string;
    policyterms:string;
}