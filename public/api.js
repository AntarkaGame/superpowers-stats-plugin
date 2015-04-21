(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


SupAPI.registerPlugin('typescript', 'stats', {	
  defs: "// Type definitions for Stats.js r12\r\n// Project: http://github.com/mrdoob/stats.js\r\n// Definitions by: Gregory Dalton <https://github.com/gregolai>\r\n// Definitions: https://github.com/borisyankov/DefinitelyTyped\r\n\r\ndeclare class Stats { \r\n\tREVISION: number;\r\n\r\n\tdomElement: HTMLDivElement;\r\n\t\r\n\tpublic setMode(value: number) : void;\r\n\t\r\n\tpublic begin() : void;\r\n\t\r\n\tpublic end() : number;\r\n\t\r\n\tpublic update() : void;\r\n}"
});
},{}]},{},[1]);
