import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-new-policy',
  templateUrl: './new-policy.component.html',
  styleUrls: ['./new-policy.component.css']
})
export class NewPolicyComponent implements OnInit {
  productTypes = ['Student', 'Home', 'Car', 'Health', 'Life', 'Other'];
  myForm: FormGroup | any;
  title: FormControl | any;
  modelName: FormControl | any;
  color: FormControl | any;
  productType: FormControl | any;
  brand: FormControl | any;
  price: FormControl | any;
  constructor() { }
  ngOnInit() {


    this.invokeStripe();
    this.title = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.modelName = new FormControl();
    this.color = new FormControl('', Validators.pattern('[a-zA-Z]*'));
    this.productType = new FormControl('', Validators.required);
    this.brand = new FormControl('', Validators.required);
    this.price = new FormControl('', [Validators.required, Validators.min(1)]);
    this.myForm = new FormGroup({
      'title': this.title,
      'modelName': this.modelName,
      'productType': this.productType,
      'color': this.color,
      'brand': this.brand,
      'price': this.price
    });
  }

  paymentHandler: any = null;
  price1: any;


  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Insurance',
      description: '5 Policies',
      amount: amount,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
