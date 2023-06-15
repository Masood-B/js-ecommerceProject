let products = JSON.parse(localStorage.getItem('product-list')) ? 
    JSON.parse(localStorage.getItem('product-list')) :
    localStorage.setItem('product-list', JSON.stringify(
        [
        {
        id: 1,
        name:"Monster Musume no Iru Nichijou",
        price: 400,
        picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
        description: "In Asaka, Saitama, Kimihito Kurusu is a normal student who initially has no connection to the exchange program. However, when coordinator Kuroko Smith delivers the very scared and embarrassed Miia to his door by mistake, he cannot bring himself to send her away and allows her to live at his home, taking advantage of his parents' extended absence. As the story continues, Kimihito meets and gives shelter to other female liminals, each of a different species. Some arrive more or less by accident, while others are forced upon him by Smith or simply insinuate themselves into the house. Before long, Kimihito finds himself in a hectic environment, struggling to live in harmony with his new housemates while dealing with both their constant affectionate/romantic advances and the dramas of helping them get along in the human world. The situation takes on a new twist after he is told that because of expected changes in the law dealing with human-liminal relationships, he is expected to marry one of the girls as a test case, thus increasing their competition for his attention. However, as time passes, other liminal girls become attracted to him and begin to vie for his attention, much to Kimihito's embarrassment and the annoyance of his housemates.",
        date: new Date(),
        
        },
        {
        id: 2,
        name: "No Game No Life",
        price: 500,
        picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
        description: "Sora and Shiro are two hikikomori stepsiblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard. There, a spell known as the Ten Covenants prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia, the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia's decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard's other species as humanity's representative. Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control.",
        date: new Date()
        },
        {
        id: 3,
        name:"Yuragi-sou no Yuuna-san",
        price: 300,
        picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
        description: "The series follows the life of the luckless and homeless high school student Kogarashi Fuyuzora. In his search for a home, he is introduced to the Yuragi Inn, a cheap boarding house and former hot springs inn. The reason the rent is so cheap is because it is haunted by the beautiful ghost spirit Yuuna whose corpse was discovered at the inn. Kogarashi then helps Yuuna with her unfinished business, all while discovering the supernatural secrets of the rest of the female tenants.",
        date: new Date()
        },
        {
        id: 4,
        name:"Saikin Yatotta Maid ga Ayashii",
        price: 350,
        picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
        description: "The maid Lilith, hired to look after young Yuuri and his family's mansion, seems highly suspicious: she is too good to be true. Every dish she serves turns out to be delicious, the whole residence sparkles after she cleans it, and all the clothing has given off a pleasant scent since she started doing the laundry. Furthermore, her devilishly beautiful eyes only serve to heighten Yuuri's suspicions. Is Lilith perhaps a witch or a sorcerer? Yuuri cannot figure it out. But despite his misgivings, Yuuri has to live with Lilith as he tries to unravel the mystery behind her otherworldly charm.",
        date: new Date()
        },
        {
        id: 5,
        name:"Mato Seihei no Slave",
        price: 450,
        picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
        description: "After his high school graduation, Yuuki Wakura realizes it has been five years since his sister's disappearance during a Mato disaster. Throughout Japan, mysterious entrances have opened to a dimension called Mato a demonic metropolis filled with disastrous monsters known as the Shuuki that threaten the safety of humans. However, a new hope arose, as the discovery of a Mato fruit that grants supernatural abilities exclusively to women allowed them to fight against the Shuuki. Due to this, a new matriarchal government was formed, establishing a female organization called the Anti-Demon Corps, which caused men to fall to the bottom of society. When Yuuki suddenly finds himself in Mato, he is unable to escape on his own. But just as he anticipates a gruesome end by the Shuuki, a girl in a militia outfit appears and protects him. As the chief of the Seventh Unit of the Anti-Demon Corps, Kyouka Uzen is ambitious yet devalued by her own peers due to her power being deemed unusual. Now in a life-or-death situation, Kyouka takes the opportunity to find out the true potential of her superpower by using Yuuki: in order to defeat the Shuuki, he has to become her slave.",
        date: new Date()
        },
        {
        id: 6,
        name:"To Love Ru Darkness",
        price: 450,
        picture:"https://i.postimg.cc/Fs6B882b/to-love-ru-darkness-vol-1.jpg",
        description: "Rito Yuuki remains unsuccessful and indecisive with his love for his crush, Haruna Sairenji, and the alien princess, Lala Satalin Deviluke. Meanwhile, Lala's little sister Momo also falls in love with Rito and works on building a harem for him in hopes of giving herself a place in Rito's love life. To do so she enrolls in his school to secretly support all of Rito's love interests and even attempts to find him more, including the recently enrolled alien assassin Konjiki no Yami, also known as Yami, who puts off her next bounty because of him. However, Kurosaki Mea, Yami's little sister, intends for Yami to return to being an assassin.",
        date: new Date()
        },
        {
        id: 7,
        name:"Keijo!!!!!!!!",
        price: 450,
        picture:"https://i.postimg.cc/Y9CWYrtQ/Volume-10.webp",
        description: "Keijo, a new form of gambling sport, has taken Japan by storm. While standing on floating circular platforms, players must defeat their opponents by using only their breasts and buttocks. Drawn into this female-only sport in hopes of making a fortune and escaping poverty, 17-year-old Nozomi Kaminashi decides to abandon her gymnastics career to apply for the Setouchi Keijo Training School alongside Sayaka Miyata, her new friend and former judo athlete. In the upcoming exam, the girls will have to utilize the utmost of their abilities to qualify as students of the school. With only the final goal in mind, Nozomi and Sayaka steel themselves to compete against participants from all over the country.",
        date: new Date()
        },
        {
        id: 8,
        name:"Medoka Box ",
        price: 450,
        picture:"https://i.postimg.cc/SQV9Sz7V/Volume16.webp",
        description: "Kurokami Medaka, a first year, is elected as Student Council President, and the first thing she does is establish a suggestion box, later dubbed by students the Medaka Box. Medaka encourages students to submit any problem to the box without hesitation and promises to take on any issue from anyone. Since Medaka won the Student Council elections with a staggering 98% of the vote, she ends up as the Council's only member. She asks her childhood friend, Hitoyoshi Zenkichi, for help and he grudgingly agrees, becoming the Student Council's lowest ranking member. Soon Medaka recruits two more people to the Student Council, the former judo club member Akune Kouki as secretary and the current swim club member Kikaijima Mogana, on loan for 300 yen a day, as treasurer. Now the Student Council members spend their days solving the problems submitted through the Medaka Box, whether they be hooligans in clubs where they don't belong, girls who need help writing love letters or people who've lost their pets, gradually earning the respect and admiration of the entire school.",
        date: new Date()
        },
        {
        id: 9,
        name:"Is It Wrong to Try to Pick Up Girls in a Dungeon",
        price: 450,
        picture:"https://i.postimg.cc/T1pccY2z/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-6-manga-2.jpg",
        description: "The huge labyrinth city, Orario, is the gateway to the huge underground maze commonly known as the Dungeon. Its strange name causes excitement, a place to gain honor, and maybe even a romance with a pretty girl. A place where people hold their breath, hoping to gain all they wish for, a place where a solitary young man meets a little god... The fated meeting of a boy who wants to become an adventurer, and the failed god who doesn't even have a single follower.",
        date: new Date()
        },
        {
        id: 10,
        name:"Rosaria + Vampire",
        price: 450,
        picture:"https://i.postimg.cc/s2m9dZMF/Getimage-aspx.webp",
        description: "Aono Tsukune is so hard up on luck, that he can't even get admitted into high school. His parents finally find him a school with no tests required for admittance, out in the middle of nowhere. He finds out the school is a youkai (monster) academy, Just as he is about to resign himself and get back on the bus home, he bumps into a beautiful girl. Turns out this beautiful girl, Akashiya Moka, is also a vampire who bites him right off the bat. They become friends and Tsukune is ready for a happy school life with her, until he finds out that if a human is found on the school grounds, he or she should be killed. Now Tsukune must conceal his identity from the rest of the monsters at school, while at the same time being a ready snack for Moka when ever the urge takes her. What effect will this have on Tsukune and will Moka be able to keep him out of harm's way?",
        date: new Date()
        },
        {
        id: 11,
        name:"Food Wars!",
        price: 450,
        picture:"https://i.postimg.cc/9XKPh2Qf/food-wars-shokugeki-no-soma-vol-26-9781974701018-hr.jpg",
        description: "Fifteen-year-old Souma Yukihira dreams to one day surpass his father's cooking skills and take over as the chef of their small family diner. However, his aspirations come to a halt when his father announces the closure of their restaurant, as he must travel abroad for cooking-related business. In the meantime, Souma is urged by his father to attend Tootsuki Culinary Academy: a world-renowned school where expulsions of incompetent students are commonplace. Due to the curriculum's rigor, any student that manages to graduate is recognized as a chef of great caliber. Reluctantly agreeing to the proposition, Souma heads to Tootsuki's high school division for the entrance exam. Little does he know, he will soon begin a new chapter of his life—one that entails new friends, daring rivalries, and sleepless nights",
        date: new Date()
        },
        {
        id: 12,
        name:"Air Gear",
        price: 450,
        picture:"https://i.postimg.cc/tRKvpwq9/air-gear-28.jpg",
        description: "Itsuki Minami needs no introduction—everybody's heard of the Babyface of the Eastside. He's the toughest kid at Higashi Junior High School, easy on the eyes but dangerously tough when he needs to be. Plus, Itsuki lives with the mysterious and sexy Noyamano sisters. Life is never dull, but it becomes dangerous when Itsuki leads his school to victory over some vindictive Westside punks with gangster connections. Now he stands to lose his school, his friends, and everything he cares about. But in his darkest hour, the Noyamano girls come to Itsuki's aid. They can teach him a powerful skill that will save their school from the gangsters' siege and introduce Itsuki to a thrilling and terrifying new world.",
        date: new Date()
        },
        {
        id: 13,
        name:"Kimi No Iru Machi",
        price: 450,
        picture:"https://i.postimg.cc/DzwBxKgP/9784063950298-us.jpg",
        description: "Haruto Kirishima has been living a quiet life in his countryside town in Hiroshima until Yuzuki Eba—a mysterious city girl— suddenly starts living with him at his house. A bright and whimsical personality, Yuzuki has left her life in Tokyo for the tranquil town she warmly remembers from her childhood, and barges into Haruto's life. Finding himself in an awkward situation, Haruto must now tolerate spending his high school days alongside this clumsy, freeloading klutz. However, as their relationship deepens, his heart slowly wavers between Yuzuki and his not-so-secret infatuation—his classmate, Nanami Kanzaki. Life in the countryside may be slow and simple, but the troubles that await Haruto are as complex as a city skyline. Relying on the irrefutable unpredictability of time, Kimi no Iru Machi illustrates how a single day can unexpectedly bring strangers together while another can abruptly break them apart.",
        date: new Date()
        },
        {
        id: 14,
        name:"High School of The Dead",
        price: 450,
        picture:"https://i.postimg.cc/GpgzNSgw/9780316282598_p0_v1_s1200x630.jpg",
        description: "On a normal day, mindless, flesh-eating zombies suddenly appear and send society into anarchy. In Fujimi Academy, second-year high school student Takashi Komuro witnesses these beasts' murderous nature firsthand. He flees to the roof with friends Rei Miyamoto and Hisashi Igou, only to discover the harrowing reality of their zombie-overrun world. In High School of the Dead, Takashi and Rei must now rely on a band of eccentric individuals composed of: Saeko Busujima, the kendo club president; Saya Takagi, a wealthy genius; Shizuka Marikawa, their voluptuous school nurse; and Kouta Hirano, a firearm-obsessed otaku. Together they must defy all odds and survive against the horrifying undead.",
        date: new Date()
        },
        {
        id: 15,
        name:"Love Hina",
        price: 450,
        picture:"https://i.postimg.cc/zBLp1S4L/1851952-09.jpg",
        description: "It is said that if a couple gets into the University of Tokyo together, they will live happily ever after. However, for Keitarou Urashima, UTokyo is a distant dream. After failing the entrance exams twice already, he decides to stay at his grandmother's inn in Tokyo in order to prepare for his third attempt. He is, therefore, surprised when he finds out that not only has his grandmother gone on a long vacation, but the inn has also become the Hinata House, an all-girls dormitory! Unfortunately for Keitarou, a series of misunderstandings during his first visit leave him with five untrusting tenants. But when Haruka Urashima, his aunt who works at the dorm, brings up that he is supposedly a UTokyo student, the girls' impressions of him quickly change, and they reluctantly allow him to stay. Feeling guilty about the lie, he slowly gets to know his new neighbors: the cute yet violent Naru Narusegawa, the cheeky and opportunistic Mitsune Konno, the soft-spoken Shinobu Maehara, the straight-laced Motoko Aoyama, and the mischievous Kaolla Su. Thus continues the unpopular Keitarou's difficult journey to get into UTokyo, all for the chance to fulfill his childhood promise to the only girl who has ever shown any interest in him and maybe, just maybe, meet her again...",
        date: new Date()
        }
    ]
    
    )) ;

