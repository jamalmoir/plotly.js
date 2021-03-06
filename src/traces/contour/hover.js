/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var heatmapHoverPoints = require('../heatmap/hover');

module.exports = function hoverPoints(pointData, xval, yval, hovermode, hoverLayer) {
    return heatmapHoverPoints(pointData, xval, yval, hovermode, hoverLayer, true);
};
