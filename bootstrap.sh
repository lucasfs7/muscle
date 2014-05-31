#!/usr/bin/env bash

echo "Updating apt repositories"
apt-get update

echo "Installing git"
sudo apt-get -y install git git-man git-doc gitk

echo "Installing Node.js"
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
sudo apt-get -y install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs
