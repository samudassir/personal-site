# Personal Brand Website — SecureSDLC Academy

Static personal website for security training and consulting.

## Quick Start

Open `index.html` in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deployment

### GitHub Pages (free)
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch
3. Your site is live at `https://yourusername.github.io/repo-name`

### Netlify (free)
1. Drag and drop this folder at [app.netlify.com/drop](https://app.netlify.com/drop)
2. Optionally connect a custom domain

### Vercel (free)
```bash
npx vercel
```

### Custom Domain
Add a `CNAME` file with your domain name for GitHub Pages, or configure DNS in Netlify/Vercel settings.

## Customization Checklist

- [ ] Replace placeholder photo in the About section (`<img src="photo.jpg">`)
- [ ] Update name from "Syed M" to full name
- [ ] Add real LinkedIn URL in Contact section
- [ ] Add real email address in Contact section
- [ ] Add Calendly link for booking
- [ ] Replace placeholder testimonial with a real one
- [ ] Update "Engineers Trained" stat with actual number
- [ ] Connect contact form to a backend (Formspree, Netlify Forms, etc.)
- [ ] Add favicon (`<link rel="icon" href="favicon.ico">`)
- [ ] Update meta description and title for SEO

## Contact Form Setup

The form currently shows a success state client-side. To receive submissions:

### Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Change the form `action` to your Formspree endpoint
3. Remove the JS form handler

### Netlify Forms
1. Add `netlify` attribute to the `<form>` tag
2. Deploy to Netlify — forms work automatically

## Structure

```
personal-site/
├── index.html    # All content and markup
├── styles.css    # Design system and responsive styles
├── main.js       # Navigation, typewriter, animations, form
└── README.md     # This file
```

## Phase 2 Ideas

- Consulting section with service descriptions
- Blog/Resources section with content feed
- Newsletter signup integration
- KillerCoda lab links
- Case studies from training engagements
