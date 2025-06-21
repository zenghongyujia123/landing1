<template>
  <NuxtLayout>
    <div class="container">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us using the form below:</p>
    
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
    
    <div v-if="formSubmitted" class="success-message">
      Thank you for your message! We'll get back to you soon.
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const formSubmitted = ref(false)

const submitForm = () => {
  // 在实际应用中，这里会发送表单数据到服务器
  console.log('Form submitted:', form.value)
  
  // 显示成功消息
  formSubmitted.value = true
  
  // 重置表单
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  
  // 5秒后隐藏成功消息
  setTimeout(() => {
    formSubmitted.value = false
  }, 5000)
}
</script>

<style scoped>
h1 {
  color: var(--primary-color);
  margin-top: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 2rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.submit-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #00b870;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}
</style>