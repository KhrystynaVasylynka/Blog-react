import article1 from '../assets/img/b1_105928f8-73d2-4eb3-a3bc-0662a0138bc1_600x.webp';
import article2 from '../assets/img/b2_600x.webp';
import article3 from '../assets/img/b3_600x.webp';
import article4 from '../assets/img/b4_600x.webp';
import article5 from '../assets/img/b5_600x.webp';
import article6 from '../assets/img/b6_600x.webp';
import article7 from '../assets/img/b7_600x.webp';
import article8 from '../assets/img/b8_600x.webp';
import article9 from '../assets/img/b9_600x.webp';

export type ArticleData = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  inSidebar: string;
  full?: string;
};

export const articlesArray: ArticleData[] = [
  {
    id: 1,
    inSidebar: 'no',
    alt: 'article 1',
    imageUrl: article1,
    category: 'Fashion',
    date: 'Oct 12, 2023',
    author: 'Charlie Teather',
    title: '10 autumn fashion trends 2023',
    description:
      "If you're eager to see what your wardrobe might look like this autumn keep reading, because thanks to the world's four fashion capitals -that's New York, London, Milan...",
    full: `<div>
  <p>
    If you're eager to see what your wardrobe might look like this
    autumn keep reading, because thanks to the world's four fashion
    capitals - that's New York, London, Milan and Paris - who are
    always ahead of the curve, autumn/winter 2023's fashion trends
    were forecasted way back in February.
  </p>
  <p>
    These are the key sartorial takeaways to prep yourself for the new
    season…
  </p>
  <h2>1. PERPETUAL PLEATING</h2>
  <p>
    One of the simplest ways to elevate a look, pleating is back in a
    big way this season. Whether you opt for a soft, draped pleat à la
    Loewe or a more intricate, dense pleat like Paco Rabanne and Rokh,
    it's a great way to add a sense of texture without
    overcomplicating a look through various different fabrics or
    layers. Keep the rest of your outfit relatively monochrome in
    order to let the pleating do the talking.
  </p>
  <h2>2. THE NEW PEPLUM</h2>
  <p>
    Buckle up, folks, because you didn't misread that. The peplum is
    officially back on the fashion map (we did warn you that you might
    need a while to digest these trends before you trial them!), and
    whether or not you were into them first time around you'd be wise
    not to disregard the look this season. Creating a beautiful
    silhouette, the traditional fit-and-flare shape of a peplum piece
    renders it universally flattering, and is a great way to dress up
    an otherwise more understated look.
  </p>
  <h2>3. QUIET LUXURY</h2>
  <p>
    One of the easiest trends to get on board with this autumn/winter,
    quiet luxury has been gaining pace on the sartorial scene over
    recent months. Essentially the opposite of flamboyant displays of
    wealth via logos and instantly-recognisable designer prints, this
    is about the art of subtlety. From timeless vests to blazers and
    even simply well-cut jeans, quiet luxury will be one of the wisest
    trends to follow this season thanks to its timeless longevity.
  </p>
  <h2>4. RED ALERT</h2>
  <p>
    People always want to know about ‘the colour of the season’, and
    while fuchsia is still having its moment thanks to the Barbie
    movie there's no doubt amongst fashion insiders that the real
    on-trend hue for autumn is red. Not a soft red, not a ruby, a
    crimson or a burgundy, but good old fashioned scarlet. Wear it
    head-to-toe for bonus points.
  </p>
  <h2>5. SHEER REVELATIONS</h2>
  <p>
    Yes, we know, it's the trend that won't give up. But with
    designers forever pushing the boundaries with sheer dressing, it's
    no wonder we don't get bored. This season you're going to have to
    put on your big girl pants - both literally and figuratively - as
    the sheer trend is all about revealing yours. That's right, there
    are no modest slip dresses or cool trousers slung beneath these
    sheer sheaths - baring your briefs will be big this autumn.
  </p>
  <h2>6. THE LBC</h2>
  <p>
    One of the most wearable trends of the season, the LBC (Long Black
    Coat) is the coolest outerwear option for autumn. While
    impractical floor scrapers may be at the top of the list when it
    comes to runway trends, there's no need for yours to be sweeping
    the pavements every time you leave the house. Opt for one that
    falls just above the ankle like Victoria Beckham's for an easy
    throw-on piece that won't look tired before October even hits.
  </p>
  <h2>7. MOODY BLOOMS</h2>
  <p>
    Many of us love florals come spring and summer (Miranda
    Priestly-aside, of course), but have you ever considered them an
    autumnal staple? That's all about to change, with moodier-hued
    blooms having taken centre stage on the AW23 runways. Go for those
    with a deep base colour - black or charcoal grey, ideally - and
    let the floral pop on top. Whether it's one bloom or a few, it's a
    guaranteed way to brighten up the fashion landscape in the depths
    of winter.
  </p>
  <h2>8. TIGHTS IN SIGHT</h2>
  <p>
    We'd be lying if we said we weren't into all of these
    practicality-first trends emerging from the designer catwalks.
    Next up, it's tights. Not the subtle nude ones, or the functional
    black pair you reach for every time the temperature dips into
    single digits. No, these are shout-about-it, out-there pairs of
    tights that were made to be seen. Bright reds were all over the
    runways this season, but there really are no rules here. Red,
    blue, pink, green, white… we're here for them all.
  </p>
  <h2>9. BUTTER STICKS</h2>
  <p>
    A slightly subtler, but no less beautiful, colour trend emerging
    for autumn is this buttery, pastel-y yellow-y gold tone. Worn
    head-to-toe it often also ticks off the ‘quiet luxury’ trend too
    as it exudes such subtle elegance, but it's also one of the
    easiest shades to wear. Unlike the slightly louder trend for
    scarlet red, this is a more subdued colour trend which is a lot
    less intimidating to step into.
  </p>
  <h2>10. SCARF SWATHES</h2>
  <p>
    Undoubtedly less tempting as those of us in the UK sit here
    basking in 28°C (it happens less often than once in a blue moon,
    let us have it), trust us when we say give it a few months and
    we'll all be buying blanket-sized scarves and Googling the chicest
    ways to wrap ourselves up in them. Whether you go super simple à
    la Michael Kors with a muted hue slung casually over one shoulder,
    or you go punchier like Saint Laurent and Gabriela Hearst via
    vibrant hues and prints and a fuller-coverage drape, it's hard to
    go wrong with this one.
  </p>
</div>`,
  },
  {
    id: 2,
    inSidebar: 'yes',
    alt: 'article 2',
    imageUrl: article2,
    category: 'Health',
    date: 'Oct 15, 2023',
    author: 'Pete McCall',
    title: 'The Benefits of Exercise on Mental Health',
    description:
      'If you’ve been contemplating becoming more physically active, it’s important to recognize that regular exercise can not only help you look better...',

    full: ` <div>
  <p>
  
    If you’ve been contemplating becoming more physically active, it’s
    important to recognize that regular exercise can not only help you
    look better, it can help you feel better, too. Here are six ways
    exercise can help improve your overall mental health and outlook.
  </p>
  <ul>
    <li>
      Exercise increases the production of brain-derived neurotrophic
      factor (BDNF), a neurotransmitter that can stimulate production of
      new brain cells. Both cardiorespiratory and muscular training can
      help elevate levels of BDNF, which means that these forms of
      exercise not only help you become more physically fit, but they
      can also boost your brain health.
    </li>
    <li>
      Exercise improves memory and learning and reduces or slows
      progressive loss to brain cell structure and function. In
      addition, exercise improves brain health by enhancing its ability
      to grow and adapt in response to stimuli (neuroplasticity) by
      reorganizing its connections, structure and functions. In other
      words, exercise may ameliorate some of the inescapable
      brain-related changes that occur with aging. Improvements in
      cognitive function and neuroplasticity can be observed in both
      young and old and both healthy and clinical populations. While
      cardiorespiratory and muscular training create unique
      neurophysiological adaptations, the combination of both types of
      exercise leads to more exercise-induced neuroplasticity than
      either mode alone. In other words, different types of exercise
      improves brain health by targeting various aspects of brain
      function.
    </li>
    <li>
      Exercise can help boost self-esteem, which may positively affect
      your mental health. Learning how to perfect that yoga pose,
      finally doing a pull-up with your own body weight or lifting a
      certain amount of weight for the first time can leave you with the
      feeling that you can achieve specific tasks that you set out to
      accomplish, which is one of the best ways to boost self-esteem.
    </li>
    <li>
      How awesome do you feel after a good night’s sleep? Sleep is when
      your body repairs itself after the challenges of the day and is an
      important component of good mental health. A good night’s sleep is
      also critical for your brain to recharge and refresh, and regular
      exercise can enhance your quality of sleep, which can leave you
      feeling great all day long.
    </li>
    <li>
      In this non-stop world, where you’re constantly being texted,
      emailed and generally pulled in all directions, having the
      opportunity to take time out of your day to focus on you may help
      improve mental health. Time spent exercising is an opportunity to
      unplug from other people and listen to your favorite music or
      catch up on your favorite hobby via a podcast. This, in turn, can
      help you change how you feel and improve your overall outlook.
    </li>
    <li>
      Taking group fitness classes or simply being at a gym surrounded
      by other people working toward improving their health can help you
      connect with others, which is an important component of good
      mental health. If you’re new to an area or going through a major
      life change such as a break-up, your workout time can be the best
      opportunity for meeting new people and making new friends. Many
      fitness studios and group classes become mini-communities and are
      an excellent way to improve your real-life social network, which
      can have an immediate impact on your mental health.
    </li>
  </ul>
  <p>
    Research strongly suggests that improved mental health is an
    important and often-overlooked outcome of regular exercise. It’s
    also important to note that you don’t need to pay for an expensive
    health membership or fitness classes to receive the mental health
    benefits of exercise. If your clients or participants have been
    looking for a little extra motivation to get moving, let them know
    that exercise can help them feel better and improve their overall
    outlook on life.
  </p>
</div>`,
  },
  {
    id: 3,
    inSidebar: 'no',
    alt: 'article 3',
    imageUrl: article3,
    category: 'Health',
    date: 'Sep 04, 2023',
    author: 'Daniel J. Green',
    title: 'Selfcare and Stress Management',
    description:
      'Developing positive self-care habits can help people better manage their stress and improve their overall well-being. Here, we’ll explore the importance of mindfulness...',
    full: `<div>
  <p>
    Developing positive self-care habits can help you and your clients
    to better manage stress and improve overall well-being. So, what is
    self-care? Stated simply, self-care is the practice of taking action
    to preserve or improve your own health. It can come in countless
    forms, from meditation and yoga practice to physical activity or
    even carving out time to read a good book. Here, we’ll explore the
    importance of mindfulness, sleep and social connectedness to stress
    reduction and offer some strategies for you to put into practice or
    share with your clients—or both.
  </p>
  <h2>Practice Mindfulness</h2>
  <p>
    Mindfulness practices may offer a host of physical, psychological
    and social benefits that can lead to decreases in perceived stress,
    improved self-efficacy, enhanced emotional regulation and a greater
    sense of meaning and purpose in life.
  </p>
  <p>
    Relaxation counters the short-term effects of stress by decreasing
    blood pressure, heart rate, respiration rate and muscle tension.
    Over the long-term, relaxation can mitigate certain health issues,
    including hypertension, anxiety and even cancer, in addition to
    improving overall health and healing.
  </p>
  <p>
    Here are some mindful practices that you and your clients might want
    to try:
  </p>
  <ul>
    <li>
      Mindful movement, such as yoga, tai chi, qigong, walking or
      cycling: Your clients might be surprised to learn that one of the
      two common aspects of practices that elicit relaxation is
      repetition, as is experienced during exercises like walking and
      cycling.
    </li>
    <li>
      Meditation: This can include any of a number of types of
      meditation, which you may encourage your clients to research.
      While some people thrive with an ongoing transcendental meditation
      practice, others may simply want a way to get 10 or 15 minutes of
      quiet time or prayer during a stressful period. This is where the
      second aspect of practices that elicit relaxation comes in—a
      passive disregard of thoughts as they arise.
    </li>
    <li>
      Breathing exercises: Again, there are a number of breathing
      exercises that clients can explore, including diaphragmatic
      breathing and pursed-lip breathing. Check out these 6 Breathing
      Exercises to Reduce Stress.
    </li>
  </ul>
  <p>
    If you want to learn more about the connection between breathing
    practices and meditation, check out this video from ACE expert
    Carrie Myers: Breath and Meditation.
  </p>
  <h2>Sleep</h2>
  <p>
    Sleep disordersare common in modern society, with one in three U.S.
    adults reporting that they usually get less than the recommended
    amount of sleep. Improving sleep patterns can be part of every
    healthy behavior-change program. Sleep deficiency has been linked to
    a variety of chronic health risks, including heart disease, obesity,
    high blood pressure, diabetes and depression.
  </p>
  <p>
    Share the following tips with your clients to help them get a good
    night’s sleep:
  </p>
  <ul>
    <li> Create a relaxing sleep environment. </li>
    <li>Follow a consistent sleep schedule. </li>
    <li>Follow a soothing bedtime routine.</li>
    <li>Limit exposure to bright light, especially blue light.</li>
    <li>Try to be exposed to natural light early in the day. </li>
    <li>Exercise daily.</li>
    <li>Avoid caffeine and alcohol.</li>
    <li>Avoid eating a large meal too close to bedtime.</li>
  </ul>
  <h3>Social Connectedness</h3>
  <p>
    The importance of social connectedness cannot be overstated.
    According to the Centers for Disease Control and Prevention, “Social
    connectedness influences our minds, bodies, and behaviors—all of
    which influence our health and life expectancy.”
  </p>
  <p>
    As a health coach or exercise professional, one of the best things
    you can do to help alleviate a client’s feelings of loneliness,
    anxiousness or depression is to provide a positive experience each
    time you interact with them. Also, encourage your clients to find
    workout partners, join healthy cooking classes or simply get out and
    hang out with friends.
  </p>
</div>`,
  },
  {
    id: 4,
    inSidebar: 'no',
    alt: 'article 4',
    imageUrl: article4,
    category: 'Astrology',
    date: 'Jan 19, 2023',
    author: 'Ragnar Malento',
    title: 'Mysteries Of Your Sun And Rising Signs',
    description:
      'When you explore the world of astrology, you’re likely to come across the terms “Sun sign,” “Moon sign,” and “Rising sign” (also known as your Ascendant)...',
    full: `<div>
  <p>
    When you explore the world of astrology, you’re likely to come
    across the terms “Sun sign,” “Moon sign,” and “Rising sign” (also
    known as your Ascendant). These three elements are key components of
    your astrological profile and hold the key to unlocking the
    mysteries of your personality and life. In this user-friendly guide,
    we’ll delve into the profound significance of your Sun, Moon, and
    Rising signs.
  </p>
  <h2>Understanding the Basics:</h2>
  <p>
    Before we dive into the mysteries, let’s clarify what each of these
    signs represents:
  </p>
  <ul>
    <li>
      <b>Sun Sign:</b> This is the sign most people are familiar with.
      It’s determined by the position of the Sun at the time of your
      birth and reflects your core identity, ego, and vitality. Your Sun
      sign shapes your fundamental traits and is often considered your
      “zodiac sign.”
    </li>
    <li>
      <b>Moon Sign:</b> Your Moon sign is associated with your emotions,
      instincts, and subconscious. It’s determined by the position of
      the Moon at your birth and reveals the emotional facets of your
      personality.
    </li>
    <li>
      <b>Rising Sign (Ascendant):</b> The Rising sign is the zodiac sign
      that was on the eastern horizon at the moment of your birth. It
      represents your outward personality, how you appear to others, and
      your first impressions.
    </li>
  </ul>
  <h3>The Sun Sign – Your Core Identity:</h3>
  <p>
    Your Sun sign is your astrological essence, the foundation of your
    personality. It influences your basic character traits, how you
    express yourself, and your life goals. Here’s a glimpse of the
    mysteries it holds:
  </p>
  <ul>
    <li>
      <b> Elemental Energy:</b> Your Sun sign can be one of four
      elements: Fire, Earth, Air, or Water, each with its own qualities.
      Fire signs are passionate and enthusiastic, while Earth signs are
      practical and grounded, and so on.
    </li>
    <li>
      <b>Modality: </b>Sun signs also fall into one of three modalities:
      Cardinal, Fixed, or Mutable. Cardinal signs are initiators, Fixed
      signs are steadfast, and Mutable signs are adaptable.
    </li>
    <li>
      <b>Ruling Planet:</b> Each Sun sign is associated with a ruling
      planet. For instance, Leo is ruled by the Sun, giving Leos a
      natural flair for leadership and creativity.
    </li>
  </ul>
  <h3>The Moon Sign – Your Emotional Depth:</h3>
  <p>
    While your Sun sign represents your external self, your Moon sign
    delves into the emotional undercurrents that shape your inner world.
    Here are the mysteries your Moon sign holds:
  </p>
  <ul>
    <li>
      <b>Emotional Reactions:</b> Your Moon sign influences how you
      react emotionally to situations. For example, a Cancer Moon is
      sensitive and nurturing, while an Aries Moon is more impulsive and
      assertive.
    </li>
    <li>
      <b> Relationships:</b> Understanding your Moon sign can shed light
      on your emotional needs in relationships. It can help you connect
      on a deeper level with yourself and your loved ones.
    </li>
    <li>
      <b>Instincts: </b>Your Moon sign influences your instincts and
      instincts play a crucial role in decision-making. Knowing your
      Moon sign can help you make choices that resonate with your
      emotional truth.
    </li>
  </ul>
  <h3>The Rising Sign (Ascendant) – Your First Impression:</h3>
  <p>
    Your Rising sign is like the mask you wear when you first meet
    someone. It shapes your initial reactions, appearance, and how
    others perceive you. Here’s how your Rising sign holds its
    mysteries:
  </p>
  <ul>
    <li>
      <b> Physical Appearance:</b> Your Rising sign can influence your
      physical features, making you resemble others with the same Rising
      sign.
    </li>
    <li>
      <b> First Impressions:</b> It affects the way you come across to
      new people. For instance, a Virgo Rising may appear
      detail-oriented and organized upon first meeting.
    </li>
    <li>
      <b> Life Path: </b>Your Rising sign can provide insights into your
      life path and the experiences you’ll encounter.
    </li>
  </ul>
  <p>
    Your Sun, Moon, and Rising signs are the cornerstones of your
    astrological identity. They hold the key to the mysteries of your
    personality, emotions, and first impressions. By unraveling these
    mysteries, you can gain a deeper understanding of yourself, your
    relationships, and your life path. Embrace the richness of your
    astrological triad and use it as a tool for self-discovery and
    personal growth.
  </p>
</div>`,
  },
  {
    id: 5,
    inSidebar: 'no',
    alt: 'article 5',
    imageUrl: article5,
    category: 'Psychology',
    date: 'Aug 15, 2023',
    author: 'Melissa Madeson',
    title: 'How to Overcome Fear of Abandonment: 6 Helpful Worksheets',
    description:
      'As humans, we depend on others for survival. Starting from birth, the need to be fed, bathed, clothed, sheltered, and cared for is essential for...',
    full: `<div>
  <p>
    As humans, we depend on others for survival. Starting from birth,
    the need to be fed, bathed, clothed, sheltered, and cared for is
    essential for survival and optimal function.
  </p>
  <p>
    Fortunately, if signs and symptoms of abandonment fears are
    identified and addressed, there are a variety of treatment options
    and paths to emotional healing, leading to a life of flourishing.
  </p>
  <h2>What Is Fear of Abandonment in Psychology?</h2>
  <p>
    Fear of abandonment is not a clinical diagnosis in and of itself. It
    is a form of anxiety and a symptom of several clinical disorders,
    including both mood and personality disorders. Individuals who
    experience abandonment are also more likely to have long-term mental
    health issues (Schoenfelder et al., 2011).
  </p>
  <p>
    Those who struggle with abandonment issues have a persistent fear of
    rejection or isolation. It is often characterized by codependency,
    insecurity, and maladaptive views of power, competence, and
    intimacy, which makes interpersonal relationships and daily
    functioning difficult (D’Rozario & Pilkington, 2021).
  </p>
  <h3>Anxiety</h3>
  <p>
    Anxiety is a foundational component of abandonment fear. Individuals
    who struggle with generalized anxiety disorder or other anxiety
    disorders are more likely to experience fear of abandonment in close
    relationships (Conradi et al., 2016).
  </p>
  <h3>Depression</h3>
  <p>
    Also known as major depressive disorder, depression involves feeling
    sad, a loss of interest in pleasurable activities, changes in sleep
    or weight, loss of energy, feeling worthless or guilty, and
    difficulty concentrating or making decisions. Individuals with
    depression may push people away, question if they are loved or
    worthy of love, and fear rejection from others. Depression can be
    both a cause and effect of abandonment fears. People who have
    experienced neglect or abandonment may struggle with depression, and
    people who are depressed are more likely to have fears of
    abandonment.
  </p>
  <h3>Post-traumatic stress disorder (PTSD)</h3>
  <p>
    As with depression, PTSD is closely tied with fear of abandonment.
    Symptoms of PTSD include disturbing memories, dreams, feeling
    emotionally numb or cut off from others, irritability, emotional
    dysregulation, and difficulty concentrating (Pilkington et al.,
    2020). Difficulty controlling emotions and feeling distant from
    others naturally lead to feelings of isolation and fear of being
    alone or abandoned. Trauma can also be caused by being abandoned,
    neglected, or abused, creating a vicious cycle if left untreated.
  </p>
  <h3>Signs of Fear of Abandonment</h3>
  <p>Signs of abandonment issues in children include:</p>
  <ul>
    <li>
      Acting “clingy” or experiencing emotional dysregulation when left
      alone
    </li>
    <li>
      Excessively worrying or panicking about losing someone close
    </li>
    <li>Generally fearing being alone</li>
    <li>Getting sick more often due to stress</li>
    <li>
      <i>Pushing people away.</i> This presents as withdrawal,
      exhibiting trust issues, and the inability to be open and honest
      with loved ones.
    </li>
    <li>
      <i>Codependency.</i> Codependency is when individuals rely on
      other people to meet all their emotional needs. People who become
      overly needy and possessive in relationships are often
      codependent.
    </li>
    <li>
      <i>Anger.</i>People with abandonment issues might allow others to
      get close to them but then become aggressive, reactive, or
      volatile if they feel threatened or upset
    </li>
  </ul>
  <h3>How to Overcome Fear of Abandonment</h3>
  <p>
    Individuals who seek help can improve personal wellbeing and
    interpersonal relationships.
  </p>
  <h3>5 Therapy treatment options</h3>
  <ul>
    <li>
      Attachment-based therapy uses a supportive client–therapist bond
      to address issues with mental health, such as depression and
      anxiety. It targets thoughts, feelings, behaviors, and
      interpersonal communication that clients avoid or over-amplify
      based on early-developed attachment styles (Pilkington et al.,
      2021).
    </li>
    <li>
      Behavioral therapy incorporates talk therapy to root out unhealthy
      behaviors and habits that are related to the mental health
      conditions underlying the fear of abandonment.
    </li>
    <li>
      Cognitive-Behavioral Therapy (CBT) helps clients identify faulty
      thinking patterns or cognitive distortions and replace them with
      more adaptive thinking patterns. This evidence-based form of
      therapy is effective at treating anxiety and depression and
      improving relationships through changing perspectives and
      communication patterns.
    </li>
    <li>
      Psychodynamic therapy encourages clients to identify and resolve
      unhealthy unconscious and conscious thoughts about past
      experiences. Through improving self-awareness and understanding,
      clients can see how their past may influence present thoughts and
      behaviors and make changes.
    </li>
    <li>
      Psychoeducation provides information to a client regarding a
      diagnosis, treatment options, and underlying theories (such as
      attachment theory) that may contribute to abandonment fears.
      Often, understanding and labeling problematic behaviors and fears
      can be one of the most helpful steps in healing.
    </li>
  </ul>
</div>`,
  },
  {
    id: 6,
    inSidebar: 'yes',
    alt: 'article 6',
    imageUrl: article6,
    category: 'Fashion',
    date: 'Oct 19, 2023',
    author: 'Londi Ncube',
    title: '5 London Fashion Week designers on your radar in 2024',
    description:
      'The undisputed home of young talent, London Fashion Week is nothing if not a showcase for the up-and-coming major names. But with...',
    full: `<div>
  <p>
    The undisputed home of young talent, London Fashion Week is nothing if
    not a showcase for the up-and-coming major names. But with a schedule
    bursting full with almost 100 shows, how do you spot the names to
    know?
  </p>
  <p>
    Luckily for you, we've done all the legwork. Introducing the five
    names you should have on your radar in 2024 (and beyond)…
  </p>
  <h2>TOLU COKER</h2>
  <p>
    For her debut solo collection Tolu Coker took us back to her
    motherland. The collection was a celebration of African spirituality
    featuring feminine cuts and tailoring staples that felt like a breath
    of fresh air following the quiet luxury mood of last season.
  </p>
  <p>
    She had us drooling over timeless wardrobe pieces that were given an
    energetic makeover, from denim to the chicest modern mini styles. The
    prints, silhouettes and accessories are still on our minds and truly
    enough to get anyone excited about head-to-toe dressing.
  </p>
  <h3>AHLUWALIA</h3>
  <p>
    Priya Ahluwalia is not new to the LFW line-up but has become one of
    the most hyped up shows of the season, for good reason. Upcycling and
    sustainability is the centre of her design process. The designer uses
    deadstock garments, locally sourced vintage and pre-loved pieces to
    create new designs inspired by her multi-ethnic background.
  </p>
  <p>
    The colours were bold yet romantic with delicate prints and fabrics
    which were well balanced with new-age cowboy boots. With successful
    brand collaborations like Mulberry, Ganni and Adidas under her belt,
    we’re excited to see Ahluwalia continue being a force for
    (sustainable) fashion.
  </p>
  <h3>JOHANNA PARV</h3>
  <p>
    Johanna Parv, also part of the Fashion East collective, has created
    her own innovative design aesthetic which is not only functional but
    very chic. With an impressive CV including fashion brands Balenciaga,
    Christian Dior and Burberry, she is a pro in well constructed pieces.
    Johanna Parv is best known for her monochrome palette, functionality
    and comfort.
  </p>
  <p>
    Light-weight jackets and remixed leggings are given a contemporary
    makeover, making them essentials to any capsule wardrobe. Perfectly
    designed with balance, the collection is ideal dressing for those who
    wish they could live in gym clothes, but fashion. In a nutshell it is
    the most fabulous cycling wear you have ever seen.
  </p>
  <h3>YUHAN WANG</h3>
  <p>
    Yuhan Wang is a Central St Martins graduate (which is always a good
    sign) and has been a favourite during London Fashion Week since her
    debut show in 2020. The designer set out to explore and challenge
    Asia’s traditional standards about femininity through clothes and how
    these connect to Western Culture.
  </p>
  <p>
    You can expect romantic lace and knit separates, exaggerated
    silhouettes and floral prints that feel soft yet empowering. Hailey
    Bieber and Kylie Jenner are already big fans of this cult London brand
    and have worn they’re most coveted pieces which are known for being
    revealing but covered up - an it-girl mood. Her collections are always
    a masterclass in vibrant layering with romantic blazers, gloves,
    removable collars.
  </p>
</div>`,
  },
  {
    id: 7,
    inSidebar: 'no',
    alt: 'article 7',
    imageUrl: article7,
    category: 'Psychology',
    date: 'Jun 29, 2023',
    author: 'Pete McCall ',
    title: '6 Ways High Intensity Exercise Makes Your Brain Stronger',
    description:
      'Here are six benefits of high-intensity exercise that may help improve cognitive function and potentially reduce one’s risk of developing diseases like...',
    full: `<div>
  <p>
    Here are six benefits of high-intensity exercise that may help
    improve cognitive function and potentially reduce one’s risk of
    developing diseases like Alzheimer’s or dementia.
  </p>
  <ul>
    <li>
      <h2>High-Intensity Exercise May Help Build More Brain Cells</h2>
      <p>
        Brain-derived neurotrophic factor (BDNF) is a protein that
        promotes the growth of new brain cells and the formation of
        neuronal circuits in the brain, and is associated with both
        improved memory and learning ability. A review of the literature
        on high-intensity interval training (HIIT) found that HIIT can
        elevate levels of BDNF immediately after exercise and while at
        rest. This means that the same workouts that can help your
        clients get fitter might help make their brains function better
        as well.
      </p>
    </li>
    <li>
      <h2>
        High-Intensity Exercise May Offer More Brain Benefits Than
        Moderate-Intensity Exercise
      </h2>
      <p>
        High-intensity exercise has been shown to produce a greater BDNF
        response than moderate-intensity exercise. Schmolesky, Webb and
        Hansen compared the effects of the intensity and duration of
        exercise on BDNF levels and found that higher intensity
        protocols produced a greater response, reporting that “vigorous
        conditions had the highest proportion of subjects that
        experienced a significant increase in BDNF levels.” Likewise,
        Marquez and colleagues compared 20-minute bouts of continuous
        exercise at 70% of maximal work-rate to a HIIT protocol of 90%
        of maximal work-rate for work and recovery intervals of one
        minute each. They observed that “shorter bouts of high-intensity
        exercise are slightly more effective than continuous
        high-intensity exercise for elevating BDNF.”
      </p>
    </li>
    <li>
      <h2>High-Intensity Exercise Increases Blood Flow to the Brain</h2>
      <p>
        High-intensity exercise not only improves blood flow to the
        working muscles, but it also increases blood flow to the brain,
        which is important for delivering the oxygen and glucose needed
        for optimal performance. Plus, increasing oxygen flow to the
        brain can increase alertness while reducing feelings of fatigue,
        which could help enhance overall job performance. This means
        that a lunchtime HIIT workout could potentially help a client be
        more productive when they return to work in the afternoon.
      </p>
    </li>
    <li>
      <h2>Strength Training May Make You Smarter</h2>
      <p>
        Strength training—high-intensity or otherwise—has been shown to
        help increase BDNF levels. Church and colleagues compared the
        effects of a high-intensity strength-training program to one
        that focused on the volume of exercise and found that both
        protocols elevated BDNF. According to the study authors,
        “Results indicate that BDNF concentrations are increased after
        an acute bout of resistance exercise, regardless of training
        paradigm, and are further increased during a seven-week program
        in experienced lifters.”
      </p>
    </li>
    <li>
      <h2>
        High-Intensity Exercise Makes It Easier to Achieve a Flow State
      </h2>
      <p>
        A HIIT workout provides the right triggers, including clear
        goals and unambiguous feedback, to initiate something often
        referred to as the flow state, which can help create a positive
        and focused mindset that carries over into other aspects of a
        client’s daily life.
      </p>
    </li>
    <li>
      <h2>
        Performing High-Intensity Exercise Enhances Self-Confidence
      </h2>
      <p>
        Completing a challenging HIIT workout can help give clients the
        confidence to accomplish other daunting tasks. Once a client has
        completed a series of challenging high-intensity exercises,
        professional tasks such as giving a presentation or making a
        cold call to a potential client may seem easy by comparison.
        Additionally, completing a couple of HIIT workouts could help
        clients realize that they can exercise successfully, which is an
        important component for establishing self-efficacy and long-term
        adherence to an exercise program.
      </p>
    </li>
  </ul>

  <p>
    Finally, another oft-cited benefit of high-intensity exercise,
    particularly HIIT workouts, is that they don’t last as long as
    traditional workouts, which has been shown to be preferable among
    exercisers. Thum and colleagues compared HIIT to moderate-intensity
    continuous exercise and observed that HIIT may be more preferable
    because “individuals report greater enjoyment due to its time
    efficiency and constantly changing stimulus.” Ultimately, the most
    effective workout is the one that is completed, and a shorter
    workout is often more “doable” than a longer one.
  </p>
</div>`,
  },
  {
    id: 8,
    inSidebar: 'yes',
    alt: 'article 8',
    imageUrl: article8,
    category: 'Health',
    date: 'Mach 02, 2023',
    author: 'Nancy Clark',
    title: 'Why Carbohydrates So Confusing For Us',
    description:
      'Carbohydrates can be a source of confusion for athletes and fitness enthusiasts alike, many of whom believe they should avoid pasta, bagels,juice, bananas, sugar...?',
    full: `    <div>
  <p>
    Carbohydrates can be a source of confusion for athletes and fitness
    enthusiasts alike, many of whom believe they should avoid pasta,
    bagels, juice, bananas, sugar... the list goes on. In reality,
    people who are physically inactive whose bodies do not readily
    metabolize carbohydrates may need to take a different approach to
    consuming carbohydrates compared to regular exercisers and athletes.
    Here’s some information to help resolve carbohydrate confusion.
  </p>
  <h2>What do you actually mean when you say “carbs”?</h2>
  <p>
    Carbohydrates include both sugars and starches; they are
    biochemically similar. For example, an unripe banana (or any fruit)
    is starchy. As it ripens, it becomes sweeter; the starch converts
    into sugar. In comparison, peas (and other vegetables) are sweet
    when young and their sugar converts into starch as they mature. All
    forms of sugar and starch digest into the simple sugar glucose.
    Glucose travels in the blood and, with the help of insulin, is taken
    up for fuel by the muscles to fuel your workouts. Fit bodies handle
    carbohydrates better than unfit bodies.
  </p>
  <h2>Are carbs bad for you?</h2>
  <p>
    Regarding health, some carbs are better for you than others because
    some offer more nutrients than others. Even though refined sugar
    adds “empty calories” to a sports diet, you need not eat a
    sugar-free diet to have a healthy diet. A physically fit, healthy
    person’s menu can accommodate 10% of calories from refined sugar
    (World Health Organization’s guidelines). Yet, if you frequently
    consume sweets plus sports drinks, gels, and sports candies, you can
    easily consume more than 250 to 350 calories (10% of calories) from
    refined sugar. The fear-mongering terms of unhealthy, toxic, and
    poisonous that surround conversations regarding carbohydrates are
    simply unscientific. People who lack knowledge about physiology
    accept this disease-mongering, anti-sugar rhetoric. But the fact is
    no one food is healthy or unhealthy.
  </p>
  <h2>Are carbs fattening?</h2>
  <p>
    Despite popular belief, carbohydrates are not inherently fattening.
    Excess calories are fattening.
  </p>
  <h2>What about high-fructose corn syrup?</h2>
  <p>
    High-fructose corn syrup (HFCS) is less evil than is often portrayed
    by the media. HFCS is a double molecule comprised of 45% glucose,
    55% fructose—the same as honey and similar to white sugar (50%
    glucose, 50% fructose). The negative hype about HFCS applies
    primarily to people who consume excessive calories of sweets, soda,
    candies, and processed foods sweetened with HFCS. While no one needs
    excessive, lack-luster calories that could be better spent on
    nutrient-rich fruits, veggies, and whole grains, does an athlete
    really need to fret about a few calories of HFCS in ketchup?
  </p>
  <h2>What about sugar “crashes”?</h2>
  <p>
    The most common reason for “sugar crashes” (hypoglycemia) among
    athletes relates to running out of fuel. The shakiness and sweats
    are because the athlete did not eat enough food to maintain normal
    blood glucose levels, and the brain is now demanding sugar. One
    marathoner, who thought the 100-calorie gel he consumed at mile 16
    caused him to “crash,” more likely needed 200 to 300 calories to
    meet his energy needs. A sharp rise in blood sugar that may occur
    after eating sugary foods is not pathological and has more to do
    with the efficiency of the muscles and liver in their ability to
    take up the sugar. Exercise enhances the transport of sugar from
    your blood into your muscles with far less insulin than needed by
    the body of a person who is physically inactive.
  </p>
  <h2>Summary</h2>
  <p>
    For physically active, fit people who are at lower risk for heart
    disease, diabetes, and obesity, sugar and carbs are not toxic and
    may be a helpful way to enhance athletic performance. The
    one-size-diet does not fit all. No one is suggesting that you or
    your clients should eat more sugar, but rather understand that
    athletes and people who are regularly physically active can embrace
    a way of eating that includes an appropriate balance of carbohydrate
    (sugars and starches) in each meal. Strive for a healthy eating
    pattern that includes 85-90% quality foods and 10-15% whatever. Some
    days, whatever might be an apple; other days, it might be a slice of
    apple pie.
  </p>
</div>`,
  },
  {
    id: 9,
    inSidebar: 'no',
    alt: 'article 9',
    imageUrl: article9,
    category: 'Astrology',
    date: 'Mach 03, 2023',
    author: 'Ayanika Das',
    title: 'Signs Your Closest Friend Might Be Your Perfect Life Partner',
    description:
      'You’ve known your best friend for years. You share secrets, dreams, and countless laughter. You’ve always appreciated their presence in your life, but...?',
    full: ` <div>
  <p>
    You’ve known your best friend for years. You share secrets, dreams,
    and countless laughter. You’ve always appreciated their presence in
    your life, but have you ever wondered if they could be your perfect
    life partner? This blog explores how astrology can help you uncover
    the signs that your closest friend might just be the one you’ve been
    looking for.
  </p>
  <ol>
    <li>
      <h2>Cosmic Compatibility</h2>
      <p>
        Astrology, the ancient science of the stars, can offer insights
        into your compatibility with someone. When two people are close
        friends and their astrological signs align, it’s a powerful sign
        that they may be perfect life partners. Whether it’s your sun,
        moon, or rising sign, astrology can reveal if your cosmic
        energies are in sync.
      </p>
    </li>
    <li>
      <h2>Shared Goals and Dreams</h2>
      <p>
        One of the most significant indicators of a potential life
        partner is the alignment of your long-term goals and dreams.
        Your closest friend may share similar aspirations, making it
        easier to navigate the complexities of life together. It’s like
        two puzzle pieces that fit perfectly.
      </p>
    </li>
    <li>
      <h2> Emotional Connection</h2>
      <p>
        A deep emotional connection is a vital element of any romantic
        relationship. If your closest friend provides you with
        unwavering support, understands your moods, and is your go-to
        person during tough times, they might just be your perfect life
        partner in the making.
      </p>
    </li>
    <li>
      <h2>Communication is Effortless</h2>
      <p>
        In any successful relationship, communication is key. If you and
        your closest friend can have meaningful conversations without
        any struggle, it’s a good indication that you have a strong
        foundation for a deeper, more intimate connection.
      </p>
    </li>
    <li>
      <h2>You Share Hobbies and Interests</h2>
      <p>
        Shared interests can strengthen a bond between two people. If
        you and your best friend enjoy the same hobbies, activities, or
        passions, it can create a sense of unity and compatibility that
        extends beyond friendship.
      </p>
    </li>
    <li>
      <h2>You’re Supportive of Each Other’s Growth</h2>
      <p>
        Partners who genuinely care about each other’s personal growth
        and well-being are more likely to have a successful life
        partnership. If your closest friend encourages your
        self-improvement and vice versa, it’s a sign that they may be
        your perfect life partner.
      </p>
    </li>
    <li>
      <h2> You’re Each Other’s Confidants</h2>
      <p>
        Close friends often serve as confidants, but if your friend is
        the first person you turn to with your joys and sorrows, it
        could be a sign of a deeper connection waiting to blossom.
      </p>
    </li>
    <li>
      <h2>Unspoken Understanding</h2>
      <p>
        Sometimes, you and your closest friend may have an unspoken
        understanding of each other’s needs and desires. This unspoken
        connection could be the foundation of a lasting and fulfilling
        romantic partnership.
      </p>
    </li>
  </ol>
  <h2>Astrological Insights:</h2>
  <p>
    Astrology can provide valuable guidance in identifying these signs.
    Here are a few astrological aspects to consider:
  </p>
  <ul>
    <li>
      <b> Sun Signs:</b> Compatibility between your sun signs can reveal
      your basic personality traits and how well they mesh.
    </li>
    <li>
      <b> Moon Signs: </b>These indicate your emotional needs and how
      they align with your friend’s.
    </li>
    <li>
      <b> Venus Signs:</b> Venus represents love and attraction. Check
      how your Venus signs interact.
    </li>
    <li>
      <b> Rising Signs:</b> Your rising signs show how you present
      yourself to the world. Complementing rising signs can lead to a
      more harmonious relationship.
    </li>
  </ul>
  <p>
    In summary, the signs that your closest friend might be your perfect
    life partner go beyond ordinary friendship. Astrology can shed light
    on your compatibility and potential for a fulfilling romantic
    relationship. If you find a strong alignment in the astrological
    aspects mentioned above, it’s worth exploring the idea of taking
    your relationship to the next level. Your best friend could be your
    perfect life partner in the stars.
  </p>
  <p>
    So, take a moment to reflect on your closest friendship and consult
    the cosmos for guidance. It might just lead you to the perfect life
    partner you’ve been seeking all along.
  </p>
</div>`,
  },
 
];

