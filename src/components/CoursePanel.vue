<script>

</script>

<template>
    <!-- <div class="navbar">
        <div class="navbar-left">
            <div class="menu">☰</div>
            <div class="title">Happiness Connect</div>
        </div>
        <div class="title2">#course panel</div>
        <div class="admin">Admin</div>
    </div> -->
    <div class="container">
        <div class="sidebar">
            <h2>Course 1</h2>
            <ul>
                <li class="Teachers">Teachers</li>
                <li class="Students">Students</li>
                <li class="Volunteers">Volunteers</li>
            </ul>
        </div>
        <div class="main-content">
            <h2>Students</h2>
            <div class="buttons">
                <button class="info">Info</button>
                <button class="Attendance">Attendance</button>
                <button class="Homework">Homework</button>
            </div>
            <div class="table-container">
                <table>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(45deg, #ffa751, #ffb300);
    padding: 10px 20px;
    color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

}

.navbar-left {
    display: flex;
}

.navbar .menu {
    font-size: 24px;
    padding-right: 25px;
    cursor: pointer;
}

.navbar .title {
    font-size: 24px;
    font-weight: bolder;
}

.navbar .panel {
    font-size: 20px;
    font-weight: bold;
}

.navbar .admin {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-out;
}

.navbar .admin:hover {
    font-size: 22px;
    transition: font-size 0.3s ease-out;
}

.navbar .admin:active {
    transform: translateY(4px);
}

.container {
    display: flex;
    margin: 20px;
}

.sidebar {
    flex: 1;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s ease-out;
}

.sidebar ul li:hover {
    font-size: 20px;
    transition: font-size 0.3s ease-out;
}

.sidebar ul li:active {
    border: 2px solid #000;
    border-radius: 10px;
    transform: translateY(4px);
}



.main-content {
    flex: 3;
    margin-left: 20px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.buttons {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
}

.buttons button {
    background-color: #ffc642;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease; 
    
}

.buttons button:hover {
    transform: scale(1.1); 
}

.buttons button:active {
    background-color: darkorange;
    transform: translateY(4px);
}

.table-container {
    border: 2px solid #000;
    border-radius: 10px;
    overflow: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
}

td {
    border: 1px solid #000;
    height: 50px;
    text-align: center;
}


@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-left: 10px;
  }

  .sidebar {
    width: 90%;
    margin-bottom: 20px;
  }

  .main-content {
    width: 97%;
    margin-left: 0px;
    padding: 10px;
  }
}

</style>