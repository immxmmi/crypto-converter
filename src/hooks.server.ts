export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get('session');
  event.locals.loggedIn = session === 'logged-in';
  return resolve(event);
};