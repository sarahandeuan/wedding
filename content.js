// Wedding Website Content Configuration
// Edit this file to update all the text content on your website

const content = {
    // Hero Section
    hero: {
        bride: "Sarah",
        groom: "Euan",
        date: "May 30, 2026",
        venue: "Taypark House",
        location: "Dundee, Scotland"
    },

    // Our Story Section
    story: {
        title: "Our Story",
        paragraphs: [
            "From the moment we met, we knew there was something special. What started as a chance encounter in Edinburgh blossomed into a love story that continues to unfold with each passing day.",
            "Through adventures in the Scottish Highlands, quiet evenings by the fire, and everything in between, we've built a life filled with laughter, love, and countless memories.",
            "Now, we're thrilled to invite you to celebrate the next chapter of our journey as we say \"I do\" at the beautiful Taypark House in Dundee, surrounded by the people we love most."
        ]
    },

    // Wedding Details Section
    details: {
        title: "Wedding Details",
        cards: [
            {
                icon: "💒",
                title: "Ceremony",
                location: "Taypark House<br>Dundee, Scotland<br>DD2 1PD",
                time: "2:00 PM"
            },
            {
                icon: "🥂",
                title: "Drinks Reception",
                location: "Following the ceremony<br>Taypark House Gardens",
                time: "2:30 PM"
            },
            {
                icon: "🍽️",
                title: "Dinner",
                location: "Three-course meal<br>with wine pairings",
                time: "4:45 PM"
            }
        ]
    },

    // Schedule/Timeline Section
    schedule: {
        title: "Schedule",
        events: [
            {
                time: "8:00 AM",
                title: "Buffet Breakfast",
                description: "Bridal party hair and makeup begins."
            },
            {
                time: "12:00 PM",
                title: "Photos",
                description: "Bridal party and family photos before the ceremony."
            },
            {
                time: "1:30 PM",
                title: "Guests Arrival",
                description: "Welcome to Taypark House! Please arrive and take your seats."
            },
            {
                time: "2:00 PM",
                title: "Ceremony",
                description: "Join us as we exchange vows in the stunning ceremony room at Taypark House."
            },
            {
                time: "2:30 PM",
                title: "Drinks Reception",
                description: "Canapés and drinks while we take more photos."
            },
            {
                time: "4:00 PM",
                title: "Call to Meal",
                description: "Please make your way to the dining area."
            },
            {
                time: "4:20 PM",
                title: "Speeches",
                description: "Toasts and celebration with family and friends."
            },
            {
                time: "4:45 PM",
                title: "Meal",
                description: "A delicious three-course meal featuring the finest Scottish ingredients."
            },
            {
                time: "6:30 PM",
                title: "Evening Party",
                description: "Let's dance the night away! Music, celebration, and fun."
            },
            {
                time: "8:30 PM",
                title: "Evening Buffet",
                description: "Enjoy a selection of delicious evening snacks."
            }
        ]
    },

    // RSVP Section
    rsvp: {
        title: "RSVP",
        paragraphs: [
            "We hope you can join us for our special day! Please respond by March 30, 2026.",
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
                    "<strong>By Air:</strong> Edinburgh Airport (1 hour drive) or Glasgow Airport (1.5 hours)",
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
                answer: "We're asking for formal attire. Think elegant dresses, suits, and kilts are absolutely encouraged! The ceremony and reception will be indoors, but we'll have some time in the gardens for photos."
            },
            {
                question: "Do I need a visa to travel to the UK?",
                answer: "If you're a US citizen, you must apply for an Electronic Travel Authorization (ETA) before traveling to the UK. You can apply online at gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta. Please apply well in advance of your travel dates. Citizens of other countries should check their specific requirements."
            },
            {
                question: "Can I bring a plus-one?",
                answer: "Due to venue capacity, we're only able to accommodate guests formally invited on your invitation. If you received a plus-one, it will be indicated on your invitation."
            },
            {
                question: "Are children welcome?",
                answer: "We love your little ones, but we've decided to make our wedding an adults-only celebration. We hope this gives you a chance to enjoy a night off!"
            },
            {
                question: "What about dietary requirements?",
                answer: "Please let us know about any dietary requirements or allergies when you RSVP, and we'll make sure you're well catered for on the day."
            },
            {
                question: "Will there be transportation?",
                answer: "We'll have shuttle buses running between the recommended hotels and Taypark House. Details will be sent closer to the date."
            },
            {
                question: "What about gifts?",
                answer: "Your presence is the greatest gift! However, if you'd like to give something, we'd be grateful for contributions to our honeymoon fund. Details will be included with your invitation."
            }
        ]
    },

    // Footer
    footer: {
        message: "We can't wait to celebrate with you!",
        copyright: "© 2026 Sarah & Euan"
    }
};
