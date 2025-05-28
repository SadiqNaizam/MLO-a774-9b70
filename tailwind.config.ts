import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))' // PRD secondaryText maps here
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))', // PRD surface
					foreground: 'hsl(var(--card-foreground))' // PRD primaryText
				},
        // Direct PRD color names for utility classes if needed
        primaryText: 'hsl(var(--card-foreground))', // For PRD: text-primaryText (maps to #212529)
        secondaryText: 'hsl(var(--muted-foreground))', // For PRD: text-secondaryText (maps to #878A99)
        accentBlue: 'hsl(var(--primary))', // For PRD: bg-accentBlue (maps to #17BBD8)
			},
			borderRadius: {
				lg: 'var(--radius)', // 0.375rem (PRD default/buttons: rounded-md)
				md: 'calc(var(--radius) - 2px)', // 0.375rem - 2px = 0.25rem (PRD inputs: rounded)
				sm: 'calc(var(--radius) - 4px)' // 0.375rem - 4px = 0.125rem
			},
      fontFamily: {
        sans: ['sans-serif', ...fontFamily.sans], // PRD: primaryFont: "sans-serif"
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
