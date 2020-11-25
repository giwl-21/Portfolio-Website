<template>
  <div id="music-transposer" style="white-space:pre-line;">
    <h2>Music Transposer </h2>
    <i>Built December 2018 - March 2019</i>
    <p>
    This was my first very large project, made in my senior year of high school.  Music Transposer is a web application that listens to an input audio and outputs what it guesses the note being played is.  It uses a Convolutional Neural Network as the central functionality to classify tones.  I presented this Music Transposer at western Pennsylvania regional science fairs PJAS and PRSEF in 2019.  

    My goal here was to explore new technologies.  Earlier in the year, I had discovered audio and thought of many ways to implement it.  The trombonist in me wanted to do something I had never seen before: automated music transcription.  I spent very many hours independently researching digital signal processing, various file formats, and machine learning.  Looking back, I am impressed with my tenacity.
    
    This application works by listening to the audio signal coming in in real time, either from an uploaded file or a microphone.  Using MDN's AudioContext, we use FFT to get a histogram of frequencies over small time intervals. The loudest sixteen frequencies are plugged them into the pre-trained convolutional neural network.  This results in 96 boolean outputs, one for each possible note across eight octaves.

    Unfortunately, my lack of organization during development made it impossible for me to collect all the components and post a functional version.  In addition, some of the components used (such as libraries) may unintentionally be left out.  If I revisit this project I will be sure to first implement a working version on GitHub.  
</p>
    <h3 style="display:inline">Tools </h3> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#music-transposer-tools">SHOW</a>
    <div class="collapse in show" id="music-transposer-tools"><p>
    <b>Languages/Formats:</b>
    JavaScript, HTML/CSS, (Music)XML, JSON, CSV

    <b>APIs/Libraries/Methodologies:</b>
    AJAX (Asynchronous Javascript and XML), MDN AudioContext, P5JS, TensorflowJS, Keras.js, Browserify, MidiWriter.js, FileSaver.js, DSP.js, jsZip

    Note: I initially built this and learned relevant concepts using Python, but after running into many compatability issues, switched to JavaScript. 

    <b>External Applications:</b> 
    Audacity</p>
    </div>
    <h3>Project</h3>

    <p>I boiled this project down to several essential parts: note classifier, extensive training process, data auto-processer, and the implementation.</p>
    
    <h4>Data Sample Proliferation <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-data_creation">SHOW</a> </h4>
    <div class="collapse in show" id="mt-data_creation">
      <p>I needed to have a supply of predetermined inputs and outputs as questions and answers for excessive training and testing.  For this project, audio samples were inputs, and notes were outputs.  I found a large volume of data in the form of open source piano sheet music (MusicXML) with recordings (audio). From this, I could ideally make an audio splitting algorithm and a MusicXML parser for mass training data production.  

      I built a MusicXML parser in JavaScript using AJAX to recursively load a 2-D CSV file of note values, with 96 boolean/binary values indicating what notes were and weren’t played at each time increment.  

      <b>Results: </b> The MusicXML Parser worked very well, and turning its values into valid tensors to train the NN was rather easy.  Unfortunately, the automatic audio splitter failed to work, since the identification of beats and tempo through waveform analysis is rather inexact.  

      <b>Potential improvements:</b>  I have a few ideas to split the audio correctly.  The first is developing a better spectral analysis/statistical algorithm.  Another option is to build a NN for the purpose of splitting audio.  Either way, it will take a lot of time and development.  I plan to develop an automatic system for getting note values and splitting audio, then combining them as pairs for testing.   </p>
    </div> 

      <h4>Audio Pre-Processing <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-preprocess">SHOW</a></h4> 
      <div class="collapse in show" id="mt-preprocess">
      <p>To pre-process the note sounds for the neural network, I simplified the audio into frequencies using Fourier Transform.  Then I collected the most prominent tones to use as inputs.

      I built the pre-processing system almost in tandem with the convolutional neural network in Python before moving over to JS.  My decision was to document the 16 most prominent peaks frequencies and amplitudes from the FFT histogram, and feed them into the NN. 

      <b>Results:</b> While the algorithms were functional, I think the both the methodology and results were inaccurate. The ineffectiveness of pre-processing definitely was a major factor in the the CNN's inaccuracy.  

      <b>Possible Improvements:</b> With research and testing, I could figure out a better way to characterize the audio for tone detection.  Some ideas are using an envelope, taylor series, sound features, and other possibilities. 
      </p></div> 

      <h4>Neural Network <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-nn">SHOW</a></h4> 
      <div class="collapse in show" id="mt-nn">
      <p>While I already had a basic understanding of the how-to of neural networks from a previous project, I did several tutorials to learn a bit more about it.  I decided that I probably had to experiment with different configurations of neural networks, and put that off until later.    

      When it came time to develop the Neural Network, I attempted to use Python to build the neural network and pre-process, but my computer’s operating system was outdated so it didn’t work out.  After switching to JavaScript, I tested multiple different input types, testing convolution, pooling, and dense neural layers.  

      <b>Results:</b> The CNN was very inaccurate and overfitted.  This is likely due to the improper approach, small training set, and an overcomplicated neural network. 

      <b>Possible Improvements:</b>While I have many ideas for improvement, the only way to develop an appropriate neural architecture is rigorous AI study and research.</p>
      </div> 
      
      <h4>Implementation <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#mt-imp">SHOW</a> </h4>
      <div class="collapse in show" id="mt-imp">
      <p>For direct implementation of the neural network, I came up with a few possibilities.  The first was a real-time audio-to-sheet-music generator which could run actively.  Another idea is to take an audio file and analyze the contents to transpose to sheet music.  There are two ways to do this: analyze the audio signal data directly, applying it piece by piece to the neural network, or play the music to itself in real-time and use the same processing algorithm as the active transposer.

      Near the end of development, I built a system in JavaScript to continuously receive and pre-process microphone input using the AudioContext API, and processed live into the Neural Network.  I implemented this continuous system onto a webpage using P5.JS and HTML, for use as a web-app.  The user is able to press a “record” button to save a tone-time graph.  

      <b>Results:</b>  The overall performance of this was quite subpar.  The web-app was extremely slow, running at a single-digit FPS.

      <b>Possible Improvements:</b> Making a more efficient UI will allow the app to run faster.  The active signal processing and CNN implementation had inefficient algorithms which could be improved. </p>
      </div>
  </div>

</template>
