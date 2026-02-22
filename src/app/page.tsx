import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <nav>
        <h1>Woodwork by Case</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Next Project</a>
        </div>
      </nav>

      <section id="about">
        <h2>About</h2>
        
        <div className={styles.testimonial}>
          <p>Testimonial text goes here - ask your brother for a good one from a client</p>
          <span>— Client Name</span>
        </div>

        <div className={styles.service}>
          <h3>Services & Capabilities</h3>
          
          <div className={styles.serviceCategory}>
            <h4>Home Construction & Renovation</h4>
            <ul>
              <li>Roofing</li>
              <li>Siding</li>
              <li>Framing</li>
              <li>Drywall</li>
              <li>Doors & Windows</li>
              <li>Interior & Exterior Trim</li>
            </ul>
          </div>

          <div className={styles.serviceCategory}>
            <h4>Custom Woodwork</h4>
            <ul>
              <li>Custom Closets</li>
              <li>Built-ins</li>
              <li>Furniture</li>
              <li>Cutting Boards</li>
              <li>Playsets</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        
        <div className={styles.projectCategory}>
          <h3>Designed by Others, Built by Me</h3>
          <p>Bringing client visions to life with precision and craftsmanship.</p>
          <div className={styles.gallery}>
            {/* Images will go here */}
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Project 1" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Project 2" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Project 3" />
            </div>
          </div>
        </div>

        <div className={styles.projectCategory}>
          <h3>WWBC Originals</h3>
          <p>Original designs conceptualized and crafted from start to finish.</p>
          <div className={styles.gallery}>
            {/* Images will go here */}
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Original 1" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Original 2" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/placeholder.jpg" alt="Original 3" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Next Project</h2>
        <p>Have a custom project in mind? Let's make it happen.</p>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
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
            <input 
              type="file" 
              id="image" 
              name="image" 
              accept="image/*"
            />
            <span className={styles.fileHelper}>Upload an example or inspiration image</span>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Project Request
          </button>
        </form>
      </section>
    </main>
  );
}