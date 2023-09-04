// router.js
import { createRouter, createWebHashHistory } from 'vue-router';

import AdultsCards from "@/components/base/AdultsCards.vue";
import SimpleComponent from "@/components/base/SimpleComponent.vue";
import CardSeven from "@/components/cards/CardSeven.vue";

const routes = [
  { path: '/adults', component: AdultsCards },
  { path: '/kids', component: CardSeven },
  { path: '/simple', component: SimpleComponent },
  // Ajoutez plus de routes pour chaque diapositive
];

const router = createRouter({
    history: createWebHashHistory(), // Utilisez le mode "hash" pour éviter les conflits avec Reveal.js
    routes,
});

export default router;
