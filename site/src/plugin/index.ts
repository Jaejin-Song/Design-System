import type { Plugin } from 'vite';

export default (): Plugin => {
  return {
    name: 'test',
    async transform(code, id) {
      if (id.endsWith('index.vue')) {
        console.log('id :>> ', id);
      }

      //   console.log('code :>> ', code);
      // if (id.endsWith('.md')) {
      //   // transform .md files into vueSrc so plugin-vue can handle it
      //   return { code: (await markdownToVue(code, id)).vueSrc, map: null };
      // }
    },
  };
};
