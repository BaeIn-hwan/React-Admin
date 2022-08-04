import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';

interface ConfigOptions {
  command: string;
  mode: string;
}

export default defineConfig((payload: ConfigOptions): object => {
  const { command, mode } = payload;
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  const env = loadEnv(mode, process.cwd(), '');
  console.log('env', env.VITE_APP_HOST);

  return {
    plugins: [react(), requireTransform({})],
    assetsInclude: ['*/src'],
    resolve: {
      extensions: [
        '.css',
        '.scss',
        '.ts',
        '.tsx',
        '.js',
        '.json',
        '.module.scss',
      ],
      alias: {
        '@': '/src',
      },
    },
    base: '/',
    server: {
      // host: env.VITE_APP_HOST,
      port: Number(env.VITE_APP_PORT),
      open: true,
      hmr: {
        overlay: false,
      },
      sourcemap: true,
    },
    build: {
      target: 'esnext',
      sourcemap: 'hidden',
      minify: env.NODE_ENV === 'development' ? false : 'esbuild',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/base/mixin";
          `,
        },
      },
    },
  };
});
