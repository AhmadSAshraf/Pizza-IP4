$(document).ready(function() {
  // calcBtn click function
  $('#calcBtn').click(function() {
    // start with no error messages displayed
    clearErrorMsg();
    var errorMsg = '';

    // get entries from checked radio buttons. Display an error if nothing was selected.
    var size = document.querySelector('input[name="selectedSize"]:checked');
    var crust = document.querySelector('input[name="selectedCrust"]:checked');
    var sauce = document.querySelector('input[name="selectedSauce"]:checked');
    var cheese = document.querySelector('input[name="selectedCheese"]:checked');
    var delivery = document.querySelector(
      'input[name="selectedDelivery"]:checked'
    );

    // get values of checked checkboxes (an array). Display an error if nothing was selected.
    var meat = $('#meatSelection input')
      .filter(':checked')
      .map(function() {
        return this.nextElementSibling.innerHTML.trim();
      })
      .get();
    var veggie = $('#veggieSelection input')
      .filter(':checked')
      .map(function() {
        return this.nextElementSibling.innerHTML.trim();
      })
      .get();

    // check for errors: all required except for meat and veggie
    if (isEmpty(size)) {
      if (errorMsg !== null && errorMsg !== '') {
        errorMsg = errorMsg + ',';
      }
      errorMsg = errorMsg + ' size';
      document.getElementById('pizza-size-header').style.color = '#c4122f';
    }
    if (isEmpty(crust)) {
      if (errorMsg !== null && errorMsg !== '') {
        errorMsg = errorMsg + ',';
      }
      errorMsg = errorMsg + ' crust';
      document.getElementById('crustBtn').style.color = '#c4122f';
    }
    if (isEmpty(sauce)) {
      if (errorMsg !== null && errorMsg !== '') {
        errorMsg = errorMsg + ',';
      }
      errorMsg = errorMsg + ' sauce';
      document.getElementById('sauceBtn').style.color = '#c4122f';
    }
    if (isEmpty(cheese)) {
      if (errorMsg !== null && errorMsg !== '') {
        errorMsg = errorMsg + ',';
      }
      errorMsg = errorMsg + ' cheese';
      document.getElementById('cheeseBtn').style.color = '#c4122f';
    }
    if (isEmpty(delivery)) {
      if (errorMsg !== null && errorMsg !== '') {
        errorMsg = errorMsg + ',';
      }
      errorMsg = errorMsg + ' delivery';
      document.getElementById('deliveryBtn').style.color = '#c4122f';
    }

    // construct final error message
    if (errorMsg !== null && errorMsg !== '') {
      errorMsg = 'Please select at least one:' + errorMsg;
      addErrorMsg(errorMsg);
    }

    // if no errors, continue
    if (errorMsg == null || errorMsg == '') {
      // price arrays
      var arraySize = [
        {
          price: 600
        },
        {
          price: 1000
        },
        {
          price: 1400
        },
        {
          price: 1600
        }
      ];
      var arrayCrust = [
        {
          price: 20
        },
        {
          price: 50
        },
        {
          price: 30
        },
        {
          price: 30
        },
        {
          price: 40
        }
      ];
      var arrayCheese = [
        {
          price: 30
        },
        {
          price: 30
        },
        {
          price: 0
        }
      ];
      var arrayDelivery = [
        {
          price: 0
        },
        {
          price: 200
        }
      ];

      // get selected item names and prices
      // -- from radio button groups
      var sizeName = size.nextElementSibling.innerHTML; // OR, using jQuery:  var sizeName = $('input[name="selectedSize"]:checked + label').text();
      var sizePrice = arraySize[size.value].price;
      console.log(sizeName + ' KES' + sizePrice);

      var crustName = crust.nextElementSibling.innerHTML;
      var crustPrice = arrayCrust[crust.value].price;
      console.log(crustName + ' KES' + crustPrice);

      var sauceName = sauce.nextElementSibling.innerHTML;
      var saucePrice = 0;
      console.log(sauceName + ' KES' + saucePrice);

      var cheeseName = cheese.nextElementSibling.innerHTML;
      var cheesePrice = arrayCheese[cheese.value].price;
      console.log(cheeseName + ' KES' + cheesePrice);

      var deliveryName = delivery.nextElementSibling.innerHTML;
      var deliveryPrice = arrayDelivery[delivery.value].price;
      console.log(deliveryName + ' KES' + deliveryPrice);

      // -- from checkbox groups
      var meatName = meat.join(', ');
      var meatPrice = meat.length - 1;
      if (meatPrice < 0) {
        meatPrice = 0;
      }
      console.log(meatName + ' KES' + meatPrice);

      var veggieName = veggie.join(', ');
      var veggiePrice = veggie.length - 1;
      if (veggiePrice < 0) {
        veggiePrice = 0;
      }
      console.log(veggieName + ' KES' + veggiePrice);

      // calc total
      var total =
        sizePrice +
        crustPrice +
        saucePrice +
        cheesePrice +
        meatPrice +
        veggiePrice +
        deliveryPrice;
      console.log('Total = KES' + total);

      // put items and prices into the total form
      itemNames = document.getElementsByClassName('itemName');
      itemPrices = document.getElementsByClassName('itemPrice');
      itemTotal = document.getElementById('totalPrice');

      itemNames[0].innerHTML = sizeName + ' Pizza';
      itemPrices[0].innerHTML = 'KES' + sizePrice.toFixed(2);

      itemNames[1].innerHTML = crustName;
      if (crustPrice > 0) {
        itemPrices[1].innerHTML = 'KES' + crustPrice.toFixed(2);
      }

      itemNames[2].innerHTML = sauceName;

      itemNames[3].innerHTML = cheeseName;
      if (cheesePrice > 0) {
        itemPrices[3].innerHTML = 'KES' + cheesePrice.toFixed(2);
      }

      itemNames[4].innerHTML = meatName;
      if (meatPrice > 0) {
        itemPrices[4].innerHTML = 'KES' + meatPrice.toFixed(2);
      }

      itemNames[5].innerHTML = veggieName;
      if (veggiePrice > 0)
        itemPrices[5].innerHTML = 'KES' + veggiePrice.toFixed(2);

      itemTotal.innerHTML = 'KES' + total.toFixed(2);

      // open the total form
      $('#orderTotalModal').modal();
    }
  });
  // end of calcBtn click function

  // used to test whether a selection was made
  function isEmpty(obj) {
    // obj will be an array if a checkbox was tested and a string if a radio button was tested
    if (Array.isArray(obj)) {
      if (obj.length == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (obj == null || obj == '') {
        return true;
      } else if (obj.length === 0) {
        return true;
      }
      return false;
    }
  }

  // display error message
  function addErrorMsg(errorMsg) {
    $('#orderErrorMsg').text(errorMsg); // OR: document.getElementById("orderErrorMsg").innerHTML = errorMsg;
    $('#orderErrorMsg').show(); // display the error div
  }

  // hide error message section and reset color on headers
  function clearErrorMsg() {
    $('#orderErrorMsg').hide();
    document.getElementById('pizza-size-header').style.color = '#231f20';
    document.getElementById('crustBtn').style.color = '#fff';
    document.getElementById('sauceBtn').style.color = '#fff';
    document.getElementById('cheeseBtn').style.color = '#fff';
    document.getElementById('meatBtn').style.color = '#fff';
    document.getElementById('veggieBtn').style.color = '#fff';
  }
});
