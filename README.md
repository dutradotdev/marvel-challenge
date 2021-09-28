# Marvel Challenge

## WARNING
Before run the project, create a .env file inside the root of project.

```
API_URL=<YOUR_MARVEL_API_URL>
API_PUBLIC_KEY=<YOUR_MARVEL_API_PUBLIC_KEY>
API_PRIVATE_KEY=<YOUR_MARVEL_API_PRIVATE_KEY>
```
*I will commit this file just because it is a code challenge*

## Description

The goal of this challenge is create a React Native app that has the following features:

- List all heroes (picture and name);
- Go to a character details screen when tapping a single character (show picture, name and description);
- Feature to favorite hero in List screen and Detail screen;
- Save the favorite heroes in AsyncStorage to persist this information when app is closed;
- Use redux and react navigation;
- Share the favorite heroes list;
- Search favorite hero in favorite heroes screen by it's name;

Plus:

- If API endpoint returns error for some reason, this app show a button that allow user to refetch the heroes;
- Paginating character list;
- Reactotron to debug;
- Typescript;
- Use react-native-dotenv to protect sensive information (API URL and tokens);
- Use axios interceptor to pass tokens over the URL;
- Loading icon;
- Image loading indicator for better UX;

## Code quality:

This project use this tools in order to create a consistent codebase, improve developer performance and reduce bugs:

- Eslint: Javascript linter
- Prettier: Code formater
- EditorConfig: Code consistence between OS and IDEs.
- Typescript
- Separated each feature in modules
- Separated each business logic in hooks

## Run project

In root folder, run:

ios:

```javascript
yarn build-and-run:ios
```

android:

```javascript
yarn build-and-run:android
```

## Other commands:

Install dependencies:

```javascript
yarn
```

Start bundler:

```javascript
yarn start
```

Run lint:

```javascript
yarn lint
```

Run lint fix:

```javascript
yarn lint-fix
```
