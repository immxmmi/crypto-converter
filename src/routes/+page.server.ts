// src/routes/+page.server.ts
export function load({ locals }) {
    return {
      loggedIn: locals.loggedIn
    };
  }