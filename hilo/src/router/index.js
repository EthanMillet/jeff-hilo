import { createRouter, createWebHistory } from 'vue-router';

// Import static components
import HomeView from '../views/HomeView.vue';

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Home route
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about', // About route
      name: 'about',
      component: () => import('../views/AboutView.vue'), // Lazy-loaded
    },
    {
      path: '/student-create-account', // Student Create Account route
      name: 'StudentCreateAccount',
      component: () =>
        import('@/views/create_account/student/StudentCreateAccount.vue'), // Lazy-loaded
    },
    // Add additional routes here as needed
    {
      path: '/:pathMatch(.*)*', // Catch-all route for 404
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

// Optional: Add global navigation guards (if needed)
router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name} from ${from.name}`);
  next(); // Allow navigation
});

export default router;
