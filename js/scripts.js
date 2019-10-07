// Business Logic

//Pizza Object
//Params size: string, toppings: string array
function Pizza(size, toppings, isSpecial) {
  // size of the pizza
  this.size = size;
  // array of toppings on the pizza
  this.toppings = toppings;
  // cost of the pizza - calls the getPrice prototype method
  if (isSpecial !== true) {
    this.price = this.getPrice();
  } else {
    this.price = 700;
  }
}

//Method for getting the price of a pizza.  Called in the Pizza constructor
//Big O(1)
Pizza.prototype.getPrice = function() {
  var price = 0;
  // large pizzas are KES1000, medium KES 800, small KES550
  if (this.size === 'large-hawwian') {
    price += 1000;
  } else if (this.size === 'medium-hawwian') {
    price += 800;
  } else if (this.size === 'small-hawwian') {
    price += 550;
  } else if (this.size === 'large-vegtikka') {
    price += 800;
  } else if (this.size === 'medium-vegtikka') {
    price += 700;
  } else if (this.size === 'small-vegtikka') {
    price += 500;
  } else if (this.size === 'large-perichick') {
    price += 1000;
  } else if (this.size === 'medium-perichick') {
    price += 830;
  } else if (this.size === 'small-perichick') {
    price += 570;
  } else if (this.size === 'large-americana') {
    price += 1100;
  } else if (this.size === 'medium-americana') {
    price += 800;
  } else if (this.size === 'small-americana') {
    price += 600;
  } else if (this.size === 'large-bbq') {
    price += 1000;
  } else if (this.size === 'medium-bbq') {
    price += 800;
  } else if (this.size === 'small-bbq') {
    price += 550;
  } else if (this.size === 'large-cm') {
    price += 1100;
  } else if (this.size === 'medium-cm') {
    price += 880;
  } else if (this.size === 'small-cm') {
    price += 590;
  }
  // each topping costs 100bob
  if (this.toppings.length >= 1) {
    price += this.toppings.length * 100;
  }
  // returns to the price from the method call in Pizza constructor
  return price;
};

