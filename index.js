const Word = require('./word.js');

const inquirer = require('inquirer');

// npm package for determining if the user enters a letter of not (form validation).
const isLetter = require('is-letter');

// Create boxes within terminal
const boxen = require('boxen');


const wordList = ['chrome', 'firefox', 'codepen', 'javascript', 'jquery',
  'twitter', 'github', 'wordpress', 'opera', 'sass', 'layout', 'standards',
  'semantic', 'designer', 'developer', 'module', 'component', 'website',
  'creative', 'banner', 'browser', 'screen', 'mobile', 'footer', 'header',
  'typography', 'responsive', 'programmer', 'css', 'border',
  'gulp', 'pixel', 'document', 'object', 'modernizr', 'bootstrap', 'react',
  'pattern', 'ajax', 'node', 'element', 'android', 'application', 'adobe',
  'apple', 'google', 'microsoft', 'bookmark', 'internet', 'icon', 'svg',
  'background', 'property', 'syntax', 'html', 'font', 'blog',
  'network', 'server', 'content', 'database', 'socket',
  'function', 'variable', 'link', 'stylus', 'query', 'proxy',
  'email', 'underscore', 'cloud'];
