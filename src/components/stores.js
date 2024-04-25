import { writable } from 'svelte/store'

export const mobile = writable(0)
export const active = writable(0)

export const displaySiteBanner = writable(false) // Show the site Banner.svelte component
