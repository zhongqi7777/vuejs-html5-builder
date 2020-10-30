// import grapesjs from 'grapesjs';

import html5builder from '../../src/';

export default html5builder.plugins.add('gjs-blocks-basic', (editor, opts = {}) => {
  const config = {
    blocks: [
      'column1',
      'column2',
      'column3',
      'column3-7',
      'text',
      'link',
      'image',
      'video',
      'map'
    ],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: '基本表单元素',//Basic
    labelColumn1: '一列',// 1 Column
    labelColumn2: '两列',// 2 Columns
    labelColumn3: '三列',// 3 Columns
    labelColumn37: '两列 3/7', //2 Columns 3/7
    labelText: '文本',// Text
    labelLink: '超链接',// Link
    labelImage: 'Image', // Image
    labelVideo: '视频',// Video
    labelMap: '地图',// Map
    rowHeight: 75,
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);
});
