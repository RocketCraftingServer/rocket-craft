
# Rocket Craft
### Unreal Engine Project
### Based on `Unreal Motion Graphics` to create 2d UI elements.
### UNDERCONSTRUCT
#### I choose the best solution for developing multiple platforms. (Rocket is alias for ue).
#### 3D graphics is optimal you can use any standard features from UE4.24.
#### Version `Full Spectar`
#### Nikola https://maximumroulette.com 2021

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

https://www.youtube.com/watch?v=3w-0MX4BA6c&ab_channel=javascriptfanatic

Beta live demo link [dedicated server runned] Use connect for master server
, play solo(for web) - open your own host (other platforms).

### Screenshots:

#### Register form
![](https://github.com/zlatnaspirala/rocket-craft/blob/master/non-project-files/registerform-dev.png)



#### TODO

 - Access any utf8 file data.
 - Handling JSON response/response.
 - Create free of choose to use account session with
   rocketCraftServer.
 - Create Barbarian Road mashines
 - 

#### Rocket-craft Blueprints Features:

 - Access JSON file data from any web server.
     
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

You need to join team and get your copu of rocket-crafting-server
https://github.com/orgs/RocketCraftingServer/teams
https://github.com/RocketCraftingServer/rocket-craft-server


## Structure

  #### SurvivalGame
  #### BarbarianRoadMashines
  #### ShooterGame
  #### Blanko Classic App 2d


### HTML5 Old Tradicional way

  - Use version `4.22`
  No need for build engine from source for client client-server.
  opengles2.0 or 3.1
  
### HTML5/webGL New way:

  - Only opengles 3.1 maybe 2.0 ??? from html5 docs repo.

  Version Moder solution: 
  UnrealEngine-4.24.3-html5-1.39.18
  UnrealEngine-4.24.3-html default branch

  Under folder 4.24.0/
  Maybe can be full solution for now!

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
```

#### Windows - Linux - Mac os SETUP unreal engine from source:

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

## Licence and Credits

 - ShooterGame
   Unreal Engine 4.24.3

 - SurvivalGame
   MIT License
   Copyright (c) 2020 Tom Looman

 - Zombie mesh with skin and animation:
   https://www.mixamo.com/
