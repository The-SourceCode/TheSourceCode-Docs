# Spigot Plugin Development
Getting started with Spigot plugin development can seem like a daunting task at first. Keep in mind that there is an incredible community on our [Discord](https://discord.thesourcecode.dev) that can provide additional help. One of the first things you should do is **learn some Java Basics** with our [Java beginners guide](). This is a common thing told to many new Spigot plugin developers and it is something that most refuse to do. While it may take about a week or two of your time away from developing your super fun plugins, it will increase your overall understanding of plugin development.

## Installing Java
We would advise that you start using newer version of Java *(Java 10+)* as this offers more features, better security, and overall performance boosts. If your host is not using a Java version compatible with yours, then make sure to contact them and get what version that are using. 

**Make sure to download the proper file based on your operating system / Linux distro.**

[Java 10 Download](https://www.oracle.com/java/technologies/java-archive-javase10-downloads.html) / [Java 11 Download](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) / [Java 12 Download](https://www.oracle.com/java/technologies/javase/jdk12-archive-downloads.html)


Once you have downloaded and installed your Java, ensure that it its properly installed by typing `Java --version` in your command prompt or terminal. If nothing shows up, try setting your system to correct environment variables.

### Fixing Environment Variables
Do this only IF `Java --version` prints out nothing or errors.
#### Windows 10

Open File Explorer and browse for your Java installation folder. It will most likely be located in either `Program Files\Java` or `Program Files (x86)\Java` on your `C: drive.`

Once you find your Java folder look for a JRE installation folder *(e.g. jreXXXX.jar)*, open it. Otherwise, open the JDK installation folder *(e.g. jdkXXXX.jar)*. Copy that full path in the navigation bar at the top. Simply just open your command prompt and type `setx JAVA_HOME -m "Path"`

#### Linux

Open a Terminal or command line window. Open the `~/.bash_profile` using `nano` or another command-line editor such as Pico. For example enter `nano ~/.bash_profile`. Set your PATH to include the JDK sub-folder named java. For example: `export PATH=$PATH:/usr/java/jdk11.0_10/bin`. Save your changes and restart.

#### MacOS

Open a Terminal or command line window. First we need to confirm that you have a Java JDK installed. Type `which java`. It should show `/usr/bin/java`. Next we need to set our `JAVA_HOME` using this command in Terminal: `export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.6.jdk/Contents/Home/`. Your path may differ from mine based on what version of Java you are using. But generally it will always be under `/Library/Java/...`. You will want to ensure you get to the folder just before the `/bin` folder.

## Download your IDE
Now that we have installed Java we are ready to install our IDE. For the purposes of this, we will based the majority of our keyboard shortcuts and setup off of Intellij IDE. But if you are using Eclipse, feel free to remap your keys to fit along with the Intellij keyboard scheme. 

[Intellij IDE Download](https://www.jetbrains.com/idea/download/) / [Elcipse IDE Download](https://www.eclipse.org/downloads/)

## Setup your IDE

### Intellij
If you have Java installed chances are Intellij will automatically find it. If not Intellij has an incredible and easy [Tutorial on setting up the SDK](https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html). You only have to read to about Step 5. Once you get that far you can jump back over to this tutorial.

#### Maven Project Setup
For any beginners our there, you are probably wondering what maven even is. Maven will provide very useful in the future, but for getting started with the basics I would probably skip over it for now. 

If you wish to learn more about Maven, [feel free to visit their site](http://maven.apache.org/what-is-maven.html)
#### Java Project Setup
![Image](/images/java-project-01_1.gif)



### Eclipses 
*Coming soon*
