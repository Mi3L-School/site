"use client";

import { use, JSX } from "react";
import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import CodeBlock from "../components/CodeBlock";
import FillBlank from "../components/FillBlank";
import Mcq from "../components/Mcq";
import Activity from "../components/Activity";
import chaptersData from "../chapters.json";

type ChapterContent = {
  [key: number]: {
    content: JSX.Element;
  };
};

export default function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = use(params);
  const chapterNum = parseInt(chapter.replace("chapter", ""));
  const chapters = chaptersData.chapters;
  const descriptions = chaptersData.descriptions;

  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > chapters.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chapter Not Found
          </h1>
          <a
            href="/programs/full-vrc-guide"
            className="text-orange-500 hover:text-orange-600"
          >
            Return to Course
          </a>
        </div>
      </div>
    );
  }

  const chapterContent: ChapterContent = {
    1: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Libraries and Frameworks</h1>
          <p className="text-lg leading-relaxed mb-10">
            There are many platforms that can be used to code VRC Robots. The
            two main ones are VEXCode V5 and PROS by Purdue which will both use
            C++ as its main programming language. In this tutorial, we will be
            using PROS.
          </p>
          <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>
          <h1 className="text-3xl mt-10 mb-5 font-bold">
            Creating a New Project
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            To create a new project, you will first have to install Visual Studio
            Code (VSCode) on your device. Head to this{" "}
            <a
              className="text-blue-600"
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Link
            </a>{" "}
            to install (VSCode).
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Once you have finished installing, you will need to install the PROS
            Extension on VSCode. Look for the extensions icon on the left side of
            your screen
          </p>
          <img
            src="https://media.discordapp.net/attachments/1115014592595230741/1260045406742646875/image.png?ex=66971ebb&is=6695cd3b&hm=79defafb0dc7c10aabb5ad0a00135bc29cf76fea87834870f83c42b5d2d573fb&=&format=webp&quality=lossless&width=1920&height=616"
            alt="VSCode Extensions"
            className="w-full h-auto mb-8 rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="mt-8 text-lg leading-relaxed mb-8">
            After you have installed PROS and the PROS CLI (Command-Line
            Interface), you will a PROS extension icon on the left. Click that
            extension and click "Create Project"
          </p>
          <img
            src="https://media.discordapp.net/attachments/1115014592595230741/1260046099654250616/image.png?ex=66971f60&is=6695cde0&hm=5f915bbd2f8d137c5c4be43bab7ad73e086a7f3bf598a232c96769c40c696bd30&=&format=webp&quality=lossless&width=382&height=894"
            alt="PROS Create Project"
            className="mx-auto mb-8 rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="mt-8 text-lg leading-relaxed mb-3">
            Follow the instructions on VSCode and make sure you choose a file
            location where you will remember. You should select v5 and the latest
            version if it prompts you to.
          </p>
          <h1 className="text-3xl mt-10 mb-5 font-bold">Alternative Way</h1>
          <p className="mt-8 text-lg leading-relaxed mb-3">
            Alternatively, if that method does not work for whatever reason, you
            can use the terminal to create a new project. Only use this method if
            you are more advanced or the method above does not work. Start by
            making an empty folder, then open a new PROS Terminal under that folder
            and run the following command:
          </p>
          <CodeBlock
            language="powershell"
            codeString={"pros c new-project ./ v5 3.8"}
            showLineNumbers={false}
          />
          <p className="mt-8 text-lg leading-relaxed mb-3">
            You should get the same result from either method. Your folder
            structure should look something like this:
          </p>
          <img
            src="/images/full-vrc-guide/ch1-1.png"
            alt="Project Structure"
            className="mx-auto mb-8 rounded-lg max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="mt-8 text-lg leading-relaxed mb-3">
            We'll go over what's in each of these folders in the next lesson so
            don't let all these files overwhelm you.
          </p>
          <h1 className="text-3xl mt-10 mb-5 font-bold">
            Building & Uploading Code
          </h1>
          <p className="mt-8 text-lg leading-relaxed mb-3">
            The first time you upload new code to a Brain, we recommend that you
            plug it directly into the Brain, any other time, plug it into the
            controller.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            To build a project, run the following command:
          </p>
          <CodeBlock language="powershell" codeString={"pros build"} />
          <p className="text-lg leading-relaxed mb-3">
            To upload a project, run the following command:
          </p>
          <CodeBlock language="powershell" codeString={"pros upload"} />
          <p className="text-lg leading-relaxed mb-3">
            To build and upload a project, run the following command:
          </p>
          <CodeBlock language="powershell" codeString={"pros mu"} />
          <p className="text-lg leading-relaxed mb-3">
            Remember that everytime you make a change to your code, you are going
            to have to build and upload it for your changes to be there.
          </p>
        </>
      ),
    },
    2: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">PROS Documentation</h1>
          <p className="text-lg leading-relaxed mb-8">
            If you need to refer to any Documentation for PROS 3 here is the link:{" "}
            <a
              className="text-blue-600"
              href="https://pros.cs.purdue.edu/v5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROS 3 Documentation
            </a>
          </p>
          <p className="text-lg leading-relaxed mb-8">
            If you are using PROS 4, refer to the following documentation:{" "}
            <a
              className="text-blue-600"
              href="https://pros.cs.purdue.edu/v5/pros-4/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROS 4 Documentation
            </a>
          </p>
          <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
          <h1 className="text-3xl mb-5 font-bold">Important Folders</h1>
          <p className="text-lg leading-relaxed mb-8">
            There are only 2 folders that are very crucial when actually
            programming, you can ignore the rest for now. Those folders are the
            following:
          </p>
          <img
            src="/images/full-vrc-guide/ch2-1.png"
            alt="Important Folders"
            className="rounded-full mx-auto mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <h1 className="text-3xl mb-5 font-bold">
            The <span className="italic">include</span> Folder
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            The first folder is the include folder. This is where all of your
            "header" files will go. These .hpp or .h files aren't where you write
            any of your executable code, but acts as a way for your files to
            communicate with each other, so that you can access your variables in
            all of your files. You'll see the following folders in the include
            folder. For now, the only ones that you'll be editing are "main.h" and
            files that you'll be creating.
          </p>
          <img
            src="/images/full-vrc-guide/ch2-2.png"
            alt="Include Folder"
            className="rounded-lg mx-auto mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="text-lg leading-relaxed mb-8">
            If you go into that file, there are descriptions of what each part
            does; however, you can just scroll down until you reach the following
            section because that is the only place you will ever be modifying.
          </p>
          <CodeBlock
            language="cpp"
            codeString={`#ifdef __cplusplus
/**
 * You can add C++-only headers here
 */
// e.g. #include <iostream>
// e.g. #include "file_name.hpp"`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            Whenever you create a new .hpp or .h file, just include the file name
            in that section which you can see an example in the code.
          </p>
          <h1 className="text-3xl mb-5 font-bold">
            The <span className="italic">src</span> Folder
          </h1>
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This is the main folder that you will be coding in. Here you'll find
            only one file called main.cpp
          </p>
          <img
            src="/images/full-vrc-guide/ch2-3.png"
            alt="Src Folder"
            className="rounded-full mx-auto mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            Click into main.cpp and now we will cover everything that is in it!
          </p>
          <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
          <CodeBlock language="cpp" codeString={`#include "main.h"`} />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This first line tells us to include all the header file "main.h" (this
            file should contain all of your other header files which means that
            this line allows you to import all of your variables and functions that
            you've defined). Make sure you include this line at the top of each C++
            file
          </p>
          <CodeBlock
            language="cpp"
            codeString={`/**
 * A callback function for LLEMU's center button.
 *
 * When this callback is fired, it will toggle line 2 of the LCD text between
 * "I was pressed!" and nothing.
 */
void on_center_button() {
    static bool pressed = false;
    pressed = !pressed;
    if (pressed) {
        pros::lcd::set_text(2, "I was pressed!");
    } else {
        pros::lcd::clear_line(2);
    }
}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This is custom function that PROS made as an example, the function
            description is written above the function as a comment. This isn't one
            of the important functions, if you want you can even delete this
            function.
          </p>
          <CodeBlock
            language="cpp"
            codeString={`/**
 * Runs initialization code. This occurs as soon as the program is started.
 *
 * All other competition modes are blocked by initialize; it is recommended
 * to keep execution time for this mode under a few seconds.
 */
void initialize() {
    pros::lcd::initialize();
    pros::lcd::set_text(1, "Hello PROS User!");

    pros::lcd::register_btn1_cb(on_center_button);
}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This is a very important function. All of the code in this function will
            be executed whenever you run your code. You'll see that the current
            actions in it all have something to do with pros::lcd - that is how you
            interact with the screen on the brain. It sets the text on line 1 of
            the brain to "Hello PROS Users!" and if the user presses the center
            button, it will call the on_center_button function.
          </p>
          <CodeBlock
            language="cpp"
            codeString={`/**
 * Runs while the robot is in the disabled state of Field Management System or
 * the VEX Competition Switch, following either autonomous or opcontrol. When
 * the robot is enabled, this task will exit.
 */
void disabled() {}

/**
 * Runs after initialize(), and before autonomous when connected to the Field
 * Management System or the VEX Competition Switch. This is intended for
 * competition-specific initialization routines, such as an autonomous selector
 * on the LCD.
 *
 * This task will exit when the robot is enabled and autonomous or opcontrol
 * starts.
 */
void competition_initialize() {}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            These next two functions don't have anything in them at the moment. You
            can read the description of what they are intended to be used for, but
            we won't need to touch them.
          </p>
          <CodeBlock
            language="cpp"
            codeString={`/**
 * Runs the user autonomous code. This function will be started in its own task
 * with the default priority and stack size whenever the robot is enabled via
 * the Field Management System or the VEX Competition Switch in the autonomous
 * mode. Alternatively, this function may be called in initialize or opcontrol
 * for non-competition testing purposes.
 *
 * If the robot is disabled or communications is lost, the autonomous task
 * will be stopped. Re-enabling the robot will restart the task, not re-start it
 * from where it left off.
 */
void autonomous() {}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This is where you put your code when autonomous runs.
          </p>
          <CodeBlock
            language="cpp"
            codeString={`/**
 * Runs the operator control code. This function will be started in its own task
 * with the default priority and stack size whenever the robot is enabled via
 * the Field Management System or the VEX Competition Switch in the operator
 * control mode.
 *
 * If no competition control is connected, this function will run immediately
 * following initialize().
 *
 * If the robot is disabled or communications is lost, the
 * operator control task will be stopped. Re-enabling the robot will restart the
 * task, not resume it from where it left off.
 */
void opcontrol() {
    pros::Controller master(pros::E_CONTROLLER_MASTER);
    pros::Motor left_mtr(1);
    pros::Motor right_mtr(2);

    while (true) {
        pros::lcd::print(0, "%d %d %d", (pros::lcd::read_buttons() & LCD_BTN_LEFT) >> 2,
                        (pros::lcd::read_buttons() & LCD_BTN_CENTER) >> 1,
                        (pros::lcd::read_buttons() & LCD_BTN_RIGHT) >> 0);
        int left = master.get_analog(ANALOG_LEFT_Y);
        int right = master.get_analog(ANALOG_RIGHT_Y);

        left_mtr = left;
        right_mtr = right;

        pros::delay(20);
    }
}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This is what your program executes during the Driver-Control Period. You
            can see that there is already some basic drive-code that's already
            there, let's take a dive at what each line does. The first 3 lines are
            all definitions of PROS objects. The first one defines the controller
            which is named "master". The next two lines define motors on the left
            and right side with their port numbers.
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-8">
            Next there's a while (true) loop. This is so that your program can
            continuously run throughout the entire Driver-Control-Period instead of
            just one time. You'll see some other code and that's what is going to
            allow your robot to drive. We will be coding a more custom function for
            driving in the next chapter, but notice the pros::delay(20); at the end
            of the while loop. This 20 millisecond delay is very important, so that
            you're the V5 Brain doesn't have to constantly execute the loop in even
            faster time.
          </p>
          <FillBlank
            question="Define a motor called 'arm' that's on port 16"
            answer="pros::Motor arm(16);"
          />
          <Activity
            question="Create a new file called globals.cpp and another one called globals.hpp in the correct locations; Define at least 4 motors on your drivebase in globals.cpp file with the 600RPM Cartridge as well as the controller. In your globals.hpp file, make all of those motor names global and remember to add the globals.hpp to your main.h file."
            answer={`// Answers will vary
// ------------------

// globals.cpp
#include "main.h"
pros::Motor driveLB(1, pros::v5::MotorGears::blue);
pros::Motor driveLF(2, pros::v5::MotorGears::blue);
pros::Motor driveRB(3, pros::v5::MotorGears::blue);
pros::Motor driveRF(4, pros::v5::MotorGears::blue);

pros::Controller master(pros::E_CONTROLLER_MASTER);
// ------------------

// globals.hpp
extern pros::Motor driveLB;
extern pros::Motor driveLF;
extern pros::Motor driveRB;
extern pros::Motor driveRF;

extern pros::Controller master;
// ------------------

// main.h
#ifdef __cplusplus
/**
 * You can add C++-only headers here
 */
#include "globals.hpp"`}
          />
        </>
      ),
    },
    3: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Arcade Drive</h1>
          <p className="text-lg leading-relaxed mb-8">
            Arcade drive is a method of controlling a robot using the vertical axis
            of the joystick to control the forward and backward motion, while using
            the horizontal axis to control the turning motion. Below is a flowchart
            of how you can implement code for arcade drive:
          </p>
          <img
            src="/images/full-vrc-guide/ch3-1.png"
            alt="Arcade Drive Flowchart"
            className="rounded-full mx-auto mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Perform Any Tuning refers to adjusting your controller's sensitivity
              or adding a deadband (more on this later)
            </li>
            <li className="text-lg leading-relaxed">
              Power refers to the joystick movement in the y-direction
            </li>
            <li className="text-lg leading-relaxed">
              Turn refers to the joystick movement in the x-direction
            </li>
            <li className="text-lg leading-relaxed">
              Note that the power + turn and power - turn can be swapped sometimes.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-8">
            To give full power to a motor, you can do the following:
          </p>
          <CodeBlock codeString={`motor.move(127);`} language="cpp" />
          <Activity
            question="Create a new file called drive.cpp. Inside, create an arcade drive function using your already defined motors and controller. BONUS: Add a deadband to the joystick movement to prevent the robot from moving when the joystick value is below 5 in any direction."
            answer={`void arcade_drive() {
    int power = master.get_analog(ANALOG_LEFT_Y); // Get the vertical axis value
    int turn = master.get_analog(ANALOG_RIGHT_X);   // Get the horizontal axis value

    // Deadband
    if (abs(power) < 5) {
        power = 0;
    }
    if (abs(turn) < 5) {
        turn = 0;
    }
    
    int leftPower = power + turn;
    int rightPower = power - turn; 
    
    driveL.move(leftPower);
    driveR.move(rightPower);
}`}
          />
          <h1 className="text-3xl mt-10 mb-5 font-bold">
            Adding Other Subsystems
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            It is very common for you to not have all 8 motors used for driving.
            All of your other subsystems will be defined very similarily to your
            drive code.
          </p>
          <p className="text-lg leading-relaxed">
            Let's say you want to code an intake. When the driver holds the R1
            button: it intakes. When they hold the R2 button: it outtakes. Here is
            some sample code for that.
          </p>
          <CodeBlock
            codeString={`pros::Motor intake(1);

void intakeControl() {
    if (master.get_digital(DIGITAL_R1)) {
        intake.move(127);
    } else if (master.get_digital(DIGITAL_R2)) {
        intake.move(-127);
    } else {
        intake.move(0);
    }
}
// OR 

void intakeControl() {
    int intake_power = 127 * (master.get_digital(pros::E_CONTROLLER_DIGITAL_R1) - master.get_digital(pros::E_CONTROLLER_DIGITAL_R2));
    intake.move(intake_power);
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mb-8">
            Note that the .get_digital is used when you hold down a button
          </p>
          <p className="text-lg leading-relaxed">
            There is another case where you may need to press the button multiple
            times. Let's say you wanted to activate your catapult when you press 'B'
            and let it continue to shoot until you press 'B' again. Here is some
            sample code for that:
          </p>
          <CodeBlock
            codeString={`pros::Motor catapult(10);
bool current_state = false;

void catapultControl() {
    if (master.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_B)) {
        current_state = !current_state;
    }
    if (current_state) {
        catapult.move(127);
    } else {
        catapult.move(0);
    }
}`}
            language="cpp"
          />
        </>
      ),
    },
    4: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Autonomous Routes</h1>
          <p className="text-lg leading-relaxed mb-8">
            An autonomous route is a pre-programmed set of instructions that your
            robot will follow without human intervention. This is always used during
            the autonomous period of a VEX competition. You can earn extra points for
            winning autonomouses, Autonomous Points which are useful for tiebreaks,
            but most importantly AWPs (Autonomous Win Points) which counts as half a
            win.
          </p>
          <h2 className="text-3xl mb-5 font-bold">Adding a setDrive Function</h2>
          <p className="text-lg leading-relaxed mb-8">
            Creating your own function to control the motors of the robot to move
            forward, backward, and turn will save a lot of repetitive coding. Here is
            an example of how to create a setDrive function:
          </p>
          <CodeBlock
            codeString={`void setDrive(int leftPower, int rightPower) {
    driveLB.move(leftPower);
    driveLF.move(leftPower);
    driveRB.move(rightPower);
    driveRF.move(rightPower);
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            This function takes two arguments: leftPower and rightPower, which
            control the power sent to all of the left and right motors respectively.
          </p>
          <Mcq
            question="Which way should the robot move if setDrive(127, -127) is called?"
            options={[
              "Move forwards straight",
              "Move backwards straight",
              "Turn clockwise",
              "Turn counterclockwise",
            ]}
            correctAnswer="Turn clockwise"
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            You'll notice that if you send one side with power and the other side
            with the opposite power, your robot will turn on the spot.
          </p>
          <h2 className="text-3xl mb-5 font-bold mt-10">Adding Delays</h2>
          <p className="text-lg leading-relaxed mb-8">
            To create a sequence of movements, you can use delays between each
            setDrive command. The pros::delay function allows you to pause the
            program for a specified number of milliseconds. Here's an example of a
            simple autonomous route:
          </p>
          <CodeBlock
            codeString={`void autonomous() {
    setDrive(127, 127); // Move forward at full power
    pros::delay(2000); // Wait for 2 seconds

    setDrive(0, 0); // Stop
    pros::delay(500); // Wait for 0.5 seconds

    setDrive(-127, -127); // Move backward at full power
    pros::delay(2000); // Wait for 2 seconds

    setDrive(0, 0); // Stop
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            In this example, the robot moves forward for 2 seconds, stops for 0.5
            seconds, then moves backward for 2 seconds, and finally stops. The
            setDrive(0,0) to stop the robot is VERY important or else your motors
            will continue with the previous input and go at full power forever.
          </p>
          <FillBlank
            question="Write code for a 0.75 second delay"
            answer="pros::delay(750);"
          />
          <Activity
            question="Create a new file called autonomous.cpp. Inside, create a function called redRight that moves the robot forward for 0.5 seconds, turns left at around 50% power for 1.5 seconds, moves forward at 70% power for 1.5 seconds, then stops."
            answer={`void redRight() {
    setDrive(127, 127); // Move forward at full power
    pros::delay(500); // Wait for 0.5 seconds

    setDrive(-60, 60); // Turn left at ~half power
    pros::delay(1500); // Wait for 1.5 seconds

    setDrive(90, 90); // Move forward at 70% power
    pros::delay(1500); // Wait for 1.5 second

    setDrive(0, 0); // Stop
}`}
          />
          <p className="text-lg leading-relaxed mt-4 mb-8">
            Run the code with your robot to see what it does. Make sure you place
            your robot in the exact same spot everytime because that's what you will
            be doing at competitions. If you run the same code multiple times, what
            do you notice?
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-8">
            You will likely see that the robot doesn't go to the same place every
            single time. As a programmer, that can be strange since you are running
            the exact same code, but getting different results. That is because there
            are external factors such as friction that may vary from trial to trial
            and it can be very frustrating as coders to deal with that.
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-8">
            It is also very difficult to know what distance your robot is travelling
            if you give it full power for 1 second which makes it slow and tedious
            to program.
          </p>
          <p className="text-lg leading-relaxed mt-4 mb-8">
            For these reasons, our robots use sensors and other algorithms to help
            correct for the differences which will be the next 2 chapters.
          </p>
        </>
      ),
    },
    5: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Introduction to Sensors</h1>
          <p className="text-lg leading-relaxed mb-8">
            In this lesson, we will introduce sensors, focusing on the inertial
            sensor and the distance sensor. Sensors play a crucial role in providing
            feedback to your robot, allowing it to make more intelligent decisions
            and perform more precise movements.
          </p>
          <h2 className="text-3xl mb-5 font-bold">Inertial Sensor</h2>
          <p className="text-lg leading-relaxed mb-8">
            The inertial sensor measures the robot's rotation around its axes,
            allowing you to track its orientation in space. This is particularly
            useful for tasks that require precise turning or maintaining a specific
            heading. For example, getting your robot to turn 45 degrees clockwise.
            IMPORTANT: You should place your inertial sensors on a flat surface.
          </p>
          <img
            src="/images/full-vrc-guide/ch5-1.png"
            alt="Inertial Sensor"
            className="rounded-full mx-auto mb-8 size-64 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="text-lg leading-relaxed">
            To define and use the inertial sensor, follow these steps:
          </p>
          <CodeBlock
            codeString={`pros::Imu inertial_sensor(1); // Initialize the inertial sensor on port 1`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mt-5">
            You should always reset your inertial sensor when you initialize your
            code, and it generally will take a few seconds:
          </p>
          <CodeBlock
            codeString={`// In main.cpp
void initialize() {
    inertial_sensor.reset(); // Reset the sensor to zero
    pros::delay(2000); // Wait for 2 seconds to allow the sensor to calibrate
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mt-4">
            You can get the current inertial sensor values in degrees with the
            following commands.
          </p>
          <CodeBlock
            codeString={`double heading = inertial_sensor.get_heading();`}
            language="cpp"
          />
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              get_heading(): Get the Inertial Sensor's heading relative to the
              initial direction of its x-axis. This value is bounded by [0,360).
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            There are other methods that you can use with the inertial sensor which
            can be found on the PROS Documentation.
          </p>
          <img
            src="/images/full-vrc-guide/ch5-2.webp"
            alt="Inertial Sensor Documentation"
            className="rounded-lg mx-auto mt-8 mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="text-lg leading-relaxed mt-4">
            To set the position of an inertial sensor, you can use the following
            code as an example:
          </p>
          <CodeBlock
            codeString={`inertial_sensor.set_heading(90); // Sets the heading to 90 degrees`}
            language="cpp"
          />
          <Activity
            question="Create a new function: void turn(int degrees), make your robot turn to this specific amount of degrees using the inertial sensor and then make it stop moving once it is there. Assume your robot starts facing 0 degrees."
            answer={`void turn(int degrees) {
    while (inertial_sensor.get_heading() < degrees) {
        setDrive(70, -70); // Turn right at a speed of 70
        pros::delay(20);
    }
    setDrive(0, 0); // Stop
}`}
          />
          <p className="text-lg leading-relaxed mt-4">
            You might either notice that your robot turns very slow or it will
            overshoot the desired angle. In the next chapter, we will fix this issue
            using PID.
          </p>
          <h2 className="text-3xl mb-5 font-bold mt-10">Distance Sensor</h2>
          <p className="text-lg leading-relaxed mb-8">
            The distance sensor measures the distance between the sensor and an
            object. This can be useful for tasks such as detecting obstacles or
            measuring distances accurately.
          </p>
          <img
            src="/images/full-vrc-guide/ch5-3.png"
            alt="Distance Sensor"
            className="rounded-full mx-auto mb-8 size-64 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <p className="text-lg leading-relaxed">
            To initialize and use the distance sensor, follow this step:
          </p>
          <CodeBlock
            codeString={`pros::Distance distance_sensor(2); // Initialize the distance sensor on port 2`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mt-8">
            You can get the current distance in millimeters with the following
            command:
          </p>
          <CodeBlock codeString={`int distance = distance_sensor.get();`} language="cpp" />
          <Mcq
            question="Given that 1 cm = 0.3937 inches. What is the formula to convert from the distance sensor value (distance) from the example above to inches?"
            options={[
              "double inches = distance * 0.3937",
              "double inches = distance / 0.3937",
              "double inches = distance * 0.03937",
              "double inches = distance / 0.03937",
            ]}
            correctAnswer="double inches = distance * 0.03937"
          />
          <Activity
            question="Create a new function called turnUntilObstacle. This function should make the robot turn right until an obstacle is detected within 4 inches using the distance sensor. Once an obstacle is detected, the robot should stop moving."
            answer={`void turnUntilObstacle() {
    while (distance_sensor.get() * 0.03937 > 4) {
        setDrive(70, -70); // Turn right at a speed of 70
        pros::delay(20);
    }
    setDrive(0, 0); // Stop
}`}
          />
          <h2 className="text-2xl mb-5 font-bold mt-10">Motor Encoders</h2>
          <p className="text-lg leading-relaxed mb-8">
            By default, your motors have sensors built-in that can detect the number
            of rotations they have made. These units are usually in degrees, but you
            can change them when you define your motors. To get or reset the values
            of these encoders, you can use the following code:
          </p>
          <CodeBlock
            codeString={`motor.get_position(); // Get the current encoder value
motor.tare_position(); // Reset the encoder value to zero`}
            language="cpp"
          />
          <Activity
            question="Create a function that makes the robot move forward for 24 inches (1 tile) and then stop. Use the average of your motor encoders. Assume that your robot has a wheel diameter of 3 inches. BONUS: Make it so that the code can work for any wheel diameter and travel any distance by making them parameters or variables that you can change."
            answer={`// Pseudo-Code
double wheelDiameter = 3.0; // Diameter of the wheel in inches that you can modify

void driveFwd(int distance) {
    motors.tare_position(); // Reset all the encoder values to zero

    double target = distance * 360 / (wheelDiameter * 3.14159); // Convert the distance to encoder units

    while (motors.get_position() < target) {
        setDrive(100, 100); // Move forward at 100 power
        pros::delay(20);
    }
    setDrive(0, 0);
}`}
          />
        </>
      ),
    },
    6: {
      content: (
        <>
          <h2 className="text-3xl mb-5 font-bold">What is PID Control?</h2>
          <p className="text-lg leading-relaxed mb-8">
            PID stands for Proportional, Integral, and Derivative, each of which is
            a component of the control algorithm part of the method used in robotics
            for precise control of motor output. PID control is a control loop
            feedback mechanism commonly used in industrial control systems. A PID
            controller continuously calculates an error value as the difference
            between a desired setpoint and a measured process variable and applies a
            correction based on proportional, integral, and derivative terms.
          </p>
          <h2 className="text-2xl mt-5 mb-5 font-bold">Proportional Term (P)</h2>
          <p className="text-lg leading-relaxed">
            The proportional term produces an output value that is proportional to
            the current error value. The proportional response can be adjusted by
            multiplying the error by a constant K<sub>P</sub>, called the
            proportional gain.
          </p>
          <CodeBlock codeString={`output = kP * error;`} language="cpp" />
          <h2 className="text-2xl mt-8 mb-5 font-bold">Integral Term (I)</h2>
          <p className="text-lg leading-relaxed">
            The integral term is concerned with the accumulation of past errors. If
            the error has been present for a long time, the integral term will
            increase the output to eliminate the error. This can help to reduce
            steady-state error.
          </p>
          <CodeBlock
            codeString={`integral += error; \noutput += kI * integral;`}
            language="cpp"
          />
          <h2 className="text-2xl mt-8 mb-5 font-bold">Derivative Term (D)</h2>
          <p className="text-lg leading-relaxed">
            The derivative term is a prediction of future error, based on its rate of
            change. It provides a dampening effect, reducing the likelihood of
            overshoot and oscillations.
          </p>
          <CodeBlock
            codeString={`derivative = error - previousError; \noutput += kD * derivative;`}
            language="cpp"
          />
          <h2 className="text-2xl mt-8 mb-5 font-bold">Combining P, I, and D</h2>
          <p className="text-lg leading-relaxed">
            The final PID control output is the sum of the proportional, integral,
            and derivative terms:
          </p>
          <CodeBlock
            codeString={`double PID(double target, double measured_value, double& integral, double previous_error, double kP, double kI, double kD) {
    double error = target - measured_value;
    integral += error * deltaTime; // integral will be a global variable
    double derivative = error - previous_error;
    double output = kP * error + kI * integral + kD * derivative; 
    previous_error = error;
    return output;
}`}
            language="cpp"
          />
          <h2 className="text-3xl mt-8 mb-5 font-bold">
            Implementing PID in Robotics
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            To implement PID control in a robot, you need to continuously calculate
            the control output and adjust the motor speeds accordingly. In VEX
            Robotics, we've found that the integral term doesn't provide much value
            to the overall system. The P and D terms are almost always enough to
            make your robots movements very accurate.
          </p>
          <Mcq
            question="Which term of the PID controller is responsible for predicting future error based on its rate of change?"
            options={[
              "Proportional",
              "Integral",
              "Derivative",
              "Integral and Derivative",
            ]}
            correctAnswer="Derivative"
          />
          <h2 className="text-3xl mt-8 mb-5 font-bold">Tuning PID</h2>
          <p className="text-lg leading-relaxed mb-8">
            To tune your kP and kD values, the following website has a very good
            flowchart on it:{" "}
            <a
              className="text-blue-600"
              href="https://lemlib.readthedocs.io/en/stable/tutorials/4_pid_tuning.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              PID Tuning (Lemlib)
            </a>
          </p>
          <Activity
            question="Implement a PD (no integral) loop for the robot to drive straight x amount of inches, if the error is smaller than 1 inch, your robot can stop. Tune the kP and kD values for your robot."
            answer={`// Pseudo Code
double kP = 0.1; // Tune this value
double kD = 0.1; // Tune this value

void drive_straight(double distance) {
    double error = distance - motors.get_position();
    double previous_error = error; // We define this here so we don't get an error the first time we loop

    double tolerance = 1; // This is the # of inches of acceptable error

    motors.tare_position(); // Don't do this with odometry

    while (abs(error) > tolerance) {
        double current_position = motors.get_position();

        error = distance - current_position;
        double derivative = error - previous_error;

        double output = (kP * error) + (kD * derivative);

        setDrive(output, output);
        previous_error = error;
        pros::delay(20);
    }
    setDrive(0, 0);
}`}
          />
          <Activity
            question="Implement a PD (no integral) loop for the robot to turn and FACE x degrees, if the error is smaller than 3 degrees, your robot can stop. Tune the kP and kD values for your robot. BONUS: Make your robot travel the shortest distance to the desired angle."
            answer={`// Pseudo Code
double kP = 0.1; // Tune this value
double kD = 0.1; // Tune this value

void turn(double degrees) {
    double dir = 1;
    double error = degrees - inertial_sensor.get_heading();
    double previous_error = error; // We define this here so we don't get an error the first time we loop
    
    // If we need to turn more than 180 degrees, it's faster to turn the other way
    if error > 180 { 
        dir = -1 
    }

    double tolerance = 2; // This is the # of degrees of acceptable error

    while (abs(error) > tolerance) {
        double current_degrees = inertial_sensor.get_heading();

        error = degrees - current_degrees;
        double derivative = error - previous_error;
        
        double output = (kP * error) + (kD * derivative);

        setDrive(output * dir, -output * dir);
        previous_error = error;
        pros::delay(20);
    }
    setDrive(0, 0);
}`}
          />
        </>
      ),
    },
    7: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Debugging Your Code</h1>
          <p className="text-lg leading-relaxed mb-8">
            Debugging is an essential skill for programmers. It involves finding and
            fixing errors or bugs in your code to ensure it runs correctly. You may
            have noticed that the code we've previously written might not work for
            certain scenarios. This chapter will introduce you to various debugging
            techniques and tools that can help you troubleshoot and resolve issues in
            your code.
          </p>
          <h2 className="text-3xl mb-5 font-bold">
            Understanding Common Error Types
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            Errors in your code can be categorized into several types:
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Syntax Errors: Mistakes in the code that prevent it from compiling,
              such as missing semicolons or incorrect syntax.
            </li>
            <li className="text-lg leading-relaxed">
              Runtime Errors: Errors that occur while the program is running, such as
              division by zero or accessing null pointers.
            </li>
            <li className="text-lg leading-relaxed">
              Logic Errors: Errors where the code runs without crashing but does not
              produce the expected results.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-5">
            Understanding these types of errors will help you identify what went
            wrong and where to start debugging.
          </p>
          <h2 className="text-3xl mt-10 mb-5 font-bold">Strategies to Debug</h2>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Breakpoints: Pause the execution of your program at a specific line of
              code by commenting out the rest of your code
            </li>
            <li className="text-lg leading-relaxed">
              Tracing Back: Return to the last time your code worked, then add your
              new changes line by line to see which line is causing the issue.
            </li>
            <li className="text-lg leading-relaxed">
              Watch Variables: Monitor the values of variables as the program
              executes to see if anything unusual is going on.
            </li>
            <li className="text-lg leading-relaxed">
              Reproduce the Problem: Try to consistently reproduce the issue to
              understand when it occurs.
            </li>
            <li className="text-lg leading-relaxed">
              Simplify the Code: Reduce the complexity of the code to isolate the
              issue.
            </li>
            <li className="text-lg leading-relaxed">
              MAKE SURE IT IS A SOFTWARE ERROR: Sometimes your code might not work
              because there is hardware that is faulty.
            </li>
          </ul>
          <h2 className="text-2xl mt-8 mb-5 font-bold">Example: Syntax Error</h2>
          <p className="text-lg leading-relaxed">
            Here is an example of a syntax error:
          </p>
          <CodeBlock
            codeString={`int main() {
    int a = 5
    return 0;
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mb-8">
            The error is missing a semicolon after `int a = 5`. Fixing this syntax
            error will allow the code to compile.
          </p>
          <h2 className="text-2xl mb-5 font-bold">Example: Runtime Error</h2>
          <p className="text-lg leading-relaxed">
            Here is an example of a runtime error:
          </p>
          <CodeBlock
            codeString={`int divide(int a, int b) {
    return a / b;
}

int main() {
    int result = divide(10, 0);
    return 0;
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mb-8">
            The error is dividing by zero. To fix this, you should check if `b` is
            zero before performing the division.
          </p>
          <h2 className="text-2xl mb-5 font-bold">Example: Logic Error</h2>
          <p className="text-lg leading-relaxed">
            Here is an example of a logic error:
          </p>
          <CodeBlock
            codeString={`int add(int a, int b) {
    return a - b;  // Logic error: should be a + b
}

int main() {
    int result = add(3, 4);
    return 0;
}`}
            language="cpp"
          />
          <p className="text-lg leading-relaxed mb-8">
            The code should add two numbers, but it subtracts them instead. You need
            to fix the logic in the `add` function.
          </p>
          <h2 className="text-3xl mb-5 font-bold">Debugging Written Code</h2>
          <p className="text-lg leading-relaxed mb-8">
            Below is some code from last season, but it deliberately contains many
            errors in it. Do the activity below.
          </p>
          <CodeBlock
            codeString={`#include main.h
pros::Motor catapult(1);
pros::Rotation kicker_rot(13, false);
bool cata_shoot = false;

int kickerTask() {
    stop = true;

    while (True) {
         while (kicker_rot.get_angle() < 30000) { 
            pros::lcd::set_text("REACHED");
            if (stop == true) {
                Catapult.move_velocity(0);
                stop = false;
            }

            if (cata_shoot == true) {
                cata_shoot = true; 
                break
            }
        }

        if (cata_shoot == true) {
            pros::lcd::set_text(2, "Shoot');
            cata_shoot = false;
            Catapult.move_velocity(200);
            stop = true;
            pros:delay(260);
        }
        pros::delay(20);
    }
}`}
            language="cpp"
          />
          <Activity
            question="Take a look at the code above, fix any errors in the code so that the function works as intended. You should run the program locally to get familiar with the debugging process."
            answer={`#include "main.h" // added quotations
pros::Motor catapult(1);
pros::Rotation kicker_rot(13); // In PROS 4, the second parameter is not needed and will cause an error. Use negative values for reversed motors.
bool cata_shoot = false;

void kickerTask() { // int -> void
    bool stop = true; // Added bool in front of stop

    while (true) { // Changed True -> true
         while (kicker_rot.get_angle() < 30000) { 
            pros::lcd::set_text(1, "REACHED"); // Added first parameter (any line number is ok)
            if (stop == true) {
                catapult.move_velocity(0); // Catapult -> catapult
                stop = false;
            }

            if (cata_shoot == true) {
                cata_shoot = true; 
                break; // Added ;
            }
        }

        if (cata_shoot == true) {
            pros::lcd::set_text(2, "Shoot"); // ' -> "
            cata_shoot = false;
            catapult.move_velocity(200); // Catapult -> catapult
            stop = true;
            pros::delay(260); // Added a missing :
        }
        pros::delay(20);
    }
}`}
          />
          <h2 className="text-3xl mt-10 mb-5 font-bold">Tasks</h2>
          <p className="text-lg leading-relaxed mb-8">
            Tasks are used when you want multiple pieces of code to run at the same
            time. In the activity above, that was a task to hold down our kicker
            last season. Be careful when using too many tasks as it can exhaust your
            CPU since it is processing many functions at the same time.
          </p>
          <p className="text-lg leading-relaxed">
            Below is an example of how you would create a task function and execute
            it:
          </p>
          <CodeBlock
            codeString={`void task_function() {
    while (true) {
        // Code to run
        pros::delay(20);
    }
}`}
            language="cpp"
          />
          <CodeBlock
            codeString={`void initialize() {
    pros::Task task_name(task_function);
}`}
            language="cpp"
          />
          <Activity
            question="Write a task to print the units on each of your drive motor encoders and the angle of your inertial sensor on the V5 Brain every 80ms."
            answer={`void printEncoders() {
    while (true) {
        pros::lcd::set_text(1, "Left Encoder: " + std::to_string(left_encoder.get_position()));
        pros::lcd::set_text(2, "Right Encoder: " + std::to_string(right_encoder.get_position()));
        pros::lcd::set_text(3, "Inertial Angle: " + std::to_string(inertial_sensor.get_heading()));
        pros::delay(80);
    }
}
    
void initialize() {
    pros::Task printEncodersTask(printEncoders);
}`}
          />
        </>
      ),
    },
    8: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">What is Odometry?</h1>
          <p className="text-lg leading-relaxed mb-8">
            Odometry is a method used in robotics to estimate the position and
            orientation of a robot over time using data from motion sensors.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            Odometry works by integrating the robot's velocity over time to estimate
            its change in position. This is typically done using encoders attached to
            the robot's wheels. The main components of odometry are:
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Motor Encoders / Tracking Wheel: Measure the rotation of the wheels to
              calculate distance traveled.
            </li>
            <li className="text-lg leading-relaxed">
              Inertial Sensor: Measures the robot's orientation or angle.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-8 mb-5">
            To implement odometry, you can follow these general steps:
          </p>
          <ol className="text-lg leading-relaxed ml-10 list-decimal">
            <li className="text-lg leading-relaxed">
              Initialize All Sensors: Set up the sensors and initialize their values.
            </li>
            <li className="text-lg leading-relaxed">
              Calculate Distance and Angle: Use the sensor data to calculate the
              distance traveled and change in orientation.
            </li>
            <li className="text-lg leading-relaxed">
              Update Position: Use the distance and angle to update the robot's
              position on the field.
            </li>
          </ol>
          <CodeBlock
            language="cpp"
            codeString={`double x = 0.0;
double y = 0.0;
void update_odometry() {
    double theta = inertial_sensor.get_heading();

    double distance = (left_distance + right_distance) / 2.0; // You will need to convert encoder values to distance
    
    // Make sure sensor values don't read NaN
    if (!isnan(distance) && !isnan(theta)) {
        x += distance * cos(theta);
        y += distance * sin(theta);
    }

    // Print position for verification
    std::cout << "X: " << x << " Y: " << y << " Theta: " << theta << std::endl; // To print to the brain you will need to use pros::lcd
}`}
          />
          <p className="text-lg leading-relaxed mt-5 mb-8">
            We won't be implementing our own complete odometry system ourselves in
            this tutorial because it is quite difficult, but you can find many
            resources online to help with that. We will show you libraries that with
            Odometry that you can install in the next chapter.
          </p>
          <h2 className="text-3xl mb-5 font-bold">
            Common Challenges with Odometry
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            Odometry can be affected by various factors, leading to inaccuracies.
            Common challenges include:
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Wheel Slippage: Causes incorrect distance measurements.
            </li>
            <li className="text-lg leading-relaxed">
              Sensor Drift: Inertial sensor values can drift over time, affecting
              orientation accuracy.
            </li>
            <li className="text-lg leading-relaxed">
              Uneven Terrain: Changes in surface can affect wheel encoders.
            </li>
          </ul>
          <Mcq
            question="Why is it important to reset the encoders and inertial sensors before starting odometry calculations?"
            options={[
              "To ensure the robot starts from a known position",
              "To calibrate the sensors to the current environment",
              "To avoid sensor drift over time",
              "To synchronize the sensors with the control system",
            ]}
            correctAnswer="To ensure the robot starts from a known position"
          />
        </>
      ),
    },
    9: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">What are Libraries</h1>
          <p className="text-lg leading-relaxed mb-8">
            In the real-world a library is a place where you can find a variety of
            books. In programming, a library is a tool that has prebuilt functions
            that you can use which can save you a lot of time. PROS is one of those
            libraries that you have used to define and move your motors without
            writing a bunch of code to activate the motors yourself.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            Below are some libraries that our team has used or heard of
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              <a
                className="text-blue-500"
                href="https://lemlib.readthedocs.io/en/stable/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lemlib
              </a>
              : A library used for Odometry, PID, and other movements on PROS
            </li>
            <li className="text-lg leading-relaxed">
              <a
                className="text-blue-500"
                href="https://ez-robotics.github.io/EZ-Template/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EZ-Template
              </a>
              : A library used for PID movements on VexCode V5
            </li>
            <li className="text-lg leading-relaxed">
              <a
                className="text-blue-500"
                href="https://github.com/kunwarsahni01/Vex-Autonomous-Selector"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auton-Selector
              </a>
              : A library used for Autonomous Selectors
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-8 mb-5">
            Each of these websites has their own instructions on how to use them and
            how you can install them to add to your project. We used Lemlib as we
            found it had many features that were useful in making autonomous routes.
          </p>
          <Activity 
            question="Start by following the tutorials on Lemlib and test out the Odometry system on there. Once that system works, begin by making autonomous routes for your competitions." 
            answer="// answers will vary"
          />
        </>
      ),
    },
    10: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Understanding Pneumatics</h1>
          <p className="text-lg leading-relaxed mb-8">
            Pneumatics is the use of pressurized air to create mechanical motion. In
            robotics, pneumatics can be used for various applications such as
            actuating mechanisms or providing additional force. The main components
            of a pneumatic system include:
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Tank: Stores the compressed air.
            </li>
            <li className="text-lg leading-relaxed">
              Solenoid Valve: Controls the flow of air to the actuators.
            </li>
            <li className="text-lg leading-relaxed">
              Cylinder (Piston): Convert compressed air into mechanical motion.
            </li>
            <li className="text-lg leading-relaxed">
              Air Tubing: Transports compressed air between components.
            </li>
          </ul>
          <img
            src="https://kb.vex.com/hc/article_attachments/17271878462868"
            alt="Pneumatic System Diagram"
            className="rounded-lg mx-auto mt-10 mb-8 max-w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <FillBlank
            question="Define a pneumatic called 'climb' on port A (use single quotes). The answer will be shown below, but try to now use the documentation to figure it out yourself."
            answer="pros::ADIDigitalOut climb('A');"
          />
          <hr className="mt-10 text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
          <p className="text-lg leading-relaxed mt-10">
            If you didn't figure that out, here is how you define a pneumatic
            cylinder
          </p>
          <CodeBlock
            language="cpp"
            codeString={`pros::ADIDigitalOut climb('A'); // On port A`}
          />
          <Activity
            question="Implement a function to actuate a pneumatic lift mechanism. Whenever your driver press 'A' on the controller, the cylinder should extend. When they press 'A' again, the cylinder should retract."
            answer={`pros::ADIDigitalOut lift('A');
bool current_state = false;

void lift() {
    if (controller.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_A)) {
        current_state = !current_state;
        lift.set_value(currentClimb);
    }
}`}
          />
          <Mcq
            question="Which component in a pneumatic system converts compressed air into mechanical motion?"
            options={[
              "Tank",
              "Solenoid Valve",
              "Cylinder (Piston)",
              "Air Tubing",
            ]}
            correctAnswer="Cylinder (Piston)"
          />
        </>
      ),
    },
    11: {
      content: (
        <>
          <h1 className="text-3xl mb-5 font-bold">Liveshare and GitHub</h1>
          <p className="text-lg leading-relaxed mb-8">
            In this chapter, you'll learn about two essential tools for collaborative
            development: Visual Studio Code Liveshare and GitHub. These tools help
            you work together with your team and manage your code effectively.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <img
              className="size-40"
              src="https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare/1.0.5932/1718214903014/Microsoft.VisualStudio.Services.Icons.Default"
              alt="Liveshare"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <img
              className="size-40"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="GitHub"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <h2 className="text-2xl mt-5 mb-5 font-bold">Liveshare</h2>
          <p className="text-lg leading-relaxed mb-8">
            Liveshare allows you to share your code and work on it in real-time with
            your teammates. You can edit code together, debug, and even share
            terminals.
          </p>
          <ol className="text-lg leading-relaxed ml-10 list-decimal">
            <li className="text-lg leading-relaxed">
              Install Liveshare Extension: Go to the Extensions view in Visual Studio
              Code and search for "Live Share". Install the extension.
            </li>
            <li className="text-lg leading-relaxed">
              Start a Session: Click on the Liveshare icon in the sidebar and select
              "Start collaboration session". This will generate a link that you can
              share with your teammates.
            </li>
            <li className="text-lg leading-relaxed">
              Join a Session: Your teammates can join the session by clicking on the
              link you shared. They will be able to see and edit your code in
              real-time.
            </li>
          </ol>
          <h2 className="text-2xl mt-10 mb-5 font-bold">GitHub</h2>
          <p className="text-lg leading-relaxed mb-8">
            GitHub is a platform for version control and collaboration. It allows you
            to manage and track changes to your codebase, collaborate with others, and
            maintain a history of your project.
          </p>
          <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">
              Creating a Repository: A repository is where your project's files are
              stored. You can create a new repository on GitHub by clicking on the
              "New" button on the GitHub homepage and following the prompts.
            </li>
            <li className="text-lg leading-relaxed">
              Cloning a Repository: To work on a repository locally, you need to
              clone it. This can be done by clicking on the "Code" button in the
              repository page and copying the URL. Then, in your terminal, use the
              command:
              <CodeBlock codeString={`git clone <repository-url>`} language="bash" />
            </li>
            <li className="text-lg leading-relaxed">
              Committing Changes: When you make changes to your project, you need to
              commit them to your repository. This can be done using the following
              commands:
              <CodeBlock
                codeString={`git add .\ngit commit -m "Your commit message"`}
                language="bash"
              />
            </li>
            <li className="text-lg leading-relaxed">
              Pushing Changes: After committing your changes, you need to push them to
              the remote repository on GitHub:
              <CodeBlock codeString={`git push origin main`} language="bash" />
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-5 mb-8">
            NOTE: The above practices are only recommended for beginners. Pushing
            directly to the main branch is something you will almost never see in
            industry practices.
          </p>
          <h2 className="text-2xl mt-10 mb-5 font-bold">GitHub Desktop</h2>
          <p className="text-lg leading-relaxed mt-5 mb-8">
            Similarily you can download{" "}
            <a
              className="text-blue-500"
              href="https://desktop.github.com/download/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Desktop
            </a>{" "}
            which is a GUI version that makes it much easier for beginners to use.
          </p>
          <img
            className="mx-auto max-w-full h-auto rounded-lg"
            alt="Github Desktop"
            src="https://www.gitkraken.com/wp-content/uploads/2024/02/githubdesktop-1024x704.png"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <Activity
            question="Create a new repository for your VRC code on GitHub. Add a README.md file, commit the changes, and push them to GitHub."
            answer={`// Example steps
1. Create a new repository on GitHub
2. Create a README.md file
3. Add the file and all of your other files to the repository
4. Commit the changes
5. Push the changes to GitHub`}
          />
          <Mcq
            question="What command do you use to add all changes in your local repository to be committed?"
            options={["git commit", "git push", "git add .", "git clone"]}
            correctAnswer="git add ."
          />
        </>
      ),
    },
  };

  const content = chapterContent[chapterNum as keyof typeof chapterContent];

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chapter Content Not Found
          </h1>
          <a
            href="/programs/full-vrc-guide"
            className="text-orange-500 hover:text-orange-600"
          >
            Return to Course
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar
        courseName="full-vrc-guide"
        chapterName={chapters[chapterNum - 1]}
        chapterNum={chapterNum}
        chapters={chapters}
        description={descriptions[chapterNum - 1]}
      />
      <div className="max-w-5xl mt-5 mx-auto p-6 md:p-12 bg-white rounded-lg shadow-sm mb-8 font-mono text-gray-900">
        {content.content}
      </div>
      <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>
      {chapterNum < chapters.length && (
        <NextChapter
          courseName="full-vrc-guide"
          chapterName={chapters[chapterNum]}
          chapterNum={chapterNum + 1}
          description={descriptions[chapterNum]}
        />
      )}
    </div>
  );
}