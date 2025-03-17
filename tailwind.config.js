/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem',
  		screens: {
  			xl: '1200px',
  			'2xl': '1280px'
  		}
  	},
  	extend: {
  		colors: {
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: {
  				DEFAULT: 'hsl(var(--border))',
  				hover: 'hsl(var(--hover))'
  			},
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
  				foreground: 'hsl(var(--muted-foreground))'
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
  				DEFAULT: 'hsl(var(--card))',
  				hover: 'hsl(var(--card-hover))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			icon: {
  				DEFAULT: 'hsl(var(--icon))',
  				muted: 'hsl(var(--icon-muted))',
  				active: 'hsl(var(--icon-active))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		tooltipContent: {
  			'transform-origin': 'var(--radix-tooltip-content-transform-origin)',
  			animation: 'scaleIn 0.5s ease-out'
  		},
  		keyframes: {
  			keyframes: {
  				'slide-in': {
  					'0%': {
  						bottom: '-100%'
  					},
  					'100%': {
  						bottom: '50px'
  					}
  				},
  				'slide-out': {
  					'0%': {
  						bottom: '50px'
  					},
  					'100%': {
  						bottom: '-100%'
  					}
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: 0
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
  					height: 0
  				}
  			},
  			shrink: {
  				'0%': {
  					transform: 'scale(var(--scale-start))',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(var(--scale-end))',
  					opacity: '1'
  				}
  			},
  			scaleIn: {
  				from: {
  					opacity: 0,
  					transform: 'scale(0)'
  				},
  				to: {
  					opacity: 1,
  					transform: 'scale(1)'
  				}
  			}
  		},
  		animation: {
  			'slide-in': 'slide-in 3.5s ease-out forwards',
  			'slide-out': 'slide-out 3.5s ease-out forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'shrink': 'shrink 0.8s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