let sortbutton = document.querySelector(".sort")
sortbutton.innerHTML = `
<button class="btn" id="sorting">Sort Price</button>
`

let divBooks = document.querySelector(".books");

function displayManga(){
try{
    divBooks.innerHTML = "";
    products.forEach((reader)=> {
        divBooks.innerHTML += `
   <div class="card" style="width: 15rem;">
  <img src="${reader.picture}" class="card-img-top" alt="${reader.name}"  loading="lazy" class="img-fluid">
  <div class="card-body">
    <h5 class="card-title">${reader.name}</h5>
    <div class="overflow-auto"><p class="lead card-text">${reader.description}</p></div>
    <p class="lead card-text">Price: R${reader.price}</p>
    <a href="#" class="btn btn-primary" onclick='goToCart(${JSON.stringify(reader)})'>To Cart</a>
  </div>
</div>
        ` 
    })
}catch(event) {
    location.reload()
}
};
displayManga();

// sorting button
let productsort = false;
let sortingItems = document.querySelector("#sorting");
sortingItems.addEventListener("click", (event)=> {
    event.preventDefault();
    try{
        if(!products) 
            throw ("Put a spinner");
        else 
            products.sort((a,b)=> a.price - b.price);
            displayManga();
    }catch(event){
        divBooks.innerHTML = event;
    }
})

// make a spinner and high and low sort with throw
// sortBtn.addEventListener("click",(event)=>{
    //   event.preventDefault();
    //   if(arrange){
    //     products.sort((a, b)=> b.price - a.price);
    //     sortBtn.textContent = "High"
    //     arrange = false;
    //   }else{
    //     products.sort((a, b)=> a.price - b.price);
    //     sortBtn.textContent = "low"
    //     arrange = true;
    //   }
    //   displayProduct();
    // })

    // checkout button
    let checkout = []
    function goToCart(items){
        checkout.push(items);
        localStorage.setItem("cart", JSON.stringify(checkout));
        // window.location.replace("checkout.html");
    }