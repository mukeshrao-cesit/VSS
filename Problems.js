const users = [
  {
    id: 1,
    name: "Ankit Jain",
  },
  {
    id: 2,
    name: "Shankar Sahu",
  },
  {
    id: 3,
    name: "Akash Kushwaha",
  },
];

const orders = [
  {
    orderId: 101,
    userId: 1,
    productId: 123,
    productName: "Apple iPhone 14 Pro Max",
  },
  {
    orderId: 102,
    userId: 1,
    productId: 124,
    productName: "Apple MacBook Pro",
  },
  {
    orderId: 103,
    userId: 1,
    productId: 125,
    productName: "Apple iWatch 7 series",
  },
  {
    orderId: 104,
    userId: 2,
    productId: 126,
    productName: "Samsung S22",
  },
];
const final = [];
function solve() {
  for (let i of users) {
    let orderList = [];
    for (let j of orders) {
      if (i.id === j.userId) {
        orderList.push({
          orderId: j.orderId,
          productId: j.productId,
          productName: j.productName,
        });
      }
    }
    final.push({ ...i, orders: orderList });
  }
  console.log(final);
}

solve();
