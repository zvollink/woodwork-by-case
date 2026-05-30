import { c as createComponent } from './astro-component_Bpk_-RYc.mjs';
import 'piccolore';
import { l as createRenderInstruction, h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, m as maybeRenderHead, p as renderComponent } from './entrypoint_no3VSHd4.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Custom woodwork, furniture, and millwork by Case Vollink — serving the DFW Metroplex."><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-dmqpwcec> <nav data-astro-cid-dmqpwcec> <a href="#hero" class="logo" data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec>WWBC &mdash; Woodwork by Case</span> </a> <div class="links" data-astro-cid-dmqpwcec> <a href="#about" data-astro-cid-dmqpwcec>About</a> <a href="#projects" data-astro-cid-dmqpwcec>Work</a> <a href="#contact" class="cta" data-astro-cid-dmqpwcec>Start your Project</a> </div> <button class="hamburger" aria-label="Open menu" aria-expanded="false" data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec></span><span data-astro-cid-dmqpwcec></span><span data-astro-cid-dmqpwcec></span> </button> </nav> </header> ${renderScript($$result, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Nav.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-astro-cid-bbe6dxrz> <div class="bg" data-astro-cid-bbe6dxrz> <img src="/king-canopy-rustic-bedframe.jpg" alt="Rustic king canopy bed frame hand-crafted by Case Vollink" data-astro-cid-bbe6dxrz> <div class="overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="content" data-astro-cid-bbe6dxrz> <p class="eyebrow" data-astro-cid-bbe6dxrz>DFW Metroplex &amp; Beyond</p> <h1 data-astro-cid-bbe6dxrz>Built by hand.<br data-astro-cid-bbe6dxrz>Built to last.</h1> <p class="sub" data-astro-cid-bbe6dxrz>
Custom woodwork, furniture, and millwork — crafted with care by Case out of his workshop in Fort Worth Texas.
</p> <div class="actions" data-astro-cid-bbe6dxrz> <a href="#contact" class="btn-primary" data-astro-cid-bbe6dxrz>Start Your Project</a> <a href="#projects" class="btn-ghost" data-astro-cid-bbe6dxrz>See the Work</a> </div> </div> <a href="#about" class="scroll-hint" aria-label="Scroll down" data-astro-cid-bbe6dxrz> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz> <path d="M4 7 L10 13 L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> </svg> </a> </section>`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" data-astro-cid-v2cbyr3p> <div class="inner" data-astro-cid-v2cbyr3p> <div class="bio-block" data-astro-cid-v2cbyr3p> <div class="bio-text" data-astro-cid-v2cbyr3p> <p class="eyebrow" data-astro-cid-v2cbyr3p>About Case</p> <h2 data-astro-cid-v2cbyr3p>Craftsman. Builder.<br data-astro-cid-v2cbyr3p>Designer.</h2> <p data-astro-cid-v2cbyr3p>
Case Vollink has been building things with his hands his entire life. He has spent years in Minnesota, North Carolina and now Texas constructing furniture, sheds, closets and more — gaining a reputation for showing up, doing it right, and leaving people with something that lasts.
</p> <p data-astro-cid-v2cbyr3p>
Now Case is channeling that same craft into his own workshop — turning raw lumber into furniture, built-ins, and one-of-a-kind pieces that make a room. If you can imagine it, he can build it.
</p> <a href="#contact" class="link-cta" data-astro-cid-v2cbyr3p>Work with Case &rarr;</a> </div> <div class="bio-image" data-astro-cid-v2cbyr3p> <img src="/shed.jpg" alt="Custom shed built by Case Vollink" data-astro-cid-v2cbyr3p> </div> </div> <blockquote class="testimonial" data-astro-cid-v2cbyr3p> <svg class="quote-mark" width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-v2cbyr3p> <path d="M0 28V17.6C0 12.587 1.493 8.48 4.48 5.28C7.467 2.08 11.627 0.373333 16.96 0.159999L17.92 3.2C14.613 3.62 12.053 4.9 10.24 7.04C8.533 9.07333 7.68 11.5 7.68 14.32H14.72V28H0ZM19.04 28V17.6C19.04 12.587 20.533 8.48 23.52 5.28C26.507 2.08 30.667 0.373333 36 0.159999L36.96 3.2C33.653 3.62 31.093 4.9 29.28 7.04C27.573 9.07333 26.72 11.5 26.72 14.32H33.76V28H19.04Z" fill="currentColor" data-astro-cid-v2cbyr3p></path> </svg> <p data-astro-cid-v2cbyr3p>"Add a testimonial here — ask a happy client for a sentence or two about the experience and quality of work."</p> <cite data-astro-cid-v2cbyr3p>— Client Name, Location</cite> </blockquote> <div class="services" data-astro-cid-v2cbyr3p> <p class="eyebrow" data-astro-cid-v2cbyr3p>What I Do</p> <h2 class="services-heading" data-astro-cid-v2cbyr3p>Services &amp; Capabilities</h2> <div class="service-grid" data-astro-cid-v2cbyr3p> <div class="service-card" data-astro-cid-v2cbyr3p> <div class="card-icon" data-astro-cid-v2cbyr3p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p> <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" data-astro-cid-v2cbyr3p></path> <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" data-astro-cid-v2cbyr3p></path> </svg> </div> <h3 data-astro-cid-v2cbyr3p>Built-ins &amp; Cabinetry</h3> <ul data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p>Custom Built-ins</li> <li data-astro-cid-v2cbyr3p>Closets &amp; Storage</li> <li data-astro-cid-v2cbyr3p>Entertainment Centers</li> <li data-astro-cid-v2cbyr3p>Kitchen Islands &amp; Cabinets</li> <li data-astro-cid-v2cbyr3p>Mini Bars</li> </ul> </div> <div class="service-card" data-astro-cid-v2cbyr3p> <div class="card-icon" data-astro-cid-v2cbyr3p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-v2cbyr3p></path> <path d="M2 17l10 5 10-5" data-astro-cid-v2cbyr3p></path> <path d="M2 12l10 5 10-5" data-astro-cid-v2cbyr3p></path> </svg> </div> <h3 data-astro-cid-v2cbyr3p>Furniture &amp; Originals</h3> <ul data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p>Bed Frames &amp; Bedroom Sets</li> <li data-astro-cid-v2cbyr3p>Tables &amp; End Tables</li> <li data-astro-cid-v2cbyr3p>Hall Trees</li> <li data-astro-cid-v2cbyr3p>Cutting Boards <span class="ships-badge" data-astro-cid-v2cbyr3p>Ships Nationwide</span></li> <li data-astro-cid-v2cbyr3p>Custom One-of-a-Kind Pieces</li> </ul> </div> </div> </div> </div> </section>`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/About.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const builtByMe = [
    { src: "/king-canopy-rustic-bedframe.jpg", alt: "King Canopy Rustic Bed Frame" },
    { src: "/king-canopy-rustic-bedframe-2.jpg", alt: "King Canopy Bed Frame — Detail" },
    { src: "/endtable.jpg", alt: "End Table" },
    { src: "/queen-bed-set.jpg", alt: "Queen Bed Set" },
    { src: "/bedroom-built-ins.jpg", alt: "Bedroom Built-ins" },
    { src: "/hall-tree.jpg", alt: "Hall Tree" },
    { src: "/living-room-built-ins.jpg", alt: "Living Room Built-ins" },
    { src: "/kitchen-island.jpg", alt: "Kitchen Island" },
    { src: "/kitchen-island-2.jpg", alt: "Kitchen Island — Detail" },
    { src: "/china-cabinet.jpg", alt: "China Cabinet" },
    { src: "/exterior-hot-tub-room.jpg", alt: "Exterior Hot Tub Room" },
    { src: "/entertainment-center.jpg", alt: "Entertainment Center" },
    { src: "/built-in-closets.jpg", alt: "Built-in Closets" },
    { src: "/built-in-closets-2.jpg", alt: "Built-in Closets — Detail" },
    { src: "/built-in-mini-bar.jpg", alt: "Built-in Mini Bar" },
    { src: "/playset.jpg", alt: "Custom Playset" },
    { src: "/shed.jpg", alt: "Custom Shed" }
  ];
  const originals = [
    { src: "/reindeer.jpg", alt: "Wood-carved Reindeer" },
    { src: "/album-crates.jpg", alt: "Record Album Crates" },
    { src: "/terrarium-light-cover.jpg", alt: "Terrarium Light Cover" },
    { src: "/cutting-board-white-oak.jpg", alt: "Cutting Board — White Oak" },
    { src: "/cutting-board-brick-pattern-oak-walnut.jpg", alt: "Cutting Board — Brick Pattern Oak & Walnut" },
    { src: "/cutting-board-cherry-brick-walnut.jpg", alt: "Cutting Board — Cherry & Walnut" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" data-astro-cid-amng4zvp> <div class="inner" data-astro-cid-amng4zvp> <p class="eyebrow" data-astro-cid-amng4zvp>The Work</p> <h2 data-astro-cid-amng4zvp>Projects</h2> <div class="category" data-astro-cid-amng4zvp> <div class="category-header" data-astro-cid-amng4zvp> <h3 data-astro-cid-amng4zvp>Designed by Others, Built by Case</h3> <p data-astro-cid-amng4zvp>Bringing client visions to life — from playsets to built-ins to full bedroom sets.</p> </div> <div class="gallery" data-astro-cid-amng4zvp> ${builtByMe.map((img, i) => renderTemplate`<button class="gallery-item"${addAttribute(img.src, "data-src")}${addAttribute(img.alt, "data-alt")}${addAttribute(i, "data-index")} data-group="built"${addAttribute(`View: ${img.alt}`, "aria-label")} data-astro-cid-amng4zvp> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} loading="lazy" data-astro-cid-amng4zvp> <div class="hover-label" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>${img.alt}</span> </div> </button>`)} </div> </div> <div class="category" data-astro-cid-amng4zvp> <div class="category-header" data-astro-cid-amng4zvp> <h3 data-astro-cid-amng4zvp>Woodwork by Case Originals</h3> <p data-astro-cid-amng4zvp>Original designs — conceptualized, crafted, and finished from scratch.</p> </div> <div class="gallery" data-astro-cid-amng4zvp> ${originals.map((img, i) => renderTemplate`<button class="gallery-item"${addAttribute(img.src, "data-src")}${addAttribute(img.alt, "data-alt")}${addAttribute(i, "data-index")} data-group="originals"${addAttribute(`View: ${img.alt}`, "aria-label")} data-astro-cid-amng4zvp> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} loading="lazy" data-astro-cid-amng4zvp> <div class="hover-label" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>${img.alt}</span> </div> </button>`)} </div> </div> </div> </section> <!-- Lightbox --> <div id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden data-astro-cid-amng4zvp> <button class="lb-close" aria-label="Close" data-astro-cid-amng4zvp>&times;</button> <button class="lb-prev" aria-label="Previous" data-astro-cid-amng4zvp>&#8592;</button> <button class="lb-next" aria-label="Next" data-astro-cid-amng4zvp>&#8594;</button> <div class="lb-img-wrap" data-astro-cid-amng4zvp> <img id="lb-img" src="" alt="" data-astro-cid-amng4zvp> </div> <p id="lb-caption" data-astro-cid-amng4zvp></p> </div> ${renderScript($$result, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Projects.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" data-astro-cid-xmivup5a> <div class="inner" data-astro-cid-xmivup5a> <div class="left" data-astro-cid-xmivup5a> <p class="eyebrow" data-astro-cid-xmivup5a>Let&apos;s Build Something</p> <h2 data-astro-cid-xmivup5a>Start Your<br data-astro-cid-xmivup5a>Next Project</h2> <p class="sub" data-astro-cid-xmivup5a>
Found something on Pinterest that you like? Want a custom piece of furniture, a stylish mantel or need built-ins that actually fit your space? Case can make it happen.
</p> <ul class="details" data-astro-cid-xmivup5a> <li data-astro-cid-xmivup5a> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-xmivup5a></path><circle cx="12" cy="10" r="3" data-astro-cid-xmivup5a></circle></svg>
DFW Metroplex, Texas
</li> <li data-astro-cid-xmivup5a> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><rect x="1" y="3" width="15" height="13" data-astro-cid-xmivup5a></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" data-astro-cid-xmivup5a></polygon><circle cx="5.5" cy="18.5" r="2.5" data-astro-cid-xmivup5a></circle><circle cx="18.5" cy="18.5" r="2.5" data-astro-cid-xmivup5a></circle></svg>
Cutting boards &amp; small pieces ship nationwide
</li> <li data-astro-cid-xmivup5a> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-xmivup5a></path><polyline points="22,6 12,13 2,6" data-astro-cid-xmivup5a></polyline></svg>
Response within 1-2 business days
</li> </ul> </div> <div class="right" data-astro-cid-xmivup5a> <form id="contact-form" enctype="multipart/form-data" data-astro-cid-xmivup5a> <div class="field" data-astro-cid-xmivup5a> <label for="name" data-astro-cid-xmivup5a>Name</label> <input type="text" id="name" name="name" placeholder="Your name" required data-astro-cid-xmivup5a> </div> <div class="field" data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a>Email</label> <input type="email" id="email" name="email" placeholder="you@example.com" required data-astro-cid-xmivup5a> </div> <div class="field" data-astro-cid-xmivup5a> <label for="description" data-astro-cid-xmivup5a>Project Description</label> <textarea id="description" name="description" rows="5" placeholder="Describe your project — size, wood type, style, timeline, anything helpful..." required data-astro-cid-xmivup5a></textarea> </div> <div class="field" data-astro-cid-xmivup5a> <label for="image" data-astro-cid-xmivup5a>Reference Image <span class="optional" data-astro-cid-xmivup5a>(Optional)</span></label> <div class="file-wrap" data-astro-cid-xmivup5a> <input type="file" id="image" name="image" accept="image/*" data-astro-cid-xmivup5a> <span class="file-hint" data-astro-cid-xmivup5a>Upload an inspiration or reference photo</span> </div> </div> <button type="submit" id="submit-btn" data-astro-cid-xmivup5a>Send Project Request</button> <p id="success-msg" class="feedback success" hidden data-astro-cid-xmivup5a>Thanks! Case will be in touch soon.</p> <p id="error-msg" class="feedback error" hidden data-astro-cid-xmivup5a>Something went wrong. Please try again.</p> </form> </div> </div> <div class="footer-bar" data-astro-cid-xmivup5a> <span data-astro-cid-xmivup5a>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Woodwork by Case &mdash; Case Vollink, DFW Metroplex, Texas</span> </div> </section> ${renderScript($$result, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Woodwork by Case — Custom Woodwork & Carpentry, DFW Metroplex" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/zacharyvollink/Github/woodwork-by-case/src/pages/index.astro", void 0);

const $$file = "/Users/zacharyvollink/Github/woodwork-by-case/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
