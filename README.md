
# Rocket Craft Project

### Unreal Engine Project
### Based on `Unreal Motion Graphics` to create 2d UI elements also used some of best project 3dgames templates.
I choose the best solution for developing multiple platforms. (Rocket is alias for ue). 3D graphics is optimal you can use any standard features from UE4.24.
Version `Full Spectar`
Created by Nikola Lukic https://maximumroulette.com 2021

## Project list:

### - Shooter FPS - future Hang3d 2 [c++]
#### http://maximumroulette.com/apps/shooter/ShooterGame.html

### - Barbarian Road Mashines - race / zombies game [BP]
#### http://rocketcraft.maximumroulette.com

### - Survival Zombie shooting game [c++]
#### No link for now

### FullSpectrum - Empty project [BP]

Live demo link with options to use dedicated server.
Note: Dedicated server is not active non-stop.

## Description

- Use Unreal engine to create classic 2d context applications.
  Similar to the standard web application.
  Rocket is most powerfull cross platform tool i need to use it.
  4.24 version is most interest checkpoint for UE.
  Last version with opengles 2.0 devices support (mobile).
  Also is version where we use new feature `exstension HTML5 build`.
  Explanation: with opengles 2.0 we can still build our application 
  for old android 5/6/7/8... os. In other way 4.24 is one of the last
  releases. Future upgrade will be easy.

  Please join the team and participate:
  https://github.com/orgs/RocketCraftingServer/teams/rocketcraftingteam


### Video YT - Beta testing

#### Barbarian Road Mashines
https://www.youtube.com/watch?v=3w-0MX4BA6c&ab_channel=javascriptfanatic

Beta live demo link [dedicated server runned]
Use connect for master server
 - play solo
 - open your own host (web platform no support for host game).
 - play online realtime multiplayer 
   (html5) connected to the dedicated server (centOS 8.3 [must be public])
 - play any platform via dedicated server

### Screenshots:

#### Register form
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/registerform-dev.png)

#### Barbaarian road mashines
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/barbarian-road-mashines.png)

#### Shooter game - upgraded Hang3d Nightmare
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/hang2-menu.png)

#### Shooter game - upgraded Hang3d Nightmare
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/shooter1.png)

#### Shoot the zombie - upgraded from Survival game.
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/zombie1.png)

#### Shoot the zombie 
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/zombie2.png)

### TODO:

 - Create free of choose to use account session with
   rocketCraftServer.

 - Add connection between Shoooter and rocketCraftionServer, create leaderboard for every listed game.

### Rocket-craft main block architecture :
     
<pre>
                                               +-----------------------------------------------+
                                               |                                               |
                                               |   Build from source Unreal Engine             |
                                               |   Current active and ultimate version         |
                                               |   is 4.24.3 Read more from html5 ue4          |
                                               |   exstension github repo readme files.        |
                                               |                                               |
                                               |                                               |
                                               |        Ultimate multiplatform solution.       |
                                               |       +-------------------------------+       |
                                               |       |                               |       |
                                               |       |   ONE SOURCE ALL PLATFORMS    |       |
                                               |       |                               |       |
                                               |       +-------------------------------+       |
                                               |                                               |
                                               |  UMG 2d Context  PhysX                        |
                                               |                                               |
                                               +-----------------------------------------------+


                  +-----------------------------------+  +----------------------------------+  +-----------------------------------+
                  | Windows 10 OS             Client  |  | Linux OS                 Client  |  | MacOS                     Client  |
                  +-----------------+-----------------+  +-----------------+----------------+  +-----------------+-----------------+
                  | Run like client | Run like server |  | Run like client | Run like server|  | Run like client | Run like server |
                  +-----------------------------------+  +----------------------------------+  +-----------------------------------+
                  |                 |                 |  |                 |                |  |                 |                 |
                  |                 |                 |  |                 |                |  |                 |                 |
                  |  Solo play      | Client become   |  |  Solo play      | Client become  |  |  Solo play      | Client become   |
                  |                 | host server.    |  |                 | host server.   |  |                 | host server.    |
                  |  Connect to     | Allow others to |  |  Connect to     | Allow others to|  |  Connect to     | Allow others to |
                  |  any server     | connect.        |  |  any server     | connect.       |  |  any server     | connect.        |
                  |                 |                 |  |                 |                |  |                 |                 |
                  +-----------------+-----------------+  +--------+--------+----------------+  +-----------------+-------^----+----+
                                                                  |                                                      |    ^
                                                                  |                                         +------------+    |
