!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).CanvasFlatten=e()}}(function(){return function(){return function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!i&&u)return u(a,!0);if(f)return f(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return o(t[a][1][e]||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var f="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}}()({1:[function(e,t,n){t.exports=new class{flatten(e,t){for(let n=0;n<e.data.length;n+=4){const r=e.data[n+3],o=255-r;e.data[n]=(r*e.data[n]+o*t[0])/255,e.data[n+1]=(r*e.data[n+1]+o*t[1])/255,e.data[n+2]=(r*e.data[n+2]+o*t[2])/255,e.data[n+3]=255}return e}}},{}]},{},[1])(1)});