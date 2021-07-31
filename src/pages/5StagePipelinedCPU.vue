<template lang="html">
  <div style="white-space:pre-line;">
    <h2>FPGA 5-Stage Pipelined CPU</h2>
    <i>February - May 2021</i>
<p>
The FPGA 5-Stage Pipelined CPU project simulates a central processing unit through Verilog.  It’s made of many different essential components, but they are organized in 5 stages to run as a looping state machine.  There are three distinct memories: the instruction memory, the data memory, and the register file.  Essential functionality lies in the Control Unit (Control) and the Arithmetic Logic Unit (ALU).  This CPU iterates through the instruction memory line by line, fetching instructions and decoding them into switches using the Control.  If math needs to be done, multiplexors are manipulated to send necessary signals to the ALU, whose output is directed as needed.  
</p>
    <h3>Tools <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#ov-tools">SHOW</a></h3>
    <div class="collapse in show" id="ov-tools" style="line-height: 1em">
    <ul>
      <li><p><b>Verilog</b></p></li>
    </ul>
    </div>
    <p>
The defining feature of this CPU is the way it runs in a pipelined 5-step cycle.  The first step is the Instruction Fetch (IF).  This is when the instruction memory is stepped through and individual instructions are read and sent to the next phase.  The second phase, Instruction Decode (ID) receives the instruction from IF and parses it into outgoing signals for other functional parts of the CPU.  The ID stage also contains the Register File, to quickly load variables to send into the next stage.  The next stage is the Execution (EXE) stage.  The ALU resides in this stage, and receives signals from the Control to decide its operation and receives input values from the Register File’s output, sending the resulting calculation to the next stage.  The next stage is the Memory Access (MEM) phase where the ALU output is either saved into the data memory or used to access data memory to be saved into the Register File for future use.  The final phase, the Write Back (WB) phase, is where the output of the data memory or the ALU is saved to the register (depending on the instruction).  These stages move forward every clock cycle, with an instruction being fetched every time.  Up to five instructions can concurrently run at different stages, in an assembly line fashion.  This design allows the hardware to be shared, giving it a high uptime.

Due to the separation of the five stages, some functions can’t be run immediately after each other, like arithmetic functions and loading and saving to data memory.  Stalls, a blank instruction, are used to prevent this “data hazard”.  By using forwarding, we can bypass these restrictions by building pipelines designed specifically for each instruction that wire the ALU output to the input of the next ALU operation, or wiring the output of the data memory into the ALU.  I implemented this forwarding technique to reduce the necessary amount of stalls, significantly improving the CPU’s performance.

This project bridged the gap between basic logic gates and entire computers.  I felt like I was building a computer from the ground up.  Building this CPU ignited a passion for hardware that I hope to follow for the rest of my college years and into the start of my professional career.  Even though I built this during the COVID-19 quarantine, I’m very thankful to Penn State’s EECS department for creating such a challenging but exciting experience for every student.  This project is everything I want out of a university computer science curriculum.
</p>
  </div>
</template>
