const idiot_toggle = document.getElementById("idiot_toggle");
idiot_toggle.disabled = true;

const secret_image = document.getElementById("ensavoirplus2");

secret_image.addEventListener('click', function() {
    idiot_toggle.disabled = false;
});

idiot_toggle.addEventListener('click', function() {
    const idiot_image = document.getElementById("idiot");

    make_gone();

    idiot_image.classList.toggle('show');

    const idiot_music = new Audio('sound_effects/you_are_an_idiot_hour.mp3');
    idiot_music.loop = true;
    idiot_music.volume = 0.5;
    idiot_music.play();

});

function make_gone() {
    document.querySelectorAll(".sound_button").forEach(button => {
        button.classList.toggle('hidden');
    });

    document.getElementById('text_item').className = "hidden";
    document.getElementById('ensavoirplus1').className = "hidden";
    document.getElementById('ensavoirplus2').className = "hidden";

}

/*>----------------------------------<*/

const invisible_button = document.getElementById("canvas");

invisible_button.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('images/img_Corinne_Breton.jpg')";

    const creep_music = new Audio('sound_effects/its_just_a_burning_memory.mp3');
    creep_music.loop = true;
    creep_music.volume = 0.4;
    creep_music.play();

});

/*>----------------------------------<*/

var active_sounds = [];

const stop_button = document.getElementById("stop_toggle");
var stop_count = 0;

stop_button.addEventListener('click', function() {

    if(active_sounds.length < 1) {
        stop_count++;
    } else {
        stop_count = 0;
    }
    console.log(stop_count);

    stopSound();
});

function playSound(sound) {
    stopSound();

    if(stop_count > 5) {
        if(sound === "sound_effects/snd_cave_noise.mp3") {
            window.location.href = "images/window_cave.png";
        } else if (sound === "sound_effects/snd_emotional_damage.mp3") {
            window.location.href = "images/window_wait_what.png";
        } else if (sound === "sound_effects/snd_jonkler.mp3") {
            window.location.href = "images/window_jonkler.jpeg";
        } else if (sound === "sound_effects/snd_angry_bird.mp3") {
            window.location.href = "images/window_angry_bird.jpeg";
        } else if (sound === "sound_effects/snd_skeleton_edit.mp3") {
            window.location.href = "images/window_berserk_skeletons.gif";
        }
        return;
    }

    const sound_effect = new Audio(sound);
    sound_effect.play();

    active_sounds.push(sound_effect);

    sound_effect.onended = () => {
        const i = active_sounds.indexOf(sound_effect);
        if(i > -1) {
            active_sounds.splice(i, 1);
        }
    };
}

function stopSound() {
    for(var i = 0; i < active_sounds.length; i++) {
        active_sounds[i].pause();
        active_sounds[i].currentTime = 0;
    }
    active_sounds.length = 0;
}

