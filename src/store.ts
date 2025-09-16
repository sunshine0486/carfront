import { create } from "zustand";

type AuthStore = {
          isAuthenticated: boolean;
          login: () => void;
          logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
          isAuthenticated: !!sessionStorage.getItem("jwt"),   //새로고침 하고나서도 로그인 기능 유지
          login: () => set({isAuthenticated: true}),
          logout: () => set({isAuthenticated: false})
}));