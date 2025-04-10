import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const baseFolder =
    env.APPDATA && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "AIDoctor.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// Ensure the folder exists
if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
}

// Generate certificate if missing
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    try {
        const dotnetExists = child_process.spawnSync('dotnet', ['--version']).status === 0;
        if (dotnetExists) {
            const certCreation = child_process.spawnSync('dotnet', [
                'dev-certs', 'https',
                '--export-path', certFilePath,
                '--format', 'Pem',
                '--no-password',
            ], { stdio: 'inherit' });

            if (certCreation.status !== 0) {
                console.warn("⚠️ Could not create HTTPS certificate. Running without HTTPS.");
            }
        } else {
            console.warn("⚠️ .NET SDK is not installed. Running without HTTPS.");
        }
    } catch (error) {
        console.warn("⚠️ Failed to check .NET SDK. Running without HTTPS.");
    }
}

// Define the target backend URL
const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
        ? env.ASPNETCORE_URLS.split(';')[0]
        : 'http://localhost:5000'; // Fallback to HTTP if needed

// Vite Configuration
export default defineConfig({
    base:"/index",
    plugins: [plugin(), tailwindcss(),autoprefixer(),],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target,
                secure: false,
            }
        },
        port: parseInt(env.DEV_SERVER_PORT || '5173'), 
        https: fs.existsSync(certFilePath) && fs.existsSync(keyFilePath)
            ? {
                key: fs.readFileSync(keyFilePath),
                cert: fs.readFileSync(certFilePath),
            }
            : false, // Disable HTTPS if certificates are missing
    }
});
