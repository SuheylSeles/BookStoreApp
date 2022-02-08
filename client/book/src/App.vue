<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Bookstore</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'BookList' }"
                >Book List</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'AddList' }"
                >Add List</router-link
              >
            </li>
          </ul>
          <button class="btn btn-outline-success" @click="register">Register</button>
          <button class="btn btn-outline-success" @click="login">Login</button>
        </div>
      </div>
    </nav>
    <router-view />
    <div class="footer">
      <footer>
        <p>
          Vbt Research&Development Team &copy; 2022<br />
          <a href="mailto:vbt@arge.com.tr">vbt@arge.com.tr</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: center;
}
body {
  background-image: url("./assets/kutuphane3.jpg");
  background-color: #ffffff;
}
</style>
