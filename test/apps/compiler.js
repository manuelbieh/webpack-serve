'use strict';

const webpack = require('webpack');
const serve = require('../../');
const config = require('../fixtures/basic/webpack.config.js');

const compiler = webpack(config);

serve({ compiler });
