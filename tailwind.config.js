/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                loop: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(100%)' }
                },
                marquee: {
                    '0%': {
                        transform: 'translateX(2000px)'
                    },

                    to: {
                        transform: 'translateX(0)'
                    }
                }
            }
        }
    },
    plugins: []
};
