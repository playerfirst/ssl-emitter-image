imageName=$(date "+%d-%m-%Y")-emitter-image
echo "Building image $imageName"
docker build -t $imageName .

