<script setup>
import { store, toggleSidebar, closeSidebar, clearUserRole } from '@/store';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

const handleToggleSidebar = () => {
  toggleSidebar();
};

const handleLogout = async () => {
  await signOut(auth);
  clearUserRole();
};
</script>

<template>
  <div class="container noselect">
    <ul>
      <div class="lefters">
        <button class="button-5" @click="handleToggleSidebar">≡</button>
        <router-link to="/">
          <li class="nbMain" @click="closeSidebar">Happiness Connect</li>
        </router-link>
      </div>
      <div class="logers" @click="closeSidebar">
        <template v-if="!store.isAuthenticated">
          <router-link to="/login">
            <li class="nblog">LogIn</li>
          </router-link>
          <router-link to="/signup">
            <li class="nblog">SignUp</li>
          </router-link>
        </template>
        <template v-else>
          <!-- <li class="nblog" @click="handleLogout">Logout</li> -->
          <li class="nblog">{{ store.userRole }}</li>
        </template>
      </div>
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

.noselect:focus {
  outline: none !important;
}

/* Phone */
@media (max-width: 1000px){
  .container{
    font-size: 10px;
    /* margin: 5px 5px 5px 0px; */
  }
  .lefters{
    font-size: 30px;
    width: fit-content;
  }
  .nbMain{
    width: 100px !important;
    font-size: x-large !important;
    line-height: 30px;
  }
}

/* Desktop */
@media (min-width: 1000px){
  .container{
    /* margin: 0px; */
    width: 99.25% !important;
  }
  .lefters{
    font-size: 30px;
    width: fit-content;
  }
  .nbMain{
    width: 300px !important;
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
    
    width:97%;
    height: 50px;
    
    /* background-color:rgb(255, 159, 80); */
    background-color:rgb(255, 133, 26);

    /* margin: 0 1% 0 0.5%; */
    /* padding: 1rem 1% 1rem 1%; */
    padding: 20px 0;
    margin-left: -2px;
    padding-right: 1px;

    border-radius: 0.5rem;
}
.container:focus {
  outline: none;
  box-shadow: none;
}


ul{
    cursor: pointer;
    width: 100%;
    list-style-type: none;
    display:flex;
    justify-content: space-between;
    gap: 1px;
    flex-direction: row;
    text-align:center;
    padding: 0 0px;
}
li{
   display: inline-block;
    line-height: 4rem;
}

.nbMain{
  color:#fff;
  font-weight: 900;
  margin: 0;
  width: 100px;
}

.logers{
  width: 250px;
  display: flex;
  justify-content: right;
  align-items: center;
}
.lefters{
  width: 300px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: -0px;  
}

.nblog{
  /* background-color: #ff8c3f; */
  background-color: #ff6f10;
  border-radius: 10px;
  text-align: center;
  font-size: 14px !important;
  text-transform: capitalize;

  /* display: flex; */
  align-items: center;
  padding: 0px 8px 0px 8px;
  margin: 0px 5px;
  justify-content: center;
  color: #fff;
  font-weight: lighter; 
  font-size: 10px;
  width: 60px;
}

/* sidebar Button */
.button-5 {
  align-items: center;
  background-clip: padding-box;
  /* background-color: #ff8a3d; */
  background-color: #ff6f10;
  border: 1px solid transparent;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Lucida Sans';
  font-size: 30px;
  font-weight: 600;

  justify-content: center;
  align-items: center;
  text-align: center;

  height: 0px;
  line-height: 0px;
  margin: 0 5px 0 10px;
  min-height: 3rem;
  /* padding: calc(.875rem - 1px) calc(1.5rem - 1px); */
  padding: 32px 20px 33px 20px;
  /* padding-bottom: 2.6rem; */
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
  /* background-color: #fb8332; */
  background-color:rgb(255, 133, 26);
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
