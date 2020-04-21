module.exports = {
    title: 'TheSourceCode Education',
    description: 'Documents site',
    themeConfig:{
        
        nav:[
        {text: 'Home', link: '/'},
        {text: 'About', link: '/about/'},
        {text: 'Topics', link: '/topics/'},
        {text: 'Donate', link: '/Donate/'},
        {text: 'Discord', link: 'https://discord.thesourcecode.dev'},
        ],
        sidebarDepth: 10,
        sidebar: {
        
            '/topics/': [
                '',
                'Spigot',
                'Discordjs'
            ]
        },
        "scripts": {
            "docs:build": "vuepress build docs"
          }
    }
}