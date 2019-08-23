const blocksConfig = [
  {
    type: 'section',
    text: {
        type: 'mrkdwn',
        text: ':glasgow: Welcome to Awesome PQ :glasgow: A guide for things to do around PQ and Glasgow! \n Please choose what you are interested in for more details.',
    }
  },
  {
		type: 'divider',
	},
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
        value: 'drink_coffee',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':bowling:',
          emoji: true,
        },
        value: 'do_things',
      },
    ],
  },
];

module.exports = {
  blocksConfig,
};
