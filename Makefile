RUN_DEV_PARAMS=--workdir /app -v .:/app -it --rm
DOCKER_DEV_IMAGE_NAME=asriyan-me-dev
DOCKER_STAGING_IMAGE_NAME=asriyan-me-staging
DOCKER_PROD_BUNDLE_IMAGE_NAME=asriyan-me-prod
TMP_CONTAINER_NAME=asriyan-me

build_dev_image:
	docker build -t ${DOCKER_DEV_IMAGE_NAME} --target dev .

build_staging_image:
	docker build --build-arg NODE_ENV=staging -t ${DOCKER_STAGING_IMAGE_NAME} --target app .

build_prod_bundle_image:
	docker build --build-arg NODE_ENV=production -t ${DOCKER_PROD_BUNDLE_IMAGE_NAME} --target bundle .

dev_install: build_dev_image
	docker run ${RUN_DEV_PARAMS} ${DOCKER_DEV_IMAGE_NAME} sh -c "npm ci && npm i --no-save @rollup/rollup-linux-arm64-gnu"

dev_serve:
	docker run ${RUN_DEV_PARAMS} -p 5173:5173 ${DOCKER_DEV_IMAGE_NAME} npm run dev -- --host

dev_enter:
	docker run ${RUN_DEV_PARAMS} -it ${DOCKER_DEV_IMAGE_NAME} bash

staging_serve: build_staging_image
	docker run -it --rm -p 8080:80 ${DOCKER_STAGING_IMAGE_NAME}

prod_build_bundle: build_prod_bundle_image
	docker create --name ${TMP_CONTAINER_NAME} ${DOCKER_PROD_BUNDLE_IMAGE_NAME}
	docker cp ${TMP_CONTAINER_NAME}:/dist ./dist
	docker rm ${TMP_CONTAINER_NAME}
