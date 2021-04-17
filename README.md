# angular-ngrx-data-custom-api-urls

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ngrx-data-custom-api-urls)

# This application uses Angular 11, Angular Material Tree and @ngrx/data

The data this application displays doesn't make much sense at the moment. It's a work in progress. For now, its purpose is to demonstrate how to get Angular Material Tree to work with `@ngrx/data` . It uses Angular 11 and `@ngrx/data` 10.

One of the challenges in working with `@ngrx/data` is that it assumes what your backend API URLs are. It makes an assumption that your URLs use the singular version of the entity name for single entity routes, and plural version of entity names for collection routes. So, it will call `GET /user/1` if you want to get a single user, and `GET /users` if you want to get all the users. It also appends a trailing slash. But your backend API routes could be named differently and that might be out of your control as a frontend developer. So as soon as you start working with `@ngrx/data` you are likely to run into this problem.

There are a couple of similar ways to solve it, and this application shows one of them. See the `src/app/skills/skills-data.service.ts` file for it.