//Address Object
function Address(street, apt, city, state, zip) {
  this.street = street;
  this.apt = apt;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

function Customer(name, phone, address, order) {
  this.customerName = name;
  this.customerPhone = phone;
  this.address = address;
  this.order = order;
}

//Order Object
function Order() {
  //Pizza object array storing the pizzas in the order
  this.pizzas = [];
  //total price of Order - calls method for calculating order price.
  this.totalPrice = 0;
  //address for delivery
  this.deliveryAddress = '';
  //holds the customer object of who is ordering the pizza
  this.customer;
}

//Method for getting the price of an order.
//Big O(n) - length of pizzas array
Order.prototype.refreshOrderPrice = function() {
  var orderPrice = 0;
  this.pizzas.forEach(function(pizza) {
    orderPrice += pizza.price;
  });
  this.totalPrice = orderPrice;
};

//Method for setting the address of a delivery
Order.prototype.setDeliveryAddress = function(address) {
  this.deliveryAddress = address;
};

//Method for updating how they order will be paid for
Order.prototype.setPaymentMethod = function(paymentMethod) {
  this.paymentMethod = paymentMethod;
};

//Method for updating who the customer on the order is
Order.prototype.setCustomer = function(customer) {
  this.customer = customer;
};

Order.prototype.displayAddress = function() {
  var addressString = '';
  if (this.deliveryAddress.apt === '') {
    addressString =
      this.deliveryAddress.street +
      ' ' +
      this.deliveryAddress.city +
      ', ' +
      this.deliveryAddress.state +
      ' ' +
      this.deliveryAddress.zip;
  } else {
    addressString =
      this.deliveryAddress.street +
      ' Apt ' +
      this.deliveryAddress.apt +
      ' ' +
      this.deliveryAddress.city +
      ', ' +
      this.deliveryAddress.state +
      ' ' +
      this.deliveryAddress.zip;
  }
  return addressString;
};

// UI Logic
$(document).ready(function() {
  // orderObject is accessible by multiple button click events
  var orderObject = new Order();

  // refresh the summary and totals on cart preview
  var refreshUI = function() {
    // clear out previous appends
    $('.pizza-summaries')
      .children()
      .remove();
    orderObject.pizzas.forEach(function(pizza) {
      var size = pizza.size;
      if (size === 'large-hawwian' && pizza.toppings.length < 1) {
        size = 'large-hawwian';
      } else if (size === 'large-hawwian') {
        size = 'large-hawwian';
      } else if (size === 'medium-hawwian' && pizza.toppings.length < 1) {
        size = 'medium-hawwian';
      } else if (size === 'medium-hawwian') {
        size = 'medium-hawwian';
      } else if (size === 'small-hawwian' && pizza.toppings.length < 1) {
        size = 'small-hawwian';
      } else if (size === 'small-hawwian') {
        size = 'small-hawwian';
      } else if (size === 'large-vegtikka' && pizza.toppings.length < 1) {
        size = 'large-vegtikka';
      } else if (size === 'large-vegtikka') {
        size = 'large-vegtikka';
      } else if (size === 'medium-vegtikka' && pizza.toppings.length < 1) {
        size = 'medium-vegtikka';
      } else if (size === 'medium-vegtikka') {
        size = 'medium-vegtikka';
      } else if (size === 'small-vegtikka' && pizza.toppings.length < 1) {
        size = 'small-vegtikka';
      } else if (size === 'small-vegtikka') {
        size = 'small-vegtikka';
      } else if (size === 'large-perichick' && pizza.toppings.length < 1) {
        size = 'large-perichick';
      } else if (size === 'large-perichick') {
        size = 'large-perichick';
      } else if (size === 'medium-perichick' && pizza.toppings.length < 1) {
        size = 'medium-perichick';
      } else if (size === 'medium-perichick') {
        size = 'medium-perichick';
      } else if (size === 'small-perichick' && pizza.toppings.length < 1) {
        size = 'small-perichick';
      } else if (size === 'small-perichick') {
        size = 'small-perichick';
      } else if (size === 'large-americana' && pizza.toppings.length < 1) {
        size = 'large-americana';
      } else if (size === 'large-americana') {
        size = 'large-americana';
      } else if (size === 'medium-americana' && pizza.toppings.length < 1) {
        size = 'medium-americana';
      } else if (size === 'medium-americana') {
        size = 'medium-americana';
      } else if (size === 'small-americana' && pizza.toppings.length < 1) {
        size = 'small-americana';
      } else if (size === 'small-americana') {
        size = 'small-americana';
      } else if (size === 'large-bbq' && pizza.toppings.length < 1) {
        size = 'large-bbq';
      } else if (size === 'large-bbq') {
        size = 'large-bbq';
      } else if (size === 'medium-bbq' && pizza.toppings.length < 1) {
        size = 'medium-bbq';
      } else if (size === 'medium-bbq') {
        size = 'medium-bbq';
      } else if (size === 'small-bbq' && pizza.toppings.length < 1) {
        size = 'small-bbq';
      } else if (size === 'small-bbq') {
        size = 'small-bbq';
      } else if (size === 'large-cm' && pizza.toppings.length < 1) {
        size = 'large-cm';
      } else if (size === 'large-cm') {
        size = 'large-cm';
      } else if (size === 'medium-cm' && pizza.toppings.length < 1) {
        size = 'medium-cm';
      } else if (size === 'medium-cm') {
        size = 'medium-cm';
      } else if (size === 'small-cm' && pizza.toppings.length < 1) {
        size = 'small-cm';
      } else if (size === 'small-cm') {
        size = 'small-cm';
      } else {
        size = "You haven't Selected any ";
      }

      $('.pizza-summaries').append(
        '<p><strong>' +
          size +
          " pizza </strong><span class='pull-right'>KES" +
          pizza.price +
          '</span></p>'
      );
      $('.pizza-summaries').append('<ul>');
      pizza.toppings.forEach(function(topping) {
        $('.pizza-summaries').append('<li>' + topping + '</li>');
      });
      $('.pizza-summaries').append('</ul>');
    });
    // if a bill goes into the thousands will add commas as well as cents.
    $('.total-price').text(
      'KES' +
        orderObject.totalPrice.toLocaleString(undefined, {
          minimumFractionDigits: 2
        })
    );
    // clears out the checkboxes
    $("input[type='checkbox']:checked").prop('checked', false);
  };

  $('form#pizza-form').submit(function(event) {
    event.preventDefault();
    var pizzaSize = $('#size').val();
    var pizzaToppings = [];

    //store what toppings were selected and push onto local array
    $('input:checkbox[name=toppings]:checked').each(function() {
      var topping = $(this).val();
      pizzaToppings.push(topping);
    });

    //instantiate our pizzaObject for the button click event
    var pizzaObject = new Pizza(pizzaSize, pizzaToppings, false);

    // push new pizza added to order and refresh order price
    orderObject.pizzas.push(pizzaObject);
    orderObject.refreshOrderPrice();
    //refresh order summary
    refreshUI();
  });

  // When someone wants to add special number one to their order
  $('#special-vegan').click(function() {
    var pizzaSpecial = new Pizza('large', ['Vegan special'], true);
    // push new pizza added to order and refresh order price
    orderObject.pizzas.push(pizzaSpecial);
    orderObject.refreshOrderPrice();
    //refresh order summary
    refreshUI();
  });

  // When someone wants to add special number two to their order
  $('#special-meat').click(function() {
    var pizzaSpecial = new Pizza('large', ['Meat special'], true);
    // push new pizza added to order and refresh order price
    orderObject.pizzas.push(pizzaSpecial);
    orderObject.refreshOrderPrice();
    //refresh order summary
    refreshUI();
  });

  // When someone wants to add special number three to their order
  $('#special-veggie').click(function() {
    var pizzaSpecial = new Pizza('large', ["veggie lover's special"], true);
    // push new pizza added to order and refresh order price
    orderObject.pizzas.push(pizzaSpecial);
    orderObject.refreshOrderPrice();
    //refresh order summary
    refreshUI();
  });

  // For when the purchase button is clicked
  $('#purchase-button').click(function() {
    $('#ordering-panel').hide();
    $('#payment-panel').show();
    $('#register-user').hide();
    $('#enroute').hide();
  });

  // For when the checkout link is clicked
  $('#checkout').click(function() {
    $('#ordering-panel').hide();
    $('#payment-panel').show();
    $('#register-user').hide();
    $('#enroute').hide();
  });
  // for when home link is clicked
  $('#home').click(function() {
    $('#ordering-panel').show();
    $('#register-user').hide();
    $('#payment-panel').hide();
    $('#enroute').hide();
  });

  // This is the submit event after someone has gone to purchase their order
  $('#payment-form').submit(function() {
    event.preventDefault();
    var customerName = $('#customer-name').val();
    var customerPhoneNumber = $('#customer-phone-number').val();
    var deliveryStreet = $('#delivery-street').val();
    var deliveryApt = $('#delivery-apt').val();
    var deliveryCity = $('#delivery-city').val();
    var deliveryState = $('#delivery-state').val();
    var deliveryZip = $('#delivery-zip').val();

    //instantiates an Address object
    var customerAddress = new Address(
      deliveryStreet,
      deliveryApt,
      deliveryCity,
      deliveryState,
      deliveryZip
    );

    //function call to take the customer address created and add it to the order
    orderObject.setDeliveryAddress(customerAddress);

    //instantiates a customer object
    var customer = new Customer(
      customerName,
      customerPhoneNumber,
      customerAddress,
      orderObject
    );

    // basic output showing an order is on it's way
    $('.customer-name-display').text(customer.customerName);
    $('#address-display').text(orderObject.displayAddress());
    $('#payment-panel').hide();
    $('#enroute').show();
  });
});
