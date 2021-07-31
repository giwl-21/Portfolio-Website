<template lang="html">
  <div style="white-space:pre-line;">
    <h2>5th Sense</h2>
    <i>February - April 2021</i>
<p>
5th Sense is a real-time transcription mobile app which aims to separate text from speakers into a group-chat format.  Our team submitted our app during the 2021 Nittany AI Challenge, finishing in the semi-finals (prototype phase) with 20 teams left.  The application uses Microsoft Azure’s Speech-To-Text Recognizer API combined with their Speaker Identification API to simultaneously transcribe and identify speech.  It’s constructed using React-Native, with JavaScript objects storing speech audio segments to identify and speech profiles to help identify the segments for classification.  We planned to store this information in a phone using Firebase, but we just used the browser memory for this demo.  The components come together to have real-time audio collection and speaker profile training while updating the front-end to display the labeled text from different speakers in a text message format.
</p>
    <h3>Tools <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#ov-tools">SHOW</a></h3>
    <div class="collapse in show" id="ov-tools" style="line-height: 1em">
    <ul>
      <li><p><b>JavaScript</b></p></li>
        <ul>
          <li><p>NPM & Node</p></li>
          <li><p>React Native</p></li>
        </ul>
      <li><p><b>Microsoft Azure</b></p></li>
      <ul>
          <li><p>Speech Recognizer</p></li>
          <li><p>Speaker Identification</p></li>
        </ul>
    </ul>
    </div>
    <p>
The front-end allows the user to turn on and off execution of the speaker recognition and identification.  The user must label each speech segment individually until around 20 seconds of audio is accumulated for the profiles needed.  After that, the developed profiles will be used to identify new incoming audio segments, although misses will occur if an unidentified speaker appears. 

After completing the prototype phase, we were no longer in the competition and thus halted work on the app.  Some significant unresolved problems are that the UI would break when updated too quickly and the Microsoft Speech Recognizer API would blend separate speakers together, producing a single speech segment that the app would treat as being produced by just one speaker.  
</p>

    </div>
  </div>
</template>
