'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all required fields.' };
  }

  try {
    await resend.emails.send({
      from: 'Website <onboarding@resend.dev>',
      to: 'enquiries@whal.co.uk',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''} — ${subject || 'General enquiry'}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Enquiry type:</strong> ${subject}</p>` : ''}
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return { status: 'success', message: "Thanks — we'll be in touch shortly." };
  } catch {
    return { status: 'error', message: 'Something went wrong. Please call us on 01406 362585.' };
  }
}
