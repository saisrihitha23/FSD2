class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
    }
    displayBalance() {
        console.log("Balance:", this.balance);
    }
}
let b = new BankAccount(1000);
b.deposit(500);
b.withdraw(200);
b.displayBalance();