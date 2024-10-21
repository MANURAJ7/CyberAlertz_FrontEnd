# Getting Started

First run the development server :

```
# install libraries and modules

npm i

# starting script

npm run dev
```

# Routes

- `/` : Home Route includes the _Latest_ news which is fetched by Cosmo Cloud API.

- `/Search` : Search Route is for making _Vector Search_ requests on MongoDb's Vector Database through Cosmo Cloud vector search API (utilizing Gemini for Embeddings generation).

- `/Article` : Article Route has two features -> _showcasing the article_ & _AI search_ for article related questions that reader migh have (utilizing Gemini).

- `/Bookmark` : Bookmark Route for storing bookmarked articles by user.

- `/Analytics` : Analytics Route is a _Dashboard_ for showcasing the news trends. [Coming Soon...]
- `Settings` : For User Profile & Site related settings. [Coming Soon...]
