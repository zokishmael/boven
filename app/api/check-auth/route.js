export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // Gunakan cookies dari request header
    const cookieHeader = request.headers.get('cookie') || '';
    const cookies = Object.fromEntries(
      cookieHeader.split(';').map(c => {
        const [key, val] = c.trim().split('=');
        return [key, val];
      })
    );
    
    const isAuthenticated = cookies.authenticated === 'true';
    
    return new Response(JSON.stringify({ 
      authenticated: isAuthenticated 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Check Auth error:', error);
    return new Response(JSON.stringify({ 
      authenticated: false 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
