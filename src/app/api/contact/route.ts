import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name        = formData.get('name') as string;
  const email       = formData.get('email') as string;
  const description = formData.get('description') as string;
  const imageFile   = formData.get('image') as File | null;

  const attachments = [];

  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    attachments.push({
      filename: imageFile.name,
      content: buffer,
    });
  }

  const { data, error } = await resend.emails.send({
    from:        'Woodwork by Case <onboarding@resend.dev>',
    to:          ['zvollink@gmail.com'],
    replyTo:     email,
    subject:     `New project request from ${name}`,
    text:        `Name: ${name}\nEmail: ${email}\n\nProject Description:\n${description}`,
    attachments,
  });

  console.log('Resend response:', { data, error });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}