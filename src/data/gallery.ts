import type { Photo } from '../types'

// Free photos from Wikimedia Commons, resized to 1600px. Each one credits its photographer and license.
export const gallery: Record<string, Photo[]> = {
  'koenigsegg-agera': [
    {
      src: 'cars/gallery/koenigsegg-agera-1.webp',
      caption: 'Agera One:1',
      author: 'MrWalkr',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Koenigsegg_Agera_One1.jpg',
    },
    {
      src: 'cars/gallery/koenigsegg-agera-2.webp',
      caption: 'Agera R',
      author: 'Calreyn88',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Koenigsegg_Agera_R_(12490).jpg',
    },
    {
      src: 'cars/gallery/koenigsegg-agera-3.webp',
      caption: 'Agera R from behind',
      author: 'Calreyn88',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Koenigsegg_Agera_R_(56247).jpg',
    },
    {
      src: 'cars/gallery/koenigsegg-agera-4.webp',
      caption: 'Agera S badge',
      author: 'Calreyn88',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:2012_Koenigsegg_Agera_S_(36310).jpg',
    },
  ],
  'apollo-ie': [
    {
      src: 'cars/gallery/apollo-ie-1.webp',
      caption: 'IE Purple Dragon',
      author: 'TaurusEmerald',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:2022_Apollo_Intensa_Emozione_Purple_Dragon_Petersen_Automotive_Museum.jpg',
    },
    {
      src: 'cars/gallery/apollo-ie-2.webp',
      caption: 'IE on track at Suzuka',
      author: 'Fujitaka Daidoji',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Apollo_IE_Suzuka.jpg',
    },
    {
      src: 'cars/gallery/apollo-ie-3.webp',
      caption: 'IE Golden Dragon',
      author: 'Kevauto',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Apollo_Intensa_Emozione_(IE)_Golden_Dragon,_front_2.1.20.jpg',
    },
    {
      src: 'cars/gallery/apollo-ie-4.webp',
      caption: 'IE Golden Dragon from behind',
      author: 'Kevauto',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Apollo_Intensa_Emozione_(IE)_Golden_Dragon,_rear_2.1.20.jpg',
    },
  ],
  'pagani-zonda-r': [
    {
      src: 'cars/gallery/pagani-zonda-r-1.webp',
      caption: 'Zonda R at Geneva',
      author: 'Matthias from Västerås, Sweden',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Pagani_Zonda_R_II_(3354754922).jpg',
    },
    {
      src: 'cars/gallery/pagani-zonda-r-2.webp',
      caption: 'Zonda R with gold wheels',
      author: 'Alexandre Prevot from Nancy, France',
      license: 'CC BY-SA 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Pagani_Zonda_R_(54360962420).jpg',
    },
    {
      src: 'cars/gallery/pagani-zonda-r-3.webp',
      caption: 'Zonda R side view',
      author: 'Matthias from Västerås, Sweden',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Pagani_Zonda_R_I_(3354743986).jpg',
    },
    {
      src: 'cars/gallery/pagani-zonda-r-4.webp',
      caption: 'Zonda R engine badge',
      author: 'Brian Snelson from Hockley, Essex, England',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Pagani_Zonda_R_motif_-_Flickr_-_exfordy_(1).jpg',
    },
  ],
  'lamborghini-urus-mansory': [
    {
      src: 'cars/gallery/lamborghini-urus-mansory-1.webp',
      caption: 'Urus Mansory Venatus',
      author: 'Calreyn88',
      license: 'CC BY 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_Mansory_Venatus.jpg',
    },
    {
      src: 'cars/gallery/lamborghini-urus-mansory-2.webp',
      caption: 'Venatus rear wing',
      author: 'Calreyn88',
      license: 'CC BY 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_Mansory_Venatus_1.jpg',
    },
    {
      src: 'cars/gallery/lamborghini-urus-mansory-3.webp',
      caption: 'Venatus in matte black',
      author: 'Calreyn88',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_Mansory_Venatus_3.jpg',
    },
    {
      src: 'cars/gallery/lamborghini-urus-mansory-4.webp',
      caption: 'Holographic Venatus',
      author: 'Alexandre Prevot from Nancy, France',
      license: 'CC BY-SA 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_Mansory_Venatus_(53125089791).jpg',
    },
  ],
}
