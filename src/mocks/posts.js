const posts = [
    {
        title: 'Concepts of Redux',
        date: '12.10.2020',
        author: 'John Brown',
        authorID: 1,
        postID: 1,
        description: `The frustration that comes along with learning Redux is that it is very hard to get started. There are too many components that you have to set up before you are able to use it. I’m here to tell you that, it is simple. To understand Redux, we need to fully grasp the fundamental ideas behind it. For me, I like to think of Redux as a tool that is made up of three main ideas: store, actions, and reducers. Store Think of the store as a home for your entire application’s state. It is simply a plain JavaScript object that contains key-value pairs for any state that you would like to store. Actions Actions are plain JavaScript objects that describe the type of interaction that you would like to see happen. For example, SET_INCREMENT could be a type of action that increases the counter value. Or FETCH_USER_DATA could be another type of action. Again, it is a JavaScript object that describes what you would like to do.`,
        categories: ['Work']
    },

    {
        title: 'The Last of Us HBO Series Finds First Episode Director',
        date: '12.15.2020',
        author: 'John Brown',
        authorID: 1,
        postID: 2,
        description: 'This past March, HBO confirmed that its teaming up with Naughty Dog to make a Last of Us TV show - which will replace the long-planned film adaptation. Craig Mazin, creator of HBOs Chernobyl (and writer of the upcoming Borderlands movie, directed by Eli Roth and starring Cate Blanchett), is executive producing and writing the series alongside Naughty Dogs Neil Druckmann. In an interview with Discussing Film, Johan Renck, who won an Emmy for directing all five episodes of Chernobyl, confirmed he is on board to executive produce The Last of Us and direct "at least" the pilot episode. Renck has also directed episodes of Breaking Bad, Vikings, The Walking Dead, and Bates Motel. The Last of Us HBO Series: 8 Actors Who Could Play Joel and Ellie',
        categories: ['Work', 'Game']
    },

    {
        title: 'System of a Down',
        date: '10.02.2020',
        author: 'Nelly Shiver',
        authorID: 2,
        postID: 3,
        description: 'System of a Down (also known as SoaD or simply System) is an Armenian-American heavy metal band formed in Glendale, California, in 1994. It currently consists of members Serj Tankian (lead vocals, keyboards), Daron Malakian (guitar, vocals), Shavo Odadjian (bass, backing vocals), and John Dolmayan (drums), who replaced original drummer Andy Khachaturian in 1997. The band achieved commercial success with the release of five studio albums, three of which debuted at number one on the US Billboard 200. System of a Down has been nominated for four Grammy Awards and their song "B.Y.O.B." won a Grammy Award for Best Hard Rock Performance in 2006. The band went on hiatus in 2006 and reunited in 2010. Other than two new songs in 2020 ("Protect the Land" and "Genocidal Humanoidz"),[2] System of a Down has not released a full-length record since the Mezmerize and Hypnotize albums in 2005. The band has sold over 40 million records worldwide, while two of their singles "Aerials" and "Hypnotize" reached number one on Billboards Alternative Songs chart.',
        categories: ['Music', 'Sport']
    },

    {
        title: 'useHistory',
        date: '10.05.2020',
        author: 'Nelly Shiver',
        authorID: 2,
        postID: 4,
        description: 'The useHistory hook gives you access to the history instance that you may use to navigate.',
        categories: ['Work', 'Music']
    },

    {
        title: 'useLocation',
        date: '01.08.2021',
        author: 'Peter Power',
        authorID: 3,
        postID: 5,
        description: 'The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.',
        categories: ['Work', 'Game']
    },

    {
        title: 'Quick Start',
        date: '01.20.2021',
        author: 'Jessy Lodcer',
        authorID: 4,
        postID: 6,
        description: 'To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.',
        categories: ['Work', 'Movie']
    },

    {
        title: 'Installation',
        date: '12.13.2020',
        author: 'Jessy Lodcer',
        authorID: 4,
        postID: 7,
        description: 'You can install React Router from the public npm registry with either npm or yarn. Since we’re building a web app, we’ll use react-router-dom in this guide.',
        categories: ['Work', 'Sport']
    },
];

export default posts;