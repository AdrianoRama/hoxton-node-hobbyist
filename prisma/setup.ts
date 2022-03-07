import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
    {
        fullName: 'Roger Federer',
        email: 'foundation@rogerfederer.com',
        photoURL: 'https://i.pinimg.com/originals/9f/8e/85/9f8e85c302efe60d4713d997c23f514b.jpg',
        hobbies: {
            create: [
                {
                    name: 'Tennis',
                    imageURL: 'https://greatbritishmag.co.uk/wp-content/uploads/2018/06/10-facts-about-Wimbledon.jpg',
                    active: true
                }
            ]
        }
    },
    {
        fullName: 'Ye',
        email: 'contact@yeezymafia.com',
        photoURL: 'https://pagesix.com/wp-content/uploads/sites/3/2021/10/kanye-name-change.jpg?quality=80&strip=all&w=618&h=410&crop=1',
        hobbies: {
            create: [
                {
                    name: 'Music',
                    imageURL: 'https://cdn.smehost.net/2019sonymusiccom-smeprod/wp-content/uploads/2021/01/Yo-Yo-Ma-1340x475.jpg',
                    active: true
                }
            ]
        }
    },
    {
        fullName: 'Hans Zimmer',
        email: 'contact@hanszimmer.com',
        photoURL: 'https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/1531/photograph_960.jpg',
        hobbies: {
            create: [
                {
                    name: 'Music',
                    imageURL: 'https://cdn.smehost.net/2019sonymusiccom-smeprod/wp-content/uploads/2021/01/Yo-Yo-Ma-1340x475.jpg',
                    active: true
                }
            ]
        }
    },
    {
        fullName: 'Rafael Nadal',
        email: 'contact@rafaelnadalfans.com',
        photoURL: 'https://i.insider.com/5b112eda1ae66218008b46db?width=1136&format=jpeg',
        hobbies: {
            create: [
                {
                    name: 'Tennis',
                    imageURL: 'https://greatbritishmag.co.uk/wp-content/uploads/2018/06/10-facts-about-Wimbledon.jpg',
                    active: true
                }
            ]
        }
    },
    {
        fullName: 'Elon Musk',
        email: 'contact@elonmusk.com',
        photoURL: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/7727/production/_103330503_musk3.jpg',
        hobbies: {
            create: [
                {
                    name: 'Meditation',
                    imageURL: 'https://www.psypost.org/wp-content/uploads/2021/07/meditation.jpg',
                    active: true
                }
            ]
        }
    }
]

async function createSomething() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
}

createSomething()