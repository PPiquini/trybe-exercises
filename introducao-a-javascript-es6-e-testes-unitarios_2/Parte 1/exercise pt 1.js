const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
//R. Rua das Flores, Nº: 389, AP: 701"
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const entregador = order.order.delivery.deliveryPerson
  const end = Object.values(order.address)
  console.log(`Olá ${entregador}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${end[0]}, Nº: ${end[1]}, AP: ${end[2]}`)
}

customerInfo(order);

//"Olá Luiz Silva, o total do seu pedido de muzzarella, 
//calabresa e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const order2 = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    },
  };
  const alterado = Object.assign(order, order2);
  console.log(`Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${order.payment.total}.`)
}

orderModifier(order);