#!/bin/bash

set -o xtrace

pwd
rm -rf artifacts
yarn hardhat compile
find ./artifacts -type f -name '*.dbg.json' -delete
yarn types-gen
rm -rf cache
yarn compile

set +o xtrace