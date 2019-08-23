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
                '*The Park Bar*\n Great live music pub, might bump into a star or two...',
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

module.exports = {
    eat,
    drink,
};
