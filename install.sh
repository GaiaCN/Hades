ROOT_PATH=`pwd`
rm /usr/local/bin/node
ln -s $ROOT_PATH/bin/node-v0.12.7-darwin-x64/bin/node /usr/local/bin/node
rm /usr/local/bin/npm
ln -s $ROOT_PATH/bin/node-v0.12.7-darwin-x64/bin/npm /usr/local/bin/npm
rm /usr/local/bin/phantomjs
ln -s $ROOT_PATH/bin/phantomjs-1.9.8-macosx/bin/phantomjs /usr/local/bin/phantomjs
rm /usr/local/bin/casperjs
ln -s $ROOT_PATH/bin/n1k0-casperjs-4f105a9/bin/casperjs /usr/local/bin/casperjs
