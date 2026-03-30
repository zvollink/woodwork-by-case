import Image from 'next/image';
import styles from './page.module.css';
import { ContactForm } from './ContactForm';

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
              <li>Trim Carpentry</li>
              <li>Rough Framing</li>
              <li>Doors</li>
              <li>Sheds</li>
              <li>Playsets</li>
            </ul>
          </div>

          <div className={styles.serviceCategory}>
            <h4>Custom Woodwork</h4>
            <ul>
              <li>Custom Closets</li>
              <li>Built-ins</li>
              <li>Furniture</li>
              <li>Cutting Boards</li>
              <li>Cabinets</li>
              <li>Bookcases</li>
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
            <div className={styles.galleryItem}>
              <Image src="/king-canopy-rustic-bedframe.jpg" alt="King Canopy Rustic Bedframe" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/king-canopy-rustic-bedframe-2.jpg" alt="King Canopy Rustic Bedframe 2" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/endtable.jpg" alt="End Table" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/queen-bed-set.jpg" alt="Queen Bed Set" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/bedroom-built-ins.jpg" alt="Bedroom Built-ins" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/hall-tree.jpg" alt="Hall Tree" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/living-room-built-ins.jpg" alt="Living Room Built-ins" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/kitchen-island.jpg" alt="Kitchen Island" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/kitchen-island-2.jpg" alt="Kitchen Island 2" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/china-cabinet.jpg" alt="China Cabinet" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/exterior-hot-tub-room.jpg" alt="Exterior Hot Tub Room" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/entertainment-center.jpg" alt="Entertainment Center" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/built-in-closets.jpg" alt="Built-in Closets" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/built-in-closets-2.jpg" alt="Built-in Closets 2" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/built-in-mini-bar.jpg" alt="Built-in Mini Bar" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/playset.jpg" alt="Playset" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/shed.jpg" alt="Shed" width={800} height={600} />
            </div>
          </div>
        </div>

        <div className={styles.projectCategory}>
          <h3>WWBC Originals</h3>
          <p>Original designs conceptualized and crafted from start to finish.</p>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <Image src="/cutting-board-white-oak.jpg" alt="Cutting Board - White Oak" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/cutting-board-brick-pattern-oak-walnut.jpg" alt="Cutting Board - Brick Pattern Oak/Walnut" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/cutting-board-cherry-brick-walnut.jpg" alt="Cutting Board - Brick Pattern Cherry Walnut" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/reindeer.jpg" alt="Reindeer" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/album-crates.jpg" alt="Album Crates" width={800} height={600} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/terrarium-light-cover.jpg" alt="Terrarium Light Cover" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Next Project</h2>
        <p>Have a custom project in mind? Let&apos;s make it happen.</p>
        
        <ContactForm />
      </section>
    </main>
  );
}