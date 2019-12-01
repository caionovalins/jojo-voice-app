# Running locally

## Requirements

- node.js v12
- npm
- gcloud

## Commands

```sh

$ cd jojo-voice-app
$ npm install
$ npm install -g jovo-cli

## Create a Dialogflow Agent and enable the Google Assistant integration
## This will automatically create a Google Action and a Google Cloud Platform (GCP) project
## Go to the GCP console of the project and create a service account with Dialogflow Admin role
## Download the service account key JSON file and activate it using gcloud command like below

$ gcloud auth activate-service-account --key-file=service-account-key.json

## Now we can use the jovo-cli to build and deploy the voice app using the ID of the GCP project

$ jovo build -p googleAction --project-id my-google-action-project-id
$ jovo deploy -p googleAction --project-id my-google-action-project-id
$ jovo run

## Then you can test it in the Google Action console or on your phone

```