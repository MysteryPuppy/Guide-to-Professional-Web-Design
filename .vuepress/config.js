module.exports = {
    title: 'Guide to Professional Web Design',
    description: 'How to make websites that look good inside and out',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
        //sidebar: 'auto'
        sidebar: {
            '/guide/': [
                '',
                'Before You Code'
            ]
        }
    }
}
