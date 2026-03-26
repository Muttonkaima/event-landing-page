// Image URLs from Vercel storage
// Add your Vercel blob storage URLs here

const IMAGE_URLS = {
  // Logos
  logo: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/logo-black.png",
  logoBlack: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/logo-black.png", // Update if different
  logoWhite: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/logo-white.png", // Update if different
  favicon: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/favicon-white.png", // Update with favicon URL

  // Event Wizard Steps
  eventWizard: {
    step1: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/event-wizard/step1.png",
    step2: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/event-wizard/step2.png",
    step3: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/event-wizard/step3.png",
    step4: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/event-wizard/step4.png",
    step5: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/event-wizard/step5.png",
  },

  // Feature Screenshots
  formBuilder: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/form-builder.png",
  emailBuilder: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/email-builder.png",
  screen: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/screen.png",
  multiView: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/multi-view.png",

  // Analytics & Operations
  analytics: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/analytics.png",
  attendee: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/attendee.png",
  feedback: "https://v3rmr5mylhqzj8wd.public.blob.vercel-storage.com/assets/feedback.png",
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IMAGE_URLS;
}
