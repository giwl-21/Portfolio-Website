<template lang="html">
  <div style="white-space:pre-line;">
    <h2>JBOD Disk Driver</h2>
    <i>February - April 2021</i>
<p>
JBOD Disk Driver is a system that converts a “Just a Bunch of Disks” disk drive into a “Redundant Array of Independent Disks”, where the bytes on a disk can be accessed as one massive byte array, and accessed efficiently using a look-aside cache.  It’s also built to support a remote disk drive, constructing, sending, and receiving data packets over the net. Of the 300+ students, I achieved the 6th highest performing cached disk driver.  I was given this assignment in my Introduction to Systems Programming class, and developed it over the course of the semester. 
</p>
    <h3>Tools <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#ov-tools">SHOW</a></h3>
    <div class="collapse in show" id="ov-tools" style="line-height: 1em">
    <ul>
      <li><p><b>C Programming Language</b></p></li>
    </ul>    
    </div>
    <p>
The JBOD disks are organized into 16 disks of 256 blocks of memory.  We were given read and write functions which could access entire blocks of memory at a time.  To navigate to a block, we were given “seek to disk” and “seek to block” functions.  So, to write new data in a single block, I’d have to first navigate towards it, read the data into a temporary buffer, edit that buffer, and then write the buffer back into the JBOD disk drive.  

The first task I was given was the conversion of the given JBOD disks into a massive array that we could easily write and read content from.  I used a loop that would read/write into a temporary buffer, copy from/to it, and write blocks if needed, using conditionals to figure out when to utilize the seek function.  

The second task was the implementation of a scan-resistant look-aside cache with a write-through write policy.  A look-aside cache is a cache that is separate from the memory system, but can be used to store blocks temporarily to reduce the amount of time the JBOD disk must be accessed.  A cache with a write-through write policy, upon writing to a block in the JBOD drive, will also write to the cache if that specific block is currently stored.  A scan resistant cache splits the cache into two sections, one containing blocks that were accessed once, and another section that contains blocks accessed more than once to prevent a scan from entirely rewriting the cache..  The professor set up a class-wide competition for bonus points to minimize the amount of JBOD operations (write, read, seeking).  In a class of 300+ students, my cache ended up ranking 6th.  I spent hours on the optimization process, and developed a strong understanding of the utility of caches.

The third task was to create a JBOD network drive client to run JBOD operations on a remote JBOD disk drive, called the JBOD server.  It involved sending and receiving packets of bytes containing either encoded instructions or byte data when reading or writing.  The JBOD server would expect packets when receiving a write instruction and send packets either to confirm each instruction or after receiving a read instruction.  I implemented the client by creating sockets connecting to the JBOD server’s port, constructing/sending packets, and reading incoming packets.  Since this was my first project dealing directly with packets in the network, I learned a great deal about how many network systems work at the fundamental level.
</p>

    </div>
  </div>
</template>
