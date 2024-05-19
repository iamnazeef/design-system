import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../packages/components/**/*.stories.@(js|jsx|ts|tsx)'],
     addons: [
       '@storybook/addon-links',
       '@storybook/addon-essentials',
       '@storybook/addon-interactions',
     ],
     framework: {
       name: '@storybook/react-vite',
       options: {},
     },
     docs: {
       autodocs: 'tag',
     },
     viteFinal: async (config) => {
      config.plugins?.push(
        /** @see https://github.com/aleclarson/vite-tsconfig-paths */
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
        })
      );
  
      return config;
    },
   };
   export default config;