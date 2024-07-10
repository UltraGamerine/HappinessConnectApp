
<script>
export default {
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
      default: false, // Add a default value
    },
  },
};
</script>

<template>
  <div class="container noselect" :class="{ 'sidebar-open': isSidebarOpen }">
     <ul>
      <router-link to="/">Home</router-link>
        <li>Homework</li>
        <li>Attendance</li>
        <li>Account</li>
        <router-link to="/about">About</router-link>
        <router-link to="/signup">SignUp</router-link>
        <router-link to="/login">LogIn</router-link>
    </ul>

  </div>
</template>

<style scoped>

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  -webkit-tap-highlight-color: transparent;

}
.noselect:focus{
  outline: none !important;
}

.container{
    z-index: 99;
    position: fixed;
    top: 100px;
    left: 0;
    color:white;
    font-family: 'Lucida Sans';
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width:300px;
    height: 83%;
    
    background-color:rgb(255, 159, 80);

    margin: 5px 0 10px 7px;
    padding: 5px 0%;
    border-radius: 0.5rem;
    transform: translateX(-120%);
    transition: transform 0.3s ease-in-out;
}

ul{
    position:absolute;
    top: 0;
    cursor: pointer;
    text-align: left;
    list-style-type: none;
    display:flex;
    gap: 1rem;
    flex-direction: column;
    padding: 1rem;
    /* padding-bottom: 100%; */
    /* padding-left: 0%; */
}
.sidebar-open {
  transform: translateX(0);
}

.container ul a{
  color: white;
  text-decoration: none;
}

</style>