+-----------------------------------+                             |Scenario 1                               |      <----------+
| Android                   Client  |                             |                                         |      |
+-----------------+-----------------+                             v                                         |      |   +-----------------------------------+
| Run like client | Run like server |                    +--------+-------------------------+               |      |   | HTML5                     Client  |
+-----------------------------------+                    |         Dedicated server         |               |      |   +-----------------+-----------------+
|                 |                 |                    +----------------------------------+               |      |   | Run like client | X               |
|                 |                 |                    | Can be public also private.      |               |      |   +-----------------------------------+
|  Solo play      | Client become   |                    |                                  |               | Scenario2|                 |                 |
|                 | host server.    |          +-------->+                                  |               |      |   |                 | Basic role of   |
|  Connect to     | Allow others to |          |         |                                  |               |      |   |  Solo play      | web browser     |
|  any server     | connect.        |          |         |                                  |               |      |   |                 | platform no     |
|                 |                 |          |         +----------------------------------+               |      +---+  Connect to     | host allowed.   |
+------+----------+-----------------+          |                                                            |          |  any server     |                 |
       |                                       |                                                            |          |                 |                 |
       |                                       |                                                            |          +-----------------+-----------------+
       |                                       |                                                            |
       |        Scenario 1                     |         +-----------------------------------+          Scenario 2
       +---------------------------------------+         | iOS                       Client  |              |
                                                         +-----------------+-----------------+              |
                                                         | Run like client | Run like server |              |
                                                         +-----------------------------------+              |
                                                         |                 |                 |              |    Scenario 2 :
    Scenario 1 :                                         |                 |                 |              |    MacOs client open game host and posted game info
    Player with linux Os and android                     |  Solo play      | Client become   |              |    to server list or passed private person to person.
    decided to play on public master server.             |                 | host server.    |              |    Web client connect to mac os host gameplay also
    Server list comes from rocket-crafting-server        |  Connect to     | Allow others to |              |    iOS client. Mac OS clietn must open port on
    or can be private passed person to person.           |  any server     | connect.        |              |    his router (NAT).
                                                         |                 |                 |              |
                                                         +--------+--------+-----------------+              |
                                                                  |                                         |
                                                                  +-----------------------------------------+

                        +----------+----------+---------------------------------------------------------------------------------+
                        |          |          |                                                                                 |
                        |     +----+----------v------------------------------------+          +-----------------------------+   |
                        |     |                                                    |          |                             |   |
                        |     |      REST API                                      |          |  HTTP, HTTPS (1.1 or 2)     |   |
                        |     | [/rocket/register]      [rocket/]                  |          |                             |   |
                        |     | [/rocket/confirmation]                             |          +-----------------------------+   |
                        |     | [/rocket/register]                                 |                                            |
                        |     | [/rocket/login]                                    |                                            |
                        |     | [/rocket/profile]                                  |                                            |
                        |     +----------------------------------------------------+                                            |
                        |                                                                                                       |
                        |  +------------------------------------------------------------+                                       |
                        |  SOURCE : https://github.com/RocketCraftingServer/rocket-craft-server                                 |
                        |  +------------------------------------------------------------+                                       |
                        |                                                                                                       |
                        +-------------------------------------------------------------------------------------------------------+
                        |                                            NODEJS CORE                                                |
                        +-------------------------------------------------------------------------------------------------------+
                        |                                           MONGO DATABASE                                              |
                        +-------------------------------------------------------------------------------------------------------+

[connectivity-works]
</pre>

You need to join team and get your copy of rocket-crafting-server: 
 - https://github.com/orgs/RocketCraftingServer/teams 
 - https://github.com/RocketCraftingServer/rocket-craft-server


## Structure

  #### SurvivalGame
  #### BarbarianRoadMashines
  #### ShooterGame
  #### Blanko App -> Template/FullSpectrum


### HTML5 Old Tradicional way (deplaced)

  - Use version `4.22`
  No need for build engine from source for client client-server.
  opengles2.0 or 3.1
  In this project i prefered 4.24.3 it is litle more complex to 
  get working solution but it is better.
  
