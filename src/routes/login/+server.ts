import { json } from '@sveltejs/kit';
import { validUser } from '$lib/credentials';

export async function POST({ request, cookies }) {
  const { username, password } = await request.json();

  if (username === validUser.username && password === validUser.password) {
    cookies.set('session', 'logged-in', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true, 
      maxAge: 60 * 60 
    });
    return json({ success: true });
  }

  return new Response('Unauthorized', { status: 401 });
}