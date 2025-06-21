<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'radix-vue'
import { buttonVariants, type ButtonVariants } from './index'
import { cn } from '~/lib/utils'

// Nuxt3兼容的类型定义
interface ButtonProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button"
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>