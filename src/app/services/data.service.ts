import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private itineraryData: any;

  setItineraryData(data: any): void {
    console.log(data);
    this.itineraryData = data;
  }

  getItineraryData(): any {
    return this.itineraryData;
  }

  public destinationDetailsArray = [
    {
        destination: 'Yala',
        destinationDetails: {
          heading:
            'Welcome to Yala,[clientName] , the ultimate wildlife adventure awaits!',
          description: [
            "The wilderness calls—Yala, the kingdom of leopards, where nature reigns supreme.",
"Rise before dawn and set out on an unforgettable safari. In the golden glow of morning, elephants wade through misty lakes, sloth bears rustle through the undergrowth, and if you’re lucky, the elusive leopard emerges from the shadows.",
"The air is thick with adventure. Visit the sacred Kataragama Temple, where pilgrims of all faiths gather, drawn by centuries of legend and devotion.",
"Here, the echoes of ancient rituals still hum through the air, binding past and present. And beyond the land’s edge, the sea holds its own giants—Yala is one of the rare places where the largest animals on land and sea, the elephant and the whale, share the same horizon.",
"As night falls, gather by the fireside, the distant calls of the wild serenading you under a canopy of stars."
          ],
          fact: 'Interesting Fact: Yala National Park has the highest density of leopards in the world, making it a premier destination for wildlife enthusiasts.',
        },
        images: ["./../../assets/yala-1.jpg", "./../../assets/yala-2.jpg","./../../assets/yala-3.jpg"],
      },
    {
        destination: 'Wilpattu',
        destinationDetails: {
          heading:
            'Welcome to Wilpattu, [clientName], where wildlife adventures await!',
          description: [
            "Start your day with an exciting morning safari in Wilpattu National Park, known for its unique villus(natural lakes) and rich wildlife.",
            "Keep your camera ready as you may spot leopards, elephants, and a variety of bird species.",
            "After your safari, enjoy a picnic lunch amidst nature, taking in the serene surroundings.",
            "In the afternoon, explore the ancient ruins scattered throughout the park, learning about its historical significance.",
            "End your day with a relaxing dinner at your lodge, sharing stories of your wildlife encounters."
          ],
          fact: 'Interesting Fact: Wilpattu National Park is the largest national park in Sri Lanka and is famous for its natural lakes and diverse ecosystems.',
        },
        images: ["./../../assets/wilpattu-1.jpg", "./../../assets/wilpattu-2.jpg","./../../assets/wilpattu-3.jpg"],
      },
    {
        destination: 'Unawatuna',
        destinationDetails: {
          heading:
            'Today, [clientName], immerse yourself in the vibrant coastal charm of Unawatuna!',
          description: [
            "Start your day with a relaxing breakfast overlooking the beach, then head to Unawatuna Beach for some sun and surf.",
            "Explore the historic Galle Fort, a UNESCO World Heritage site, where you can wander through its charming streets and learn about its colonial history.",
            "Enjoy lunch at a seaside café, sampling delicious Sri Lankan cuisine while taking in the stunning ocean views.",
            "Spend your afternoon snorkeling or diving at the coral reefs, discovering the colorful marine life that thrives in the waters.",
            "Wrap up your day with a delightful seafood dinner, followed by an evening stroll along the beach, enjoying the sound of the waves."
          ],
          fact: "Did You Know? Unawatuna Beach is often recognized as one of the most beautiful beaches in the world, celebrated for its clear waters and vibrant marine life.",
        },
        images: ["./../../assets/unawatuna-1.jpg", "./../../assets/unawatuna-2.jpg","./../../assets/unawatuna-3.jpg"],
      },
    {
        destination: 'Udawalawe',
        destinationDetails: {
          heading:
            'Today, [clientName], prepare for unforgettable encounters with elephants in Udawalawe!',
          description: [
            "Start your day with a morning safari in Udawalawe National Park, renowned for its large herds of elephants roaming freely.",
            "Enjoy a packed lunch amidst the park, surrounded by breathtaking landscapes and wildlife.",
            "Visit the Udawalawe Elephant Transit Home to learn about the conservation efforts for orphaned elephants.",
            "Conclude your day with a relaxing evening, enjoying local cuisine at a nearby restaurant.",
          ],
          fact: "Did You Know? Udawalawe is home to over 400 species of birds, making it a paradise for birdwatchers and nature lovers.",
        },
        images: ["./../../assets/udawalawe-1.jpg", "./../../assets/udawalawe-2.jpg","./../../assets/udawalawe-3.jpg"],
      },
    {
        destination: 'Trincomalee',
        destinationDetails: {
          heading:
            'Welcome to Trincomalee, [clientName],  where history meets pristine beaches!',
          description: [
            "Begin your day with a visit to Fort Frederick, enjoying the panoramic views of the ocean.",
            "Explore the Koneswaram Temple, a stunning Hindu temple perched on a cliff.",
            "Spend your afternoon relaxing at Nilaveli Beach, known for its soft white sands and clear waters.",
            "End your day with a sunset cruise, soaking in the beauty of the coastline.",
          ],
          fact: "Interesting Fact: Trincomalee has one of the world's largest natural harbors and is steeped in history from various eras.",
        },
        images: ["./../../assets/Trincomalee-1.jpg", "./../../assets/Trincomalee-2.jpg","./../../assets/Trincomalee-3.jpg"],
      },
    {
        destination: 'Sinharaja',
        destinationDetails: {
          heading:
            'Today, [clientName],  venture into the lush rainforests of Sinharaja!',
          description: [
            "Start your day early with a guided nature walk through the UNESCO-listed Sinharaja Forest Reserve, home to endemic flora and fauna.",
            "Enjoy birdwatching as you spot rare species, including the elusive Sri Lankan blue magpie.",
            "Indulge in a packed lunch amidst nature, surrounded by the sounds of the forest.",
            "In the afternoon, explore the trails that lead to breathtaking viewpoints, capturing stunning photos of the landscape.",
            "Conclude your day with a peaceful evening at your eco-lodge, reflecting on the day's adventures."
          ],
          fact: "Did You Know? Sinharaja is one of the last remaining rainforests in Sri Lanka and is a biodiversity hotspot, boasting many endemic species.",
        },
        images: ["./../../assets/Sinharaja-1.jpg", "./../../assets/Sinharaja-2.jpg","./../../assets/Sinharaja-3.jpg"],
      },
    {
        destination: 'Sigiriya',
        destinationDetails: {
          heading:
            'Today, [clientName], get ready for an adventure at the iconic Sigiriya!',
          description: [
            "A fortress in the sky, Sigiriya rises from the jungle like a forgotten kingdom of gods. Climb the ancient rock citadel, where frescoes of celestial maidens and the paws of a colossal lion hint at a lost empire’s grandeur.",
            "But the magic of Sigiriya doesn’t end here. Just before dawn, make your way to Pidurangala, where the sunrise unveils an unspoiled panorama—Sigiriya’s shadow stretching across the misty plains.",
            "Embark on a safari through Minneriya, where herds of wild elephants roam freely against the backdrop of an ancient reservoir and is the largest elephant gathering to be found.",
            "Explore the golden caves of Dambulla, where sacred murals glow beneath flickering candlelight.",
"In the quiet village of Habarana discover what its like to live like the village folk, ride the “oruwa” make a necklace out of a lotus, ride a bullock cart and enjoy Sri Lankan cuisine at it’s heartiest.",
"discover hidden herbal and spice gardens, where the secrets of Ayurveda unfold in fragrant oils and remedies—an invitation to bring a piece of Sigiriya’s healing touch back home."

            





          ],
          fact: "Did You Know? Sinharaja is one of the last remaining rainforests in Sri Lanka and is a biodiversity hotspot, boasting many endemic species.",
        },
        images: ["./../../assets/Sigiriya-1.jpg", "./../../assets/Sigiriya-2.jpg","./../../assets/Sigiriya-3.jpg"],
      },
    {
        destination: 'Polonnaruwa',
        destinationDetails: {
          heading:
            'Welcome to Polonnaruwa, [clientName], where ancient wonders await your discovery!',
          description: [
            "Begin your day with a visit to the impressive Gal Vihara, featuring stunning rock-carved Buddha statues.",
            "Explore the ancient ruins of the Royal Palace and the Quadrangle, marveling at the architectural genius of the time.",
            "Enjoy a leisurely bike ride around the ancient city, taking in the beautiful landscapes and historical sites.",
            "End your day with a delightful dinner at a local restaurant, indulging in traditional Sri Lankan dishes.",
          ],
          fact: "Interesting Fact: Polonnaruwa served as the second capital of Sri Lanka and is a treasure trove of archaeological sites.",
        },
        images: ["./../../assets/Polonnaruwa-1.jpg", "./../../assets/Polonnaruwa-2.jpg","./../../assets/Polonnaruwa-3.jpg"],
      },
    {
        destination: 'Passikudah',
        destinationDetails: {
          heading:
            'Today, [clientName], enjoy the tranquil shores of Passikudah!',
          description: [
            "Start your day with a leisurely breakfast at your beachfront hotel, followed by some sunbathing on the soft sands of Passikudah Beach.",
            "Take a dip in the crystal-clear waters or indulge in water sports such as snorkeling or kayaking to explore the vibrant marine life.",
            "In the afternoon, visit the nearby Dutch Fort in Batticaloa for a glimpse into the region’s colonial history.",
            "Conclude your day with a delightful seafood dinner at a beachside restaurant, watching the sun dip below the horizon.",
          ],
          fact: "Interesting fact - Passikudah Beach is famous for its shallow waters, making it one of the safest swimming spots in Sri Lanka.",
        },
        images: ["./../../assets/Passikudah-1.jpg", "./../../assets/Passikudah-2.jpg","./../../assets/Passikudah-3.jpg"],
      },
    {
        destination: 'Nuwaraeliya',
        destinationDetails: {
          heading:
            'Welcome to Nuwara Eliya, [clientName], the city of eternal spring!',
          description: [
            "High in the misty hills, where tea carpets the landscape in endless green, lies Nuwara Eliya—Sri Lanka’s very own “Little England.” The air is crisp, carrying the scent of blooming roses and freshly plucked tea leaves.",
            "Start your morning with a visit to a tea plantation, where the art of tea-making unfolds before you. Here, you can taste the finest Ceylon tea and, for those enchanted by its flavor, take home a box of handpicked leaves—an experience that extends beyond the hills.",
            "En route, journey to Ramboda Waterfall, where silver cascades plunge into emerald pools, a sight as refreshing as the cool mountain air.",
            "Wander through the sprawling dairy farms that resemble the pastoral beauty of New Zealand, home to the island’s finest dairy production.",
            "Pick juicy strawberries from a hillside farm, their sweetness heightened by the cool climate. Lose yourself in the mystique of Horton Plains, where mist dances over the plains, revealing the sheer drop of World’s End.",
            "Visit the colorful , where legend whispers of Sita’s captivity in the Ramayana. With its mix of history, adventure, and breathtaking scenery, Nuwara Eliya is where nature and nostalgia entwine."

          ],
          fact: "Interesting Fact: Nuwara Eliya is often referred to as 'Little England' due to its colonial architecture and temperate climate.",
        },
        images: ["./../../assets/NuwaraEliya-1.jpg", "./../../assets/NuwaraEliya-2.jpg","./../../assets/NuwaraEliya-3.jpg"],
      },
    {
        destination: 'Negombo',
        destinationDetails: {
          heading:
            'Welcome to Negombo, [clientName], where your beach adventure begins!',
          description: [
            "After breakfast, relax on the pristine sands of Negombo Beach, enjoying the sun and sea breeze.",
            "Take a boat ride through the Hamilton Canal, witnessing the local fishing communities and their traditional lifestyle.",
            "Visit the historic Dutch Fort, where you can explore the rich colonial history of the area.",
            "In the evening, enjoy a seafood dinner at a beachside restaurant, followed by a stroll along the shore as the sun sets.",
          ],
          fact: "Interesting Fact: Negombo is often referred to as 'Little Rome' due to its many Catholic churches and vibrant culture.",
        },
        images: ["./../../assets/Negombo-1.jpg", "./../../assets/Negombo-2.jpg","./../../assets/Negombo-3.jpg"],
      },
    {
        destination: 'Mirissa',
        destinationDetails: {
          heading:
            'Welcome to Mirissa, [clientName], where stunning beaches and marine adventures await!',
          description: [
            "Begin your day with a leisurely breakfast at your beachfront hotel, followed by some relaxation on the pristine sands of Mirissa Beach.",
            "Embark on a whale-watching tour in the Indian Ocean, where you may encounter majestic blue whales and playful dolphins.",
            "Enjoy a seafood lunch at a local beach shack, tasting the freshest catch of the day.",
            "Spend your afternoon snorkeling in the vibrant coral reefs, exploring the underwater beauty and marine life.",
            "Conclude your day with a sunset stroll along the beach, savoring the breathtaking views as the sun dips below the horizon."
          ],
          fact: "Interesting Fact: Mirissa is renowned as one of the best places in the world for whale watching, particularly from November to April.",
        },
        images: ["./../../assets/Mirissa-1.jpg", "./../../assets/Mirissa-2.jpg","./../../assets/Mirissa-3.jpg"],
      },
    {
        destination: 'Kitulgala',
        destinationDetails: {
          heading:
            'Today, [clientName], prepare for an adventure in the lush landscapes of Kitulgala!',
          description: [
            "Start your day with an exhilarating white-water rafting experience on the Kelani River, navigating through thrilling rapids while surrounded by breathtaking scenery.",
            "Afterward, enjoy a hearty lunch at a local restaurant, savoring traditional Sri Lankan dishes.",
            "In the afternoon, explore the famous filming locations of the movie The Bridge on the River Kwai, and take a leisurely walk through the enchanting rainforest trails.",
            "End your day with a tranquil visit to the nearby waterfalls, where you can take a refreshing dip or simply relax in nature's embrace.",
          ],
          fact: "Did You Know? Kitulgala is not only famous for adventure sports but also serves as a biodiversity hotspot, with many unique species of plants and animals found here.",
        },
        images: ["./../../assets/Kitulgala-1.jpg", "./../../assets/Kitulgala-2.jpg","./../../assets/Kitulgala-3.jpg"],
      },
    {
        destination: 'Kandy',
        destinationDetails: {
          heading:
            'Welcome to Kandy, [clientName], where culture and natural beauty intertwine!',
          description: [
            "A city nestled between rolling hills and the shimmering Kandy Lake, Kandy is where spirituality and artistry flourish.",
            "Enter the sacred Temple of the Tooth, where the heartbeat of Buddhist tradition echoes through golden chambers.",
            "Stroll through the enchanting Royal Botanical Gardens of Peradeniya, where century-old trees and vibrant orchids create a paradise for nature lovers.",
            "Escape to the depths of Udawatte Kele Sanctuary, a lush forest once reserved for royalty, now a refuge for rare birds and hidden trails.",
"Ride up to Bahirava Kanda, where a colossal Buddha statue gazes over the city, the view as humbling as the serenity it oﬀers.",
"In this UNESCO World Heritage City, history lingers in every temple, every marketplace, every whispered story. And for those with an eye for craft, Kandy is the heart of exquisite wood carvings and timeless jewellery—hidden gems waiting to be discovered in its artisanal workshops."

          ],
          fact: "Interesting Fact: Kandy is surrounded by picturesque hills and tea plantations, making it one of the most scenic cities in the country.",
        },
        images: ["./../../assets/kandy-1.jpg", "./../../assets/kandy-2.jpg","./../../assets/kandy-3.jpg"],
      },
    {
        destination: 'Kalpitiya',
        destinationDetails: {
          heading:
            'Welcome to Kalpitiya, [clientName], where adventure and tranquility meet!',
          description: [
            "Start your day with a dolphin-watching tour in the Kalpitiya Lagoon, witnessing these playful creatures in their natural habitat.",
            "Spend the afternoon relaxing on the pristine beaches or indulging in water sports such as kite surfing or snorkeling.",
            "Explore the nearby Wilpattu National Park, if time permits, for a chance to see more wildlife.",
            "In the evening, enjoy a beach bonfire dinner, soaking in the serene atmosphere and stargazing under the clear skies.",
          ],
          fact: "Interesting Fact: Kalpitiya is renowned for its diverse marine life and is one of the best locations in Sri Lanka for kite surfing due to its favorable winds.",
        },
        images: ["./../../assets/Kalpitiya-1.jpg", "./../../assets/Kalpitiya-2.jpg","./../../assets/Kalpitiya-3.jpg"],
      },
    {
        destination: 'Jaffna',
        destinationDetails: {
          heading:
            'Welcome to Jaffna, [clientName], where unique culture and heritage await!',
          description: [
            "Begin your day by visiting the iconic Jaffna Fort, exploring its ancient walls and stunning views of the sea.",
            "Explore the colorful Hindu temples, including the Nallur Kandaswamy Kovil, rich in spiritual significance.",
            "Enjoy a traditional Jaffna lunch, sampling local dishes such as Jaffna crab curry.",
            "In the evening, take a stroll along the coast, soaking in the vibrant atmosphere and enjoying the local music.",
          ],
          fact: "Interesting Fact: Jaffna is known for its distinct Tamil culture and delicious cuisine, making it a must-visit for food lovers.",
        },
        images: ["./../../assets/Jaffna-1.jpg", "./../../assets/Jaffna-2.jpg","./../../assets/Jaffna-3.jpg"],
      },
    {
      destination: 'Hikkaduwa',
      destinationDetails: {
        heading:
          'Today, [clientName], dive into the vibrant coastal vibes of Hikkaduwa!',
        description: [
          'Start your day with a delicious breakfast at your hotel, then head straight to Hikkaduwa Beach, famous for its golden sands and lively atmosphere.',
          'Enjoy a morning of snorkeling in the Hikkaduwa Marine Sanctuary, where you can marvel at the colorful coral reefs and diverse marine life, including sea turtles and tropical fish.',
          'For lunch, indulge in fresh seafood at a beachside restaurant, relishing the local flavors whilesoaking in the sun.',
          'In the afternoon, take a glass-bottom boat ride to explore the underwater wonders without getting wet, perfect for families or those looking for a more relaxed experience.',
          // 'Conclude your day with a sunset at the beach, sipping a refreshing drink while watching thesun dip below the horizon, followed by a lively dinner at a local eatery, where you can enjoytraditional Sri Lankan cuisine.',
        ],
        fact: 'Did You Know? Hikkaduwa is renowned for its vibrant coral reefs and is a popular destination for both snorkeling and diving, making it a paradise for underwater enthusiasts.',
      },
      images: ["./../../assets/Hikkaduwa-1.jpg", "./../../assets/Hikkaduwa-2.jpg","./../../assets/Hikkaduwa-3.jpg"],
    },
    {
      destination: 'Hambanthota',
      destinationDetails: {
        heading:
          'Today, [clientName], you will discover the natural wonders of Hambanthota.',
        description: [
          'Start your day with an early morning safari at Yala National Park, where you can spot elephants, leopards, and a variety of wildlife.',
          'After your safari, head to the scenic beaches of Hambanthota for some relaxation and sunbathing.',
          'In the afternoon, visit the nearby Hambanthota Port and learn about its significance in trade and tourism.',
          'Enjoy a sunset dinner at a beachside restaurant, indulging in fresh seafood.',
        ],
        fact: 'Did You Know? Hambanthota is home to the largest port in Sri Lanka, developed to enhance trade and tourism, making it a key area for development.',
      },
      images: ["./../../assets/Hambanthota-1.jpg", "./../../assets/Hambanthota-2.jpg","./../../assets/Hambanthota-3.jpg"],
    },
    {
      destination: 'Galle',
      destinationDetails: {
        heading:
          'Today, [clientName], immerse yourself in the historical charm of Galle.',
        description: [
"The majestic fort walls guard centuries of history, while boutique cafes, hidden courtyards, and colonial mansions transport you to another era.",
"Wander past art galleries, spice markets, and antique stores before reaching the towering Galle Lighthouse, standing as a sentinel against the crashing waves.",
"Visit the Tsunami Museum, a sobering reminder of nature’s power and resilience. Discover the hidden beauty of the Moonstone Mine, one of a kind, with only Sri Lanka and South Africa holding this precious gem.",
"Stand in the quiet grandeur of the Galle Church, its history entwined with the old prison nearby.",
"And just beyond the city’s walls, a stretch of coastal paradise awaits—from the vibrant shores of Hikkaduwa to the laid-back charm of Mirissa, each beach promising a story of its own.",
        ],
        fact: 'Interesting fact - Galle Fort is one of the best-preserved examples of a fortified city built by Europeans in Asia, showcasing a unique blend of cultures.',
      },
      images: ["./../../assets/galle-1.jpg", "./../../assets/galle-2.jpg","./../../assets/galle-3.jpg"],
    },
    {
      destination: 'Ella',
      destinationDetails: {
        heading:
          'Today, [clientName], immerse yourself in the breathtaking beauty of Ella!',
        description: [
          "High in the emerald-green hills, Ella feels like a dream. Begin your morning with a sunrise trek to Mini Adam’s Peak, where the world awakens beneath you. Stand in awe at the Nine Arches Bridge, watching the train snake its way through the misty jungle—a scene straight from a storybook.",
          "Explore the fabled Ravana Cave, where echoes of the Ramayana still linger, and for the thrill-seekers, soar over valleys on Sri Lanka’s most scenic zip line. Cool oﬀ at the Ravana Pool Club, a hidden oasis where nature meets indulgence.",
          "And for those looking for something truly permanent, Ella’s tattoo studios are known for their artistry, making it a destination where travelers leave with more than just memories.",
          

          


        ],
        fact: 'Did You Know? Ella is famous for its stunning landscapes, and the train ride to Ella is often cited as one of the most scenic train journeys in the world.',
      },
      images: ["./../../assets/Ella-1.jpg", "./../../assets/Ella-2.jpg","./../../assets/Ella-3.jpg"],
    },
    {
      destination: 'Colombo',
      destinationDetails: {
        heading:
          'Today, [clientName], you will explore the vibrant city of Colombo.',
        description: [
          "Let’s step into the beating heart of Sri Lanka—Colombo. A city of contrasts, where colonial architecture meets towering skyscrapers, and the aroma of street food blends with the scent of the sea.",
          "Let’s go on a tour around the city and walk through the halls of the National Museum and uncover relics of Sri Lanka’s untold history, including the bloodstained robe of the last queen.",
          "Stroll along Galle Face Green as the sun melts into the horizon, a place once marked by gallows, now alive with laughter and street vendors selling fiery “Isso wade”.",
          "Explore the chaotic energy of Pettah, a labyrinth of markets where haggling is an art. Visit the striking Red Mosque, its candy-striped minarets standing as a symbol of Colombo’s diverse cultural tapestry.",
          "Pause at Independence Square, where history lingers in every stone, and cruise down Marine Drive, watching the waves crash against the city’s bustling edge.",
          "As night falls, dive into the city’s electric nightlife—casinos, rooftop bars, and the legendary Aluth Kade street food scene, where sizzling kottu and steaming hoppers tell a story of their own.",
          "In Colombo, the past and present dance in harmony, creating a city that never sleeps. And if you’re looking for a lasting memory, the city’s tattoo parlors are among the most sought-after, leaving travelers with more than just stories to tell."
        ],

        






        fact: 'Interesting to know - Colombo is home to the Lotus Tower, the tallest structure in South Asia, symbolizing the city’s growth and modernity.',
      },
      images: ["./../../assets/Colombo-1.jpg", "./../../assets/Colombo-2.jpg","./../../assets/Colombo-3.jpg"],
    },
    {
      destination: 'Bentota',
      destinationDetails: {
        heading:
          'Welcome to Bentota, [clientName], the water sports capital of Sri Lanka!',
        description: [
          "Golden shores stretch from Kalutara to Bentota, a paradise where the sea and sky melt into one.",
          "The rhythm of the waves calls adventure seekers from jet skiing, windsurfing, and paramotoring await those craving an adrenaline rush.",
          "Glide down the Madu River, where mangroves conceal ancient temples and fishermen balance on stilts, their shadows dancing on the water.",
          "Discover the artistic legacy of Geoﬀrey Bawa at Lunuganga, his country estate, where architecture and nature entwine in poetic harmony. Stroll through the enchanting Brief Garden, where the spirit of Bawa’s brother, Bevis, lives on in statues, hidden alcoves, and lush greenery.",
"Seek solace at Kande Vihara, a towering Buddhist temple that radiates peace, its golden Buddha visible for miles. In Bentota, every sunset is a masterpiece, every wave a whisper of the island’s soul."

          




        ],
        fact: 'Interesting Fact - Bentota is renowned for its beautiful beaches and water sports, attracting adventure enthusiasts from around the globe.',
      },
      images: ["./../../assets/Bentota-1.jpg", "./../../assets/Bentota-2.jpg","./../../assets/Bentota-3.jpg"],
    },
    {
      destination: 'Arugambay',
      destinationDetails: {
        heading:
          'Today, [clientName], unwind at the stunning beaches of Arugambay!',
        description: [
          "Start your day with a relaxing morning on the beach, soaking up the sun and enjoying the waves.",
          "Try your hand at surfing or simply enjoy the laid-back atmosphere of this popular beach destination.",
          'In the afternoon, explore the nearby lagoons and take a boat ride to witness the localwildlife.',
          'Conclude your day with a beachside dinner, savoring fresh seafood while listening to the sound of the waves.',
        ],
        fact: 'Did You Know? Arugambay is known for its excellent surf breaks, attracting surfers from around the globe.',
      },
      images: ["./../../assets/Arugambay-1.jpg", "./../../assets/Arugambay-2.jpg","./../../assets/Arugambay-3.jpg"],
    },
    {
      destination: 'Anuradhapura',
      destinationDetails: {
        heading:
          'Today, [clientName], step into the ancient city of Anuradhapura, a UNESCO World Heritage Site!',
        description: [
          "Start your day by visiting the sacred Sri Maha Bodhi tree, one of the oldest trees in the world.",
          "Explore the ancient stupas and archaeological sites, learning about the rich history of the Sri Lankan civilization.",
          'Enjoy a picnic lunch amidst the ruins, surrounded by serene landscapes.',
          'Conclude your day with a cultural show that highlights the traditional arts of Sri Lanka.',
        ],
        fact: 'Did You Know? Anuradhapura was the capital of Sri Lanka for over a millennium and is filled with fascinating ancient history.',
      },
      images: ["./../../assets/Anuradhapura-1.jpg", "./../../assets/Anuradhapura-2.jpg","./../../assets/Anuradhapura-3.jpg"],
    },
  ];

  public hotelListArray = [

    { hotelName: "Cinnomon grand", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "Cinnamon life", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "Kingsbury", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "ITC Ratnadeepa", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "Shangri-lah", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "Taj Samudra", destination: "Colombo", roomCount: 70, starCategory: 5 },
    { hotelName: "Granbell", destination: "Colombo", roomCount: 65, starCategory: 4 },
    { hotelName: "Fairway colombo", destination: "Colombo", roomCount: 65, starCategory: 4 },
    { hotelName: "Movenpic", destination: "Colombo", roomCount: 65, starCategory: 4 },
    { hotelName: "Cinnamon Lakeside", destination: "Colombo", roomCount: 65, starCategory: 4.5 },
    { hotelName: "Colombo city hotel", destination: "Colombo", roomCount: 55, starCategory: 3 },
    { hotelName: "Raddison Colombo", destination: "Colombo", roomCount: 55, starCategory: 3 },
    { hotelName: "Steuarts", destination: "Colombo", roomCount: 55, starCategory: 3 },

    { hotelName: "Jetwing lagoon", destination: "Negombo", roomCount: 55, starCategory: 5 },
    { hotelName: "Jetwing Beach", destination: "Negombo", roomCount: 55, starCategory: 5 },
    { hotelName: "Heritance Negombo", destination: "Negombo", roomCount: 55, starCategory: 5 },
    { hotelName: "Sooriya Resort", destination: "Negombo", roomCount: 55, starCategory: 5 },
    { hotelName: "Jetwing Sea", destination: "Negombo", roomCount: 50, starCategory: 4 },
    { hotelName: "Jetwing Blue", destination: "Negombo", roomCount: 50, starCategory: 4 },
    { hotelName: "Regal Réseau Hotel & Spa", destination: "Negombo", roomCount: 50, starCategory: 4 },
    { hotelName: "Regenta Arie Lagoon", destination: "Negombo", roomCount: 50, starCategory: 4 },
    { hotelName: "Camelot beach", destination: "Negombo", roomCount: 45, starCategory: 3 },

    { hotelName: "Grand Serendib Hotel", destination: "Kandy", roomCount: 50, starCategory: 4.5 },
    { hotelName: "Earls Regency", destination: "Kandy", roomCount: 50, starCategory: 5 },
    { hotelName: "Golden Crown", destination: "Kandy", roomCount: 50, starCategory: 5 },
    { hotelName: "Grand Kandyan Hotel", destination: "Kandy", roomCount: 50, starCategory: 5 },
    { hotelName: "Cinnomon citadal", destination: "Kandy", roomCount: 60, starCategory: 4 },
    { hotelName: "Amaya Hills", destination: "Kandy", roomCount: 60, starCategory: 4 },
    { hotelName: "Earls Regent", destination: "Kandy", roomCount: 60, starCategory: 4 },
    { hotelName: "Fox Kandy", destination: "Kandy", roomCount: 60, starCategory: 4 },
    { hotelName: "Oak ray", destination: "Kandy", roomCount: 55, starCategory: 3 },
    { hotelName: "Thilanka", destination: "Kandy", roomCount: 55, starCategory: 3 },
    { hotelName: "Topaz", destination: "Kandy", roomCount: 55, starCategory: 3 },
    { hotelName: "Melheim", destination: "Kandy", roomCount: 55, starCategory: 3 },

    { hotelName: "Golden Ridge", destination: "Nuwaraeliya", roomCount: 25, starCategory: 5 },
    { hotelName: "Grand Hotel Nuwara Eliya", destination: "Nuwaraeliya", roomCount: 25, starCategory: 5 },
    { hotelName: "Araliya Green City", destination: "Nuwaraeliya", roomCount: 25, starCategory: 5 },
    { hotelName: "Heritance Tea Factory", destination: "Nuwaraeliya", roomCount: 25, starCategory: 5 },
    { hotelName: "Mirage Kings cottages", destination: "Nuwaraeliya", roomCount: 30, starCategory: 4 },
    { hotelName: "Galway Heights", destination: "Nuwaraeliya", roomCount: 30, starCategory: 4 },
    { hotelName: "Araliya Green Hills", destination: "Nuwaraeliya", roomCount: 30, starCategory: 4 },
    { hotelName: "Jetwing St.Andrews", destination: "Nuwaraeliya", roomCount: 30, starCategory: 4.5 },  
    
    { hotelName: "98 Acres", destination: "Ella", roomCount: 25, starCategory: 5 },
    { hotelName: "Ekho Ella", destination: "Ella", roomCount: 25, starCategory: 5 },
    { hotelName: "Hide Ella ", destination: "Ella", roomCount: 25, starCategory: 5 },
    { hotelName: "Ella Flower Garden", destination: "Ella", roomCount: 30, starCategory: 4 },
    { hotelName: "Heavens Edge by EHI", destination: "Ella", roomCount: 30, starCategory: 4 },
    { hotelName: "Chill Ville", destination: "Ella", roomCount: 30, starCategory: 4 },
    { hotelName: "Ella Flower Garden", destination: "Ella", roomCount: 20, starCategory: 3 },
    
    { hotelName: "Jetwing Lighthouse", destination: "Galle", roomCount: 50, starCategory: 5 },
    { hotelName: "Radisson Blue", destination: "Galle", roomCount: 50, starCategory: 5 },
    { hotelName: "Le Grand", destination: "Galle", roomCount: 50, starCategory: 5 },

    { hotelName: "Shri Sharavi Beach Villas", destination: "Mirissa", roomCount: 40, starCategory: 5 },
    { hotelName: "Mandara Resort ", destination: "Mirissa", roomCount: 40, starCategory: 4 },
    { hotelName: "Triple 'O' Six ", destination: "Mirissa", roomCount: 40, starCategory: 4 },
    { hotelName: "Mirissa Hills`", destination: "Mirissa", roomCount: 40, starCategory: 3 },
    { hotelName: "The Spice House ", destination: "Mirissa", roomCount: 40, starCategory: 3 },

    { hotelName: "Marriot Weligama", destination: "Weligama", roomCount: 40, starCategory: 5 },
    { hotelName: "Cape Weligama", destination: "Weligama", roomCount: 40, starCategory: 5 },
    { hotelName: "W15 Weligama", destination: "Weligama", roomCount: 40, starCategory: 4 },
    { hotelName: "Weligama Bay Resort", destination: "Weligama", roomCount: 40, starCategory: 4 },
    { hotelName: "Twenty-Two Weligama ", destination: "Weligama", roomCount: 40, starCategory: 3 },

    { hotelName: "Araliya Unawatuna ", destination: "Unawatuna", roomCount: 40, starCategory: 5 },
    { hotelName: "Coco Bay", destination: "Unawatuna", roomCount: 30, starCategory: 4 },
    { hotelName: "Agnus Unawatuna", destination: "Unawatuna", roomCount: 30, starCategory: 4 },
    { hotelName: "Villa Thawthisa", destination: "Unawatuna", roomCount: 30, starCategory: 4 },
    { hotelName: "Amor beach", destination: "Unawatuna", roomCount: 30, starCategory: 3 },
     
    { hotelName: "Bentota Beach", destination: "Bentota", roomCount: 40, starCategory: 5 },
    { hotelName: "Eden Beruwala", destination: "Bentota", roomCount: 40, starCategory: 5 },
    { hotelName: "Citrus", destination: "Bentota", roomCount: 40, starCategory: 5 },
    { hotelName: "Thaala Bentota", destination: "Bentota", roomCount: 40, starCategory: 4 },
    { hotelName: "Villas Wadduwa", destination: "Bentota", roomCount: 40, starCategory: 4 },
    { hotelName: "NH Ceysands", destination: "Bentota", roomCount: 40, starCategory: 4 },
    { hotelName: "Club Bentota ", destination: "Bentota", roomCount: 40, starCategory: 3 },
    
    { hotelName: "Riff", destination: "Hikkaduwa", roomCount: 40, starCategory: 5 },
    { hotelName: "Crystal Sands", destination: "Hikkaduwa", roomCount: 40, starCategory: 5 },
    { hotelName: "Citrus", destination: "Hikkaduwa", roomCount: 40, starCategory: 4 },
    { hotelName: "Hikka Tranz", destination: "Hikkaduwa", roomCount: 40, starCategory: 4 },
    { hotelName: "Coral rock by Bensei", destination: "Hikkaduwa", roomCount: 40, starCategory: 3 },
    
    { hotelName: "Cinnamon Wild", destination: "Yala", roomCount: 40, starCategory: 5 },
    { hotelName: "Jetwing Yala", destination: "Yala", roomCount: 40, starCategory: 5 },
    { hotelName: "Hilton Yala", destination: "Yala", roomCount: 40, starCategory: 5 },
    { hotelName: "Chaarya", destination: "Yala", roomCount: 30, starCategory: 4 },
    { hotelName: "Rain tree", destination: "Yala", roomCount: 25, starCategory: 3 },

    { hotelName: "Shangri-lah Hambanthota", destination: "Hambanthota", roomCount: 45, starCategory: 5 },
    
    { hotelName: "Trinco Blu", destination: "Trincomalee", roomCount: 45, starCategory: 5 },
    { hotelName: "Amaranthe ", destination: "Trincomalee", roomCount: 45, starCategory: 5 },
    { hotelName: "Uga Jungle Beach", destination: "Trincomalee", roomCount: 45, starCategory: 5 },
    { hotelName: "Nilaveli Beach Hotel", destination: "Trincomalee", roomCount: 45, starCategory: 3 },

    { hotelName: "Anantaya Resort and Spa ", destination: "Pasikuda", roomCount: 20, starCategory: 5 },
    { hotelName: "Amethyst ", destination: "Pasikuda", roomCount: 20, starCategory: 5 },
    { hotelName: "Uga Bay", destination: "Pasikuda", roomCount: 20, starCategory: 5 },
    { hotelName: "Amaya Pasikuda", destination: "Pasikuda", roomCount: 20, starCategory: 4 },

    { hotelName: "Jetwing Surf", destination: "Arugambay", roomCount: 15, starCategory: 5 },
    { hotelName: "Blue wave", destination: "Arugambay", roomCount: 15, starCategory: 4 },


    { hotelName: "Jetwing Jaffna", destination: "Jaffna", roomCount: 30, starCategory: 5 },
    { hotelName: "Fox Resort", destination: "Jaffna", roomCount: 30, starCategory: 4 },
    { hotelName: "Heritage Jaffna", destination: "Jaffna", roomCount: 30, starCategory: 4 },

    { hotelName: "Blue Whale", destination: "Kalpitiya", roomCount: 50, starCategory: 4 },

    { hotelName: "Kandalama", destination: "Dambulla", roomCount: 45, starCategory: 5 },
    { hotelName: "Lodge", destination: "Dambulla", roomCount: 45, starCategory: 5 },
    { hotelName: "Amaya Lake Dambulla", destination: "Dambulla", roomCount: 45, starCategory: 4 },
    { hotelName: "Hotel Sigiriya", destination: "Dambulla", roomCount: 45, starCategory: 4 },
    { hotelName: "Tropical Life Resort & Spa Dambulla", destination: "Dambulla", roomCount: 45, starCategory: 4 },
    { hotelName: "Sigiriya village", destination: "Dambulla", roomCount: 45, starCategory: 3 },
    { hotelName: "Sigiriana Resort by Thilanka", destination: "Dambulla", roomCount: 45, starCategory: 3 },
  
    { hotelName: "Uga Ulagalla", destination: "Anuradhapura", roomCount: 40, starCategory: 5 },
    { hotelName: "Lake forest", destination: "Anuradhapura", roomCount: 40, starCategory: 4 },
    { hotelName: "Rajarata", destination: "Anuradhapura", roomCount: 40, starCategory: 3 },

    { hotelName: "Ekho Hotel ", destination: "Polonnaruwa", roomCount: 20, starCategory: 4 },
    { hotelName: "Sudu Araliya ", destination: "Polonnaruwa", roomCount: 20, starCategory: 3 },

    { hotelName: "Dickwella Resort and Spa", destination: "Dickwella", roomCount: 35, starCategory: 4 },

    { hotelName: "Anasa Wellness Resort", destination: "Bandarawela", roomCount: 25, starCategory: 5 },
    { hotelName: "The Farm Resort", destination: "Bandarawela", roomCount: 25, starCategory: 4 },
    { hotelName: "Melheim Resort and Spa Haputale", destination: "Bandarawela", roomCount: 25, starCategory: 4 },
    { hotelName: "The Argyle - Luxury Boutique Hotel", destination: "Bandarawela", roomCount: 25, starCategory: 4 },
    { hotelName: "Bandarawela Hotel", destination: "Bandarawela", roomCount: 25, starCategory: 3 },

  ]

  public destinations = [
    'Yala',
    'Wilpattu',
    'Unawatuna',
    'Udawalawe',
    'Trincomalee',
    'Sinharaja',
    'Sigiriya',
    'Polonnaruwa',
    'Passikudah',
    'Nuwaraeliya',
    'Negombo',
    'Mirissa',
    'Kitulgala',
    'Kandy',
    'Kalpitiya',
    'Jaffna',
    'Hikkaduwa',
    'Hambanthota',
    'Galle',
    'Ella',
    'Colombo',
    'Bentota',
    'Arugambay',
    'Anuradhapura'
    ];  
    
  public durations = ['1 Day', '3 Days', '7 Days', '14 Days', '18 Days', '24 Days'];
  public mealTypeOptions = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'half_board', label: 'Half Board' },
    { value: 'full_board', label: 'Full Board' },
    { value: 'all_inclusive', label: 'All Inclusive' }
  ];
}
