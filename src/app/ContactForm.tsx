'use client';
import { useState } from 'react';
import styles from './page.module.css';

export function ContactForm( props: React.FormHTMLAttributes<HTMLFormElement> ) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: formData });

    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <form {...props} className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Project Description</label>
        <textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Tell me about your project..."
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="image">Reference Image (Optional)</label>
        <input type="file" id="image" name="image" accept="image/*" />
        <span className={styles.fileHelper}>Upload an example or inspiration image</span>
      </div>

      <button className={styles.submitButton} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Submit Project Request'}
      </button>

      {status === 'sent'  && <p>Thanks! I&apos;ll be in touch soon.</p>}
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}