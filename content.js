// Wedding Website Content Configuration
// Edit this file to update all the text content on your website

const content = {
    // Hero Section
    hero: {
        bride: "Sarah",
        groom: "Euan",
        date: "May 30, 2026",
        venue: "Taypark House",
        location: "Dundee, Scotland",
        // Optional: Add background image (1920x1080px recommended)
        backgroundImage: "images/hero-background.jpg"
    },

    // Our Story Section
    story: {
        title: "Our Story",
        paragraphs: [
            "Euan and Sarah met during a summer in college and quickly realized they were meant to be together, even across two countries. Over the years, they shared life in Scotland and the U.S., grew closer through every challenge, and eventually settled in Boston, where they married in a small, heartfelt celebration. Now they spend their days together with their cat, Cookie, and can't wait to share this next chapter with you."
        ],
        // Optional: Add couple photo (800x600px or 1200x800px recommended)
        // couplePhoto: "images/couple-photo.jpg",
        // Optional: Photo gallery (600x600px square images recommended)
        // gallery: []
    },

    // Venue Section
    venue: {
        title: "Venue",
        name: "Taypark House",
        address: "484 Perth Road<br>Dundee, Scotland<br>DD2 1LR",
        // Optional: Add venue photo (1200x800px recommended)
        photo: "images/Taypark house.jpg"
    },

    // Schedule/Timeline Section
    schedule: {
        title: "Schedule",
        events: [
            {
                time: "2:30 PM",
                title: "Guests Arrival",
                description: "Welcome to Taypark House! Please arrive and take your seats."
            },
            {
                time: "3:00 PM",
                title: "Ceremony",
                description: "Join us as we exchange vows in the stunning ceremony room at Taypark House."
            },
            {
                time: "4:00 PM",
                title: "Drinks Reception",
                description: "Canapés and drinks."
            },
            {
                time: "6:00 PM",
                title: "Meal",
                description: "A delicious three-course meal featuring the finest Scottish ingredients."
            },
            {
                time: "9:30 PM",
                title: "Evening Buffet",
                description: "Enjoy a selection of delicious evening snacks."
            }
        ]
    },

    // RSVP Section
    rsvp: {
        title: "RSVP",
        paragraphs: [
            "We hope you can join us for our special day! Please respond by March 1, 2026.",
            "Kindly let us know if you'll be attending and any dietary requirements you may have."
        ],
        buttonText: "Respond Here",
        buttonLink: "https://forms.google.com/your-form-link",
        contactText: "Or contact us directly at:",
        email: "wedding@sarahandeuan.com"
    },

    // Travel & Accommodation Section
    travel: {
        title: "Travel & Stay",
        cards: [
            {
                title: "Getting There",
                content: [
                    "<strong>By Bus:</strong> Nonstop bus from Edinburgh Airport to Dundee town centre (link found <a href=\"https://fly-coach.co.uk\" target=\"_blank\" rel=\"noopener\">here</a>)",
                    "<strong>By Air:</strong> Fly into Edinburgh Airport (1 hour drive), Glasgow Airport (1.5 hours), or take a connecting flight from Heathrow to Dundee Airport (5 minutes from venue)",
                    "<strong>By Train:</strong> Dundee Railway Station (10 minutes from venue)",
                    "<strong>By Car:</strong> Free parking available at Taypark House"
                ]
            },
            {
                title: "Accommodation",
                content: [
                    "<strong>Apex City Quay Hotel</strong><br>1 West Victoria Dock Road<br><a href=\"tel:01382202404\">01382 202 404</a>",
                    "<strong>Malmaison Dundee</strong><br>44 Whitehall Crescent<br><a href=\"tel:01382339715\">01382 339 715</a>",
                    "<em style=\"font-size: 0.85rem;\">Mention \"Sarah & Euan's Wedding\" for special rates</em>"
                ]
            },
            {
                title: "US Citizens - ETA Required",
                content: [
                    "American travelers must apply for an Electronic Travel Authorization (ETA) before traveling to the UK.",
                    "Apply online at: <a href=\"https://www.gov.uk/eta/apply\" target=\"_blank\" rel=\"noopener\">UK ETA Application</a>",
                    "<em style=\"font-size: 0.85rem;\">Please apply well in advance of your travel dates</em>"
                ]
            },
            {
                title: "Local Attractions",
                content: [
                    "While in Dundee, visit the V&A Museum, Discovery Point, and enjoy a walk along the beautiful River Tay waterfront.",
                    "The city center is just 10 minutes from the venue with shops, restaurants, and pubs."
                ]
            }
        ]
    },

    // Registry Section
    registry: {
        title: "Registry",
        intro: "Your presence at our wedding is the greatest gift of all. However, if you would like to honor us with a gift, we've registered at the following stores for your convenience.",
        options: [
            {
                title: "John Lewis & Partners",
                description: "For home essentials and beautiful pieces to start our new life together.",
                linkText: "View Registry",
                linkUrl: "https://www.johnlewis.com"
            },
            {
                title: "Honeymoon Fund",
                description: "We're planning an adventure to Japan! Contributions toward our honeymoon would be greatly appreciated.",
                linkText: "Contribute",
                linkUrl: "#"
            },
            {
                title: "Charity Donation",
                description: "In lieu of gifts, you may also consider a donation to one of our favorite charities in our names.",
                linkText: "Learn More",
                linkUrl: "#"
            }
        ]
    },

    // FAQ Section
    faq: {
        title: "Frequently Asked Questions",
        questions: [
            {
                question: "What should I wear?",
                answer: "We're asking for cocktail attire. Men are invited to wear suits or kilts. The ceremony will be indoors and the reception will be outdoors weather permitting."
            },
            {
                question: "Do I need a visa to travel to the UK?",
                answer: "If you're a US citizen, you must apply for an Electronic Travel Authorization (ETA) before traveling to the UK. You can apply online at gov.uk/eta/apply. Please apply well in advance of your travel dates. Citizens of other countries should check their specific requirements."
            },
            {
                question: "Can I bring a plus-one?",
                answer: "Due to venue capacity, we're only able to accommodate guests formally invited on your invitation. If you received a plus-one, it will be indicated on your invitation."
            },
            {
                question: "What about dietary requirements?",
                answer: "Please let us know about any dietary requirements or allergies when you RSVP, and we'll make sure you're well catered for on the day. There will be vegan and vegetarian options."
            }
        ]
    },

    // Footer
    footer: {
        message: "We can't wait to celebrate with you!",
        copyright: "© 2026 Sarah & Euan"
    }
};
