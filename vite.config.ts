import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default ({ mode }) => {
	process.env = { ...process.env, NODE_ENV: mode, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: '/',
		resolve: {
			alias: {
				'@/styles': path.resolve(__dirname, './src/styles/'),
				'@/components': path.resolve(__dirname, './src/components/'),
				'@/layouts': path.resolve(__dirname, './src/layouts/'),
				'@/pages': path.resolve(__dirname, './src/pages/')
			}
		},
		plugins: [react()],
		server: {
			host: true,
			strictPort: false,
			port: 3000
		},
		define: {
			'process.env': process.env
		}
	})
}
