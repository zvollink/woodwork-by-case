import { Resend } from 'resend';

const resend = new Resend("re_5yTfSGHf_HewiY9SmViDKd6wSJT7v76uj");
const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");
  const imageFile = formData.get("image");
  const attachments = [];
  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    attachments.push({ filename: imageFile.name, content: buffer });
  }
  const { error } = await resend.emails.send({
    from: "Woodwork by Case <onboarding@resend.dev>",
    to: ["zvollink@gmail.com"],
    replyTo: email,
    subject: `New project request from ${name}`,
    text: `Name: ${name}
Email: ${email}

Project Description:
${description}`,
    attachments
  });
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
