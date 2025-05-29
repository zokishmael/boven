export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    // Password hardcoded
   if (password === process.env.LOGIN_PASSWORD) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `authenticated=true; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`
        }
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Password salah' 
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('API Login error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
