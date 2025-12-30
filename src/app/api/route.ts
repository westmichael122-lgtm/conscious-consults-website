import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Resend API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Conscious Consults & Construction <onboarding@resend.dev>",
        to: "westmichael122@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #4a7c59; margin-bottom: 20px;">New Contact Form Submission</h2>

            <div style="background-color: #f5f5f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; font-weight: bold;">From:</p>
              <p style="margin: 0 0 20px 0; color: #333;">${name}</p>

              <p style="margin: 0 0 10px 0; font-weight: bold;">Email:</p>
              <p style="margin: 0 0 20px 0; color: #333;">${email}</p>

              <p style="margin: 0 0 10px 0; font-weight: bold;">Message:</p>
              <p style="margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="font-size: 12px; color: #888; margin-top: 30px;">
              This message was sent from your website contact form.
            </p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    const result = await emailResponse.json();

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      result
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "API is running" });
}