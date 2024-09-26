unzip icomoon-v1.0.zip -d ./icomoon-v1.0
rm -rf icomoon-v1.0.zip
sed -i'.bak' -e 's/fonts/\/fonts/g' icomoon-v1.0/style.css
cp -R icomoon-v1.0 src/assets   
cp src/assets/icomoon/fonts/* public/fonts
cp -r icomoon-v1.0 src/assets
mv src/assets/icomoon-v1.0 src/assets/icomoon 
rm -rf icomoon-v1.0
echo "Icomoon Fonts installed"
