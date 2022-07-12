import * as imgs from './imgSrc';

const dummyData = {
    myInfo: [
        {
            id: 1,
            title: 'name',
            info: 'Hasan Al Mamun',
        },
        {
            id: 2,
            title: 'post',
            info: 'Frontend Developer',
        },
        {
            id: 6,
            title: 'work time',
            info: '24/7',
        },
        {
            id: 3,
            title: 'city',
            info: 'Dhaka',
        },
        {
            id: 4,
            title: 'country',
            info: 'Bangladesh',
        },
        {
            id: 5,
            title: 'religion',
            info: 'Islam',
        },
        {
            id: 7,
            title: 'language',
            info: 'Bangla , English , Hindi',
        },
        {
            id: 8,
            title: 'birhtday',
            info: '19 March 2000',
        },
    ],

    navbar: [
        {
            id: 1,
            url: '/',
            text: 'home',
        },
        {
            id: 2,
            url: '/services',
            text: 'services',
        },

        {
            id: 3,
            url: '/projects',
            text: 'projects',
        },
        {
            id: 4,
            url: '/faq',
            text: 'faq',
        },
        {
            id: 6,
            url: '/blog',
            text: 'blog',
        },
        {
            id: 7,
            url: '/chat',
            text: 'chat',
        },
        {
            id: 8,
            url: '/contact',
            text: 'contact',
        },
    ],
    education: [
        {
            year: 2017,
            subject: 'business studies',
            institute: 'cantonment board high school ,ghatail ',
        },
        {
            year: 2018,
            subject: 'humanities',
            institute: 'notre dame college , dhaka',
        },
        {
            year: 2019,
            subject: 'basic HTML and CSS',
            institute: 'book & youtube...',
        },
        {
            year: 2020,
            subject: 'advance HTML5 , CSS  , also learn basic JavaScript',
            institute: ' book, youtube & google...',
        },
        {
            year: 2021,
            subject: 'itermidiate level JavaScript , webpack & basic react.js',
            institute: ' book , youtube & google...',
        },
        {
            year: 2022,
            subject:
                'itermidiate level JavaScript & react.js also responsive website design',
            institute: ' book, youtube & google...',
        },
        {
            year: 2022,
            subject: 'still learnging ...',
            institute: ' book,youtube & google...',
        },
    ],
    company: imgs.company,

    testimonials__carousel: [
        {
            id: 1,
            img: imgs.img.p4,
            active: true,
            name: 'Patric',
            work: 'web developer',
            message: `Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 2,
            img: imgs.img.p10,
            active: false,
            name: 'jonh smilga',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 3,
            img: imgs.img.p3,
            active: false,
            name: 'sumit',
            work: 'react developer',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 4,
            img: imgs.img.p7,
            active: false,
            name: 'mitsuha',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 5,
            img: imgs.img.p8,
            active: false,
            name: 'david',
            work: 'CEO & founder',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 6,
            img: imgs.img.p5,
            active: false,
            name: 'hasina',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 7,
            img: imgs.img.p6,
            active: false,
            name: 'angelina',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 8,
            img: imgs.img.p1,
            active: false,
            name: 'daki',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 9,
            img: imgs.img.p2,
            active: false,
            name: 'ibrahim',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 10,
            img: imgs.img.p9,
            active: false,
            name: 'nazuka',
            work: 'web desinger',
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
    ],

    questions: [
        {
            id: 1,
            title: 'Do I have to allow the use of cookies?',
            info: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
        },
        {
            id: 2,
            title: 'How do I change my My Page password?',
            info: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
        },
        {
            id: 3,
            title: 'What is BankID?',
            info: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
        },
        {
            id: 4,
            title: 'Whose birth number can I use?',
            info: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
        },
        {
            id: 5,
            title: 'When do I recieve a password ordered by letter?',
            info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
        },
        {
            id: 6,
            title: 'When do I recieve a password ordered by letter?',
            info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
        },
        {
            id: 7,
            title: 'What is BankID?',
            info: `Enamel\n pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it,
		lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.Lorem ipsum,
		 dolor sit amet consectetur adipisicing elit. Sit nostrum culpa possimus officia\n
			iste itaque, reprehenderit ipsum totam vel error, dolor eum labore veritatis. Consectetur,
			impedit repellat, ad explicabo natus odio sint blanditiis eveniet enim culpa obcaecati minima,
			asperiores sapiente omnis iste ut? Temporibus quis omnis iste atque. Dicta ut ad hic
			voluptatibus cupiditate aperiam adipisci doloremque ratione saepe voluptatum! Ab unde nobis
			debitis nihil temporibus ea reprehenderit aut ipsam quos suscipit cumque beatae dolore
			ratione, iure corrupti commodi, delectus sunt ullam laborum repellat at nam, magni inventore!
			Minima consectetur molestiae optio molestias nobis odio, iste quaerat officiis dolores sed.`,
        },
    ],
    projects: [
        {
            id: 1,
            name: 'Netflix Clone',
            subTitle: 'Clonning Netflix',
            img: imgs.img.portfolio1,
            img2: imgs.img.portfolio6,
            img3: imgs.img.portfolio5,
        },
        {
            id: 2,
            name: 'Facebook Clone',
            subTitle: 'Clonning Facebook',
            img: imgs.img.portfolio3,
        },
        {
            id: 3,
            name: 'Slack Clone',
            subTitle: 'Clonning Slack',
            img: imgs.img.portfolio4,
        },
        {
            id: 4,
            name: 'Spotify Clone',
            subTitle: 'Clonning Spotify',
            img: imgs.img.portfolio6,
        },
        {
            id: 5,
            name: 'Youtube Clone',
            subTitle: 'Clonning Youtube',
            img: imgs.img.portfolio8,
        },
    ],
    post: [
        {
            id: 1,
            postImg: imgs.img.yourici,
            postImg2: imgs.img.my,
            active: true,
            message: 'AWESOME !',
        },
        {
            id: 2,
            postImg: imgs.img.portfolio2,
            active: false,
        },
        {
            id: 3,
            postImg: imgs.img.portfolio3,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 4,
            postImg: imgs.img.portfolio4,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 5,
            postImg: imgs.img.portfolio5,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 6,
            postImg: imgs.img.portfolio6,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 7,
            postImg: imgs.img.portfolio1,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 8,
            postImg: imgs.img.portfolio7,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
        {
            id: 9,
            postImg: imgs.img.portfolio8,
            active: false,
            message: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Repellendus, praesentium.
		Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium.`,
        },
    ],
};

// const datas = Promise.resolve(JSON.stringify(data));
const data = new Promise((resolve, reject) => {
    try {
        resolve(JSON.stringify(dummyData));
    } catch {
        reject(console.error('opps !'));
    }
});

export default data;
