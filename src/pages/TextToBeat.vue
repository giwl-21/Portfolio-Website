<template lang="html">

  <div id="text-to-beat">
    <h2>Text-to-Beat <a class="btn"target="_blank"  href="https://github.com/giwl-21/text-to-beat"><img style="width:20px;height:20px;"src="public/Files/githubIcon.svg"></a></h2>
    <p>I built this program in the spring of 2019 with the assitance of one of my friends.  Text-to-Beat is a cool audio toy that converts input text to a drum beat.  It was an introduction into using a larger amount if files, and a union of linguistics and software engineering, two seemingly unique fields.<br/><br/>

    First, the program converts each word into the International Phonetic Alphabet through a downloaded library. The words are then split into syllables through a multitude of conditions which for the most part separate groups of vowels surrounded by consonants or breaks. The program currently plays different drum sounds in a sequence based on the attributes of each syllable, attempting to play them in a cadence that matches speaking patterns by taking note of stressed and unstressed syllables.<br/><br/>

    Possible improvements: Improved GUI, increased sound variety and improved cadence.
    </p>
    <div class="thumbnail" style="width:560px; height:315px;">
          <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/v7WDYzMw8dk?modestbranding=1;showinfo=0;rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="caption">
            <p>Text-to-Beat at work</p>
          </div>
      </div>
  </div>

</template>
