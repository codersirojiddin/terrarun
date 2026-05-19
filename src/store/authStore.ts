import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false, // Default to false
  login: (password) => {
    // TEMPORARY SECURE MOCK: In a real GitHub pages deployment, we CANNOT hardcode this securely. 
    // We will migrate this to Firebase Authentication so it's truly unhackable.
    if (password === 'admin123') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));
