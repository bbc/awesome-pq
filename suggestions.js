const eat = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'These are the places you can have dinner tonight: \n',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        '*Paesano Pizza*\n Wood-fired, artisan pizzas from open kitchen in industrial space with wall tiles and sharing tables.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://lh5.googleusercontent.com/p/AF1QipNiS5JmN3ZIOhdeK5AnzFEIDXfKkJVM8BGQztmV=w408-h306-k-no',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Lazord Syrian Street Food*\n Lovely Kebabs.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://lh5.googleusercontent.com/p/AF1QipMNmDtora70ph5k2-WD_1wr7ixTTWhPD6lNBfRL=w408-h544-k-no',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Silla Korean Restaurant*\n Korean Restaurant.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://lh5.googleusercontent.com/p/AF1QipMYVVPvaEfES_AGw497bLGVptYJ_cj1wkLxqJ9w=w408-h544-k-no',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'divider',
  },
];

const drink = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'These are the places you can have a drink tonight: \n',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        '*<https://goo.gl/maps/mjk4nPHHyQH2|The Park Bar>*\n Great live music pub, might bump into a star or two...',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://b.zmtcdn.com/data/pictures/5/7700645/42cc94cd74b492cd424e9e8c51c392d4_featured_v2.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Old Toll Bar*\n Nice pub with a good selection of drinks.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://705628.smushcdn.com/1130679/wp-content/uploads/2016/12/old-toll-interior.jpg?lossy=1&strip=1&webp=1',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*The Ben Nevis*\n Great whisky pub.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://static.designmynight.com/uploads/2013/04/The-Ben-Nevis-Glasgow-pubs-optimised.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Dukes*\n Nae food, nae faff.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://media-cdn.tripadvisor.com/media/photo-s/05/6f/ac/fe/dukes-bar-glasgow.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'divider',
  },
];

const drink_coffee = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'For good coffee around the city, see below:',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        '*Laboratorio Espresso*\n Small, relaxed outpost serving coffee drinks, sandwiches, hot specials, pastries & baked goods.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://archello.s3.eu-central-1.amazonaws.com/images/2016/07/08/Image-1--DO-Architecture.1506081511.4308.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        "*Gordon Street Coffee*\n Great coffee while you're waiting your train.",
    },
    accessory: {
      type: 'image',
      image_url:
        'https://lh5.googleusercontent.com/p/AF1QipMKV3cnxxITIcJdO_Y1PoqFzykXfv9ZhzRDWAnY=w408-h306-k-no',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        '*Riverhill Coffee Bar*\n Low-key cafe with bar seating serving sandwiches, hot specials and homemade cakes and pastries.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://lh5.googleusercontent.com/p/AF1QipOFl7pC8qtHDkFY29ywb1gUomWihEndeAnNlGns=w408-h306-k-no',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'divider',
  },
];

const do_things = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'These are the places where you can do things tonight: \n',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Ryze*\n Trampoline centre',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://s3-media3.fl.yelpcdn.com/bphoto/xxRLlCylzTUyT8by3mdyDA/o.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Odeon Luxe Glasgow Quay*\n Cinema with fancy seats.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://i1.wp.com/www.glasgowist.com/wp-content/uploads/2019/05/ODEON-Luxe-Glasgow-Quay_3.jpg?fit=1024%2C683&ssl=1',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        '*Glasgow Climbing Center (GCC)*\n Traditional wall climbing in a converted church.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://images.itison.com/system/201301/13524/1378882282/original.jpg?w=572&h=378',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*The Climbing Academy (TCA)*\n Bouldering.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://images.itison.com/system/201312/28466/1387444634/original.jpg?w=572&h=378',
      alt_text: 'alt text for image',
    },
  },
  //  {
  //     type: 'section',
  //     text: {
  //         type: 'mrkdwn',
  //         text: '*Bellahouston Dry Ski Slope*\n Dry ski slope.',
  //     },
  //     accessory: {
  //         type: 'image',
  //         image_url:
  //             'https://media-cdn.tripadvisor.com/media/photo-s/04/b0/b9/9e/getlstd-property-photo.jpg',
  //         alt_text: 'alt text for image',
  //     },
  //  },
  // {
  //     type: 'section',
  //     text: {
  //         type: 'mrkdwn',
  //         text: '*Hollywood Bowl*\n Bowling.',
  //     },
  //     accessory: {
  //         type: 'image',
  //         image_url:
  //             'https://media-cdn.tripadvisor.com/media/photo-s/06/f6/42/36/amf-bowling.jpg',
  //         alt_text: 'alt text for image',
  //     },
  // },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Lighthouse*\n Free tower to view some Glasgow skyline.',
    },
    accessory: {
      type: 'image',
      image_url:
        'http://pagepark.co.uk/wp/wp-content/uploads/2018/01/the-lighthouse-15-1024x698.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*GOMA*\n If modern arts yer hing.',
    },
    accessory: {
      type: 'image',
      image_url:
        'https://prodglportalv2.azureedge.net/cache/0/4/8/5/f/3/0485f37faf2e38f0df5b4ba92307ed7c910b567d.jpg',
      alt_text: 'alt text for image',
    },
  },
  {
    type: 'divider',
  },
];

module.exports = {
  eat,
  drink,
  drink_coffee,
  do_things,
};
