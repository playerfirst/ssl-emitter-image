imageName=playerfirst-staging-emitter
repoName=playerfirst-emitter
tagName=staging-emitter-v1

echo "Building image $imageName"
docker build -t $imageName .

echo "$$ Publishing $$"
docker tag $imageName playerfirst.azurecr.io/$repoName:$tagName
docker push playerfirst.azurecr.io/$repoName:$tagName
