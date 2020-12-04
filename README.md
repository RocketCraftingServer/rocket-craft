
## Unreal Engine Project
## Based on `Unreal Motion Graphics` to create 2d UI elements.

#### I chose the best solution for developing multiple platforms 
#### 3D graphics is optimal you can use any standard features from UE4.24.
#### Version `Full Spectar`
#### Nikola maximumroulette.com 2021

- Use Unreal engine to create classic 2d context applications.
  Similar to the standard web application.
  Rocket is most powerfull cross platform tool i need to use it.
  4.24 version is most interest checkpoint for UE.
  Last version with `only` opengles 2.0 devices support (mobile).
  Also is version where we use new feature `exstension HTML5 build`.
  Explanation: with opengles 2.0 we can still build our application 
  for old android 5/6/7/8... os. In other way 4.24 is one of the last
  releases. Future upgrade will be easy.

#### TODO

 - Access any utf8 file data.
 - Handling JSON response/response.
 - Create free of choose to use account session:
    -  Api-mashine 
       Create social app.
       https://github.com/zlatnaspirala/api-mashine
    -  kms-ov-integrator
       Node.js https://github.com/zlatnaspirala/kms-ov-integrator

#### Rocket-craft Blueprints Features:

 - Access JSON file data from any web server.
     
<pre>

    +---------------------------------------+
    |                                       |
    |          Build from source            |
    |            Unreal Engine              |
    |  +---------------------------------+  |
    |  | One source                      |  |
    |  | HUD widgets used for 2d context |  |
    |  | Use 3d graphics is optimal      |  |
    |  +---------------------------------+  |
    +---------------------------------------+

  +--------------------------------------+    +-----------------------------------------------------------+
  |                                      |    |     ANDROID                     iOS                       |
  |      DESKTOP  PLATFORMS              |    |  +------------------------+  +-------------------------+  |
  |                                      |    |  |                        |  |                         |  |
  |      +------------------------+      |    |  | ue 4.22 4.24 for old   |  | Ue version must be      |  |
  |      | WINDOWS                |      |    |  |                        |  | updated in moment       |  |
  |      +------------------------+      |    |  | ue 4.25 for super new  |  | of opengles deplacment  |  |
  |                                      |    |  |                        |  | with metal.             |  |
  |      +------------------------+      |    |  |                        |  |                         |  |
  |      | MAC OS                 |      |    |  |                        |  |                         |  |
  |      +------------------------+      |    |  |                        |  |                         |  |
  |                                      |    |  |                        |  |                         |  |
  |      +------------------------+      |    |  |                        |  |                         |  |
  |      | LINUX                  |      |    |  |                        |  |                         |  |
  |      +------------------------+      |    |  |                        |  |                         |  |
  |                                      |    |  +------------------------+  +-------------------------+  |
  +--------------------------------------+    +-----------------------------------------------------------+

</pre>
  
### HTML5 Old Tradicional way

  - Use version `4.22`
  No need for build engine from source.
  opengles2.0 or 3.1
  
### HTML5/webGL New way:

  - Only opengles 3.1

```cpp
  git clone -b 4.24.3-html5-1.39.18 --single-branch https://github.com/UnrealEngineHTML5/UnrealEngine ue4-4.24.3-html5
```

  Or clone whole poject . This can be heavy for your hard drive.

```cpp
  git clone -b https://github.com/UnrealEngineHTML5/UnrealEngine
```

#### Windows - Linux - Mac os

```
  Setup.bat/Setup.command/Setup.sh
  HTML5Setup.sh                                                                 may take up to an hour or so
  GenerateProjectFiles.bat/GenerateProjectFiles.command/GenerateProjectFiles.sh may take up to 5 minutes
```
