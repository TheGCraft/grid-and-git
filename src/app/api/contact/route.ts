import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "TheGCraft <onboarding@resend.dev>",
            to: process.env.CONTACT_NOTIFICATION_EMAIL as string,
            subject: `New GCraft Contact Form Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f4f4f5; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });


    } catch (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );

    }
}