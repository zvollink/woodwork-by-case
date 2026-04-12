import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name        = formData.get('name')        as string;
  const email       = formData.get('email')       as string;
  const description = formData.get('description') as string;
  const imageFile   = formData.get('image')       as File | null;

  const attachments = [];

  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    attachments.push({ filename: imageFile.name, content: buffer });
  }

  const { error } = await resend.emails.send({
    from:        'Woodwork by Case <onboarding@resend.dev>',
    to:          ['zvollink@gmail.com'],
    replyTo:     email,
    subject:     `New project request from ${name}`,
    text:        `Name: ${name}\nEmail: ${email}\n\nProject Description:\n${description}`,
    attachments,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
