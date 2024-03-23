// store.js
import { writable } from "svelte/store";
import Device from "svelte-device-info";

// Definizione dello store come riscrivibile e lo inizializza 
export const isMobile = writable(Device.isMobile || window.innerWidth < 1024);

// Aggiornamento
["DOMContentLoaded", "resize"].forEach((event) => {
    window.addEventListener(`${event}`, () => {
        const mobileValue = Device.isMobile || window.innerWidth < 1024;
        isMobile.set(mobileValue);
    });
});

