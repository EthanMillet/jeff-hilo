<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <router-link to="/" class="back-home">Go Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f9f9f9;
    color: #333;
  }
  
  .not-found h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .not-found p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .back-home {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .back-home:hover {
    background-color: #0056b3;
  }
  </style>
  