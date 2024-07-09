<!-- Top Bar -->
<script>
export default {
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
  },
};
</script>

<template>
  <div class="container">
    <button class="button-5"  @click="toggleSidebar">≡</button>
    <ul>
        <li>Happiness Connect</li>
        <div>
        <li href="#/login" style="font-weight: lighter; padding-right: 1rem;">Log In</li>
        <li href="#/signup" style="font-weight: lighter;">Sign Up</li>
        </div>
    </ul>
  </div>
</template>

<style scoped>
/* Phone */
@media (max-width: 1000px){
  .container{
    font-size: small;
  }
  .ul{
    font-size: large;
  }
  .li{
    font-size: large;
  }
}
/* Desktop */
@media (min-width: 1000px){
  .container{
    font-size: 2rem;
  }
  .ul{
    font-size: small;
  }
  .li{
    font-size: small;
  }
}

.container{
    z-index: 99;
    position: fixed;

    color:white;
    font-family: 'Lucida Sans';
    font-weight: bold;
    display:flex;
    align-items: center;
    justify-content:center;
    
    width:98%;
    height: 4rem;
    
    background-color:rgb(255, 159, 80);

    margin: 0 1% 0 0.5%;
    /* padding: 1rem 1% 1rem 1%; */
    padding: 1rem 0;

    border-radius: 0.5rem;
}


ul{
    cursor: pointer;
    width: 100%;
    list-style-type: none;
    display:flex;
    justify-content: space-between;
    gap: 3rem;
    flex-direction: row;
    text-align:center;
    padding: 0 1rem;
}
li{
   display: inline-block;
    line-height: 4rem;
}


/* sidebar Button */
.button-5 {
  align-items: center;
  background-clip: padding-box;
  background-color: #ff8a3d;
  border: 1px solid transparent;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 3rem;
  font-weight: 600;
  justify-content: center;
  height: 1rem;
  line-height: 0;
  margin: 0 0 0 1rem;
  min-height: 3rem;
  /* padding: calc(.875rem - 1px) calc(1.5rem - 1px); */
  padding: 2rem 2rem;
  padding-bottom: 2.6rem;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align:middle;
  width: auto;
}

.button-5:hover,
.button-5:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
  transform: translateY(-1px);
}

.button-5:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}

</style>
