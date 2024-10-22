declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any; // You can specify more detailed types if needed
    }
    const FB: any; // This also helps in making FB available globally
}

export {};
