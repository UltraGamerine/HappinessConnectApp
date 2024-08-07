<script setup>
import { ref } from 'vue';
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from 'vue-router';

const isTeacher = ref(false);
const fullName = ref('');
const email = ref('');
const password = ref('');
const courseId = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const router = useRouter();

const signUp = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    // User signed up successfully, you can now save additional user information like fullName and courseId to your database
    console.log('User signed up:', userCredential.user);

    const user = userCredential.user;

    if (isTeacher.value) {
      await addDoc(collection(db, "teachers"), {
        uid: user.uid,
        name: fullName.value,
        email: email.value,
        teacherAccess: false
      });
    } else {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: fullName.value,
        email: email.value,
        courseId: [courseId.value],
        volunteerAccess: false
      });
    }

    // Navigate to the desired route after successful sign-up
    router.push('/login'); // Replace '/desired-route' with your target route

  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
</script>


<template>
  <div>
    <div class="container">
              <h3 class="signup">Sign Up</h3>
              <!-- input box -->
              <div class="form-group">
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Full Name" v-model="fullName">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" v-model="password">

                <!-- Conditionally render CourseID field -->
                <div v-if="!isTeacher">
                  <input type="text" class="form-control" id="courseId" placeholder="CourseID" v-model="courseId">
                </div>

                <div class="checkbox-wrapper-64">
                  <label class="switch">
                    <input type="checkbox" v-model="isTeacher">
                    <span class="slider"></span>
                  </label>
                  <label class="checkL" style="font-size: medium;">Are you an AOL Teacher ?</label>
                </div>

                <button type="button" class="btn-primary" @click="signUp" :disabled="isLoading">
                  <span v-if="isLoading">Signing Up...</span>
                  <span v-else>Sign Up</span>
                </button>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
              </div>
            </div>
          </div>
</template>





<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

@media (min-width: 1000px){
.container{
  background-color:rgb(241, 241, 241);
  color:rgb(0, 0, 0);
  font-family: 'Lucida Sans';
  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position:absolute;
  right:35%;
  border-radius: 20px;

  width:20%;
  /* height: 20%; */
  /* margin: 0.5rem 1.5rem; */
  margin-top: 100px;
  padding: 2% 5% 4% 5%;
}
}

/* Phone */
@media (max-width: 1000px){
.container{
  background-color:rgb(241, 241, 241);
  color:rgb(0, 0, 0);
  font-family: 'Lucida Sans';
  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position:absolute;
  right:3%;
  border-radius: 20px;

  width:80%;
  /* height: 20%; */
  margin: 2% 2%;
  margin-top: 100px;
  padding: 2% 5% 4% 5%;
}
}


input{
  width: 96%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 0px solid rgb(0, 0, 0);
  padding: 0.5rem 0% 0.5rem 4%;
  margin: 1rem 0rem;
}
textarea:focus, input:focus{
    outline: none;
}
/* .checks{
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items:center;
  font-size: medium;
}
.check{
  margin: 0;
  padding: 0;
  width: 10%;
} */

.checkL{
    margin-top: 20px;
    margin-left: 10px;
}

.form-area{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  color:white;
  background-color:#007bff;
  border-radius:5px;
  border-style: none;
  width: 100px;
  height: 50px;
  font-size: large;
  
  margin-top: 20px;
  margin-left: 0%;
}

.btn-primary:hover {
  box-shadow: inset 0 0 0 20rem #007bff;
}

.btn-primary:active {
  box-shadow: inset 0 0 0 20rem darkblue,
    inset 0 3px 4px 0 darkblue,
    0 0 1px darkblue;
}


.checkbox-wrapper-64{
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;

}
.checkbox-wrapper-64 input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper-64 *,
.checkbox-wrapper-64 ::after,
.checkbox-wrapper-64 ::before {
  box-sizing: border-box;
}

/* The switch - the box around the slider */
.checkbox-wrapper-64 .switch {
    margin-top: 20px;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.checkbox-wrapper-64 .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.checkbox-wrapper-64 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #adb5bd;
  transition: .4s;
  border-radius: 30px;
}

.checkbox-wrapper-64 .slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.27em;
  bottom: 0.25em;
  background-color: #adb5bd;
  transition: .4s;
}

.checkbox-wrapper-64 input:checked + .slider {
  background-color: #ff8000;
  border: 1px solid #ff8000;
}

.checkbox-wrapper-64 input:focus + .slider {
  box-shadow: 0 0 1px #ff8000;
}

.checkbox-wrapper-64 input:checked + .slider:before {
  transform: translateX(1.4em);
  background-color: #fff;
}
</style>