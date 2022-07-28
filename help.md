
## PUBLISHING


Hang3d is based on Shooter UE4 template project. With great 4.24.x version.
Hang3d is multiplatform project. For now win32 , win64 , linux, web, android. 
Game avaible also like web application at the link: http://maximumroulette.com/apps/shooter/hang3d-nightmare.html

Added features:
 - Background sound
 - Doors 
 - Elevators
 - Map edited

Game play is classic area type of FPS.



## Problems

From source: https://forums.unrealengine.com/t/destructible-mesh-spawning-in-broken-in-packaged-build-wont-respond-to-damage-or-simulate/459848/2

```
SavvyIndoorsman Jan '20 

Finally figured out what was going on. Some new ways of searching the web yielded the clues I needed.

The problem turned out to be related to this question 3 and this question 1, where the original posters figured out that, in packaged builds, the Apex Destruction module is sometimes loaded after the destructible asset is loaded during engine startup. This, in a sense, causes the loaded asset to be improperly initialized, preventing it from being able to be shattered and simulate during gameplay.

One of the previous posters found a solution by modifying the engine code (rebuilding from source) to force the Apex Destruction module to load before any Apex assets are loaded during engine startup. The other poster found a workaround by eliminating all “normal” references to the troublesome destructible asset throughout the project and instead loading the asset later during runtime by feeding the engine with a string to the asset’s path.

Thankfully I found an easier way to work around the problem, by replacing all references to the destructible mesh asset in my project (there was actually only one anyway) with soft object references. This ensured that the destructible mesh asset wasn’t loaded in at the same time its “owning” asset (the goal actor, in my case) was during engine startup. This allows for the Apex Destruction module to load first while the game boots up, and the soft reference allows me to choose when the destructible mesh asset gets loaded (when it’s needed — when the goal asset runs its BeginPlay).

So to sum up: use soft object references if you’re experiencing strange issues with Apex destructibles!
```


https://forums.unrealengine.com/t/destructible-mesh-spawning-in-broken-in-packaged-build-wont-respond-to-damage-or-simulate/459848/4
