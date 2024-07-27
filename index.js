#!/usr/bin/env node

const { argv } = require("node:process");

const name = argv[2] || "world";

console.log(`Hello ${name}!`);
