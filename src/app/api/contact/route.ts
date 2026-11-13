import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, location, message, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // Required field validation
    if (!name || !phone || !service || !location) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Phone, Service, Location).' },
        { status: 400 }
      );
    }

    // Phone validation (minimum 10 digits)
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number with at least 10 digits.' },
        { status: 400 }
      );
    }

    // Log the enquiry on the server
    console.log('[Shree Geotech Enquiry Received]:', {
      name,
      phone,
      email: email || 'Not provided',
      service,
      location,
      message: message || 'No message provided',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your geotechnical enquiry has been received. Our team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please call us directly.',
      },
      { status: 500 }
    );
  }
}
