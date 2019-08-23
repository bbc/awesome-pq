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

module.exports = {
  eat,
};
