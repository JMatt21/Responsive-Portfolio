$(document).ready(function(){
    const pages = [
        newPage('<div id="index"> <h2>About Me</h2> <hr> <img src="assets/images/dog.png" id="profilepicture" alt="A photo of me" id="MyPhoto.png"> <p> I am a 21 year old male with an Assosiates in General Science currently attending a University of Arizona Coding Bootcamp. I have taught myself a few coding launguages such as C, Java, Python and have taken a course in Data Structures for Java. Before taking this Bootcamp course I thought CSS stood for Can Script Sometimes. I really like spaghetti and taco tuesday should be cancelled. </p> <p> I have a few special talents such as: <ul> <li>3+ years of drumline experience</li> <li>Above average sight reading</li> <li>Calculating friction of a Box using less than 2 papers</li> <li>Taking care of 6 big dumb cats</li> <li>Digesting food and fluids</li> <li>Not knowing the difference between a few and several</li> </ul> </p> </div>'),//main page
        newPage(""),
        newPage('<h2> Contact </h2> <hr> <form> <h4> Name </h4> <input type="text" name="FullName" placeholder="John Smith"> <br> <h4> Email </h4> <input type="email" name="Email" placeholder="example@gmail.com"> <br> <h4> Message </h4> <textarea rows="7" cols=28></textarea> <br> <input type="submit" class="submitButton"> </form>')//contact page
    ];
    let current_page;
    function newPage(content){
        const display_page = $("#index");
        let ret = {
            content: content,
            display: function(){
                display_page.html(this.content);
                current_page = this;
            },
            toNext: function(){
                pages[pages.indexOf(this) + 1];
            },
            toPrevious: function(){
                pages[pages.indexOf(this) - 1];
            }
        }
        return ret;
    }
    //on startup
    pages[2].display();
});