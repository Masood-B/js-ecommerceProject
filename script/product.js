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
        description: "?",
        date: new Date()
        },
        {
        id: 8,
        name:"Medoka Box ",
        price: 450,
        picture:"https://i.postimg.cc/SQV9Sz7V/Volume16.webp",
        description: "Friends and enemies enjoying themselves",
        date: new Date()
        },
        {
        id: 9,
        name:"Is It Wrong to Try to Pick Up Girls in a Dungeon",
        price: 450,
        picture:"https://i.postimg.cc/T1pccY2z/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-6-manga-2.jpg",
        description: "Boy and girl",
        date: new Date()
        },
        {
        id: 10,
        name:"Rosaria + Vampire",
        price: 450,
        picture:"https://i.postimg.cc/s2m9dZMF/Getimage-aspx.webp",
        description: "Human boy and vampire girl",
        date: new Date()
        },
        {
        id: 11,
        name:"Food Wars!",
        price: 450,
        picture:"https://i.postimg.cc/9XKPh2Qf/food-wars-shokugeki-no-soma-vol-26-9781974701018-hr.jpg",
        description: "Girl chief how like reptile",
        date: new Date()
        },
        {
        id: 12,
        name:"Air Gear",
        price: 450,
        picture:"https://i.postimg.cc/tRKvpwq9/air-gear-28.jpg",
        description: "Boy and his gang",
        date: new Date()
        },
        {
        id: 13,
        name:"Kimi No Iru Machi",
        price: 450,
        picture:"https://i.postimg.cc/DzwBxKgP/9784063950298-us.jpg",
        description: "Girl is smiling",
        date: new Date()
        },
        {
        id: 14,
        name:"High School of The Dead",
        price: 450,
        picture:"https://i.postimg.cc/GpgzNSgw/9780316282598_p0_v1_s1200x630.jpg",
        description: "Girl fighting zombies",
        date: new Date()
        },
        {
        id: 15,
        name:"Love Hina",
        price: 450,
        picture:"https://i.postimg.cc/zBLp1S4L/1851952-09.jpg",
        description: "Group of girls",
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
  <div class="card-body overflow-auto">
    <h5 class="card-title">${reader.name}</h5>
    <p class="lead card-text">${reader.description}</p>
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