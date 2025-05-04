import { json } from '@sveltejs/kit';
import { validUser } from '$lib/credentials';

export async function POST({ request, cookies }) {
  const { username, password } = await request.json();

  if (username === validUser.username && password === validUser.password) {
    cookies.set('session', 'logged-in', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true, // HTTPS-kompatibel für Deployment z. B. auf Vercel
      maxAge: 60 * 60 // 1 Stunde
    });
    return json({ success: true });
  }

  return new Response('Unauthorized', { status: 401 });
}

// src/routes/+page.server.ts
export function load({ locals }) {
    return {
      loggedIn: locals.loggedIn
    };
  }