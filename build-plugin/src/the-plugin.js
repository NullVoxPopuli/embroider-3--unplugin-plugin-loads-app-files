import { stripIndent } from 'common-tags';
import { createUnplugin } from 'unplugin';

import { virtualFile } from './helpers.js';

export const thePlugin = createUnplugin(() => {
  return {
    name: 'the-plugin',
    ...virtualFile({
      importPath: 'build-plugin/registry',
      content: stripIndent`
        export const map = {
          foo: () => import('./components/foo.js'),
        };
				export function setup() {
          window.myRegistry = map;
				}
  			`,
    }),
  };
});
