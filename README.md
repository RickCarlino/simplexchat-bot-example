# Simplex.Chat Hello World Bot (Typescript)

## Install Simplex CLI, Run Server

1. Check out the [releases page](https://github.com/simplex-chat/simplex-chat/releases)
2. Run the server on port 3000 via `./simplex-chat-ubuntu-22_04-x86-64 -p 3000`

I installed the Ubuntu Linux executable, **your command will differ.**

## Add a User to Local CLI

Run the Simplex CLI from step one and `/connect` to a user. Read `/help` if you don't know how.

## Configure Recipient

Change the value of `const PERSON` in `index.ts` to your username.

Example:

```
const PERSON = '@alice_5';
```

## Install Deps

```
git clone git@github.com:RickCarlino/simplexchat-bot-example.git
cd simplexchat-bot-example
npm install
```

## Run Server

```
npm start
```

The server will send a hello world message to `PERSON` and do nothing else.
