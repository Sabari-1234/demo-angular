import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.demo',
  appName: 'demo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
