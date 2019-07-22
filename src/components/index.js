// Export components as a function to enable Lazy Loading
// https://router.vuejs.org/guide/advanced/lazy-loading.html

export const KittenCard = () => import('./KittenCard')
export const ListView = () => import('./ListView')
export const Navbar = () => import('./Navbar')