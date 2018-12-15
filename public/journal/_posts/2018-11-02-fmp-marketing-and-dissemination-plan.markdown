---
layout: report
comments: false
title:  Marketing & Dissemination Plan
tagline: Falmouth University | MA Creative App Development | Final Major Project | PlantIO | November 2019 | Phillip David Penny | PP196285
date:   2018-10-02 12:00:00 +0000
categories: FMP
---

<h2 class="main text-center">Plant<strong>IO</strong></h2>
<img src="/media/ruuts__tech.svg" style="width: 75vw; margin-left: calc(12.5vw - 10mm)" />
<h3 class="text-center">Grow perfect food, automatically.</h3>

## Product Overview

### Value Proposition

> PlantIO allows you to grow perfect food for your family all year round at a low cost to you and the environment, completely automatically.

### Summary
<div class="flex">
<p><strong>In the developed countries of the modern world, we are now eating a wider variety of foods than ever before, with incredible accessibility. However, this global transportation of food comes at a cost, creating issues which society is becoming more informed about, such as the quality of our food, its true origins and what it really means to be organic, and what impacts this process is having on the environment.</strong></p>

<p>The fact is, it is far easier to have a seemingly limitless supply of food at any time of the year than it is to try to grow our own. Time, space, and our attention spans are at an ever increasing premium. Food is one of the 3 key elements all humans need to survive, along with warmth and shelter, and it deserves more of our attention. We can do better, and here at Ruuts, we have done better.</p>
</div>

#### Description

**PlantIO is a fully automated system for controlling and managing all aspects of plant growth. Controlled from pre-selected recipes, it provides for all your plants' needs until it comes to fruition, only contacting the user in the event of an emergency or when the plant is ready to be harvested.**

#### Features

PlantIO provides complete control of plant growth. Watering and feeding, light exposure, and temperature are all delivered to exact specifications based on your starting seed. Using our 'recipes' we do all the hard work for you.

##### Three steps to success

<div class="flex">
<div><strong>Connect</strong><br />Simply connect your PlantIO system with your account via wi-fi, select the recipe you desire; place your seeds into your system and the germination phase then begins automatically.</div>
<div><strong>Select</strong><br />The PlantIO app will monitor the seeds as they develop into sproutlings, and when ready, PlantIO will instruct you to select the superior sproutling and remove the others.</div>
<div><strong>Collect</strong><br />The PlantIO app will now monitor the complete growth of the plant and let you know when it is time to pick the final fruits.</div>
</div>

The PlantIO app monitors all aspects of the plants' health and adjusts the system as required, only sending you notifications if emergency situation arise. Of course, users can check the status of their plant at any time using the real-time status screen.

##### Freedom of growth

This fully automated growing can be adjusted to give you back some control; we provide two extra kinds of recipes to live alongside the fully automatic variety.

<div class="flex">
<div><strong>Automatic</strong><br />Simply connect your PlantIO system with your account via wi-fi, select the recipe you desire, place your seeds into your system and the germination phase then begins automatically.</div>
<div><strong>Semi-automatic</strong><br />Semi-automatic recipes work in the same way as automatic recipes, however, they notify you when it's time to feed, water or give light to your plant rather than doing it automatically. You must then use the app to control the grow system yourself, in real time.</div>
<div><strong>Manual</strong><br />Finally, we have manual recipes which provide no instructions whatsoever; it is up to you to decide how and when to care for your plant. This can be set up ahead of time or managed on the fly, just as you would a normal plant.</div>
</div>

##### Evolutional database

All plant data is recorded so you can save any recipes which work particularly well and share them  with the Ruuts community, this will help to evolve our recipes over time for growing food to specific requirements; the biggest tomato, the crunchiest lettuce, the best-looking strawberries.

#### Technical information

