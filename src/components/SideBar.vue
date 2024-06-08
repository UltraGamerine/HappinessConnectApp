
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
  <div class="container" :class="{ 'sidebar-open': isSidebarOpen }">
     <ul>
        <li>Home</li>
        <li>Games</li>
        <li>Attendance</li>
        <li>Login</li>
        <li>Account</li>
    </ul>

  </div>
</template>

<style scoped>
.container{
    z-index: 99;
    position: fixed;
    top: 7rem;
    left: 0.5rem;
    color:white;
    font-family: 'Lucida Sans';
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width:15rem;
    height: 48rem;
    
    background-color:rgb(255, 159, 80);

    margin: 1rem 1rem;
    padding: 1rem 1rem;
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

</style>
