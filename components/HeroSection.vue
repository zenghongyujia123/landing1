<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <div class="cta-buttons">
          <button class="btn primary" @click="$emit('primary-action')">{{ primaryButtonText }}</button>
          <button class="btn secondary" @click="$emit('secondary-action')">{{ secondaryButtonText }}</button>
        </div>
      </div>
      <div class="hero-image">
        <img :src="imageUrl" :alt="imageAlt">
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Welcome to Our Platform'
  },
  subtitle: {
    type: String,
    default: 'The best solution for your needs'
  },
  primaryButtonText: {
    type: String,
    default: 'Get Started'
  },
  secondaryButtonText: {
    type: String,
    default: 'Learn More'
  },
  imageUrl: {
    type: String,
    default: '/images/hero-illustration.svg'
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  }
})

defineEmits(['primary-action', 'secondary-action'])
</script>

<style scoped>
.hero {
  padding: 4rem 0;
  background-color: var(--background-color);
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn.primary:hover {
  background-color: #00b870;
}

.btn.secondary {
  background-color: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

.btn.secondary:hover {
  background-color: var(--secondary-color);
  color: white;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
}
</style>