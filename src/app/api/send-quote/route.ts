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
        _subject: `Quote Request — ${data.service || 'New Quote'}`,
        _template: 'table',
        _captcha: 'false',
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: data.location,
        service: data.service,
        details: data.details
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}