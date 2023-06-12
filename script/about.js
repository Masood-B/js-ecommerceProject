// About Content
let about = document.querySelector(".aboutContent")

let aboutText = [
    "Our aim at J-Worms is to provide you with the top localized manga you've been seeking for. We are confident that we have the ideal manga for you, whether you're looking for big fun adventures with friends or heart-pounding romance. Enter the deep and fascinating world of Japanese manga with only a click, and discover your new favorite.",
    "At J-Worms, we are dedicated to fostering the growth of the global community of manga enthusiasts as well as the manga business. So you may rest easy knowing that every manga on our site has an official license. By using our website, you help your favorite creators and their creations.",
    "J-Worms was founded in 2023 by Masood Basardien, a guy who wants to add reading to the excitement of your life. A minute of inactivity costs you sixty seconds of manga reading.",
   
]

aboutText.forEach((content)=>{
    about.innerHTML +=
    `
    <p class="lead">${content}</p>
    
    `
})


let x = document.querySelector(".contact")
x.innerHTML = 
`
<form class="content-move" action="https://formspree.io/f/xbjewvba" method="post"> <label>
      
            <div class="container widespread">
              <form action="action_page.php">
                
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required>
                
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>
                
                <label for="Email">Email Address</label>
                <input type="text" id="Email" name="email" placeholder="Your email.." required>
                
              <label for="subject">Message</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:100px" required></textarea>
          
              <input type="submit" value="Submit" required></form>
              
            </form>
`
let y = document.querySelector(".my-info")
y.innerHTML = 
`
<h2>Contact ME Directly</h2>

<p>Email: masoodbasardien123@gmail.com</p>

<p>cellphone: 079 298 0631</p>

<p>Address: 14 Chapel Road, Harmony Village, Mitchell's Plain, 7785</p>
`