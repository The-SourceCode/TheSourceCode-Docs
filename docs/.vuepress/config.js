module.exports = {
    title: 'TheSourceCode Education',
    description: 'High quality and up to date tutorials covering Spigot plugin development, Discord.js Bot development, and so much more!',
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
        }
    }
}