### HTML5/webGL New way (build engine from source):

  - opengles 3.1 / 2.0 (ready for deplacment but still present) from html5 docs repo.

  Version Moder solution:
  UnrealEngine-4.24.3-html5-1.39.18
  UnrealEngine-4.24.3-html default branch

  Under folder 4.24.0/  Barbarian Road Mashines:

  Beta testing:
  https://www.youtube.com/watch?v=3w-0MX4BA6c


 Download default html branch or use 
 https://github.com/UnrealEngineHTML5/UnrealEngine/tree/4.24.3-html5-1.39.18

  There is a trouble with single-brach you can just clone whole project or download zip of current branch.
  
```cpp
  git clone -b 4.24.3-html5-1.39.18 --single-branch https://github.com/UnrealEngineHTML5/UnrealEngine ue4-4.24.3-html5
```

  You can clone from origin nut not html5 pack support:
  Or clone whole poject . This can be heavy for your hard drive.

```cpp
  git clone -b https://github.com/UnrealEngineHTML5/UnrealEngine
```

#### Android

  - Google play licence key:

```js
  keytool -genkey -v -keystore barbarian-road-mashines-key.keystore -alias barbarian-road-mashines -keyalg RSA -keysize 2048 -validity 10000
  keytool -genkey -v -keystore zombie-key.keystore -alias zombie -keyalg RSA -keysize 2048 -validity 10000
```
  On windows you can find keytool for example in :
  `C:\Program Files\Android\Android Studio\jre\bin`
  Navigate in terminal to the jre bin folder. No need windows git bash.

#### Windows - Linux - Mac os SETUP unreal engine from source:

 You not need to manual install emscripten if you already have emscripten jusr remove it from env paths.

```
  Setup.bat/Setup.command/Setup.sh                                              may take up to an hour or so
  HTML5Setup.sh                                                                 may take up to an hour or so
  GenerateProjectFiles.bat/GenerateProjectFiles.command/GenerateProjectFiles.sh may take up to 5 minutes
```

#### DedicatedServer/AppServerClient servers build

Ue4 must be builded from source if you wanna build dedicated server.
This client part but for core networks related to the `ue4` this is also dedicated server project generator:

Note:
 - HTML5 or web app can't be host server (Browsers tech one of the main roles).
   but we cant use it like client it is enough for playing/using games/apps.

Successed build dedicated for linux:
```
 PID    USER      PR  NI    VIRT    RES    SHR S   %CPU   %MEM  TIME  + COMMAND
 502469 unreal    20      287952  46860   6600 S   1.7   5.7   1:07.52 BrmServer-Linux
```

I am quite happy with these results but you have to pay attention to many things.


## Help for c++ template projects

<i>
This is only for ue from source case (when you wanna dedicated server builds) in other way just use `build` project,
for full rebuild use `rebuild` project.

The option you are referring to (Build -> Project Only -> Clean Only "ProjectName") 
is a Visual Studio option, not one that is exclusive to Unreal Engine 4. What actually
happens when a Project Only Clean process is begun, is that Visual Studio not only
cleans the Project, but it also checks to see if it is able to clean anything that 
the Project depends on. Since you are using a version of the Engine that is built from
source code, Visual Studio includes that dependency in the Clean process, which ends up
requiring a full build of the Engine. The same occurs if you attempt to rebuild 
the project only. If you wish to be able to perform a clean at only the project level,
you would need to navigate to where your project is located in a Windows Explorer window.
In the root project folder, delete the Binaries, Build, DerivedDataCache, and Intermediate
folders. Right-click on the project's .uproject file and select the Generate Visual Studio
project files option (this will recreate the Intermediate folder). Open the project solution
in Visual Studio and Build the project (this will recreate the Binaries and Build folders). When the build 
completes in Visual Studio, double-click the project's .uproject file to open it in the Editor(this will recreate 
the DerivedDataCache folder).You should now have a "Clean" project without needing to rebuild the Engine.
Source: https://answers.unrealengine.com/questions/100921/view.html?sort=oldest
</i>

## Project shooter - Hang3d new version

  - This is c++ template project.
    Must be optimised little more for mobile targets.

## Project Survival

  - This is c++ template project.
    Modification: Adding fire to be blueprint accessible, adding fire button 
    option for jump also raffal shooting button. [WIP]
    Must be optimised little more for mobile targets.

## Realistic rendering ue4 example

 - I will try max powered graphics for this example
   Still must to have healt builds for all targets.

## Licence and Credits

 - VAST ue4 plugin
 - ShooterGame
   Unreal Engine 4.24.3

 - SurvivalGame
   MIT License
   Copyright (c) 2020 Tom Looman

 - Zombie mesh with skin and animation:
   https://www.mixamo.com/
