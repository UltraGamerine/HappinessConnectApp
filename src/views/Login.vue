<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import { store, setUserRole } from '@/store';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const router = useRouter();

const login = async () => {
  errorMessage.value = '';
  isLoading.value = true;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log('User logged in:', user.uid);

    // Check for admin role
    const adminQuery = query(collection(db, "admins"), where("uid", "==", user.uid));
    const adminSnapshot = await getDocs(adminQuery);
    const isAdmin = !adminSnapshot.empty;
    console.log('Admin doc exists:', isAdmin);

    // Check for teacher role
    const teacherQuery = query(collection(db, "teachers"), where("uid", "==", user.uid));
    const teacherSnapshot = await getDocs(teacherQuery);
    const isTeacher = !teacherSnapshot.empty;
    const teacherAccess = isTeacher ? teacherSnapshot.docs[0].data().teacherAccess : false;
    console.log('Teacher doc exists:', isTeacher);
    console.log('Teacher access:', teacherAccess);

    // Check for user role
    const userQuery = query(collection(db, "users"), where("uid", "==", user.uid));
    const userSnapshot = await getDocs(userQuery);
    const isUser = !userSnapshot.empty;
    console.log('User doc exists:', isUser);

    if (isAdmin) {
      setUserRole('admin');
      router.push('/admin');
    } else if (isTeacher && teacherAccess) {
      setUserRole('teacher');
      router.push('/teacher');
    } else if (isUser) {
      setUserRole('user');
      router.push('/user');
    } else {
      throw new Error('No valid user role found');
    }
  } catch (error) {
    errorMessage.value = error.message;
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <div class="container">
      <h3 class="signup">Login</h3>
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email">
        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" v-model="password">
        <button type="button" class="btn-primary" @click="login" :disabled="isLoading">
          <span v-if="isLoading">Logging In...</span>
          <span v-else>Login</span>
        </button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>



<!-- <script setup>
import { ref } from 'vue';
import { auth, db } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { store, setUserRole, clearUserRole } from '@/store';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const router = useRouter();

const login = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    const adminDocRef = doc(db, 'admins', user.uid);
    const adminDoc = await getDoc(adminDocRef);
    if (adminDoc.exists()) {
      setUserRole('admin');
      router.push('/admin');
      return;
    }

    const teacherDocRef = doc(db, 'teachers', user.uid);
    const teacherDoc = await getDoc(teacherDocRef);
    if (teacherDoc.exists() && teacherDoc.data().teacherAccess) {
      setUserRole('teacher');
      router.push('/teacher');
      return;
    }
    
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      setUserRole('user');
      router.push('/user');
      return;
    }
    if (teacherDoc.exists() && !teacherDoc.data().teacherAccess){
      errorMessage.value = 'Teacher Not Yet Verified';
    }
    else{
      errorMessage.value = 'No valid user role found.';
    }
    clearUserRole();

  } catch (error) {
    errorMessage.value = error.message;
    clearUserRole();
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <div class="container">
      <h3 class="signup">Login</h3>
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email">
        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" v-model="password">
        <button type="button" class="btn-primary" @click="login" :disabled="isLoading">
          <span v-if="isLoading">Logging in...</span>
          <span v-else>Login</span>
        </button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template> -->



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
.checks{
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
  background-color: #007bff;
  border: 1px solid #007bff;
}

.checkbox-wrapper-64 input:focus + .slider {
  box-shadow: 0 0 1px #007bff;
}

.checkbox-wrapper-64 input:checked + .slider:before {
  transform: translateX(1.4em);
  background-color: #fff;
}
</style>