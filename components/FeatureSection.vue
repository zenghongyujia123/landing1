<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-description">{{ description }}</p>
      
      <div class="feature-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">
            <img :src="feature.icon" :alt="feature.title + ' icon'">
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Our Features'
  },
  description: {
    type: String,
    default: 'Discover what makes our platform stand out from the rest'
  },
  features: {
    type: Array,
    default: () => [
      {
        title: 'Easy to Use',
        description: 'Our intuitive interface makes it simple to get started right away.',
        icon: '/images/feature-easy.svg'
      },
      {
        title: 'Highly Customizable',
        description: 'Tailor the platform to your specific needs with our flexible options.',
        icon: '/images/feature-custom.svg'
      },
      {
        title: 'Fast Performance',
        description: 'Enjoy lightning-fast performance with our optimized codebase.',
        icon: '/images/feature-fast.svg'
      },
      {
        title: '24/7 Support',
        description: 'Our dedicated team is always available to help you with any issues.',
        icon: '/images/feature-support.svg'
      }
    ]
  }
})
</script>

<style scoped>
.features {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #666;
  font-size: 1.1rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  max-width: 100%;
  max-height: 100%;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--secondary-color);
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>