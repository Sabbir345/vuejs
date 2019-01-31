<template>
  <div id="app">
     <header>
      <h1 id="logo">Vue Project</h1>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
             <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/ShoppingCart">Shopping Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/CustomerList">Customer Info</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Example">Some Example</router-link>
            </li>
           
          </ul>
      </div>
    </nav>
    </header>

    <router-view/>

  </div>
</template>

<script>


</script>


