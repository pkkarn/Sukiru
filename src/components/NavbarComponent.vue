<template>
    <div id="navbar_comp">
        <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse container" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#"><img class="logo_img" src="../assets/logo.png" alt=""></a>
    
    <div class="ml-auto mr-5 my-lg-0">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ul-nav">
      <li class="nav-item">
        <router-link :to="{name:'home'}" tag="a" class="nav-link">Home</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link :to="{name:'other'}" tag="a" class="nav-link">Other</router-link>
      </li> -->
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Sukiru</a>
      </li>
    </ul>
    </div>
    <div class="my-2 my-lg-0">
      <button class="btn btn-primary mr-2 log-btn">Login</button>
      <button class="btn btn-outline-primary register-btn">Register</button>
    </div>
  </div>
</nav>
    </div>
</template>

<style lang="scss">
@import '../assets/sass/main.scss';

    #navbar_comp {
        // z-index: 100px;
        // border-bottom: 2px solid rgba(172, 172, 172,0.4);
        box-shadow: 2px 2px 20px rgba(0,0,0,0.3);

        .custom-nav {
            background-color:#fff!important;
        }
        .logo_img {
            width: 50px;
        }

        .log-btn {
            background-color: $primary-color!important;
            outline: none;
            font-weight: 400;
        }

        .register-btn {
            border: 1px solid $primary-color;
            color: $primary-color;
            font-weight: 400;
            &:hover {
                background-color: #fff;
            }
        }

        li {
            font-weight: 400;
        }

        

        .nav-link {
            color: #777;
        }
        .router-link-exact-active {
            color: #333;
        }
    }
</style>
