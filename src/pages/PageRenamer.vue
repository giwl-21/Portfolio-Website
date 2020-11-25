<template>
  <div id="page-renamer">
  <h2>Page Renamer <a class="btn" target="_blank"  href="https://github.com/giwl-21/Crop-Namer"><img style="width:20px;height:20px;" src="public/Files/githubIcon.svg"></a></h2>
  <i>January 2020 - Ongoing</i>
  
  <br/><br/>I built Page Renamer to help out with my job as a map scanner, to quickly name images for me instead of having to it myself.  Page Renamer is an image-processing software which reads text in a user-defined area and uses it to rename the image.  It repeats this process for the remaining images, reusing the cropping dimensions.  While I have yet to employ it at my work, the accuracy without the in-development refinements is quite promising.
  <br/><br/>
  It works by using multiple APIs together, to crop the image and read the text inside.  The user opens a folder of images with a name beginning with “scan” and being either .pdf or .jpg files, and then opens the first one for the user to select the text area using a box-selector.  Currently, the program will not attempt to realign images after the user submits their selection.  I’m currently building functionality in order to realign images through finding the borders as a reference to the box location, rather than using the top-left corner of the image.  It detects dark pixels and runs a linear regression.  Currently the user has certain settings to adjust the detection for different map shades.
  <br/><br/>
  <h3 style="display:inline">Tools </h3> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#page-renamer-tools">SHOW</a>
  <div class="collapse in show" id="page-renamer-tools">
    Language:
    Python 3
    <br/><br/>
    APIs/Libraries/Methodologies:<br/>
    TKinter, PIL/Pillow Image API, PyMuPDF, PyTesseract
    <br/><br/>
  </div>
  <h3>The Project</h3>

  A week into my job at Bellefonte Borough scanning maps and organizing their files, I realized how repetitive the task was. I had to scan each map, rename them based on the page name, and then organize them within a remote hard drive.  I noticed that the page renaming task in particular was extremely formulaic, yet time consuming as every scanned image needed to be named.  Knowing we have tools to read images, I believed I could make a simple application to solve this issue.  All it had to do was find the right section, read the text within, and name the file that.
  <br/><br/>
  I tried to find similar applications on the web, but I realized something this specific would likely not exist, so I went on to design.  For this project, I wanted to use every tool at my disposal.  This meant researching several different options to implement each function.  The first thing I needed was a GUI.  For my Matrix Calculator project, I already had introduced myself to TKinter.  I decided to use it here too and explore its functions.  I researched image processing libraries for cropping and settled on Pillow, a useful API whose pixel analysis capabilities would come in handy later when I wanted to approximate the maps’ borders. For image reading, I just needed a library that could do the job, settling on PyTesseract for its simplicity.
  <br/><br/>

  <h4 style="display:inline">First Build </h4> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#page-renamer-v1">SHOW</a>
  <div class="collapse in show" id="page-renamer-v1">
    Knowing the tools I had, I went on to designing Crop Renamer’s infrastructure.  I laid out the user’s steps: select a folder with newly scanned images of the same format, select the typical page-number area, then click submit and find the folder filled with properly named pages.  The program would look into the given folder, grab every image file with the name “scan” (the default name of a newly scanned item), use the user-defined box bounds, and rename every one of those images what was read from the respective boxes. I knew that this process would work only if all the images were aligned perfectly, but decided to make sure the entire program worked before refining it.  At the start of the project, I had little idea about OOP, so I thought to build the functionality around TKinter’s interface, with surrounding methods (which I ended up remaking into OOP in the future).  I then built it from the beginning of that process to the end.
    <br/><br/>
    The coding went rather smoothly.  I learned TKinter and Pillow as I went, and implemented the other libraries where I saw fit.  An issue I ran into was the file-type.  My employer wanted the images to be scanned as PDFs, so I had to implement a PDF image extractor from the PyMuPDF API.  Fortunately, many of the APIs used PIL when it came to images, which helped a great deal during implementation.
    <br/><br/>
    When I completed the first working version, I had a program that did just what I had laid out.  It was able to properly rename the files based on the selection boxes. However, there were a few issues. First, the window prioritization when choosing the folder was less than optimal.  As I had predicted, it had issues scanning pages that were not perfectly aligned.  Also, its messy architecture made it difficult to upgrade.
  </div><br/>
    
  <h4 style="display:inline">Current Build </h4> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#page-renamer-v2">SHOW</a>
  <div class="collapse in show" id="page-renamer-v2">
    I planned a way to improve the scanning accuracy. If I were to find the borders that were commonly a part of these maps, I could find the corner and angle of rotation (from the horizontal/vertical).  To get the borders, I could scan rows/columns of pixels from left to right and top to bottom, to find dark pixels that would eventually form a line.  Then, I could use a linear regression to model the line, and use the intersection to find the corner, and find the angle of rotation from averaging the angles of each regression line.  With this, I would have a better reference point for a selection box, and I could re-detect the border for each scanned image that needed renaming so a large proportion of even the skewed pages could be properly renamed. The only issue would be pages that would have varied brightness which could screw up the dark pixel detection algorithms.
    <br/><br/>
    Right now, I am currently working on implementing the border detection and selection box repositioning.  To solve the brightness issue, I implemented a few user controls that could assist with detecting the dark pixels correctly, whose settings would be later saved and used on pages which would have similar coloring.  With this, I figured out the border detection lines, but have yet to use this data for corner and tilt detection.
    <br/><br/>
    In the future, I plan to improve the darkness detection algorithm to minimize user input, and may use a better method for border detection, maybe finding all four sides or using a more fitting linear approximation method.
  </div>
  
  <div class="row">
    <div class="col-sm-4">
      <div class="mx-2 card">
        <img class="card-img-top" src="public/Files/renamerCalib.jpg" />
        <a class="card-footer btn" href="public/Files/renamerCalib.jpg">
          <p>Program interface, calibration system detecting edges</p>
        </a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card mx-2">
        <img class="card-img-top" src="public/Files/Selection-box.png" />
        <a class="card-footer btn" href="public/Files/Selection-box.png">
          <p>User-selected box shown, to be used across all newly scanned files.</p>
        </a>
      </div>
    </div>
  </div>
</div>
</template>
