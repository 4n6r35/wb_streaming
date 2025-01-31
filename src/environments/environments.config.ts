import { Environment } from "./environments"

export const Envs: Readonly<Environment> = Object.freeze<Environment>({
    API_URL: import.meta.env.VITE_API_URL,
    API_KEY: import.meta.env.VITE_API_KEY
}) 