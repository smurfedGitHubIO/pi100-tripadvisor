import { writable } from 'svelte/store';

// Initialize from localStorage if available
const storedPlaces = typeof localStorage !== 'undefined' 
  ? localStorage.getItem('savedPlaces') 
  : null;

const initialSavedPlaces = storedPlaces ? JSON.parse(storedPlaces) : [];

const createSavedPlacesStore = () => {
  const { subscribe, set, update } = writable<string[]>(initialSavedPlaces);
  
  return {
    subscribe,
    add: (placeId: string) => update(places => {
      if (!places.includes(placeId)) {
        const newPlaces = [...places, placeId];
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('savedPlaces', JSON.stringify(newPlaces));
        }
        return newPlaces;
      }
      return places;
    }),
    remove: (placeId: string) => update(places => {
      const newPlaces = places.filter(id => id !== placeId);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('savedPlaces', JSON.stringify(newPlaces));
      }
      return newPlaces;
    }),
    clear: () => {
      set([]);
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('savedPlaces');
      }
    }
  };
};

export const savedPlaces = createSavedPlacesStore();