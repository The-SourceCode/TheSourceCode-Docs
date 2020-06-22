module.exports = {
    title: 'TheSourceCode Education',
    description: 'High quality and up to date tutorials covering Spigot plugin development, Discord.js Bot development, and so much more!',
    themeConfig:{
        nav:[
        {text: 'Home', link: '/'},
        {text: 'About', link: '/about/'},
        {text: 'Topics', link: '/topics/'},
        {text: 'Github', link: 'https://github.com/The-SourceCode/TheSourceCode-Docs'},
        {text: 'Donate', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WMRPWPN4R7TK4&source=url'},
        {text: 'Discord', link: 'https://discordapp.com/invite/w24CQMR'},
        ],
        sidebarDepth: 10,
        sidebar: {
        
            '/topics/': [
                '',
                'Spigot',
                'Discordjs'
            ]
        }
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-170323482-1'
          }
        ]
      ]
    
}
