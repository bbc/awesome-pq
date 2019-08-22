const blocksConfig = [
  {
    type: 'actions',
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':knife_fork_plate:',
          emoji: true,
        },
        value: 'eat',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':beers:',
          emoji: true,
        },
        value: 'drink',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':coffee:',
          emoji: true,
        },
        value: 'drink-coffee',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':bowling:',
          emoji: true,
        },
        value: 'do-things',
      },
    ],
  },
];

module.exports = {
  blocksConfig,
};