
# Mongoose-Fixture Example

## Getting Started

This is an example repo complete with everything you need to get started using mongoose-fixture.

First if you haven't done so yet, please install mongoose-fixture global so you can access the ``bin/`` command

    npm install -g mongoose-fixture

Now clone this repo with

    git clone git@github.com:mgan59/mongoose-fixture-example.git mongoose-fixture-example/
    cd mongoose-fixture-example

Use npm to install dependencies

    npm install .


### Setting up a mongo instance

If you don't have mongodb installed yet, go to [10 gen]() and download what you need.

Otherwise if you already have a mongodb server running then skip the following instructions

    mkdir mongo_data
    mkdir mongo_data/data
    mongod --port 27020 --fork --journal --logpath mongo_data/logfile --dbpath mongo_data/data

## Run Mongoose-Fixture

Running the command below will create a db and collections for...
    mongoose-fixture --fixture='all' --reset


