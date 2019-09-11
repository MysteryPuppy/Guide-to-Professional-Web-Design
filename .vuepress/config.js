module.exports = {
    title: 'Guide to Professional Web Design',
    description: 'Make websites that look good inside and out',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
        //sidebar: 'auto'
        sidebarDepth: 2,
        sidebar: {
            '/guide/': [
                '',
                'Before You Code',
                'Styling Conventions & Coding'
            ]
        }
    }
}
