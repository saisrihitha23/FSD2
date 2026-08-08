import { Customer } from "./module_customer.js";
import { Order } from "./module_order.js";

const customer: Customer = {
    name: "Sai Srihitha",
    city: "Hampi",
    premiumMembership: true
};

const order = new Order(customer, 9000);

order.printBill();