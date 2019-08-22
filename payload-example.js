const payloadExample = {
  type: 'block_actions',
  team: {
    id: 'T50PPK54Z',
    domain: 'bbc-dande',
    enterprise_id: 'E7FKN432R',
    enterprise_name: 'BBC',
  },
  user: {
    id: 'WA1HQHJQL',
    username: 'adroha01',
    name: 'adroha01',
    team_id: 'T50PPK54Z',
  },
  api_app_id: 'AMLATF69J',
  token: '5EFjNI7RNym8ruNcLQZb2vy4',
  container: {
    type: 'message',
    message_ts: '1566485859.011700',
    channel_id: 'GM98K9Z34',
    is_ephemeral: true,
  },
  trigger_id: '728656094353.170805651169.bbd9415cbc96258106a2af78f817e532',
  channel: { id: 'GM98K9Z34', name: 'privategroup' },
  response_url:
    'https://hooks.slack.com/actions/T50PPK54Z/735041526949/32tV1B1I9gUurmVXal76gs3X',
  actions: [
    {
      action_id: '8Cc6T',
      block_id: '9Chi',
      text: [Object],
      value: 'drink',
      type: 'button',
      action_ts: '1566485917.261215',
    },
  ],
};

module.export = {
  payloadExample,
};
