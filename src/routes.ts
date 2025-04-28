import Home from './pages/Home.svelte';
import HotelDetails from './pages/HotelDetails.svelte';

export const routes = {
  '/': Home,
  '/hotels/:id': HotelDetails,
};