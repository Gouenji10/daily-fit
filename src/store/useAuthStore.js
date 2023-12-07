import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const userStore = create()(
    persist(
        set => ({
            loggedIn: false,
            user: null,
            info: null,
            setInfo: (info) => set({ info: info }),
            setUser: (user) => set({ user: user }),
            login: () => set({ loggedIn: true }),
            logOut: () => set({ loggedIn: false })
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)
