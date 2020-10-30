const traitInputAttr = { placeholder: '例子. 输入文字' };

export default {
  assetManager: {
    addButton: '添加图片',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: '选择图片',
    uploadTitle: '点击或者拖拽图片上传'
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: '文字',
      comment: '评论',
      image: '图片',
      video: '视频',
      label: '文本',
      link: '超链接',
      map: '地图',
      tfoot: '表格末尾',
      tbody: '表格主体',
      thead: '表头',
      table: '表格',
      row: '行',
      cell: '单元格'
    }
  },
  deviceManager: {
    device: '设备',
    devices: {
      desktop: '桌面',
      tablet: '平板',
      mobileLandscape: '移动 768px',
      mobilePortrait: '移动 480px'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: '预览',
        fullscreen: '全屏',
        'sw-visibility': '查看组件',
        'export-template': '查看代码',
        'open-sm': '打开样式管理器',
        'open-tm': '设置',
        'open-layers': '打开布局管理器',
        'open-blocks': '打开块'
      }
    }
  },
  selectorManager: {
    label: '类型',
    selected: '请选择事件类型',
    emptyState: '空',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Even/Odd'
    }
  },
  styleManager: {
    empty: '设置样式前选择请一个元素',
    layer: '层级',
    fileButton: '图片',
    sectors: {
      general: '常规',
      layout: '布局',
      typography: '版式',
      decorations: '装饰',
      extra: '扩展',
      flex: '盒子模型',
      dimension: '尺寸'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: '浮动',
      top:"上",
      left:"左",
      right:"有",
      bottom:"下",
      position:"定位",
      width:"宽度",
      height:"高度",
      "max-width":"最小宽度",
      "min-height":"最小高度",
      margin:"外边距",
      padding:"内边距",
      "margin-top":"上边距",
      "margin-right":"有边距",
      "margin-bottom":"下边距",
      "margin-left":"左边距",
      "padding-top":"上边距",
      "padding-right":"有边距",
      "padding-bottom":"下边距",
      "padding-left":"左边距",
      "font-family":"字体",
      "font-size":"大小",
      "font-weight":"字重",
      "letter-spacing":"字间距",
      color:"颜色",
      "line-height":"行高",
      "text-shadow":"文字阴影",
      "border-radius":"圆角",
      "background-color":"背景色",
      "border-top-left-radius":"左上角",
      "border-top-right-radius":"有上角",
      "border-bottom-left-radius":"左下角",
      "border-bottom-right-radius":"有下角",
      border:"边框",
      "border-width":"宽度",
      "border-style":"样式",
      "border-color":"颜色",
      "box-shadow":'阴影',
      background:"背景"



    }
  },
  traitManager: {
    empty: '用设置项前选择一个组件',
    label: '组件设置',
    traits: {
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: { placeholder: 'eg. https://google.com' }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: '本窗口',
          _blank: '新窗口'
        }
      }
    }
  }
};
