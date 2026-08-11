import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch('https://formsubmit.co/ajax/kirundaconstructions@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        _subject: `Website Contact — ${data.name || 'New message'}`,
        _template: 'table',
        _captcha: 'false',
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}