##### Software
For the technology stack, a Progressive Web Application (PWA) was chosen to ensure maximum accessibility, providing a cross-platform solution from a single codebase, and easy updating of software. Users can check their plant status at any point regardless of the device, so long as they can access a web browser. Each PlantIO system comes with its own Raspberry Pi Zero W allowing it to connect wirelessly to the internet, and Arduino controllers are used to turn the PlantIO signals into actions. The Johnny-Five JavaScript library will be used to communicate with the plant in real-time [[1]](#ref). There is also the question of maintenance; as with any machine with moving parts, users will need to perform basic periodic checks on their systems. This maintenance procedure will be designed into the system, perhaps using sensors to check that the user has inspected the required components and cleaned where necessary.

##### Hardware
The PWA communicates with the PlantIO hardware, which takes the form of a custom-built blackout enclosure which extends to any plant size and ensures complete separation of light from plant roots. LED lights are used for complete control of lumen levels and the wavelength at extremely low energy levels and negligible heat creation. An atomiser nozzle delivers exacting amounts of feed at the optimum atomic size to enable maximum nutrient uptake from the plant's roots. Finally, a thermostatic heater element maintains the optimum temperature of the enclosure 24/7 with minimal power usage. 90% of the components of the PlantIO system can be 3D printed if replacements or additional modules are required - meaning the home user can expand at very little cost.

##### Dataware
The databank of recipes will specify the exact feed, light and temperature requirements for each plant, delivering perfect day/night cycles and rest periods. Secure integration with a 3rd party cloud-hosted database will provide the storage and access controls across a content-delivery network.

### Audience
> Millennial families looking to appear socially aware and improve their diets with minimal effort through the use of technology.

#### Millennials
<img src="/media/persona__millenial-man-mark.jpg" style="float: left; width: 15em; margin: 0 1em 2em 0" />
Millennial man Mark is happily married with a young family and a busy schedule. Mark is aware of the environment, aware of what we eat, and aware of our impression on others. Mark sees the popularity behind lifestyle choices and provides an opportunity for marketing purposes for our product. Defined as a first-time passive user of the system, he will be looking for results and will use the system in the fully automatic mode to fit in with his busy schedule. Should he see success with the system he is likely to subscribe to the paid plan, he is happy to use his disposable income to improve the quality of life for his family.
<table class="channels">
<tr>
<td>Frequency</td><td class="selected">First-time</td><td>Intermediate</td><td>Casual</td><td>Power</td>
</tr>
<tr>
<td>Engagement</td><td class="selected">Passive</td><td>Active</td><td>Advocate</td><td></td>
</tr>
<tr>
<td>Usage</td><td>Enthusiast</td><td class="selected">Prosumer</td><td>Professional</td><td></td>
</tr>
<tr>
<td>Vertical Specific</td><td>Hobby</td><td class="selected">Home</td><td>Business</td><td></td>
</tr>
<tr>
<td>Channel</td><td>Social</td><td>Inbound</td><td class="selected">Traditional Ads</td><td></td>
</tr>
<tr>
<td>Sales Funnel Position</td><td class="selected">High</td><td>Middle</td><td>Low</td><td></td>
</tr>
<tr>
<td>Financial Model</td><td>Free</td><td class="selected">Freemium</td><td>Paid</td><td>Enterprise</td>
</tr>
<tr>
<td>Handling User Needs</td><td class="selected">Automatic</td><td>Semi-automatic</td><td>Manual</td><td>AI</td>
</tr>
</table>

#### Other segments

**Generation Z:** Youth Yasmin, part of "Generation Z" is in her early twenties and is an avid gym goer and clean eater. She loves to travel, loves animals and is an active blogger. Yasmin provides a huge opportunity for free marketing - the Instagram generation are all too eager to show off their exploits to their followers, particularly when it comes to health and their bodies. What can be healthier than the purest, sustainable food possible? Unlikely to create revenue through the subscription model, Yasmin will require a workable free setting to continue using the product. We expect Yasmin to want increased product engagement so will be using the semi-automatic recipes and documenting her every interaction via social media. Strong app branding is important for all the screen time Yasmin will generate. She will appreciate the fine UI details such as subtle animations, and a fast, smooth experience.

**Environmentalists:** Environmentalist Ed is highly aware of the damage the human race is doing to the planet and seeks to promote a better way of living in all that he does. He rides a bike everywhere, and people know it. He recycles everything in his home, and people know it. One of our power users during the first phase, Ed will be an advocate for the system, preaching to his peers about the massive benefits it brings to society and the health of the planet. Ed will provide plenty of product feedback, and use his system religiously, yet will push for freedom of use and likely not contribute much in the way of direct revenue. Ed's value is in his evangelic promotion of the idea and rigorous testing.

**Small Business Owners (stage 2):** Chef Cheryl is a small food business owner, serving vegan food from her converted van. Though forming the bulk of phase 2, it is important to connect with Cheryl during the first product phase, she needs to believe that this is a product that can take her business to the next level. It needs to provide economic benefit, as well as seamless operation. Cheryl will likely upgrade to a paid installation to suit her needs, and demand A.I. technology from her recipes to ensure she is growing the best possible food for her business needs.

## Go-To-Market (GTM) Strategy

<div class="flex" style="align-items: center">
<img src="/media/ruuts__model.svg"  style="width: 100%" >
<blockquote><p>A four-stage business model initially targeting the consumer market, reaching into small businesses and finally entering the industrial market. Space is the final frontier.</p></blockquote>

</div>

### Business Plan



#### Strategy
[//]: # (The first key business growth driver is strategy. Every fast-growing business starts with an idea, which turns into the business plan. The strategy might revolve around bringing a new product to market, or be based on an existing product or service applied or delivered in a new way. Accelerated growth can be driven by developing more new products, and/or expanding into new markets.)

**Phase 1:** Ruuts will launch directly into the first phase focusing on the consumer market. Initially, revenue will be generated through the sale of systems and equipment for occasional, home-based use, accompanied by the corresponding phase 1 of the PlantIO app. During this phase, everything will be open source in line with the values of the company; individuals will be free to use our code and create their own systems. The consumer will serve as a major source of promotion for the company during this phase and help Ruuts gain traction within the press and social media.

The controlling application will be free to use for the first 3 harvests, giving the user enough time to benefit from the technology and have it form a part of their lifestyle. After this period, a subscription model will be implemented, charging monthly operating costs if the user wishes to have the full version of the software; otherwise, they will be limited in some way, either by functionality limits or advertisements, yet to be determined.

Continuous investment will need to be made into promotion, online presence, and product development as issues are ironed out and consumer recommended enhancements are implemented. In addition to this, product development will need to be made into preparing for phase 2.

**Phase 2:** Having gained stability and popularity within the consumer market, we will shift a portion of our focus into business applications; investment will now concentrate on semi-bespoke installs for small businesses in return for promotion. Using our modular designs, this approach can also be adopted by consumers to set up their own larger systems. The app will be further developed to monitor multiple connected systems and help businesses create growing plans to maximise daily yields.

**Phase 3:** With exposure to small business applications will come interest from large-scale industrial applications; supermarkets are an obvious candidate for bespoke installation of bolt-on 'Ruuts-Farms' on their premises. Investment during this phase will be into a large-scale demonstration system providing free produce for charity and food banks, doubling as a live exhibition for potential investors. The app will be developed in the areas of security and scalability, with careful assessment of the back-end services to manage big plant data.

**Phase 4:** The fourth and final phase of the business will focus on extreme environments such as polar, desert, and space, with the company heavily investing into development in these areas to become a world leader in this market segment. The development of a cost-effective, self-sustaining container farm that can be deployed in areas of need will be the first focus.

#### The Ruuts Team & Operations

[//]: # (Alongside strategy, people and operations represent another key growth driver. Companies that grow fast often have a key individual driving them forward – the person with the initial vision, energy and determination to step out along the entrepreneurial road. However, growing a business fast relies on teamwork. Entrepreneurs need to draw around them a group of individuals who they can trust, who share the same dreams and apply the same values when trying to bring that dream alive. On the operations side, a growing business needs to develop an appropriate infrastructure and keep adjusting that infrastructure as the business grows. This involves IT systems, processes, even basic office space. If you are growing fast, will you have enough room for your expanded team in six months’ time? And as the business grows, new operational systems may need to be developed to maintain efficiency.)

<div class="flex" style="align-items: center">
<blockquote><p>Ruuts is powered by 3 founders all of whom are key individuals with unique, complementary skills.</p></blockquote>
<img src="/media/ruuts__team--combo.svg" style="height: 45vw" />

</div>

We combine the perfect mix of an experienced product designer in myself, with over 15 years of professional design experience, focusing on the digital side of the business, developing the software and social strategy; a horticulture expert in Brett Bartlett with a vast knowledge of plant growth characteristics and an aeroponic research programme behind him, focusing on developing optimum plant recipes to ensure a quality end product; and electronics engineer Ashley Banner who specialises in designing electronic systems with off-the-shelf components to create bespoke products, essentially taking Ruuts designs and turning them into a feasible, realistic tangible product; focusing on developing the hardware systems.

<div class="flex">
<p>Ruuts have successfully worked together on a separate startup - Carbon Candy <a href="#ref">[3]</a> - producing bespoke carbon fibre and more recently 3D printed components for various industries, focusing on the drone industry of late, with a multi-page publication in Drone Magazine. <a href="#ref">[4]</a></p>
<p>Carbon Candy was designed as a stepping stone into Ruuts, enabling us to acquire the skills necessary to build our own system using advanced materials, as well as learning the skills required to work together and form a successful business.</p>
</div>

#### Funding
[//]: # (Clearly no business can grow fast without the right funding, and so capital is another key growth driver. Finding the right form of financial backing, and at the right time, is critical. That’s not to say that high growth can only be achieved with large amounts of funding, or that high funding levels will automatically result in fast growth.)

**Ruuts are looking for £250,000 of funding to take the product to market.** [[5]](#ref)
This will cover salary for all 3 founders over the course of 15 months of product development, starting in January 2019 after the creation of the MVP. It will also cover investment in an initial stock of 100 PlantIO units.

#### Transactions
[//]: # (Transactions are also important for driving growth. These could include alliances in the form of strong supplier relationships. In addition, as the business grows, mergers and acquisitions may offer the potential to achieve a step change in growth, or facilitate entry into a new geographical market or a complementary service area.)

**Several opportunities are available to increase conversions and sales.** Potential relationships with established seed suppliers such as Mr Fothergills can add a reputability to the business in its' early days. The opportunity to create a charity serving global hunger can further strengthen our reputation.

#### Risk & Reporting
[//]: # (Last but not least among the five business growth drivers comes risk and reporting. As the business grows, so it is essential to establish controls to manage the inevitable risks that accompany rapid business development. The reporting element is also important for growing companies, both internally and externally. Management teams need to communicate clearly between themselves, to understand business performance and delivery against future targets. Similarly, the company needs to report effectively to external investors and other stakeholders to maintain their ongoing confidence and support.)

**Automation is the key to scaling this business, both on the digital side and the hardware side.** The consumer market should be able to essentially self-moderate the online community through earned controls, while back-end services such as Digital Ocean [[6]](#ref) can automatically scale to demand. E-commerce will be hosted on Shopify [[7]](#ref) with the potential to expand onto higher tiers as the business grows.

#### Key Performance Indicators

**Year 1:** Initial product development will offset the revenue from early sales and subscriptions as we respond to user feedback and solidify our offering. Investment will also go into maintaining an active online brand that is engaged with users and responds to the social environment. Product development will be focused on optimising the application with its current feature-set, and developing the system in preparation for small to medium business installs.

**Year 2:** Sales in the business segment will again be offset by further product development and marketing of the business, any profits being re-invested into the company to build a fully working bespoke demonstration system.

**Year 3:** We expect to provide a slight return on investment with the launch of our complete system which will truly cater for all market segments and allow us to approach larger companies for bespoke installs and custom management solutions.

Goal | KPI | Year 1 Target | Year 2 Target | Year 3 Target
---- | --- | ------------- | ------------- | -------------
Mass adoption of consumer unit | Number of sales of the PlantIO system | 100 | 500 | 5000
Active, growing knowledge base & online community | Number of monthly active users (MAU) on forum | launch | 50 | 500
Integration into SMB market | Number of custom installs | 1 | 10 | 50

#### Strategic differentiators

The PlantIO strategy is differentiating from the competition in two main areas&mdash;it's pricing model and the product offering. Early calculations place the unit at a highly competitive average price point of £200, however, the modular approach will provide numerous setup options to cater for a much wider range of budgets.

The flexibility of our system raises it above that of its nearest competitor's Click & Grow in that it can grow a vast array of crops with less waste and higher efficiency. As we begin to move into phase 2 we will also hold a distinct advantage over FarmBot in that our system provides much greater flexibility combined with extremely simple setup and the lack of a requirement for soil.

#### Market Behaviours

**Awareness:** The first of four main market behaviour categories [[8]](#ref), awareness is generated at first through our initial press release and advertising campaigns, both online and via real demonstrations across the country

**Preference:** The market then proceeds to develop a preference by comparing our product to the competition&mdash;how do we compare to being able to buy fruit at 3 am in a 24-hour local supermarket?

**Engagement:** The third phase is engagement, hooking the user in and convincing them to commit. this pre-purchase decision will be attacked from a multitude of angles&mdash;from information overload in our documentation, community-led advocacy, interactive onboarding and strong, impactful messaging.

**Advocacy:** Referrals by word of mouth, we are focusing on pushing a community-based approach for collective groups of advocates to impress upon the importance of our product to local communities.

### Product Strategy
{: .page-break}

[//]: # (This section of the plan identifies the key products you will launch in your cloud portfolio, along with any bundling plans, special promotions, or other attachment strategies that will help you sell the products—including upselling and cross-selling to both new and existing customers. Any specifics you can include about differentiators between your offerings and those of your competitors will help you build your sales messaging as you progress further into the launch.)

#### Special Promotions / Attachment strategies

<div class="flex" style="align-items: flex-start">
<img src="/media/action-against-hunger.svg" style="width: 25vw; margin: 1em 1em 0 0;" />
<p style="padding-top: 1.75em;">Forming a partnership with a charity such as Action Against Hunger <a href="#ref">[9]</a> will help align our values and enable the customer to feel good knowing that purchasing from us immediately helps the fight against hunger, even before our industrial units are released.</p>
</div>

#### Up-sells, Cross-sells & Bundles

Upsells are a key part of our product strategy; the user can purchase the base system at minimal cost and upgrade virtually all of the components depending on their budget and requirements. Cross-sells include offering heirloom seed packs with every purchase as well as recommended plant feeds. Similarly, bundles will play an important role in our product strategy. Essentially combining upgrades from each component into its own bundle along with seed packs and feed.

Component | Base | Upsell 1 | Upsell 2
---- | --- | ------------- | -------------
Feed | Basic mister | Low-pressure nozzle | High-pressure atomizer
Light | LED | Multi-color LED | Low-power LED
Temperature | Basic thermostatic element | Min-max thermostat | Low energy thermostat
Enclosure | Basic fabric skeleton | Modular enclosure | AR Enclosure

####  Differentiation compared to competitors

There is a huge gap in the market for our product; our competitors either cannot match our technology, or our pricing models, or our scale.

Small hobbyist programs such as PlantFriends [[10]](#ref) are free, but are not suited for substantial, regular food growth and require significant user investment to set them up and get them working. FarmBot, our nearest competitor, have an attractive and unique application, however, they offer an entry-level option of over £2000, yet still requires outdoor growing space and uses dated farming methods. AeroFarms are a huge player and serve the industry with prices starting from tens of thousands of dollars. They use advanced technology and are really focusing on the top end of the market [[11]](#ref).
The Sahara Forest Project is at the very top end of the industry, setting standards in growing in extreme conditions and are a serious competitor for phase 4 of our business model only [[12]](#ref).

There is an opportunity for low cost, low management convenient home growing using advanced techniques. All of the systems around the pricing model for our phase 1 users are vastly overpriced considering what they offer; for example, the £100 KRYDDA/VÄXER from IKEA is simply a two-tier stand with slots to grow 16 small plants or approximately 200 lettuces from the supermarket [[13]](#ref). The Click & Grow Smart Garden 9 which boasts NASA technology in the form of smart soil, provides slots for 9 small plants at the whopping cost of £200, or 400 cucumbers.
The closest competitor with an app is the Flower Care Smart Monitor [[14]](#ref), which is nicely designed and professionally presented with strong branding, including a well thought out UX, however, it provides no automation and utilises none of the agricultural advancements the PlantIO system is built around, focusing on flowers and single-use systems.
The competitor analysis has shown that the PlantIO system provides multiple USP's and will target an underserved segment of the market.

**Quality:** By providing the plant with the exact conditions needed for growth we can produce perfect quality fruit every time, maximising the potential of the seeds. FarmBot cannot control the environment, and Click & Grow cannot control the feed in the same advanced manner.

**Trust:** Know exactly what you are growing by choosing the seeds yourself, thus giving you 100% control over the food you are eating. Click & Grow runs from its own proprietary seed packs.

**Environmental:** The clean, secure, enclosed environment provided by the system negates the need for any pesticides or fertilisers; pests and disease are no longer an issue. Outdoor systems such as FarmBot cannot say the same. Click & Grow also creates waste through the unnecessarily complex packaging of its "Plant Pods". Aeroponics allows us to grow using over 90% less land and water.

**Convenience:** Using aeroponics allows us to grow food up to 30% faster;  and, by combining multiple systems and using our advanced scheduler, you can effectively remove the wait for growth after the initial harvest. FarmBot essentially uses traditional growing techniques, whilst also requiring a sizeable square footage of outdoor land, which also brings in the factor of seasons dictating growing patterns.

**Community:** Regardless of how you choose to connect to the internet, PlantIO is there for you. The PWA doesn't care if you have an iPhone, an Android, or a Lynx text browser. Everything is monitored by the accompanying PlantIO application to provide constant, real-time feedback to the user about their plant and serve as a community for sharing growth recipes, providing feedback for further product development, and giving control to the user to grow their plant their own way using our semi-automatic and manual recipe settings.

### Channel Strategy

[//]: # (This is where you identify the primary channels that you’ll use—both to sell your products and to educate and support your customers—along with the resources, training, and incentives that will drive channel performance. In complex channel organizations, products and offers may differ from one channel to the next, playing on the unique advantages of specific channels, such as direct sales teams or online portals.)

The primary sales channel will be online via our website, which will act both an e-commerce store as well as a central hub for the users' PlantIO account, all product documentation and training resources, the recipe database and the community hub.

We will also allow for direct sales through our Instagram channel as well as during our demonstration events which will target exhibitions, conferences, festival events and education establishments.

Moving forward, we aim to construct a permanent demonstration facility providing free food to the local underprivileged community. This facility&mdash;like the demonstration vehicle&mdash;will be open to the public and provide a guided tour of our technology and products.


### Marketing Strategy
{: .page-break}

[//]: # (This section summarizes the activities you’ll use to drive awareness and generate leads, both in your identified markets and within your existing customer base. In large organizations, the marketing strategy may also include activities for generating internal awareness. Such internally oriented activities are particularly important in situations where many groups will “touch” customers as they progress from purchase to activation to support.)
<div class="flex">
<div>
<img src="/media/earned-owned-paid-media.png" />
</div>
<p>We are approaching our marketing using the strategy of paid, earned and owned media <a href="ref">[15]</a>. In order to get people to our website and online community, we need to use earned and paid media to push our segments. A strong SEO strategy is needed in order to gain earned media from organic traffic, social sharing etc which ties back into our content marketing element&mdash;writing articles for publications along with our own blogs. Sales funnels will be implemented to ensure our time is used as efficiently as possible <a href="ref">[16]</a>.</p>
</div>

### Customer Experience

[//]: # (This section documents the anticipated customer journey—either at a high level or in detail. Starting with how customers first hear about a product, it progresses through their purchase, activation, renewal, and possible cancellation. Exploring this journey helps to identify any “fall-off” points that may reduce conversion rates, or drive churn, while also helping to ensure that you’ll have the right people and systems in place to support the new products.)

1. After failing to find acceptable quality out of season food in the supermarket, Mark receives a targeted advert through YouTube about the PlantIO system.
2. Instead of skipping, he clicks through to the main website where the main Call to action is to use the PlantIO software with a Tamagotchi plant. This is actually a disguised onboarding process taking Mark through an accelerated, pain-free product experience.
3. Upon completion, he is able to purchase the PlantIO system and is invited to sign up for a free account to get 10% off his first PlantIO order.
4. Mark quickly signs in with his Google account and his discount is applied immediately to his cart, he upgrades to a bundle containing seeds and feed and completes the purchase.
5. Upon receiving his PlantIO system, Mark plugs it in and connects it with his account with the push of a button. After selecting his recipe, the app then provides visual instructions for the first-time setup of the unit, and Mark's growing experience is underway.
6. Mark can check the plant at any point via the status page in the PWA, and for the first harvest, he can see a representation of his plant growing in the PlantIO Sky Garden. Aside from selecting a seed to continue with once germination is complete, Mark has no need to interact with the system until it is time to harvest the plant.
7. Mark is contacted via email and through his account to remind him to purchase more seeds at a point in time prior to his first harvest. He is also offered an upsell of a component in his system at this time. Once he has harvested, Mark is pushed for feedback and offered discounts on future purchases, as well as being suggested to share his growth over social media. His grower status reaches level 1.

### Timeline and Execution
{: .page-break}

<img src="/media/ruuts__status.svg" >

[//]: # (Finally, your plan needs to identify the timeline for execution, including next steps, the critical path for decisions, key milestones, and plans for reviewing and fine-tuning the GTM plan. This last point should not be overlooked, as good GTM plans are not static, but evolve with the project. As your plans progress, you can add details to increase the plan’s accuracy.)

#### Phases 1-2: MVP creation & Initial Alpha Test
We are currently developing the minimum viable product (MVP); whilst I design and develop the PlantIO application, Ashley is sourcing the components required to build the initial system to for scenario testing, whilst Brett is conducting detailed research into plant growth to create the first of our recipes. We expect the MVP to be ready in 3 months time, for our very first internal alpha testing which itself will run for a 3 month period.

| Key Deliverables |
--- |
Software | Software simulation of the PlantIO PWA
Hardware | Working PlantIO enclosure for a single harvest of specified plant
Knowledge | A variety of recipes for the most common plants

#### Phases 3-5: Product Development Sprints
Following this, we will commit a further 6 months to product development and finalise the physical design and initial consumer model. We will then repeat our 3-month alpha test, and follow it up with a second 3-month period of improvements.

> It is important for us to remain agile as a company, and we will be using the length of harvests (around 21-30 days) to line up our sprints and reassess our planning.

#### Phase 6: Beta Test
This will then lead into the 3-month public beta test which, if successful, will allow for an initial product launch during the Autumn of 2020 in 21 months time.

#### Phase 7: Product Launch
The PlantIO System is at an extremely early stage of development and requires considerable time dedication to product development. The physical components must undergo safety checks along with long-term testing, and the financial side of the product is yet to be finalised. Should the system be deemed too expensive for phase 1, we may have to begin our product in phase 2.

Period | Phase | End date
------ | ----- | --------
0-6 months | MVP creation | December 2018
6-9 months | initial alpha test | March 2019
9-15 months | product development | October 2018
15-18 months | second alpha test | January 2019
18-21 months | product development | April 2019
21-24 months | beta test | July 2019
24 months | product launch | October 2019

## Launch

### Beta Launch

The company will remain agile, specifically within the first 12 months of product launches in order to fine-tune the product and ensure a successful press launch. A beta release of the system will be offered over a period of 90 days (roughly equating to 3 consecutive harvests) to 100 people serving the 4 main market segments of phase 1, with a free base system provided in return for regular feedback. A/B testing of fully automatic, semi-automatic and manual recipe settings will need to be conducted.

Following from this, a staggered product launch will provide the opportunity for users to buy in at a very low level, then upgrade components as the system forms part of their daily life and habits. The modular design allows for limitless expansion and upgrading, whilst the sharing of recipes will build a social community and a huge knowledge base.

A promotional campaign will run during the first phase as Ruuts provides demonstrations and education to schools, exhibition events and pairing up with local businesses to provide instant ingredients, likely to be served from a specially modified demonstration vehicle allowing for cross-country promotions.

### Social media

The main focus for our social media campaigns will be to increase brand awareness, create higher quality sales, and create brand loyalty. External social media will initially be limited to a single active channel - Instagram. Accounts will exist across all social media ecosystems to give the brand a presence, however, content creation will be focused around Instagram and driven to by using the other channels. Instagram offers the benefits of being extremely visual—especially so given the rise of Instagram Stories, ad-free, shoppable, and presented in a consistent, uncluttered manner.

### Press release

Embargoed for: 2019-10-01
{: .text-center}

> **Grow food, automatically.**

**The new PlantIO system allows you to grow perfect food for your family all year round at a low cost to you and the environment, completely automatically.**

Simply connect your PlantIO system with your online account, select the recipe you desire; place your seeds into your system and the germination phase begins automatically. The PlantIO app will monitor the seeds as they develop into sproutlings, and when ready, PlantIO will instruct you to select the superior sproutling and remove the others. The PlantIO app will now control the  complete growth of the plant and let you know when it is time to pick the final fruits.

> &ldquo;For too long our food has been compromised and an afterthought; it is one of the three key elements of survival and should be treated as such.<br />Take back control and grow your own.&rdquo;

Using PlantIO you can grow perfect food, whenever you want, wherever you want, really fast, using trustworthy seeds, saving water, saving land, saving the planet, all automatically. You can grow enough food to feed your family, with virtually no time cost. You can teach your family how to grow food and care for plants using optional manual or semi-automatic recipes. You can create your own recipes and share them with the world. You can even compete to grow the biggest tomato, the brightest, the tastiest or the fastest.

> &ldquo;Your plant can be accessed twenty-four seven using any web browser on any Internet-enabled device anywhere in the world in a matter of seconds. Not that you'd ever need to.&rdquo;

**Ends.**

For further information, please contact Phillip Penny at [phil@plantio.co.uk](mailto:phil@plantio.co.uk) or on [07961732861](tel:+447961732861)

##### Notes to Editors

* Ruuts combine the perfect mix of a product designer, horticulture expert and electronics engineer.
* Photos are available on request.

### Analytics

The use of website analytics such as HotJar [[17]](#ref) and Lucky Orange [[18]](#ref) will be implemented alongside Google analytics to fully understand how the e-commerce platform can be optimised. We will also be collecting continuous data from all connected PlantIO systems and harvest completion reports filled out by users. The data collected will be fed back into the recipe database to improve recipe timings and results. We will also conduct manual analytics of community posts and bug tracking issues raised. Each and every live demonstration will include recordings of usability tests and Q/A sessions.

### Feedback Channels

Our primary feedback channels will be our website, comprising of the contact page, chatbot, and online community forum. We will also gain feedback through the user's PlantIO PWA account via harvest completion surveys and social media integration. Continuous usability testing will be undertaken during the product development cycles in the form of interviews and demonstration events.

### Bug Tracking

With our open source code hosted on Github, we will use their integrated bug tracking feature to manage all issues. Any known issues by the development team will be added prior to launch, and any additional issues highlighted post-launch will also be added to ensure a central repository of information.

All issues will be added in the format of user stories: As a [user type], I want to [task] so that [goal]:

>> &lsquo; As a customer, I want to schedule growing so that I can accurately predict the harvest period &rdquo;

This ensures communication is easy for the user reporting the bug, and clarity is at the forefront of the problem; it may highlight a user trying to use the PlantIO system in a way not intended, allowing us to focus on documentation rather than blindly fixing bugs as they are raised.

## Post Launch

### Maintenance & Future Development
Scheduled regular software updates will initially fall in line with our own harvests and linked blog posts as we work to short sprints. As the community grows, moderation of recipes and the forum will be required Future developments will initially focus on hardware as we look to scale the PlantIO system for business and industrial use.

<div class="flex page-break" style="align-items: center">
<img src="/media/git-model.png" style="width: 35vw; height: auto" />
<blockquote><p>All future app development will follow the Git branching model as proposed by Vincent Driessen <a href="#ref">[19]</a>.</p></blockquote>
</div>

### Continued User Engagement

#### Gamification
A lot of the concepts from Fudogotchi [[20]](#ref) can be applied to the post-launch experience for PlantIO - encouraging the user to earn achievements and level up will, of course, increase the chance of them engaging with us online and advertising through word of mouth. Their acquired status will also give them a certain level of standing in the growing forums.

#### Brand advocates as community leaders
Our customers who are highly engaged on social media will be targeted to become brand advocates, essentially rewarding their loyalty and encouraging them to continue. The community will eventually be introduced to the idea of communal growing (sharing produce within a neighbourhood, teaming up to organise what is being grown and where), which needs to be led by our brand advocates.

## Appendix
{: #ref .page-break}

1. Bocoup, Johnny-Five JavaScript library. Retrieved October 29, 2018: [http://johnny-five.io/](http://johnny-five.io/)
2. Penny, P D. Initial FMP user survey, [https://docs.google.com/spreadsheets/d/1nGWIVqBoslziVk2PurzK5a8G3wUKEeuJQFKUpQMps-M/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1nGWIVqBoslziVk2PurzK5a8G3wUKEeuJQFKUpQMps-M/edit?usp=sharing)
3. Penny, P D et al. Carbon Candy, Retrieved October 29, 2018: [https://carboncandy.co.uk](https://carboncandy.co.uk)
4. Bartlett, B., Banner, A. and Penny, P. (2017). Carbon Dating. Drone Magazine, (19).
5. Based on a bottom-up analysis. Approximately 8 million UK users fit the persona ([https://en.wikipedia.org/wiki/Demography_of_the_United_Kingdom#Age_structure](https://en.wikipedia.org/wiki/Demography_of_the_United_Kingdom#Age_structure)), which equates to 4 million couples, placing one unit per family each with a potential unit spend of £200.
6. Digital Ocean, cloud computing. Retrieved October 29, 2018: [https://www.digitalocean.com/](https://www.digitalocean.com/)
7. Shopify, hosted e-commerce platform. Retrieved October 29, 2018: [https://www.shopify.co.uk/](https://www.shopify.co.uk/)
8. Hawkins, D et al. Consumer Behavior, 2009.
9. Action Against Hunger, charity. Retrieved October 29, 2018: [https://www.actionagainsthunger.org/](https://www.actionagainsthunger.org/)
10. Chow, D. Plant Friends, Retrieved October 29, 2018: [http://dicksonchow.com/plant-friends/](http://dicksonchow.com/plant-friends/)
11. Aerofarms, Retrieved October 29, 2018: [https://aerofarms.com/](https://aerofarms.com/)
12. Sahara Forest Project, Retrieved October 29, 2018: [https://www.saharaforestproject.com/](https://www.saharaforestproject.com/)
13. IKEA, KRYDDA/VÄXER, Retrieved October 29, 2018: [https://www.ikea.com/gb/en/products/indoor-gardening/indoor-growing-cultivators/krydda-v%C3%A4xer-grow-kit-w-16-pots-2-tiers-spr-79158686/](https://www.ikea.com/gb/en/products/indoor-gardening/indoor-growing-cultivators/krydda-v%C3%A4xer-grow-kit-w-16-pots-2-tiers-spr-79158686/)
14. Flower Care Smart Monitor, Retrieved October 29 2018: [https://www.huahuacaocao.com/product](https://www.huahuacaocao.com/product)
15. Garman, E. What is Earned, Owned & Paid Media? The Difference Explained. Retrieved October 29, 2018: [https://www.titangrowth.com/what-is-earned-owned-paid-media-the-difference-explained/](https://www.titangrowth.com/what-is-earned-owned-paid-media-the-difference-explained/)
16. Pearce, A, Blend Commerce. What the heck is a sales funnel? Retrieved October 29, 2018: [https://blendcommerce.com/blogs/shopify/what-the-heck-is-a-sales-funnel](https://blendcommerce.com/blogs/shopify/what-the-heck-is-a-sales-funnel)
17. Hotjar, analytics. Retrieved October 29, 2018: [https://www.hotjar.com/](https://www.hotjar.com/)
18. Lucky Orange, analytics. Retrieved October 29, 2018: [https://www.luckyorange.com/](https://www.luckyorange.com/)
19. Driessen, V. A successful Git branching model. Retrieved October 29, 2018:  [https://nvie.com/posts/a-successful-git-branching-model](https://nvie.com/posts/a-successful-git-branching-model)
20. Penny, P D and Harrison, C. Fudogotchi. Retrieved October 29, 2018: [http://fudogotchi.naturalmohican.com/](http://fudogotchi.naturalmohican.com/)

### FarmBot
{: .page-break}
#### COMPETITOR CASE STUDY
{: .text-center}

<div class="flex ai--c">
<img src="/media/farmbot--desktop.png" style="width: 62.5vw" />
<img src="/media/farmbot--mobile.png" style="width: 15vw" />
</div>
Figure 1: The FarmBot homepage ([https://farm.bot/](https://farm.bot/))

**Location:** USA

<p><strong>Category of Competition:</strong> Primary | <span>Secondary</span> | Tertiary</p>
{: .tags}

**Mission Statement:**

>> &ldquo; Grow a community that produces free and open-source hardware plans, software, data, and documentation enabling everyone to build and operate a farming machine. &rdquo;

**Product Offering:**
* FarmBot Express (Not yet released)
* FarmBot Genesis ($2,595.00 USD)
* FarmBot Genesis XL ($3,795.00 USD)

**Content:**

<p>Blog posts  |  Whitepapers  |  eBooks  |  Videos  |  Webinars  |  Podcasts  |  Slides/Powerpoints  |  Visual content  |  FAQs  |  Feature articles  |  Press releases  |  News  |  Case studies  |  Buyer guides</p>

**Strengths & Weaknesses:**

Following the open-source route creates a strong community, and a very strong online presence provides documentation, forums, videos and reviews. The system requires a big upfront investment, technical skills to build and set up the machine, and a large area of space to run, all the while using traditional inefficient farming methods.

FarmBot offer a high-end version of our product at a much higher price to a slightly different audience, using lower-end hardware.

### Click & Grow
{: .page-break}
#### COMPETITOR CASE STUDY
{: .text-center}

<div class="flex ai--c">
<img src="/media/clickandgrow--desktop.png" style="width: 62.5vw" />
<img src="/media/clickandgrow--mobile.png" style="width: 15vw" />
</div>
Figure 1: The Click & Grow homepage ([https://eu.clickandgrow.com/](https://eu.clickandgrow.com/))

**Location:** USA & Estonia

<p><strong>Category of Competition:</strong> <span>Primary</span> | Secondary | Tertiary</p>
{: .tags}

**Mission Statement:**
>> &ldquo; We create transformative technologies that allow growing fresh, vitamin-packed food locally and sustainably. &rdquo;

**Product Offering:**
* Smart Garden 3 / Smart Garden 9 (€99.95 / €199.95)
* Wall Farm Mini / Wall Farm (€899.00 / €1,299.00)
* Plant Pods (€9.95)

**Content:**

<p>Blog posts  |  Videos  |  Visual content  |  FAQs  |  Forum</p>

**Strengths & Weaknesses:**

Click & Grow offer a low-end version of our product at a higher price to a very similar audience, using lower-end hardware and software. The presentation is excellent throughout, however, the user is likely to be left feeling somewhat cheated by the limited functionality of the system and the expense of the refill pods. This system prices itself out of most sales and offers no online capabilities.
