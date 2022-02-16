unzip icomoon-v1.0.zip -d ./icomoon-v1.0
rm -rf icomoon-v1.0.zip
sed -i'.bak' -e 's/fonts/..\/fonts/g' icomoon-v1.0/variables.scss
mv icomoon-v1.0/fonts/* src/vendor/icomoon/fonts/
mv icomoon-v1.0/selection.json src/vendor/icomoon/fonts/selection.json
mv icomoon-v1.0/style.scss src/assets/scss/vendor/icomoon/_style.scss
mv icomoon-v1.0/variables.scss src/assets/scss/vendor/icomoon/_variables.scss
rm -rf icomoon-v1.0
gulp moveFonts
echo "Icomoon Fonts installed"
