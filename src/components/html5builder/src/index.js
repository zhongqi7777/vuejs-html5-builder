import $ from 'cash-dom';
import Editor from './editor';
import { isElement, isFunction } from 'underscore';
import polyfills from 'utils/polyfills';
import PluginManager from './plugin_manager';

polyfills();

const plugins = new PluginManager();
const editors = [];
const defaultConfig = {
  autorender: 1,
  plugins: [],

  pluginsOpts: {}
};

export default {
  $,

  editors,

  plugins,

  // Will be replaced on build
  version: '<# VERSION #>',

  /**
   * Initialize the editor with passed options
   */
  init(config = {}) {
    const els = config.container;
    if (!els) throw new Error("'container' is required");
    config = { ...defaultConfig, ...config, grapesjs: this };
    config.el = isElement(els) ? els : document.querySelector(els);
    const editor = new Editor(config).init();

    // Load plugins
    config.plugins.forEach(pluginId => {
      let plugin = plugins.get(pluginId);
      const plgOptions = config.pluginsOpts[pluginId] || {};

      // Try to search in global context
      if (!plugin) {
        const wplg = window[pluginId];
        plugin = wplg && wplg.default ? wplg.default : wplg;
      }

      if (plugin) {
        plugin(editor, plgOptions);
      } else if (isFunction(pluginId)) {
        pluginId(editor, plgOptions);
      } else {
        console.warn(`Plugin ${pluginId} not found`);
      }
    });

    editor.getModel().loadOnStart();
    config.autorender && editor.render();
    editors.push(editor);

    return editor;
  }
};
