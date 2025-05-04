import { redirect } from '@sveltejs/kit';

export async function GET({ cookies }) {
  cookies.delete('session', {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: true 
  });

  throw redirect(303, '/');
}