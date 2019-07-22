// Export views as a function to enable Lazy Loading
// https://router.vuejs.org/guide/advanced/lazy-loading.html

export const Home = () => import('./Home')
export const Likes = () => import('./Likes')
export const Login = () => import('./Login')
export const SignUp = () => import('./SignUp')
