import { DISCOUNT, DELIVERYCHARGE } from "./module_config.js";
import { Customer } from "./module_customer.js";

export class Order {

    constructor(
        public customer: Customer,
        private amount: number
    ) { }

    public calculateBill(): number {

        let discount = this.amount * DISCOUNT;

        return this.amount - discount + DELIVERYCHARGE;
    }

    public printBill(): void {

        console.log("------ Order Summary ------");
        console.log(`Customer : ${this.customer.name}`);
        console.log(`City     : ${this.customer.city}`);
        console.log(`Total    : ${this.calculateBill()}`);
    }

}