"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { AppProvider } from './context/AppContext';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
});


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <AppProvider>
              {children}
            </AppProvider>
          </ThemeProvider>
        </CacheProvider>
        
        </body>
    </html>
  )
}