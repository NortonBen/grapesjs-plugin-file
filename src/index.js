import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-plugin-file', (editor, opts = {}) => {
  let c = opts;
  let config = editor.getConfig();
  let pfx = config.stylePrefix || '';
  let btnEl;

  let defaults = {

    // call handler
    call: () => {},

    // Text for the button in case the custom one is not provided
    btnText: 'Add images',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  // When the Asset Manager modal is opened
  editor.on('run:open-assets', () => {
    const modal = editor.Modal;
    const modalBody = modal.getContentEl();
    const uploader = modalBody.querySelector('.' + pfx + 'am-file-uploader');
    const assetsHeader = modalBody.querySelector('.' + pfx + 'am-assets-header');
    const assetsBody = modalBody.querySelector('.' + pfx + 'am-assets-cont');

    uploader && (uploader.style.display = 'none');
    assetsHeader && (assetsHeader.style.display = 'none');
    assetsBody.style.width = '100%';

    // Instance button if not yet exists
    if(!btnEl) {
      btnEl = c.btnEl;

      if(!btnEl) {
        btnEl = document.createElement('button');
        btnEl.className = pfx + 'btn-prim ' + pfx + 'btn-filestack';
        btnEl.innerHTML = c.btnText;
      }

      btnEl.onclick = () => {
        c.call((file) => {
          addAssets([file]);
        })
      };
    }

    assetsBody.insertBefore(btnEl, assetsHeader);
  });

  /**
   * Add new assets to the editor
   * @param {Array} files
   */
  const addAssets = (files) => {
    return editor.AssetManager.add(files);
  };

});
