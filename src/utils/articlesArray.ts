export type HomeArticleItemType = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  full?: string;
  inSidebar: string;

};

export const articlesArray: HomeArticleItemType[] = [
  {
    id: 1,
    inSidebar: 'no',
    alt: 'article 1',
    imageUrl: '/images/b1_105928f8-73d2-4eb3-a3bc-0662a0138bc1_600x.webp',
    category: 'Cosmetics',
    date: 'Oct 12, 2023',
    author: 'Charlie Teather',
    title: 'THE FACIAL PACK FOUNDATION',
    description:
      " Hnis nullam sagittis. Suspendisse pulvinar augue ac venenatis condimentum, sem libero...",
    full: `<div>
  <p>
  Hnis nullam sagittis. Suspendisse pulvinar augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
  <h2>“Ridiculus mus mauris vitae ultricies leo.”</h2>
  Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },

  {
    id: 2,
    inSidebar: 'no',
    alt: 'article 2',
    imageUrl: '/images/b2_600x.webp',
    category: 'Beauty',
    date: 'Dec 20, 2017',
    author: 'Ram M',
    title: 'MINIMALISM IN JEWELRY!',
    description:
      'Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...',

    full: ` <div>
  <p>
  
  Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

  <h2> “Ridiculus mus mauris vitae ultricies leo.</h2>
  
  Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
 
</div>`,
  },
  {
    id: 3,
    inSidebar: 'no',
    alt: 'article 3',
    imageUrl: '/images/b3_600x.webp',
    category: 'Hair care',
    date: 'Sep 04, 2023',
    author: 'Daniel J. Green',
    title: 'THE SAUNA BATH AT THE SPA',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    full: `<div>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

“Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”

Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 

Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.

<h2>Massa vitae tortor condimentum lacinia quis vel eros donec ac. </h2>
Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuer
</div>`,
  },
  {
    id: 4,
    inSidebar: 'yes',
    alt: 'article 4',
    imageUrl: '/images/b4_600x.webp',
    category: 'Hair care',
    date: 'Jan 19, 2023',
    author: 'Ragnar Malento',
    title: 'THE LOOK YOU ALWAYS WANTED!',
    description:
      ' Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada...',
    full: `<div>
  <p>
  Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. 

  “Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  <h2>Sapien faucibus et molestie ac feugiat sed lectus. </h2>
  
  Sit amet consectetur adipiscing elit.  Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat.
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere.
  </p>
</div>`,
  },
  {
    id: 5,
    inSidebar: 'no',
    alt: 'article 5',
    imageUrl: '/images/b5_600x.webp',
    category: 'Beauty',
    date: 'Aug 15, 2023',
    author: 'Melissa Madeson',
    title: 'BEAUTY... IN EYES OF BEHOLDER',
    description:
      'Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales...',
    full: `<div>
  <p>
  Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. 

  “Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },
  {
    id: 6,
    inSidebar: 'yes',
    alt: 'article 6',
    imageUrl: '/images/b6_600x.webp',
    category: 'Cosmetics',
    date: 'Oct 19, 2023',
    author: 'Londi Ncube',
    title: 'SIMBA BEAUTY COSMETICS',
    description:
      'Nbis curabitur ullam ultr nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus...',
    full: `<div>
  <p>
  Nbis curabitur ullam ultr nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.

  <h2>“Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. </h2> Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },
  {
    id: 7,
    inSidebar: 'yes',
    alt: 'article 7',
    imageUrl: '/images/b7_600x.webp',
    category: 'Cream',
    date: 'Jun 29, 2023',
    author: 'Pete McCall ',
    title: 'STEAM BATH THERAPY @ SIMBA',
    description:
      'Tedes yum deriis juyoque gytatibus ot hytnis ous iouturient montes, tyucetur ridiculus mus. Donec quam felis...',
    full: `<div>
  <p>
  Tedes yum deriis juyoque gytatibus ot hytnis ous iouturient montes, tyucetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

  <h2>“Ridiculus mus mauris vitae ultricies leo. </h2>
  
  Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },
  {
    id: 8,
    inSidebar: 'no',
    alt: 'article 8',
    imageUrl: '/images/b8_600x.webp',
    category: 'Cosmetics',
    date: 'Mach 02, 2023',
    author: 'Nancy Clark',
    title: 'THE SHADES OF LIPSTICK',
    description:
      ' Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci....?',
    full: `    <div>
  <p>
  Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed posuere ac mattis non nunc. 

  “Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
 
   <h2>Sapien faucibus et molestie ac feugiat sed lectus. </h2>
  
  Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat.
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },
  {
    id: 9,
    inSidebar: 'no',
    alt: 'article 9',
    imageUrl: '/images/b9_600x.webp',
    category: 'Beauty',
    date: 'Mach 03, 2023',
    author: 'Ayanika Das',
    title: 'THE SOFT PETALS OF THE ROSES',
    description:
      'Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit...?',
    full: ` <div>
  <p>
  Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed posuere ac mattis non nunc. 

  <h2>“Ridiculus mus mauris vitae ultricies leo. </h2>
  
  Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere.
   </p>
</div>`,
  },
  {
    id: 10,
    inSidebar: 'no',
    alt: 'article 10',
    imageUrl: '/images/b12_70d30ad7-cd54-43bc-8550-37790c3cf87c_600x.webp',
    category: 'Hair care',
    date: 'Oct 27, 2023',
    author: 'Elle Turner',
    title: 'THE FACEPACK ACCESSORIES',
    description:
      ' Fames aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede...?',
    full: ` <div>
  <p>
  Fames aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. 

  <h2>“Ridiculus mus mauris vitae ultricies leo. </h2>g
  
  Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”
  
  Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. 
  
  Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.
  
  Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. 
  </p>
</div>`,
  },
 
];