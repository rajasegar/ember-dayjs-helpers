'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/dayjs.min.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(
      path.join(this.project.root, 'node_modules', 'dayjs'),
      {
        files: ['dayjs.min.js'],
      },
    );

    return new MergeTrees([vendorTree, momentTree]);
  }
};
