
let playingStatus, songInfo, songImg, coverImg, currentSong, player, playing; 

let songlist = [
    {
    title:'No One Knows',
    artist:'Organized Mess',
    cover:"https://cdn1.imggmi.com/uploads/2019/10/19/3ff6e5e753b2511b58c2e190f7c0ae02-full.jpg",
    link:"http://s000.tinyupload.com/index.php?file_id=02282208118539438211"
    },

    {
    title:'My Sharona',
    artist:'Organized Mess',
    cover: "https://i.pinimg.com/originals/ff/5c/34/ff5c34132773fc73b83d4b8b369e6c6d.jpg",
    link: "https://vocaroo.com/media_command.php?media=s0UaSRirXNCc&command=download_mp3"
    },

    {
    title:'Mr Blue Sky',
    artist:'Organized Mess',
    cover: "https://laughingsquid.com/wp-content/uploads/2019/01/Mr-Blue-Sky-Animated-Video-Jeff-Lynne.jpg",
    link: "https://vocaroo.com/media_command.php?media=s1eK4fVjgyUE&command=download_mp3"
    },

    {
    title: 'Storytime Joke',
    artist: 'Organized Mess',
    cover: "https://imgshare.io/images/2019/10/20/unnamed.jpg",
    link: "https://vocaroo.com/media_command.php?media=s1nkD3qoycpu&command=download_mp3"
    },

    {
    title: 'Hot Mess',
    artist: 'Organized Mess',
    cover: "https://cdn1.imggmi.com/uploads/2019/10/19/7dcf5573ca039c1ad99a017de6a6459f-full.jpg",
    link: "https://vocaroo.com/media_command.php?media=s1RCMBERz37T&command=download_mp3"
   }
];



coverImg = document.getElementById('cover-img')

player = new Audio()
playing = false;
currentSong = 0;
player.loop = false;
player.addEventListener('ended', function(){ keepPlayingNextSong });


$('.pausebutton').hide();

$('.play-this').on('click', playMusic)

function playMusic(){
  
  songIndex = $(this).attr('song');
  player.src = songlist[songIndex].link;
  player.play()
  playing = true;
  $('.playbutton').hide();
  $('.pausebutton').show();
  coverImg.style.backgroundImage = 'url(' + songlist[songIndex].cover + ')';
  document.getElementById('title').innerHTML = songlist[songIndex].title;
  document.getElementById('artist').innerHTML = songlist[songIndex].artist;

  $('.song').eq(songIndex++).css( "background-color", "rgba(0, 0, 0, 0.9)");
    
}

$('.pausebutton').on('click', pauseMusic)

function pauseMusic(){
    player.pause()
    $(this).hide();
    $('.playbutton').show();
    playing = false;
    
}


$('.go-back').click(goBack)

function goBack(){
	
if (playing === true){
    player.currentTime = 0;      
    player.play();
    $('.playbutton').hide();
    $('.pausebutton').show();
    } 

else {
    player.currentTime = 0;
    player.pause();
    $('.playbutton').show();
    $('.pausebutton').hide();
    }

}


$('.next-song').on('click', nextSong)

function nextSong(){
    
    player.pause()

    if (currentSong === 0) {
      currentSong = songlist.length--;
    } else {
      currentSong++;
    }
    
    playMusic(currentSong);
  
}

  

$('.playbutton').click(playCurrentSong)

function playCurrentSong(currentTime){
    $('.playbutton').hide();
    $('.pausebutton').show(); 
   player.play(currentTime);
    
}
    
