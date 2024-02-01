# Podcaster

In this application you can see a list of 100 podcasts from Apple Podcast. Search for one of them and navigate to a dedicated page for each podcast as long as the different episodes.

#### IMPORTANT: Due to a CORS issue it is required to install ALLOW CORS extension for Chrome Browser (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

(Note: due to previous issue with the API, there is a version wiht a mock server that you can check on the [server](https://github.com/lunaticfriki/podcaster/tree/server) branch. The main branch runs with the actual API from Apple).

First of all, to install the dependencies:

```
pnpm install
```

To run the development server (and the mock-server concurrently in [server](https://github.com/lunaticfriki/podcaster/tree/server)):

```
pnpm dev
```

To build the project:

```
pnpm build
```

To run the tests:

```
pnpm test
```

To run the tests in UI (you can check the code for each test and component, and a module graph with this Vitest functionality):

```
pnpm test:ui
```

To format the code:

```
pnpm format
```

To lint the code:

```
pnpm lint
```
# podcaster
