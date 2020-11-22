<template>
  <div id="music-transposer">
    <h2>Music Transposer </h2>
    <i>Built December 2018 - March 2019</i>
    <p><br/>
    This project was probably my most ambitious.  It was my first attempted application of machine learning.  Music Transposer an app is built to listen to audio from a piano, whether through MP3 or through microphone, and outputs the musical notes heard.  It uses audio spectroscopy in addition to machine learning.  I presented it at regional science fairs at PJAS and PRSEF in the spring of 2019 after months of effort.
    <br/><br/>
    This application works by listening to the audio signal coming in in real time, either from an uploaded file or a microphone.  It takes audio in chunks of 213 bits and uses Fast Fourier Transform from MDN’s (Mozilla Developer Network) AudioContext API to get the individual frequency amplitudes.  It then takes the loudest sixteen frequencies, found by searching for peaks, and plugs them into the pre-trained convolutional neural network.  The NN’s 96 boolean outputs are taken, one for each possible note across eight octaves, and displayed in real time.
    <br/><br/>
    Unfortunately, my lack of organization during development makes it difficult for me to collect all the components and post a functional version.  In addition, some of the components used (such as libraries) may unintentionally be left out.  When I revisit this project I will be sure to first implement a working version on GitHub.<br/><br/>

    <h3 style="display:inline">Tools </h3> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#music-transposer-tools">SHOW</a>
    <div class="collapse in show" id="music-transposer-tools">
    <b>Languages & Libraries:</b><br/>
    JavaScript, HTML/CSS, XML, JSON, CSV<br/><br/>

    <b>APIs/Libraries/Methodologies:</b><br/>
    AJAX (Asynchronous Javascript and XML), MDN AudioContext, P5JS, TensorflowJS, Keras.js, Browserify, MidiWriter.js, FileSaver.js, DSP.js, jsZip<br/><br/>

    Note: I initially built this and learned relevant concepts using Python, but after running into many issues, switched to JavaScript.  <br/><br/>

    <b>External Applications:</b><br/>
    Audacity
    <br/><br></div>
    <h3>Project</h3>

    As a trombonist, I had always been interested in music and sound.  After playing around a bit with sound in JavaScript for the first time, I realized the possibilities of sonic spectral analysis.  Fast Fourier Transform derives the amplitude of each frequency, basically identifying which tones are present in a sound wave and creating a spectral histogram.  I had attempted to make a purely analytical multiple-tone detector by documenting every peak in any certain spectral histogram.  However, this was unsuccessful, as many instrumental notes are made up of multiple frequencies.  I realized after some research that very few people have attempted to derive sheet music from audio through software.  The ability to quickly figure out the notes of a song just by audio could revolutionize musical production, and with new public domain APIs like Tensorflow, I could “teach” a computer to do this.  <br/><br/>

    Researching similar projects, the only one I found was a transposer software whose NN was trained using generated MIDI sounds, and had around 80% accuracy.  I believed that to increase the accuracy, I could feed my NN live piano audio, so it would be more accurate classifying live piano sound.  In addition, the software was pricey, and I believed I could make a better product that was more available for use.
    <br/><br/>
    To create this, I realized that I needed a few key components.  I boiled the process down to a few essential parts: a note classifier neural network, a process for extensive training, data pre-processing methods, and different ways to implement it.
    <br/><br/>

    <h4 style="display:inline">Data Sample Proliferation </h4><a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-data_creation">SHOW</a><br/>
    <div class="collapse in show" id="mt-data_creation">
      I needed to have a supply of predetermined inputs and outputs as questions and answers for excessive training and testing.  For this project, I needed audio samples as input, and notes as an output.  A way to get large amounts of both audio clips and their corresponding musical notes is to use open-source piano pieces that come with recordings.  I settled on parsing notes from an MusicXML file (an XML file using format standard for sheet music) and splitting the recording for matching clips.  From this, I could ideally make an audio splitting algorithm and a MusicXML parser for mass training data production.<br/><br/>
      I built a Music XML parser in JavaScript using AJAX to quickly load a 2-D CSV file of note values from JavaScript, with 96 boolean/binary values indicating what notes were and weren’t played at each time increment.  I used mostly recursion to navigate through tags sequentially and extract necessary information.  <br/><br/>
      <b>Results: </b> The MusicXML Parser worked very well, and turning its values into valid tensors to train the NN was rather easy.  Unfortunately, the automatic audio splitter failed to work, since the identification of beats and tempo through waveform analysis is rather inexact.<br/><br/>
      <b>Potential improvements:</b>  I have a few ideas to split the audio correctly.  The first is developing a better spectral analysis/statistical algorithm.  Another option is to build a NN for the purpose of splitting audio.  Either way, it will take a lot of time and development.  I plan to develop an automatic system for getting note values and splitting audio, then combining them as pairs for testing.  <br/>
    </div><br/>

      <h4 style="display:inline">Audio Pre-Processing </h4><a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-preprocess">SHOW</a><br/>
      <div class="collapse in show" id="mt-preprocess">
      For pre-processing sound data into NN inputs, I figured the best method was to find the simplest way to explain the spectral histogram for the neural network.  For another project detecting what instrument was being played, the best way was to collect the features relating to sound-type, like thickness and such.  For tone detection, I decided to settle on simplifying the most prominent tones and feeding them to the neural net.  <br/><br/>
      I built the pre-processing system almost in tandem with the neural network in Python before moving over to JS.  After learning about the features of Fourier Transform and coming up with ideas for the neural network, I decided to document the 16 most prominent peaks frequencies and amplitudes from the FFT histogram, and feed them into the NN.  <br/><br/>
      <b>Results:</b> While the algorithms were functional, I actually wasn’t able to verify visually which peaks this algorithm chose.  In addition, the lack of accuracy of the NN could be attributed in part to the ineffectiveness of the pre-processing.  <br/><br/>
      <b>Possible Improvements:</b> By testing additional methods, I could figure out a better way to characterize a sonic histogram.  Some examples would be creating an envelope, using a characteristic taylor series, breaking down the audio with a method other than a histogram, and other possibilities.  Any revisions would probably require additional research.<br/>
      </div><br/>
      <h4 style="display:inline">Neural Network </h4><a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-nn">SHOW</a><br/>
      <div class="collapse in show" id="mt-nn">
      While I already had a basic understanding of the how-to of neural networks from a previous project, I did several tutorials to learn a bit more about it.  I decided that I probably had to experiment with different configurations of neural networks, and put that off until later.  <br/><br/>
      When it came time to develop the Neural Network, I attempted to use Python to build the neural network and pre-process, but my computer’s operating system was outdated so it didn’t work out.  After switching to JavaScript, I tested multiple different input types, testing convolution, pooling, and dense neural layers.  In the end I settled with _________.  <br/><br/>
      <b>Results:</b> Upon testing, the NN wasn’t very accurate at all, and ended up overfitting.  In addition, I didn’t have a large training set due to my failure to complete a training-data generator.  All I had to train with was notes from a single piano piece split manually using Audacity, though corresponding to note values extracted from the sheet music by my MusicXML parser.  While this wouldn’t have improved the NN as it was, it would have been useful for testing other configurations.<br/><br/>
      <b>Possible Improvements:</b> The neural network is probably the weakest link in this project.  I definitely need to figure out what type of configuration would work best for sound analysis.  One thing I have considered is mimicking a human’s ability to identify tones.  Humans use relativity of frequencies to figure out tones, comparing them to the sounds they heard previously.  I could implement a more temporal-conscious neural network to improve accuracy in this regard.  Additionally, I could change the inputs to be more of a set of amorphous float values instead of being boolean/binary.  However, as an absolute novice, deciding on an appropriate machine learning system would require extensive research and studying.<br/>
      </div><br/>
      <h4 style="display:inline">Implementation </h4><a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-imp">SHOW</a><br/>
      <div class="collapse in show" id="mt-imp">

      For direct implementation of the neural network, I came up with a few possibilities.  The first was a real-time audio-to-sheet-music generator.  It could run actively and listen.  Another would be an audio file to sheet music generator.  There were two ways to do this: it could analyze the audio signal data directly, and apply it piece by piece to the neural network, or play the music to itself in real-time and use the same processing algorithm as the active real time converter.<br/><br/>
      Near the end of development, I built a system in JavaScript to continuously receive and pre-process microphone input using the AudioContext API, and processed live into the Neural Network.  I implemented this continuous system onto a webpage using P5.JS and HTML, for use as a web-app.  The user is able to press a “record” button to save a tone-time graph.<br/><br/>
      <b>Results:</b>  The overall performance of this was quite subpar.  Although something like this in a web browser would definitely be slow, I felt that it was unusable.  <br/><br/>
      <b>Possible Improvements:</b> I believe that if I redo much of the interface, it could be much faster.  In addition, the active signal processing and NN implementation could have also utilized unscalable algorithms, so fixing those steps could help.  I could also implement it in multiple languages, and use it for tablets, desktops, or other devices.<br/>
      </div>

    </p>
  </div>

</template>
