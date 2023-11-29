#!/bin/sh

docker tag playerfirst-staging-emitter playerfirst.azurecr.io/playerfirst-emitter:staging-emitter
docker push playerfirst.azurecr.io/playerfirst-emitter:staging-emitter

