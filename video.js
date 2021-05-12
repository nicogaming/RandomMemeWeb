//jeg kalder dette kontroleret kaos men andre vil nok kalde det et array med 33 billeder i
var images = ["images/spanish_inquisition.jpg", "images/DIO.png", "images/tarrasque.jpg", "images/the_french.jpg", "images/horny_bard.jpg", "images/bare.jpg", "images/programming.jpg", "images/bug_on_line255.jpg", "images/tiktok_jesus.jpg", "images/zelda.jpg", "images/fuck_the_party.jpg", "images/never_gonna_gif_you_up.gif", "images/sassy_boy.jpg", "images/me.jpg", "images/one_fucking_minute.jpg", "images/rip_guitar.jpg", "images/rip_billie.gif", "images/sassy_billie.gif", "images/old_school.gif", "images/ak_meme1.jpg", "images/ledning.jpg", "images/pokemon.jpg", "images/rage_mads.jpg","images/bare2_electricbogaloo.jpg","images/toaster_pc.jpg","images/PRESENTING_A_NEW_BEGINING.jpg","images/you_gotta_be_fucking_kitting_me.jpg","images/I_need_more.jpg","images/not_my_pick.jpg","images/my_neighboures_probably_hates_me.jpg","images/wearhouse.jpg","images/biscylist.jpg","images/screwdriver.jpg","images/dancing_boy.gif"]
//denne function bliver brugt til at vælge mellem det kontroleret kaos og vise det til brugeren på den anden side
function generator() {
    //vælger et random nummer mellem 0 og 34 og includere 0
    var random = Math.floor((Math.random() * 34) + 0)
    //printer nummered ud i consolen
    console.log(random)
    console.log(images[random])
    //bruger det nummer der er valgt til at putte in i arrayed og skifter sorcen ud med det billed 
    document.getElementById("img").src = images[random]
}
//går tilbage til den sidste side du var på før
function goBack()
{
    window.history.back()
}