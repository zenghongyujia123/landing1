<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";

import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "crown",
    name: "Acmebrand",
  },
  {
    icon: "vegan",
    name: "Acmelogo",
  },
  {
    icon: "ghost",
    name: "Acmesponsor",
  },
  {
    icon: "puzzle",
    name: "Acmeipsum",
  },
  {
    icon: "squirrel",
    name: "Acme",
  },
  {
    icon: "cookie",
    name: "Accmee",
  },
  {
    icon: "drama",
    name: "Acmetech",
  },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Our Platinum Sponsors</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>

<style scoped>
/* Marquee essential styles */
:deep(.marquee-container) {
  position: relative;
  width: 100%;
  overflow: hidden;
}

:deep(.marquee-content) {
  display: flex;
  width: fit-content;
  animation: scroll 20s linear infinite;
  will-change: transform;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Custom styles for our sponsors section */
#sponsors {
  max-width: 75%;
  margin: 0 auto;
  padding-bottom: 6rem;
}

#sponsors h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

@media (min-width: 768px) {
  #sponsors h2 {
    font-size: 1.25rem;
  }
}
</style>