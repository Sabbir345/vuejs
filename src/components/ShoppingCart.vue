<template>
    <div >
        <div class="container">
            <br>
            <nav id="top-navigation" class="well well-sm flex flex-row align-center">

                <div class="text-right pull-right cart-info">
                    <span class="stats">
                        {{cart.items.length}} 
                        <template v-if="cart.items.length == 1">item</template>
                        <template v-else>items</template>
                        in cart, totalling {{ cartTotal | currency }}
                    </span>
                    <button @click="isShowingCart = true" class="btn btn-primary">View Cart</button>
                </div>
            </nav>
            <br>

            <div v-if="!isShowingCart" id="products" class="row">
                <div class="item col-md-4 card" v-for="product in products">
                    <div class="thumbnail">
                        <img class="group list-group-image" src="">
                        <div class="caption">
                            <h4 class="group inner list-group-item-heading">{{ product.name }}</h4>
                            <p class="group inner list-group-item-text">{{ product.description }}</p>
                            <br>

                            <div class="">
                                <div class="col-xs-4">
                                    <p class="lead">{{ product.price | currency }}</p>
                                </div>

                                <div class="col-xs-8 flex flex-row align-center justify-right">
                                    <div class="number-in-stock" :class="{ few: product.inStock < 10, none: product.inStock == 0}">
                                        {{ product.inStock }} in stock
                                    </div>
                                    <button 
                                    class="btn btn-success"
                                    :disabled="product.inStock == 0"
                                    @click="addItemToTheCart(product)"
                                    >
                                    Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <h1>Cart Information</h1>
                
                <table v-if="cart.items.length" class="table table-striped">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Base Price</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in cart.items">
                            <td>{{ item.product.name }}</td>
                            <td>
                                {{ item.quantity }} &nbsp;
                                <button 
                                    class="btn btn-success" 
                                    @click="increaseQuantity(item)"
                                    :disabled="item.product.inStock == 0"
                                    >
                                    +
                                </button>

                                <button class="btn btn-danger" @click="decreaseQuantity(item)">
                                    -
                                </button>
                            </td>
                            <td>{{ item.product.price | currency }}</td>
                            <td>{{ item.quantity * item.product.price | currency }}</td>
                        </tr>

                        <tr>
                            <td class="text-right" colspan="3">
                                <strong>Sub Total</strong> 
                            </td>
                            <td>{{ cartTotal | currency }}</td>
                        </tr>

                        <tr>
                            <td class="text-right" colspan="3">
                                <strong>Taxes (10%)</strong>
                            </td>
                            <td> {{ taxAmount | currency }}</td>
                        </tr>

                        <tr>
                            <td class="text-right" colspan="3">
                                <strong>Grand Total</strong>
                            </td>
                            <td>{{ cartTotal + taxAmount | currency}}</td>
                        </tr>

                        <tr>
                            <td colspan="3"></td>
                            <td>
                                <button class="btn btn-success" @click="checkout">
                                    Checkout
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p v-else class="alert alert-warning">
                    <strong>Cart is Empty!</strong> Please add some products to the cart.
                </p>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
       isShowingCart: false,
        
        cart: {
            items: [],
        },

        products: [
            {
                id: 1,
                name: 'Lorem 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 1000,
                inStock: 10
            },
            {
                id: 2,
                name: 'Lorem 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 800,
                inStock: 7
            },
            {
                id: 3,
                name: 'Lorem 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 600,
                inStock: 5
            },
            {
                id: 4,
                name: 'Lorem 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 150,
                inStock: 6
            },
            {
                id: 5,
                name: 'Lorem 5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 300,
                inStock: 0
            },
            {
                id: 6,
                name: 'Lorem 6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                price: 200,
                inStock: 20
            }
        ]
    }
  },
      methods: {
        addItemToTheCart: function(product) {
            
            var cartItem = this.getCartItem(product);

            if(cartItem != null) {
                cartItem.quantity++;
            } else {
                this.cart.items.push({
                    product: product,
                    quantity: 1
                });
    
            }
            
            product.inStock--;
        },

        getCartItem: function(product) {
            for(var i = 0; i < this.cart.items.length; i++) {
                if(this.cart.items[i].product.id == product.id) {
                    return this.cart.items[i];
                }
            }
            return null;
        },

        increaseQuantity: function (cartItem) {
            cartItem.product.inStock--;
            cartItem.quantity++; 
        },

        decreaseQuantity: function (cartItem) {
            cartItem.product.inStock++;
            cartItem.quantity--;

            if(cartItem.quantity == 0) {
                this.removeItemFromCart(cartItem); 
            }
        },

        removeItemFromCart: function (cartItem) {
            var index = this.cart.items.indexOf(cartItem);
            if(index !== -1) {
                this.cart.items.splice(index, 1);
            }
        },

        checkout: function () {
            if(confirm(
                'Are you sure that you want to buy these products?'
            )) {
                this.cart.items.forEach(function (item) {
                    item.product.inStock += item.quantity; 
                });

                this.cart.items = []; 
            }
        }
    },

    computed: {
        cartTotal: function() {
            var total = 0;

            this.cart.items.forEach(function(item) {
                total += item.quantity * item.product.price;
            });

            return total;
        },

        taxAmount: function() {
            return this.cartTotal * .10;
        }
    },

    filters: {
        currency : function(value) {
            var formatter = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
            });

            return formatter.format(value);
        }
    }
}
</script>