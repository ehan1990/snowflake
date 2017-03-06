#!/bin/bash

apt-get install python-dev -y
apt-get install python-pip -y
sudo mkdir -p /preserve/logs
sudo chmod -R 777 /preserve/logs

cd dependencies
tar -xzf Flask-0.1.tar.gz
tar -xzf Flask-Login-0.3.0.tar.gz
tar -xzf Flask-Cors-1.9.0.tar.gz
tar -xzf Blueprints-2.3.0.2.tar.gz
tar -xzf jsonpickle-0.9.2.tar.gz

cd Flask-0.1; sudo python setup.py install
cd Flask-Login-0.3.0; sudo python setup.py install
cd Flask-Cors-1.9.0; sudo python setup.py install
cd Blueprints-2.3.0.2; sudo python setup.py install
cd jsonpickle-0.9.2; sudo python setup.py install
