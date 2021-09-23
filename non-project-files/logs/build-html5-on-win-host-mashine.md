UATHelper: Packaging (HTML5): Parsing command line: -ScriptsForProject=C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/ShooterGame.uproject BuildCookRun -nocompileeditor -nop4 -project=C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/ShooterGame.uproject -cook -stage -ar
chive -archivedirectory="C:/Users/Nikola Lukic/Desktop/TEST_BUILDS/SHOOTER/html5/no-multi-thread" -package -ue4exe=D:\ue-engines\4.24-html\myengine\Engine\Binaries\Win64\UE4Editor-Cmd.exe -pak -prereqs -nodebuginfo -targetplatform=HTML5 -build -target=ShooterGame -clientconfig=Development -utf8output -compile
UATHelper: Packaging (HTML5): Dependencies are up to date. Skipping compile.
UATHelper: Packaging (HTML5): Setting up ProjectParams for C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject
UATHelper: Packaging (HTML5): ********** BUILD COMMAND STARTED **********
UATHelper: Packaging (HTML5): Running: D:\ue-engines\4.24-html\myengine\Engine\Binaries\DotNET\UnrealBuildTool.exe UnrealPak Win64 Development -Project=C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject  C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\
ShooterGame.uproject -NoUBTMakefiles  -Manifest=D:\ue-engines\4.24-html\myengine\Engine\Intermediate\Build\Manifest.xml -NoHotReload -log="D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Saved\Logs\UBT-UnrealPak-Win64-Development.txt"
UATHelper: Packaging (HTML5):   Writing manifest to D:\ue-engines\4.24-html\myengine\Engine\Intermediate\Build\Manifest.xml
UATHelper: Packaging (HTML5):   Target is up to date
UATHelper: Packaging (HTML5):   Total execution time: 14.61 seconds
UATHelper: Packaging (HTML5): Took 14.773002s to run UnrealBuildTool.exe, ExitCode=0
UATHelper: Packaging (HTML5): Running: D:\ue-engines\4.24-html\myengine\Engine\Binaries\DotNET\UnrealBuildTool.exe ShooterGame HTML5 Development -Project=C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject  C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGam
e\ShooterGame.uproject -NoUBTMakefiles  -remoteini="C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame" -skipdeploy -Manifest=D:\ue-engines\4.24-html\myengine\Engine\Intermediate\Build\Manifest.xml -NoHotReload -log="D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Saved\Logs\UBT-ShooterGame-HTML5-Deve
lopment.txt"
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: EnableMultithreading = False
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: OffscreenCanvas = False
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: LLVMWasmBackend = False
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: EnableTracing = False
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: ProfilerMode =
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: EnableSIMD = False
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: 3rd party lib path = lib-1.39.0-fc-mt
UATHelper: Packaging (HTML5):   h5conf Setting Emscripten SDK: located in D:\ue-engines\4.24-html\myengine\Engine\Platforms\HTML5\Build\emsdk\emsdk-1.39.0\upstream\emscripten
UATHelper: Packaging (HTML5):   emcc ExitCode: 0
UATHelper: Packaging (HTML5):   # Note: If you put paths relative to the home directory, do not forget
UATHelper: Packaging (HTML5):   # os.path.expanduser
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Any config setting <KEY> in this file can be overridden by setting the
UATHelper: Packaging (HTML5):   # EM_<KEY> environment variable. For example, settings EM_LLVM_ROOT override
UATHelper: Packaging (HTML5):   # the setting in this file.
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Note: On Windows, remember to escape backslashes! I.e. LLVM='c:\llvm\'
UATHelper: Packaging (HTML5):   # is not valid, but LLVM='c:\\llvm\\' and LLVM='c:/llvm/'
UATHelper: Packaging (HTML5):   # are.
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   import os
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   # This is used by external projects in order to find emscripten.  It is not used
UATHelper: Packaging (HTML5):   # by emscripten itself.
UATHelper: Packaging (HTML5):   EMSCRIPTEN_ROOT = os.path.expanduser(os.getenv('EMSCRIPTEN', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\emscripten')) # directory
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   LLVM_ROOT = os.path.expanduser(os.getenv('LLVM', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\fastcomp\\bin')) # directory
UATHelper: Packaging (HTML5):   BINARYEN_ROOT = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream'
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   # Add this if you have manually built the JS optimizer executable (in
UATHelper: Packaging (HTML5):   # Emscripten/tools/optimizer) and want to run it from a custom location.
UATHelper: Packaging (HTML5):   # Alternatively, you can set this as the environment variable
UATHelper: Packaging (HTML5):   EMSCRIPTEN_NATIVE_OPTIMIZER = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\bin\\optimizer.exe'
UATHelper: Packaging (HTML5):   EMSCRIPTEN_NATIVE_OPTIMIZER = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\bin\\optimizer.exe'
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   # Location of the node binary to use for running the JS parts of the compiler.
UATHelper: Packaging (HTML5):   # This engine must exist, or nothing can be compiled.
UATHelper: Packaging (HTML5):   NODE_JS = os.path.expanduser(os.getenv('NODE', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\node\\12.18.1_64bit\\bin\\node.exe')) # executable
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   JAVA = 'java' # executable
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   # CLOSURE_COMPILER = '..' # define this to not use the bundled version
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   ################################################################################
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Test suite options:
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Alternative JS engines to use during testing:
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # SPIDERMONKEY_ENGINE = [os.path.expanduser(os.getenv('SPIDERMONKEY', 'js'))] # executable
UATHelper: Packaging (HTML5):   # V8_ENGINE = os.path.expanduser(os.getenv('V8', 'd8')) # executable
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # All JS engines to use when running the automatic tests. Not all the engines in
UATHelper: Packaging (HTML5):   # this list must exist (if they don't, they will be skipped in the test runner).
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # JS_ENGINES = [NODE_JS] # add V8_ENGINE or SPIDERMONKEY_ENGINE if you have them installed too.
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # WASMER = os.path.expanduser(os.path.join('~', '.wasmer', 'bin', 'wasmer'))
UATHelper: Packaging (HTML5):   # WASMTIME = os.path.expanduser(os.path.join('~', 'wasmtime'))
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Wasm engines to use in STANDALONE_WASM tests.
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # WASM_ENGINES = [] # add WASMER or WASMTIME if you have them installed
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # Other options
UATHelper: Packaging (HTML5):   #
UATHelper: Packaging (HTML5):   # FROZEN_CACHE = True # never clears the cache, and disallows building to the cache
UATHelper: Packaging (HTML5):   h5conf Emscripten Config File: D:\ue-engines\4.24-html\myengine\Engine\Intermediate\Build\HTML5\.emscripten
UATHelper: Packaging (HTML5):   Parsing headers for ShooterGame
UATHelper: Packaging (HTML5):     Running UnrealHeaderTool "C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject" "C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Intermediate\Build\HTML5\ShooterGame\Development\ShooterGame.uhtmanifest" -LogCmds="loginit
 warning, logexit warning, logdatabase error" -Unattended -WarningsAsErrors
UATHelper: Packaging (HTML5):   Reflection code generated for ShooterGame in 33.8775653 seconds
UATHelper: Packaging (HTML5):   h5conf HTML5ToolChain: Development -O2 aggressive size and speed optimization
UATHelper: Packaging (HTML5):   XXX: -o C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Binaries\HTML5\ShooterGame.js
UATHelper: Packaging (HTML5):   XXX: --save-bc C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Binaries\HTML5\ShooterGame.bc
UATHelper: Packaging (HTML5):   Writing manifest to D:\ue-engines\4.24-html\myengine\Engine\Intermediate\Build\Manifest.xml
UATHelper: Packaging (HTML5):   Building ShooterGame...
UATHelper: Packaging (HTML5):   [Upgrade]
UATHelper: Packaging (HTML5):   [Upgrade] Using backward-compatible build settings. The latest version of UE4 sets the following values by default, which may require code changes:
UATHelper: Packaging (HTML5):   [Upgrade]     bLegacyPublicIncludePaths = false                 => Omits subfolders from public include paths to reduce compiler command line length. (Previously: true).
UATHelper: Packaging (HTML5):   [Upgrade]     ShadowVariableWarningLevel = WarningLevel.Error   => Treats shadowed variable warnings as errors. (Previously: WarningLevel.Warning).
UATHelper: Packaging (HTML5):   [Upgrade]     PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs   => Set in build.cs files to enables IWYU-style PCH model. See https://docs.unrealengine.com/en-US/Programming/BuildTools/UnrealBuildTool/IWYU/index.html. (Previously: PCHUsageMode.UseSharedPCHs).
UATHelper: Packaging (HTML5):   [Upgrade] Suppress this message by setting 'DefaultBuildSettings = BuildSettingsVersion.V2;' in ShooterGame.Target.cs, and explicitly overriding settings that differ from the new defaults.
UATHelper: Packaging (HTML5):   [Upgrade]
UATHelper: Packaging (HTML5):   Building 517 actions with 4 processes...
UATHelper: Packaging (HTML5):     [1/517] Module.ImageWrapper.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.30 seconds
UATHelper: Packaging (HTML5):     [2/517] Module.Gauntlet.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.59 seconds
UATHelper: Packaging (HTML5):     [3/517] Module.WebSocketNetworking.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.18 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.96 seconds
UATHelper: Packaging (HTML5):     [4/517] Module.Gauntlet.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 17.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.40 seconds
UATHelper: Packaging (HTML5):     [5/517] Module.ReplicationGraph.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.51 seconds
UATHelper: Packaging (HTML5):     [6/517] Module.ShooterGame.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 77.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.94 seconds
UATHelper: Packaging (HTML5):     [7/517] Module.ShooterGame.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 77.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.18 seconds
UATHelper: Packaging (HTML5):     [8/517] Module.ReplicationGraph.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.17 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.59 seconds
UATHelper: Packaging (HTML5):     [9/517] Module.OnlineSubsystemUtils.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.22 seconds
UATHelper: Packaging (HTML5):     [10/517] Module.OnlineSubsystemUtils.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.72 seconds
UATHelper: Packaging (HTML5):     [11/517] Module.OnlineSubsystemNull.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 19.02 seconds
UATHelper: Packaging (HTML5):     [12/517] Module.OnlineSubsystem.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.19 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.28 seconds
UATHelper: Packaging (HTML5):     [13/517] Module.Paper2D.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.27 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.82 seconds
UATHelper: Packaging (HTML5):     [14/517] Module.WebSocketNetworking.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.24 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.52 seconds
UATHelper: Packaging (HTML5):     [15/517] Module.OnlineSubsystemUtils.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.24 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 17.09 seconds
UATHelper: Packaging (HTML5):     [16/517] Module.Paper2D.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.20 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.67 seconds
UATHelper: Packaging (HTML5):     [17/517] Module.OnlineSubsystemUtils.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 42.54 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 24.76 seconds
UATHelper: Packaging (HTML5):     [18/517] AISupportModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.32 seconds
UATHelper: Packaging (HTML5):     [19/517] Module.Paper2D.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.69 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 12.34 seconds
UATHelper: Packaging (HTML5):     [20/517] LightPropagationVolumeBlendable.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.42 seconds
UATHelper: Packaging (HTML5):     [21/517] Module.DatasmithContent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.78 seconds
UATHelper: Packaging (HTML5):     [22/517] LightPropagationVolumeRuntime.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.14 seconds
UATHelper: Packaging (HTML5):     [23/517] LightPropagationVolumeRuntimeModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.52 seconds
UATHelper: Packaging (HTML5):     [24/517] SignificanceManager.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.48 seconds
UATHelper: Packaging (HTML5):     [25/517] SignificanceManager.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.14 seconds
UATHelper: Packaging (HTML5):     [26/517] Module.UObjectPlugin.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.39 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.38 seconds
UATHelper: Packaging (HTML5):     [27/517] Module.AnimationSharing.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.89 seconds
UATHelper: Packaging (HTML5):     [28/517] SignificanceManager.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.83 seconds
UATHelper: Packaging (HTML5):     [29/517] Module.AnimationSharing.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.25 seconds
UATHelper: Packaging (HTML5):     [30/517] Module.UObjectPlugin.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.64 seconds
UATHelper: Packaging (HTML5):     [31/517] Module.DatasmithContent.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.84 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.32 seconds
UATHelper: Packaging (HTML5):     [32/517] Module.FacialAnimation.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.20 seconds
UATHelper: Packaging (HTML5):     [33/517] Module.AssetTags.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.71 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.47 seconds
UATHelper: Packaging (HTML5):     [34/517] Module.AudioCapture.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.86 seconds
UATHelper: Packaging (HTML5):     [35/517] Module.VariantManagerContent.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.68 seconds
UATHelper: Packaging (HTML5):     [36/517] Module.VariantManagerContent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.14 seconds
UATHelper: Packaging (HTML5):     [37/517] Module.MediaCompositing.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.71 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.73 seconds
UATHelper: Packaging (HTML5):     [38/517] Module.GeometryCache.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.60 seconds
UATHelper: Packaging (HTML5):     [39/517] Module.GeometryCache.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 10.92 seconds
UATHelper: Packaging (HTML5):     [40/517] Module.GeometryCacheTracks.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.20 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.02 seconds
UATHelper: Packaging (HTML5):     [41/517] Module.AutomationUtils.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.67 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.54 seconds
UATHelper: Packaging (HTML5):     [42/517] CharacterAIModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.32 seconds
UATHelper: Packaging (HTML5):     [43/517] Module.BackChannel.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.07 seconds
UATHelper: Packaging (HTML5):     [44/517] Module.GeometryCacheTracks.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.23 seconds
UATHelper: Packaging (HTML5):     [45/517] Module.ImgMedia.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.56 seconds
UATHelper: Packaging (HTML5):     [46/517] Module.ImgMediaFactory.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.09 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.69 seconds
UATHelper: Packaging (HTML5):     [47/517] Module.AutomationUtils.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.27 seconds
UATHelper: Packaging (HTML5):     [48/517] Module.ImgMedia.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.16 seconds
UATHelper: Packaging (HTML5):     [49/517] Module.ImgMediaFactory.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.51 seconds
UATHelper: Packaging (HTML5):     [50/517] Module.TcpMessaging.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.52 seconds
UATHelper: Packaging (HTML5):     [51/517] Module.DatasmithContent.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.67 seconds
UATHelper: Packaging (HTML5):     [52/517] Module.TcpMessaging.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.91 seconds
UATHelper: Packaging (HTML5):     [53/517] Module.FacialAnimation.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.49 seconds
UATHelper: Packaging (HTML5):     [54/517] Module.UdpMessaging.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.10 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.68 seconds
UATHelper: Packaging (HTML5):     [55/517] Module.AndroidPermission.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.43 seconds
UATHelper: Packaging (HTML5):     [56/517] Module.ActorSequence.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.76 seconds
UATHelper: Packaging (HTML5):     [57/517] Module.ActorSequence.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.27 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.01 seconds
UATHelper: Packaging (HTML5):     [58/517] Module.UdpMessaging.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 10.75 seconds
UATHelper: Packaging (HTML5):     [59/517] Module.AndroidPermission.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.64 seconds
UATHelper: Packaging (HTML5):     [60/517] Module.AppleImageUtils.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.24 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.78 seconds
UATHelper: Packaging (HTML5):     [61/517] Module.AppleImageUtils.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.97 seconds
UATHelper: Packaging (HTML5):     [62/517] Module.ArchVisCharacter.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.50 seconds
UATHelper: Packaging (HTML5):     [63/517] Module.ArchVisCharacter.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.16 seconds
UATHelper: Packaging (HTML5):     [64/517] Module.MediaCompositing.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.74 seconds
UATHelper: Packaging (HTML5):     [65/517] EngineMessagesModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 1.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.26 seconds
UATHelper: Packaging (HTML5):     [66/517] Module.AssetTags.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.70 seconds
UATHelper: Packaging (HTML5):     [67/517] Module.CableComponent.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.36 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.66 seconds
UATHelper: Packaging (HTML5):     [68/517] Module.CustomMeshComponent.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.30 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.60 seconds
UATHelper: Packaging (HTML5):     [69/517] Module.CustomMeshComponent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.67 seconds
UATHelper: Packaging (HTML5):     [70/517] Module.OnlineSubsystem.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.51 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.44 seconds
UATHelper: Packaging (HTML5):     [71/517] Module.EditableMesh.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.24 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.50 seconds
UATHelper: Packaging (HTML5):     [72/517] ExampleDeviceProfileSelectorModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.42 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.53 seconds
UATHelper: Packaging (HTML5):     [73/517] Module.EditableMesh.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.40 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 17.70 seconds
UATHelper: Packaging (HTML5):     [74/517] Module.LocationServicesBPLibrary.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.69 seconds
UATHelper: Packaging (HTML5):     [75/517] Module.EditableMesh.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.77 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.62 seconds
UATHelper: Packaging (HTML5):     [76/517] Module.LocationServicesBPLibrary.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.00 seconds
UATHelper: Packaging (HTML5):     [77/517] Module.MobilePatchingUtils.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.28 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.24 seconds
UATHelper: Packaging (HTML5):     [78/517] Module.MobilePatchingUtils.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.78 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.18 seconds
UATHelper: Packaging (HTML5):     [79/517] Module.EditableMesh.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.13 seconds
UATHelper: Packaging (HTML5):     [80/517] Module.ProceduralMeshComponent.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.81 seconds
UATHelper: Packaging (HTML5):     [81/517] Module.PhysXVehicles.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.86 seconds
UATHelper: Packaging (HTML5):     [82/517] RuntimePhysXCooking.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.45 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.50 seconds
UATHelper: Packaging (HTML5):     [83/517] Module.PhysXVehicles.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.29 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 10.63 seconds
UATHelper: Packaging (HTML5):     [84/517] Module.HTML5PlatformFeatures.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.49 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.67 seconds
UATHelper: Packaging (HTML5):     [85/517] Module.ProceduralMeshComponent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.93 seconds
UATHelper: Packaging (HTML5):     [86/517] BuildSettings.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.39 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.11 seconds
UATHelper: Packaging (HTML5):     [87/517] HTML5JavaScriptFx.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.18 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.10 seconds
UATHelper: Packaging (HTML5):     [88/517] Module.Json.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.33 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.64 seconds
UATHelper: Packaging (HTML5):     [89/517] Module.TraceLog.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.91 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.12 seconds
UATHelper: Packaging (HTML5):     [90/517] Module.Projects.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.28 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 17.32 seconds
UATHelper: Packaging (HTML5):     [91/517] Module.CoreUObject.2_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 35.19 seconds
UATHelper: Packaging (HTML5):     [92/517] Module.CoreUObject.1_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 53.75 seconds
UATHelper: Packaging (HTML5):     [93/517] Module.CoreUObject.3_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.07 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.51 seconds
UATHelper: Packaging (HTML5):     [94/517] Module.ShooterGame.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 118.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 48.25 seconds
UATHelper: Packaging (HTML5):     [95/517] Module.CoreUObject.4_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.69 seconds
UATHelper: Packaging (HTML5):     [96/517] Module.CoreUObject.7_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.32 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.59 seconds
UATHelper: Packaging (HTML5):     [97/517] Module.CableComponent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.25 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.60 seconds
UATHelper: Packaging (HTML5):     [98/517] Module.SlateCore.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.75 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.89 seconds
UATHelper: Packaging (HTML5):     [99/517] Module.ShooterGame.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.07 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 111.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 86.70 seconds
UATHelper: Packaging (HTML5):     [100/517] Module.CoreUObject.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.06 seconds
UATHelper: Packaging (HTML5):     [101/517] Analytics.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.79 seconds
UATHelper: Packaging (HTML5):     [102/517] Module.SSL.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.50 seconds
UATHelper: Packaging (HTML5):     [103/517] Module.Sockets.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.60 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.63 seconds
UATHelper: Packaging (HTML5):     [104/517] Module.CoreUObject.5_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 34.63 seconds
UATHelper: Packaging (HTML5):     [105/517] Module.HTTP.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.00 seconds
UATHelper: Packaging (HTML5):     [106/517] Module.AnalyticsET.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.73 seconds
UATHelper: Packaging (HTML5):     [107/517] Module.EditorAnalyticsSession.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.36 seconds
UATHelper: Packaging (HTML5):     [108/517] Module.InputCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.97 seconds
UATHelper: Packaging (HTML5):     [109/517] Module.ApplicationCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.54 seconds
UATHelper: Packaging (HTML5):     [110/517] Module.InputCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.82 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.99 seconds
UATHelper: Packaging (HTML5):     [111/517] Module.ImageWrapper.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.54 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.10 seconds
UATHelper: Packaging (HTML5):     [112/517] Module.SlateCore.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 10.76 seconds
LogSlate: Took 0.000448 seconds to synchronously load lazily loaded font '../../../Engine/Content/Slate/Fonts/Roboto-Italic.ttf' (157K)
UATHelper: Packaging (HTML5):     [113/517] Module.Settings.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.33 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.48 seconds
UATHelper: Packaging (HTML5):     [114/517] Module.SlateCore.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.65 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 35.24 seconds
UATHelper: Packaging (HTML5):     [115/517] Module.SlateCore.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.51 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 35.75 seconds
UATHelper: Packaging (HTML5):     [116/517] Module.CoreUObject.6_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 32.00 seconds
UATHelper: Packaging (HTML5):     [117/517] Module.Slate.1_of_5.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.84 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 45.24 seconds
UATHelper: Packaging (HTML5):     [118/517] Module.Slate.3_of_5.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 44.27 seconds
UATHelper: Packaging (HTML5):     [119/517] Module.Slate.2_of_5.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 57.00 seconds
UATHelper: Packaging (HTML5):     [120/517] Module.Slate.5_of_5.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.90 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.13 seconds
UATHelper: Packaging (HTML5):     [121/517] Module.Slate.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.53 seconds
UATHelper: Packaging (HTML5):     [122/517] Module.EditorStyle.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.61 seconds
UATHelper: Packaging (HTML5):     [123/517] Module.EditorStyle.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.29 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.37 seconds
UATHelper: Packaging (HTML5):     [124/517] Module.AssetRegistry.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.05 seconds
UATHelper: Packaging (HTML5):     [125/517] Module.Slate.4_of_5.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.51 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 54.40 seconds
UATHelper: Packaging (HTML5):     [126/517] Module.Messaging.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.89 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.89 seconds
UATHelper: Packaging (HTML5):     [127/517] Module.AssetRegistry.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.39 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 28.92 seconds
UATHelper: Packaging (HTML5):     [128/517] Module.SlateReflector.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.15 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.62 seconds
UATHelper: Packaging (HTML5):     [129/517] Module.AudioCapture.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.69 seconds
UATHelper: Packaging (HTML5):     [130/517] Module.AppFramework.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.45 seconds
UATHelper: Packaging (HTML5):     [131/517] Module.MessageLog.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.39 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 31.71 seconds
UATHelper: Packaging (HTML5):     [132/517] Module.Networking.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.66 seconds
UATHelper: Packaging (HTML5):     [133/517] Module.AnimGraphRuntime.gen.4_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.56 seconds
UATHelper: Packaging (HTML5):     [134/517] Module.NullDrv.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.19 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.64 seconds
UATHelper: Packaging (HTML5):     [135/517] Module.RenderCore.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.99 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 18.99 seconds
UATHelper: Packaging (HTML5):     [136/517] Module.Renderer.9_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.21 seconds
UATHelper: Packaging (HTML5):     [137/517] Module.BuildPatchServices.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.00 seconds
UATHelper: Packaging (HTML5):     [138/517] Module.BuildPatchServices.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.97 seconds
UATHelper: Packaging (HTML5):     [139/517] Module.PreLoadScreen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.56 seconds
UATHelper: Packaging (HTML5):     [140/517] Module.BuildPatchServices.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.89 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 40.20 seconds
UATHelper: Packaging (HTML5):     [141/517] Module.OpenGLDrv.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.37 seconds
UATHelper: Packaging (HTML5):     [142/517] Module.OpenGLDrv.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.23 seconds
UATHelper: Packaging (HTML5):     [143/517] cell.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.89 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.24 seconds
UATHelper: Packaging (HTML5):     [144/517] Module.RHI.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.81 seconds
UATHelper: Packaging (HTML5):     [145/517] Module.OpenGLDrv.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.14 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 24.83 seconds
UATHelper: Packaging (HTML5):     [146/517] Module.Voronoi.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.84 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.83 seconds
UATHelper: Packaging (HTML5):     [147/517] Module.ImageWriteQueue.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.47 seconds
UATHelper: Packaging (HTML5):     [148/517] Module.RHI.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.24 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 27.22 seconds
UATHelper: Packaging (HTML5):     [149/517] Module.ImageWriteQueue.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.10 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.71 seconds
UATHelper: Packaging (HTML5):     [150/517] Module.BuildPatchServices.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.54 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 75.74 seconds
UATHelper: Packaging (HTML5):     [151/517] Module.MSQS.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.91 seconds
UATHelper: Packaging (HTML5):     [152/517] Module.MSQS.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.05 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.77 seconds
UATHelper: Packaging (HTML5):     [153/517] ConsoleSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.32 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.71 seconds
UATHelper: Packaging (HTML5):     [154/517] EngineSettingsModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.56 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.09 seconds
UATHelper: Packaging (HTML5):     [155/517] EngineSettings.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.25 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.13 seconds
UATHelper: Packaging (HTML5):     [156/517] GameMapsSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.68 seconds
UATHelper: Packaging (HTML5):     [157/517] GameNetworkManagerSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.58 seconds
UATHelper: Packaging (HTML5):     [158/517] GameSessionSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.54 seconds
UATHelper: Packaging (HTML5):     [159/517] GeneralEngineSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.56 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.59 seconds
UATHelper: Packaging (HTML5):     [160/517] GeneralProjectSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.55 seconds
UATHelper: Packaging (HTML5):     [161/517] HudSettings.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.33 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.52 seconds
UATHelper: Packaging (HTML5):     [162/517] container_prd.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.27 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.27 seconds
UATHelper: Packaging (HTML5):     [163/517] Module.MRMesh.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.75 seconds
UATHelper: Packaging (HTML5):     [164/517] c_loops.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.13 seconds
UATHelper: Packaging (HTML5):     [165/517] pre_container.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.40 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.29 seconds
UATHelper: Packaging (HTML5):     [166/517] unitcell.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.77 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.93 seconds
UATHelper: Packaging (HTML5):     [167/517] v_base.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.18 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.18 seconds
UATHelper: Packaging (HTML5):     [168/517] Module.RenderCore.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 17.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 35.51 seconds
UATHelper: Packaging (HTML5):     [169/517] v_compute.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.25 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.67 seconds
UATHelper: Packaging (HTML5):     [170/517] wall.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.19 seconds
UATHelper: Packaging (HTML5):     [171/517] Module.Renderer.6_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 38.59 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 41.11 seconds
UATHelper: Packaging (HTML5):     [172/517] Module.FieldSystemCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.84 seconds
UATHelper: Packaging (HTML5):     [173/517] Module.FieldSystemCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.44 seconds
UATHelper: Packaging (HTML5):     [174/517] Module.OnlineSubsystem.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.82 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 80.04 seconds
UATHelper: Packaging (HTML5):     [175/517] Module.Chaos.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 52.97 seconds
UATHelper: Packaging (HTML5):     [176/517] Module.PhysicsCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.60 seconds
UATHelper: Packaging (HTML5):     [177/517] Module.PhysicsCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 19.66 seconds
UATHelper: Packaging (HTML5):     [178/517] Module.Chaos.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.40 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 62.60 seconds
UATHelper: Packaging (HTML5):     [179/517] container.cc
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.40 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.54 seconds
UATHelper: Packaging (HTML5):     [180/517] Module.AugmentedReality.gen.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.09 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.84 seconds
UATHelper: Packaging (HTML5):     [181/517] Module.AugmentedReality.gen.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.04 seconds
UATHelper: Packaging (HTML5):     [182/517] Module.AugmentedReality.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.56 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.74 seconds
UATHelper: Packaging (HTML5):     [183/517] Module.AugmentedReality.gen.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.59 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.14 seconds
UATHelper: Packaging (HTML5):     [184/517] Module.HeadMountedDisplay.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.57 seconds
UATHelper: Packaging (HTML5):     [185/517] Module.Renderer.7_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.36 seconds
UATHelper: Packaging (HTML5):     [186/517] Module.HeadMountedDisplay.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.08 seconds
UATHelper: Packaging (HTML5):     [187/517] Module.HeadMountedDisplay.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 13.95 seconds
UATHelper: Packaging (HTML5):     [188/517] Module.Renderer.2_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.71 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 21.55 seconds
UATHelper: Packaging (HTML5):     [189/517] Module.Renderer.1_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.80 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.99 seconds
UATHelper: Packaging (HTML5):     [190/517] Module.Renderer.3_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.19 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.98 seconds
UATHelper: Packaging (HTML5):     [191/517] ChaosCoreModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 3.42 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.31 seconds
UATHelper: Packaging (HTML5):     [192/517] Module.MRMesh.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.84 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.79 seconds
UATHelper: Packaging (HTML5):     [193/517] Module.Renderer.4_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 31.32 seconds
UATHelper: Packaging (HTML5):     [194/517] Module.Renderer.5_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 26.71 seconds
UATHelper: Packaging (HTML5):     [195/517] Module.TimeManagement.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.93 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 9.09 seconds
UATHelper: Packaging (HTML5):     [196/517] Module.Renderer.8_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.48 seconds
UATHelper: Packaging (HTML5):     [197/517] Module.Renderer.12_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.90 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 28.88 seconds
UATHelper: Packaging (HTML5):     [198/517] Module.Renderer.10_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 44.14 seconds
UATHelper: Packaging (HTML5):     [199/517] Module.Renderer.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.80 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.51 seconds
UATHelper: Packaging (HTML5):     [200/517] Module.Renderer.13_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.69 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 25.16 seconds
UATHelper: Packaging (HTML5):     [201/517] Module.Renderer.14_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 21.13 seconds
UATHelper: Packaging (HTML5):     [202/517] Module.Foliage.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.71 seconds
UATHelper: Packaging (HTML5):     [203/517] Module.Foliage.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.97 seconds
UATHelper: Packaging (HTML5):     [204/517] Module.Landscape.2_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.84 seconds
UATHelper: Packaging (HTML5):     [205/517] Module.Landscape.1_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.34 seconds
UATHelper: Packaging (HTML5):     [206/517] Module.Landscape.gen.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.41 seconds
UATHelper: Packaging (HTML5):     [207/517] Module.Landscape.4_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.88 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.61 seconds
UATHelper: Packaging (HTML5):     [208/517] Module.Landscape.gen.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.17 seconds
UATHelper: Packaging (HTML5):     [209/517] Module.Landscape.3_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.64 seconds
UATHelper: Packaging (HTML5):     [210/517] Module.Landscape.gen.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.37 seconds
UATHelper: Packaging (HTML5):     [211/517] Module.MovieScene.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.82 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.22 seconds
UATHelper: Packaging (HTML5):     [212/517] Module.Renderer.11_of_14.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.59 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 35.14 seconds
UATHelper: Packaging (HTML5):     [213/517] Module.MovieScene.gen.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.82 seconds
UATHelper: Packaging (HTML5):     [214/517] Module.MovieScene.gen.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.46 seconds
UATHelper: Packaging (HTML5):     [215/517] Module.MovieScene.gen.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.50 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.34 seconds
UATHelper: Packaging (HTML5):     [216/517] Module.MovieSceneTracks.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.81 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 34.89 seconds
UATHelper: Packaging (HTML5):     [217/517] Module.AnimationCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.22 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.28 seconds
UATHelper: Packaging (HTML5):     [218/517] Module.AnimationCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.09 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.85 seconds
UATHelper: Packaging (HTML5):     [219/517] Module.MovieScene.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 39.05 seconds
UATHelper: Packaging (HTML5):     [220/517] Module.AnimGraphRuntime.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.41 seconds
UATHelper: Packaging (HTML5):     [221/517] Module.AnimGraphRuntime.gen.1_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.19 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.43 seconds
UATHelper: Packaging (HTML5):     [222/517] Module.AnimGraphRuntime.gen.2_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.44 seconds
UATHelper: Packaging (HTML5):     [223/517] Module.TimeManagement.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.76 seconds
UATHelper: Packaging (HTML5):     [224/517] Module.AnimGraphRuntime.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 22.62 seconds
UATHelper: Packaging (HTML5):     [225/517] Module.MovieSceneTracks.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.79 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.15 seconds
UATHelper: Packaging (HTML5):     [226/517] Module.NetCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.53 seconds
UATHelper: Packaging (HTML5):     [227/517] Module.AnimGraphRuntime.gen.3_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.46 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.06 seconds
UATHelper: Packaging (HTML5):     [228/517] Module.MovieSceneTracks.gen.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.44 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.96 seconds
UATHelper: Packaging (HTML5):     [229/517] Module.PropertyPath.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.32 seconds
UATHelper: Packaging (HTML5):     [230/517] Module.PropertyPath.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.61 seconds
UATHelper: Packaging (HTML5):     [231/517] Module.MovieSceneTracks.gen.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 17.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.45 seconds
UATHelper: Packaging (HTML5):     [232/517] Module.UMG.gen.8_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.05 seconds
UATHelper: Packaging (HTML5):     [233/517] Module.SlateRHIRenderer.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 21.90 seconds
UATHelper: Packaging (HTML5):     [234/517] Module.UMG.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 38.59 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.85 seconds
UATHelper: Packaging (HTML5):     [235/517] Module.UMG.gen.1_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.98 seconds
UATHelper: Packaging (HTML5):     [236/517] Module.UMG.gen.2_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.82 seconds
UATHelper: Packaging (HTML5):     [237/517] Module.UMG.gen.3_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.68 seconds
UATHelper: Packaging (HTML5):     [238/517] Module.UMG.gen.4_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.10 seconds
UATHelper: Packaging (HTML5):     [239/517] Module.UMG.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 54.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 66.14 seconds
UATHelper: Packaging (HTML5):     [240/517] Module.UMG.gen.5_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.90 seconds
UATHelper: Packaging (HTML5):     [241/517] Module.AppFramework.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 42.17 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 115.77 seconds
UATHelper: Packaging (HTML5):     [242/517] Module.UMG.gen.9_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.99 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.72 seconds
UATHelper: Packaging (HTML5):     [243/517] Module.UMG.gen.6_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.48 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.48 seconds
UATHelper: Packaging (HTML5):     [244/517] Module.UMG.gen.7_of_9.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.57 seconds
UATHelper: Packaging (HTML5):     [245/517] Module.CinematicCamera.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.18 seconds
UATHelper: Packaging (HTML5):     [246/517] Module.UELibSampleRate.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.60 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.39 seconds
UATHelper: Packaging (HTML5):     [247/517] Module.MovieSceneTracks.gen.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.75 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.94 seconds
UATHelper: Packaging (HTML5):     [248/517] Module.SignalProcessing.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.22 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.84 seconds
UATHelper: Packaging (HTML5):     [249/517] Module.CinematicCamera.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.97 seconds
UATHelper: Packaging (HTML5):     [250/517] Module.AudioMixerCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.44 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.05 seconds
UATHelper: Packaging (HTML5):     [251/517] Module.SignalProcessing.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.44 seconds
UATHelper: Packaging (HTML5):     [252/517] Module.NonRealtimeAudioRenderer.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.96 seconds
UATHelper: Packaging (HTML5):     [253/517] Module.AudioMixer.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.09 seconds
UATHelper: Packaging (HTML5):     [254/517] CrunchCompression.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.20 seconds
UATHelper: Packaging (HTML5):     [255/517] Module.AudioMixer.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.41 seconds
UATHelper: Packaging (HTML5):     [256/517] MessagingCommonModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 2.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.22 seconds
UATHelper: Packaging (HTML5):     [257/517] Module.NetCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.90 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.42 seconds
UATHelper: Packaging (HTML5):     [258/517] EngineMessages.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.17 seconds
UATHelper: Packaging (HTML5):     [259/517] Module.SynthBenchmark.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.43 seconds
UATHelper: Packaging (HTML5):     [260/517] Module.AudioMixer.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 26.63 seconds
UATHelper: Packaging (HTML5):     [261/517] Module.Engine.gen.35_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 20.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.56 seconds
UATHelper: Packaging (HTML5):     [262/517] ReliabilityHandlerComponent.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.72 seconds
UATHelper: Packaging (HTML5):     [263/517] Module.GameplayTags.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.21 seconds
UATHelper: Packaging (HTML5):     [264/517] Module.PacketHandler.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.80 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.65 seconds
UATHelper: Packaging (HTML5):     [265/517] Module.PacketHandler.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.22 seconds
UATHelper: Packaging (HTML5):     [266/517] Module.AudioPlatformConfiguration.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.90 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.39 seconds
UATHelper: Packaging (HTML5):     [267/517] Module.AudioPlatformConfiguration.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.91 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.60 seconds
UATHelper: Packaging (HTML5):     [268/517] Module.MeshDescription.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.57 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.50 seconds
UATHelper: Packaging (HTML5):     [269/517] Module.GameplayTags.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.05 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.91 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 13.19 seconds
UATHelper: Packaging (HTML5):     [270/517] Module.StaticMeshDescription.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.49 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.60 seconds
UATHelper: Packaging (HTML5):     [271/517] RSA.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 2.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.39 seconds
UATHelper: Packaging (HTML5):     [272/517] Module.StaticMeshDescription.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.24 seconds
UATHelper: Packaging (HTML5):     [273/517] Module.MeshDescription.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.96 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.17 seconds
UATHelper: Packaging (HTML5):     [274/517] Module.PhysicsSQ.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.93 seconds
UATHelper: Packaging (HTML5):     [275/517] Module.SlateReflector.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 68.47 seconds
UATHelper: Packaging (HTML5):     [276/517] Module.GeometryCollectionCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.44 seconds
UATHelper: Packaging (HTML5):     [277/517] Module.PakFile.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 19.44 seconds
UATHelper: Packaging (HTML5):     [278/517] Module.GeometryCollectionSimulationCore.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.50 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.55 seconds
UATHelper: Packaging (HTML5):     [279/517] Module.GeometryCollectionSimulationCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.11 seconds
UATHelper: Packaging (HTML5):     [280/517] Module.Localization.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 33.22 seconds
UATHelper: Packaging (HTML5):     [281/517] Module.ChaosSolvers.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.88 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.74 seconds
UATHelper: Packaging (HTML5):     [282/517] Module.ClothSysRuntimeIntrfc.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.49 seconds
UATHelper: Packaging (HTML5):     [283/517] Module.ClothSysRuntimeIntrfc.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.73 seconds
UATHelper: Packaging (HTML5):     [284/517] Module.GeometryCollectionCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.01 seconds
UATHelper: Packaging (HTML5):     [285/517] Module.EyeTracker.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.36 seconds
UATHelper: Packaging (HTML5):     [286/517] Module.EyeTracker.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.81 seconds
UATHelper: Packaging (HTML5):     [287/517] NetworkReplayStreaming.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.01 seconds
UATHelper: Packaging (HTML5):     [288/517] Module.DesktopPlatform.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.90 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.90 seconds
UATHelper: Packaging (HTML5):     [289/517] Module.SourceControl.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.32 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.99 seconds
UATHelper: Packaging (HTML5):     [290/517] Module.SourceControl.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.15 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.61 seconds
UATHelper: Packaging (HTML5):     [291/517] Module.JsonUtilities.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.31 seconds
UATHelper: Packaging (HTML5):     [292/517] Module.ChaosSolvers.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 40.45 seconds
UATHelper: Packaging (HTML5):     [293/517] Module.Engine.gen.33_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.84 seconds
UATHelper: Packaging (HTML5):     [294/517] Module.LevelSequence.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.59 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.03 seconds
UATHelper: Packaging (HTML5):     [295/517] Module.MovieSceneCapture.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.15 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.07 seconds
UATHelper: Packaging (HTML5):     [296/517] Module.LevelSequence.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.47 seconds
UATHelper: Packaging (HTML5):     [297/517] Module.MovieSceneCapture.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 12.54 seconds
UATHelper: Packaging (HTML5):     [298/517] Module.MoviePlayer.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.61 seconds
UATHelper: Packaging (HTML5):     [299/517] Module.Media.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.96 seconds
UATHelper: Packaging (HTML5):     [300/517] Module.MoviePlayer.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.15 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.31 seconds
UATHelper: Packaging (HTML5):     [301/517] Module.SlateNullRenderer.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.45 seconds
UATHelper: Packaging (HTML5):     [302/517] StreamingPauseRendering.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.10 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.70 seconds
UATHelper: Packaging (HTML5):     [303/517] Advertising.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.37 seconds
UATHelper: Packaging (HTML5):     [304/517] NullNetworkReplayStreaming.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.87 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.29 seconds
UATHelper: Packaging (HTML5):     [305/517] Module.Localization.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.67 seconds
UATHelper: Packaging (HTML5):     [306/517] HttpNetworkReplayStreaming.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.78 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.28 seconds
UATHelper: Packaging (HTML5):     [307/517] LocalFileNetworkReplayStreaming.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.32 seconds
LogAudioMixer: Display: Audio Buffer Underrun detected.
UATHelper: Packaging (HTML5):     [308/517] Module.Engine.3_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.79 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 14.45 seconds
UATHelper: Packaging (HTML5):     [309/517] Module.Engine.1_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 42.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.68 seconds
UATHelper: Packaging (HTML5):     [310/517] Module.Engine.5_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.98 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 14.89 seconds
UATHelper: Packaging (HTML5):     [311/517] Module.Engine.4_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 36.14 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 25.88 seconds
UATHelper: Packaging (HTML5):     [312/517] Module.Engine.8_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.32 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 19.89 seconds
UATHelper: Packaging (HTML5):     [313/517] Module.Engine.7_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.86 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.54 seconds
UATHelper: Packaging (HTML5):     [314/517] Module.Engine.6_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 47.66 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 31.75 seconds
UATHelper: Packaging (HTML5):     [315/517] Module.Engine.9_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 42.79 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 24.44 seconds
UATHelper: Packaging (HTML5):     [316/517] Module.Engine.11_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.46 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 21.03 seconds
UATHelper: Packaging (HTML5):     [317/517] Module.Engine.12_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 41.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 21.48 seconds
UATHelper: Packaging (HTML5):     [318/517] Module.Engine.13_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 18.89 seconds
UATHelper: Packaging (HTML5):     [319/517] Module.Engine.10_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 56.40 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 27.60 seconds
UATHelper: Packaging (HTML5):     [320/517] Module.JsonUtilities.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.69 seconds
UATHelper: Packaging (HTML5):     [321/517] Module.Engine.2_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.42 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 13.49 seconds
UATHelper: Packaging (HTML5):     [322/517] Module.Engine.14_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.66 seconds
UATHelper: Packaging (HTML5):     [323/517] Module.Engine.15_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.33 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.52 seconds
UATHelper: Packaging (HTML5):     [324/517] Module.Engine.gen.1_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.49 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.10 seconds
UATHelper: Packaging (HTML5):     [325/517] Module.Engine.16_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.66 seconds
UATHelper: Packaging (HTML5):     [326/517] Module.Engine.18_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 48.87 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.39 seconds
UATHelper: Packaging (HTML5):     [327/517] Module.Engine.21_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 39.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 16.02 seconds
UATHelper: Packaging (HTML5):     [328/517] Module.Engine.22_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 19.06 seconds
UATHelper: Packaging (HTML5):     [329/517] Module.Engine.20_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 45.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.91 seconds
UATHelper: Packaging (HTML5):     [330/517] Module.Engine.24_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.07 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 32.54 seconds
UATHelper: Packaging (HTML5):     [331/517] Module.Engine.23_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 43.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 26.30 seconds
UATHelper: Packaging (HTML5):     [332/517] Module.Engine.25_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.48 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 34.64 seconds
UATHelper: Packaging (HTML5):     [333/517] Module.Engine.26_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 38.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 37.09 seconds
UATHelper: Packaging (HTML5):     [334/517] Module.Engine.28_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.41 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.05 seconds
UATHelper: Packaging (HTML5):     [335/517] Module.Engine.27_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.51 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.40 seconds
UATHelper: Packaging (HTML5):     [336/517] Module.Engine.29_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.25 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.24 seconds
UATHelper: Packaging (HTML5):     [337/517] Module.Engine.gen.2_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.48 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.87 seconds
UATHelper: Packaging (HTML5):     [338/517] Module.Engine.30_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 49.84 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.20 seconds
UATHelper: Packaging (HTML5):     [339/517] Module.Engine.31_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 44.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.67 seconds
UATHelper: Packaging (HTML5):     [340/517] Module.Engine.32_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 43.54 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 18.95 seconds
UATHelper: Packaging (HTML5):     [341/517] Module.Engine.35_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 36.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 32.08 seconds
UATHelper: Packaging (HTML5):     [342/517] Module.Engine.34_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 39.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.94 seconds
UATHelper: Packaging (HTML5):     [343/517] Module.Engine.36_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 22.65 seconds
UATHelper: Packaging (HTML5):     [344/517] Module.Engine.39_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 23.63 seconds
UATHelper: Packaging (HTML5):     [345/517] Module.Engine.37_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 36.46 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 50.70 seconds
UATHelper: Packaging (HTML5):     [346/517] Module.Engine.38_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 31.29 seconds
UATHelper: Packaging (HTML5):     [347/517] Module.Engine.40_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 27.53 seconds
UATHelper: Packaging (HTML5):     [348/517] Module.Engine.41_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 22.87 seconds
UATHelper: Packaging (HTML5):     [349/517] Module.Engine.45_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.07 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.57 seconds
UATHelper: Packaging (HTML5):     [350/517] Module.Engine.43_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 38.86 seconds
UATHelper: Packaging (HTML5):     [351/517] Module.Engine.42_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 54.91 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 36.12 seconds
UATHelper: Packaging (HTML5):     [352/517] Module.Engine.44_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 48.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.52 seconds
UATHelper: Packaging (HTML5):     [353/517] Module.Launch.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 33.66 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.90 seconds
UATHelper: Packaging (HTML5):     [354/517] Module.Engine.gen.3_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.93 seconds
UATHelper: Packaging (HTML5):     [355/517] Module.Engine.gen.18_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.79 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.54 seconds
UATHelper: Packaging (HTML5):     [356/517] Module.Engine.gen.32_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.48 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.62 seconds
UATHelper: Packaging (HTML5):     [357/517] Module.Engine.33_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 50.18 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 22.01 seconds
UATHelper: Packaging (HTML5):     [358/517] Module.Engine.17_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 47.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 28.60 seconds
UATHelper: Packaging (HTML5):     [359/517] Module.Engine.gen.5_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.39 seconds
UATHelper: Packaging (HTML5):     [360/517] Module.Engine.gen.6_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.56 seconds
UATHelper: Packaging (HTML5):     [361/517] Module.Engine.gen.7_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.59 seconds
UATHelper: Packaging (HTML5):     [362/517] Module.Engine.gen.9_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.55 seconds
UATHelper: Packaging (HTML5):     [363/517] Module.Engine.gen.8_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.93 seconds
UATHelper: Packaging (HTML5):     [364/517] Module.Engine.gen.10_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.27 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.33 seconds
UATHelper: Packaging (HTML5):     [365/517] Module.Engine.gen.11_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.81 seconds
UATHelper: Packaging (HTML5):     [366/517] Module.Engine.gen.13_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.40 seconds
UATHelper: Packaging (HTML5):     [367/517] Module.Engine.gen.12_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.56 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.92 seconds
UATHelper: Packaging (HTML5):     [368/517] Module.Engine.gen.14_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.59 seconds
UATHelper: Packaging (HTML5):     [369/517] Module.Engine.gen.15_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.60 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.35 seconds
UATHelper: Packaging (HTML5):     [370/517] Module.Engine.gen.16_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.78 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.15 seconds
UATHelper: Packaging (HTML5):     [371/517] Module.Engine.gen.4_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.21 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.16 seconds
UATHelper: Packaging (HTML5):     [372/517] Module.Engine.gen.17_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.81 seconds
UATHelper: Packaging (HTML5):     [373/517] Module.Engine.gen.20_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.50 seconds
UATHelper: Packaging (HTML5):     [374/517] Module.Engine.gen.21_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.65 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.49 seconds
UATHelper: Packaging (HTML5):     [375/517] Module.Engine.gen.22_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.17 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.60 seconds
UATHelper: Packaging (HTML5):     [376/517] Module.Engine.gen.25_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.48 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.98 seconds
UATHelper: Packaging (HTML5):     [377/517] Module.Engine.19_of_45.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 36.29 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 26.33 seconds
UATHelper: Packaging (HTML5):     [378/517] Module.Engine.gen.23_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.42 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.23 seconds
UATHelper: Packaging (HTML5):     [379/517] Module.Engine.gen.24_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.36 seconds
UATHelper: Packaging (HTML5):     [380/517] Module.Engine.gen.26_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.06 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.35 seconds
UATHelper: Packaging (HTML5):     [381/517] Module.Engine.gen.27_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.05 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.97 seconds
UATHelper: Packaging (HTML5):     [382/517] Module.Engine.gen.29_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.79 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.53 seconds
UATHelper: Packaging (HTML5):     [383/517] Module.Engine.gen.28_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.01 seconds
UATHelper: Packaging (HTML5):     [384/517] Module.Engine.gen.30_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.77 seconds
UATHelper: Packaging (HTML5):     [385/517] Module.AVIWriter.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.09 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.89 seconds
UATHelper: Packaging (HTML5):     [386/517] Module.Engine.gen.31_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.25 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.40 seconds
UATHelper: Packaging (HTML5):     [387/517] Module.Engine.gen.34_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.28 seconds
UATHelper: Packaging (HTML5):     [388/517] Module.Engine.gen.19_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.25 seconds
UATHelper: Packaging (HTML5):     [389/517] Module.Engine.gen.38_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.30 seconds
UATHelper: Packaging (HTML5):     [390/517] Module.Engine.gen.39_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.17 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.95 seconds
UATHelper: Packaging (HTML5):     [391/517] Module.Engine.gen.40_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.50 seconds
UATHelper: Packaging (HTML5):     [392/517] Module.Engine.gen.41_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.00 seconds
UATHelper: Packaging (HTML5):     [393/517] Module.Engine.gen.42_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.66 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.33 seconds
UATHelper: Packaging (HTML5):     [394/517] Module.NavigationSystem.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 29.73 seconds
UATHelper: Packaging (HTML5):     [395/517] Module.Engine.gen.43_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.07 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.29 seconds
UATHelper: Packaging (HTML5):     [396/517] Module.Engine.gen.44_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.65 seconds
UATHelper: Packaging (HTML5):     [397/517] Module.Engine.gen.47_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.81 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.85 seconds
UATHelper: Packaging (HTML5):     [398/517] Module.Engine.gen.46_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.81 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.22 seconds
UATHelper: Packaging (HTML5):     [399/517] Module.Engine.gen.45_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.06 seconds
UATHelper: Packaging (HTML5):     [400/517] Module.Engine.gen.49_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.44 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.63 seconds
UATHelper: Packaging (HTML5):     [401/517] Module.Engine.gen.51_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.36 seconds
UATHelper: Packaging (HTML5):     [402/517] Module.Engine.gen.37_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 15.50 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.12 seconds
UATHelper: Packaging (HTML5):     [403/517] Module.Engine.gen.48_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.44 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.46 seconds
UATHelper: Packaging (HTML5):     [404/517] Module.Engine.gen.53_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.71 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.34 seconds
UATHelper: Packaging (HTML5):     [405/517] Module.Engine.gen.54_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.72 seconds
UATHelper: Packaging (HTML5):     [406/517] Module.Core.1_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.35 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 24.36 seconds
UATHelper: Packaging (HTML5):     [407/517] Module.Engine.gen.55_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.13 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.49 seconds
UATHelper: Packaging (HTML5):     [408/517] Module.Engine.gen.56_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.46 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.90 seconds
UATHelper: Packaging (HTML5):     [409/517] Module.Engine.gen.57_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.37 seconds
UATHelper: Packaging (HTML5):     [410/517] Module.Engine.gen.58_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.54 seconds
UATHelper: Packaging (HTML5):     [411/517] Module.Engine.gen.59_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.41 seconds
UATHelper: Packaging (HTML5):     [412/517] Module.Engine.gen.60_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 21.45 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.38 seconds
UATHelper: Packaging (HTML5):     [413/517] Module.Engine.gen.61_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.42 seconds
UATHelper: Packaging (HTML5):     [414/517] Module.Navmesh.3_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 3.67 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.61 seconds
UATHelper: Packaging (HTML5):     [415/517] Module.Engine.gen.62_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.49 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.38 seconds
UATHelper: Packaging (HTML5):     [416/517] Module.Engine.gen.63_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.88 seconds
UATHelper: Packaging (HTML5):     [417/517] Module.HTML5MapPakDownloader.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.71 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.76 seconds
UATHelper: Packaging (HTML5):     [418/517] Module.Engine.gen.36_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.07 seconds
UATHelper: Packaging (HTML5):     [419/517] Module.Core.3_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.20 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.53 seconds
UATHelper: Packaging (HTML5):     [420/517] Module.Engine.gen.52_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 22.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.58 seconds
UATHelper: Packaging (HTML5):     [421/517] Module.Engine.gen.50_of_63.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 18.57 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.75 seconds
UATHelper: Packaging (HTML5):     [422/517] Module.Core.7_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.18 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.66 seconds
UATHelper: Packaging (HTML5):     [423/517] Module.Core.9_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.49 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 17.57 seconds
UATHelper: Packaging (HTML5):     [424/517] IPlatformFileSandboxWrapper.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.80 seconds
UATHelper: Packaging (HTML5):     [425/517] Module.Cbor.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.42 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.34 seconds
UATHelper: Packaging (HTML5):     [426/517] Module.Core.8_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.65 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.84 seconds
UATHelper: Packaging (HTML5):     [427/517] Module.Serialization.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.77 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.15 seconds
UATHelper: Packaging (HTML5):     [428/517] Module.Core.10_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.30 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 41.05 seconds
UATHelper: Packaging (HTML5):     [429/517] Module.Serialization.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.89 seconds
UATHelper: Packaging (HTML5):     [430/517] Module.Core.11_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.36 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 24.52 seconds
UATHelper: Packaging (HTML5):     [431/517] Module.Overlay.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.70 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.97 seconds
UATHelper: Packaging (HTML5):     [432/517] Module.Overlay.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.72 seconds
UATHelper: Packaging (HTML5):     [433/517] Module.InstallBundleManager.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 4.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.17 seconds
UATHelper: Packaging (HTML5):     [434/517] Module.MediaUtils.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.93 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.58 seconds
UATHelper: Packaging (HTML5):     [435/517] StreamingNetworkPlatformFile.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 3.93 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.68 seconds
UATHelper: Packaging (HTML5):     [436/517] Module.MediaUtils.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.87 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.32 seconds
UATHelper: Packaging (HTML5):     [437/517] AutomationMessagesModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 1.93 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.21 seconds
UATHelper: Packaging (HTML5):     [438/517] CookedIterativeNetworkFile.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 3.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.23 seconds
UATHelper: Packaging (HTML5):     [439/517] AutomationMessages.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.89 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.13 seconds
UATHelper: Packaging (HTML5):     [440/517] AutomationWorkerMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.54 seconds
UATHelper: Packaging (HTML5):     [441/517] Module.Core.2_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.05 seconds
UATHelper: Packaging (HTML5):     [442/517] Module.AutomationWorker.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.69 seconds
UATHelper: Packaging (HTML5):     [443/517] Module.ClothingSystemRuntimeCommon.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.56 seconds
UATHelper: Packaging (HTML5):     [444/517] Module.ClothingSystemRuntimeCommon.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 32.76 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.82 seconds
UATHelper: Packaging (HTML5):     [445/517] Module.ClothingSystemRuntimeNv.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.07 seconds
UATHelper: Packaging (HTML5):     [446/517] Module.Navmesh.1_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.33 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 10.72 seconds
UATHelper: Packaging (HTML5):     [447/517] Module.ClothingSystemRuntimeNv.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 36.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.10 seconds
UATHelper: Packaging (HTML5):     [448/517] Module.Navmesh.2_of_3.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.56 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 15.05 seconds
UATHelper: Packaging (HTML5):     [449/517] Module.NetworkFile.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.93 seconds
UATHelper: Packaging (HTML5):     [450/517] Module.Core.6_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.57 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.03 seconds
UATHelper: Packaging (HTML5):     [451/517] Module.Core.4_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 19.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 47.11 seconds
UATHelper: Packaging (HTML5):     [452/517] Module.MediaAssets.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 35.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 12.34 seconds
UATHelper: Packaging (HTML5):     [453/517] Module.GameplayDebugger.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.82 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 12.22 seconds
UATHelper: Packaging (HTML5):     [454/517] Module.NavigationSystem.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 42.43 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 27.45 seconds
UATHelper: Packaging (HTML5):     [455/517] Module.GameplayTasks.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 13.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.22 seconds
UATHelper: Packaging (HTML5):     [456/517] Module.GameplayDebugger.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 23.44 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.00 seconds
UATHelper: Packaging (HTML5):     [457/517] Module.GameplayTasks.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.64 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.13 seconds
UATHelper: Packaging (HTML5):     [458/517] Module.AIModule.4_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.29 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.49 seconds
UATHelper: Packaging (HTML5):     [459/517] Module.AIModule.1_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.55 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 20.93 seconds
UATHelper: Packaging (HTML5):     [460/517] Module.AIModule.gen.1_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 17.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.55 seconds
UATHelper: Packaging (HTML5):     [461/517] Module.AIModule.2_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 40.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 41.39 seconds
UATHelper: Packaging (HTML5):     [462/517] Module.AIModule.gen.2_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.26 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.25 seconds
UATHelper: Packaging (HTML5):     [463/517] Module.AIModule.gen.3_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.30 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.32 seconds
UATHelper: Packaging (HTML5):     [464/517] Module.AIModule.3_of_4.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 39.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 46.22 seconds
UATHelper: Packaging (HTML5):     [465/517] SessionMessagesModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 2.19 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.24 seconds
UATHelper: Packaging (HTML5):     [466/517] UnrealEdMessagesModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 2.10 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.23 seconds
UATHelper: Packaging (HTML5):     [467/517] Module.AIModule.gen.4_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.12 seconds
UATHelper: Packaging (HTML5):     [468/517] AssetEditorMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.54 seconds
UATHelper: Packaging (HTML5):     [469/517] FileServerMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.30 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.59 seconds
UATHelper: Packaging (HTML5):     [470/517] UnrealEdMessages.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.91 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.15 seconds
UATHelper: Packaging (HTML5):     [471/517] Module.NavigationSystem.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 25.81 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.38 seconds
UATHelper: Packaging (HTML5):     [472/517] Module.AIModule.gen.6_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.62 seconds
UATHelper: Packaging (HTML5):     [473/517] Module.ScreenShotComparisonTools.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.69 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.72 seconds
UATHelper: Packaging (HTML5):     [474/517] Module.ScreenShotComparisonTools.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 7.54 seconds
UATHelper: Packaging (HTML5):     [475/517] Module.AutomationController.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 8.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.02 seconds
UATHelper: Packaging (HTML5):     [476/517] Module.AutomationController.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 12.20 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 13.37 seconds
UATHelper: Packaging (HTML5):     [477/517] Module.FunctionalTesting.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.47 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.52 seconds
UATHelper: Packaging (HTML5):     [478/517] Module.FunctionalTesting.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.72 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.38 seconds
UATHelper: Packaging (HTML5):     [479/517] EngineServiceMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.47 seconds
UATHelper: Packaging (HTML5):     [480/517] AudioCaptureCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.79 seconds
UATHelper: Packaging (HTML5):     [481/517] Module.AIModule.gen.7_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.69 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.47 seconds
UATHelper: Packaging (HTML5):     [482/517] Module.ALAudio.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 31.16 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.86 seconds
UATHelper: Packaging (HTML5):     [483/517] Module.FunctionalTesting.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 46.38 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 16.50 seconds
UATHelper: Packaging (HTML5):     [484/517] SessionMessages.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 9.12 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.23 seconds
UATHelper: Packaging (HTML5):     [485/517] Module.MediaAssets.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.21 seconds
UATHelper: Packaging (HTML5):     [486/517] Module.AIModule.gen.5_of_7.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 37.85 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.79 seconds
UATHelper: Packaging (HTML5):     [487/517] Module.RealtimeProfiler.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.75 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 8.47 seconds
UATHelper: Packaging (HTML5):     [488/517] Module.MediaAssets.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.04 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.08 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.65 seconds
UATHelper: Packaging (HTML5):     [489/517] ProfilerMessagesModule.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 2.58 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.26 seconds
UATHelper: Packaging (HTML5):     [490/517] ProfilerMessages.init.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.15 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.17 seconds
UATHelper: Packaging (HTML5):     [491/517] ProfilerServiceMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.92 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.75 seconds
UATHelper: Packaging (HTML5):     [492/517] ImageCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.68 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.61 seconds
UATHelper: Packaging (HTML5):     [493/517] Module.ProfilerService.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 11.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.01 seconds
UATHelper: Packaging (HTML5):     [494/517] Module.TaskGraph.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 24.22 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 30.45 seconds
UATHelper: Packaging (HTML5):     [495/517] Module.PerfCounters.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 6.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.67 seconds
UATHelper: Packaging (HTML5):     [496/517] Module.HTTPServer.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.91 seconds
UATHelper: Packaging (HTML5):     [497/517] SessionServiceMessages.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.32 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.15 seconds
UATHelper: Packaging (HTML5):     [498/517] Module.Voice.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 27.36 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.55 seconds
UATHelper: Packaging (HTML5):     [499/517] Module.FieldSystemSimulationCore.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 5.03 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.36 seconds
UATHelper: Packaging (HTML5):     [500/517] Module.NavigationSystem.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.31 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.63 seconds
UATHelper: Packaging (HTML5):     [501/517] Module.ChaosSolverEngine.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.61 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 4.83 seconds
UATHelper: Packaging (HTML5):     [502/517] Module.FieldSystemEngine.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.76 seconds
UATHelper: Packaging (HTML5):     [503/517] Module.FieldSystemEngine.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 26.11 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.76 seconds
UATHelper: Packaging (HTML5):     [504/517] Module.GeometryCollectionEngine.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.73 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.84 seconds
UATHelper: Packaging (HTML5):     [505/517] Module.GeometryCollectionEngine.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 29.83 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.81 seconds
UATHelper: Packaging (HTML5):     [506/517] Module.GeometryCollectionEngine.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 38.94 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 25.00 seconds
UATHelper: Packaging (HTML5):     [507/517] Module.GeometryCollectionEngine.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 38.99 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.92 seconds
UATHelper: Packaging (HTML5):     [508/517] PhysXCooking.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 7.23 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 0.86 seconds
UATHelper: Packaging (HTML5):     [509/517] Module.InteractiveToolsFramework.gen.2_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 14.62 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 3.19 seconds
UATHelper: Packaging (HTML5):     [510/517] Module.InteractiveToolsFramework.gen.1_of_2.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 28.75 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 5.11 seconds
LogAudioMixer: Display: Audio Buffer Underrun detected.
UATHelper: Packaging (HTML5):     [511/517] Module.InteractiveToolsFramework.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 30.37 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 11.54 seconds
UATHelper: Packaging (HTML5):     [512/517] Module.SessionServices.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.01 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 10.69 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 6.14 seconds
UATHelper: Packaging (HTML5):     [513/517] ShooterGameLoadingScreen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.05 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 41.53 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 2.62 seconds
UATHelper: Packaging (HTML5):     [514/517] Module.ChaosSolverEngine.gen.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 34.34 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 1.66 seconds
UATHelper: Packaging (HTML5):     [515/517] Module.Core.5_of_11.cpp
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.02 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 16.51 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "process inputs" took 28.96 seconds
LogAudioMixer: Display: Audio Buffer Underrun detected.
LogAudioMixer: Display: Audio Buffer Underrun detected.
LogAudioMixer: Display: Audio Buffer Underrun detected.
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "parse arguments and setup" took 0.74 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "compile inputs" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "source transforms" took 0.00 seconds
UATHelper: ds
UATHelper: seconds
UATHelper: Packaging (HTML5):     emcc:INFO: NOTE: linking HTML5 project -- this takes at least 7 minutes (and up to 20 minutes on older machines) to complete.
UATHelper: Packaging (HTML5):     emcc:INFO:       we are workig with the Emscripten makers to speed this up.
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "link" took 1.97 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "post-link" took 289.52 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "emscript (llvm => executable code)" took 343.30 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "source transforms" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "memory initializer" took 37.95 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "js opts" took 0.00 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "asm2wasm" took 1018.63 seconds
UATHelper: Packaging (HTML5):     emcc:INFO: emcc step "final emitting" took 22.16 seconds
UATHelper: Packaging (HTML5):     [517/517] ShooterGame.target
UATHelper: Packaging (HTML5):   Total time in Parallel executor: 5751.35 seconds
UATHelper: Packaging (HTML5):   Deploying ShooterGame HTML5 Development...
UATHelper: Packaging (HTML5):   Total execution time: 5791.58 seconds
UATHelper: Packaging (HTML5): Took 5791.7437113s to run UnrealBuildTool.exe, ExitCode=0
UATHelper: Packaging (HTML5): ********** BUILD COMMAND COMPLETED **********
UATHelper: Packaging (HTML5): ********** COOK COMMAND STARTED **********
UATHelper: Packaging (HTML5): Running UE4Editor Cook for project C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject
UATHelper: Packaging (HTML5): Commandlet log file is D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Saved\Cook-2021.09.22-17.14.02.txt
UATHelper: Packaging (HTML5): Running: D:\ue-engines\4.24-html\myengine\Engine\Binaries\Win64\UE4Editor-Cmd.exe C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject -run=Cook  -TargetPlatform=HTML5 -fileopenlog -unversioned -abslog=D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Sav
ed\Cook-2021.09.22-17.14.02.txt -stdout -CrashForUAT -unattended -NoLogTimes  -UTF8Output
UATHelper: Packaging (HTML5):   LogConsoleResponse: Display: Failed to find resolution value strings in scalability ini. Falling back to default.
UATHelper: Packaging (HTML5):   LogInit: Display: Running engine for game: ShooterGame
UATHelper: Packaging (HTML5):   LogSteamShared: Display: Loading Steam SDK 1.46
UATHelper: Packaging (HTML5):   LogOnline: Display: STEAM: OnlineSubsystemSteam::Shutdown()
UATHelper: Packaging (HTML5):   LogHAL: Display: Platform has ~ 16 GB [17119891456 / 17179869184 / 16], which maps to Larger [LargestMinGB=32, LargerMinGB=12, DefaultMinGB=8, SmallerMinGB=6, SmallestMinGB=0)
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'AllDesktop'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ASTC'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ATC'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_DXT'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC1'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC1a'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC2'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_PVRTC'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'AndroidClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ASTCClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ATCClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_DXTClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC1Client'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC1aClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_ETC2Client'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_PVRTCClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_Multi'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Android_MultiClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'IOSClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'IOS'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxNoEditor'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxServer'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxAArch64NoEditor'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxAArch64Client'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LinuxAArch64Server'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Lumin'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'LuminClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'TVOSClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'TVOS'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'WindowsNoEditor'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'Windows'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'WindowsClient'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'WindowsServer'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'HTML5'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Loaded TargetPlatform 'XXX'
UATHelper: Packaging (HTML5):   LogTargetPlatformManager: Display: Building Assets For HTML5
UATHelper: Packaging (HTML5):   LogAudioDebug: Display: Lib vorbis DLL was dynamically loaded.
UATHelper: Packaging (HTML5):   LogShaderCompilers: Display: Using Local Shader Compiler.
UATHelper: Packaging (HTML5):   LogDerivedDataCache: Display: Max Cache Size: 512 MB
UATHelper: Packaging (HTML5):   LogDerivedDataCache: Display: Loaded Boot cache: C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/DerivedDataCache/Boot.ddc
UATHelper: Packaging (HTML5):   LogAudioCaptureCore: Display: No Audio Capture implementations found. Audio input will be silent.
UATHelper: Packaging (HTML5):   LogAudioCaptureCore: Display: No Audio Capture implementations found. Audio input will be silent.
UATHelper: Packaging (HTML5):   LogCook: Display: Max memory allowance for cook 16384mb min free memory 0mb
UATHelper: Packaging (HTML5):   LogCook: Display: Mobile HDR setting 1
UATHelper: Packaging (HTML5):   LogCook: Display: Creating asset registry
UATHelper: Packaging (HTML5):   LogCook: Display: Discovering localized assets
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked content cleared for platform HTML5
UATHelper: Packaging (HTML5):   LogCook: Display: Unable to read previous cook inisettings for platform HTML5 invalidating cook
UATHelper: Packaging (HTML5):   LogCook: Display: Sandbox cleanup took 0.946 seconds for platforms HTML5  iterative false
UATHelper: Packaging (HTML5):   LogShaderCompilers: Warning: You are compiling shaders for a deprecated platform 'GLSL_ES2_WEBGL'
PackagingResults: Warning: You are compiling shaders for a deprecated platform 'GLSL_ES2_WEBGL'
UATHelper: Packaging (HTML5):   CookResults: Warning: Unable to find package for cooking /Game/Maps/Highrise
UATHelper: Packaging (HTML5):   LogCook: Warning: Unable to find package for cooking /Game/Maps/Highrise
PackagingResults: Warning: Unable to find package for cooking /Game/Maps/Highrise
PackagingResults: Warning: Unable to find package for cooking /Game/Maps/Highrise
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 0 Packages Remain 642 Total 642
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 50 Packages Remain 643 Total 693
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 100 Packages Remain 642 Total 742
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 150 Packages Remain 641 Total 791
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 200 Packages Remain 640 Total 840
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 250 Packages Remain 639 Total 889
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 300 Packages Remain 639 Total 939
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 350 Packages Remain 638 Total 988
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 400 Packages Remain 638 Total 1038
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 450 Packages Remain 637 Total 1087
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 500 Packages Remain 636 Total 1136
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 550 Packages Remain 635 Total 1185
UATHelper: Packaging (HTML5):   LogCook: Display: Excluding /OculusVR/Materials/OculusMR_WhiteMaterial -> C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/Saved/Cooked/HTML5/Engine/Plugins/Runtime/Oculus/OculusVR/Content/Materials/OculusMR_WhiteMaterial.uasset
UATHelper: Packaging (HTML5):   LogCook: Display: Excluding /OculusVR/Materials/OculusMR_ChromaKey -> C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/Saved/Cooked/HTML5/Engine/Plugins/Runtime/Oculus/OculusVR/Content/Materials/OculusMR_ChromaKey.uasset
UATHelper: Packaging (HTML5):   LogCook: Display: Excluding /OculusVR/Materials/OculusMR_ChromaKey_Lit -> C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/Saved/Cooked/HTML5/Engine/Plugins/Runtime/Oculus/OculusVR/Content/Materials/OculusMR_ChromaKey_Lit.uasset
UATHelper: Packaging (HTML5):   LogCook: Display: Excluding /OculusVR/Materials/OculusMR_OpaqueColoredMaterial -> C:/Zlatnaspirala/active-projects/rocket-craft/rocket-craft/versions/4.24-Shooter/ShooterGame/Saved/Cooked/HTML5/Engine/Plugins/Runtime/Oculus/OculusVR/Content/Materials/OculusMR_OpaqueColoredMaterial.uasset
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 600 Packages Remain 634 Total 1234
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 616 Packages Remain 35 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 615 Packages Remain 130 Total 745
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 616 Packages Remain 35 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 617 Packages Remain 34 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 618 Packages Remain 33 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 619 Packages Remain 32 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 620 Packages Remain 31 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 621 Packages Remain 30 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 622 Packages Remain 29 Total 651
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 624 Packages Remain 29 Total 653
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 624 Packages Remain 26 Total 650
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 637 Packages Remain 25 Total 662
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 638 Packages Remain 24 Total 662
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 642 Packages Remain 23 Total 665
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 644 Packages Remain 22 Total 666
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 685 Packages Remain 111 Total 796
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 735 Packages Remain 151 Total 886
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 780 Packages Remain 130 Total 910
UATHelper: Packaging (HTML5):   LogCook: Display: Cooked packages 780 Packages Remain 0 Total 780
UATHelper: Packaging (HTML5):   LogCook: Display: Finishing up...
UATHelper: Packaging (HTML5):   LogBlueprintCodeGen: Display: Nativization Summary - AnimBP:
UATHelper: Packaging (HTML5):   LogBlueprintCodeGen: Display: Name, Children, Non-empty Functions (Empty Functions), Variables, FunctionUsage, VariableUsage
UATHelper: Packaging (HTML5):   LogBlueprintCodeGen: Display: Nativization Summary - Shared Variables From Graph: 0
UATHelper: Packaging (HTML5):   LogAssetRegistryGenerator: Display: Saving asset registry.
UATHelper: Packaging (HTML5):   LogAssetRegistryGenerator: Display: Generated asset registry num assets 761, size is 336.49kb
UATHelper: Packaging (HTML5):   LogAssetRegistryGenerator: Display: Done saving asset registry.
UATHelper: Packaging (HTML5):   LogCook: Display: Cook by the book total time in tick 30.229518s total time 37.865490
UATHelper: Packaging (HTML5):   LogCook: Display: Peak Used virtual 750MB Peak Used physical 720MB
UATHelper: Packaging (HTML5):   LogCook: Display: Hierarchy Timer Information:
UATHelper: Packaging (HTML5):   LogCook: Display:   Root: 0.000s (0)
UATHelper: Packaging (HTML5):   LogCook: Display:     StartCookByTheBookTime: 7.409s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       GenerateAssetRegistryTime: 4.507s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       CleanSandboxTime: 0.946s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:         ProcessingAccessedStrings: 0.009s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       CollectFilesToCook: 0.189s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:         CookModificationDelegate: 0.000s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:         GeneratePackageNames: 0.000s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       GenerateLongPackageName: 0.001s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:     TickCookOnTheSide: 30.213s (44)
UATHelper: Packaging (HTML5):   LogCook: Display:       LoadPackage: 6.844s (38)
UATHelper: Packaging (HTML5):   LogCook: Display:       CallBeginCacheForCookedPlatformData: 0.637s (44)
UATHelper: Packaging (HTML5):   LogCook: Display:       PostLoadPackageFixup: 0.016s (44)
UATHelper: Packaging (HTML5):   LogCook: Display:       SavingPackages: 22.713s (29)
UATHelper: Packaging (HTML5):   LogCook: Display:         PrecachePlatformDataForNextPackage: 0.005s (912)
UATHelper: Packaging (HTML5):   LogCook: Display:         PrecachePlatformDataForNextNextPackage: 17.134s (906)
UATHelper: Packaging (HTML5):   LogCook: Display:         SaveCookedPackage: 5.503s (780)
UATHelper: Packaging (HTML5):   LogCook: Display:           LoadPackage: 0.002s (776)
UATHelper: Packaging (HTML5):   LogCook: Display:           GEditorSavePackage: 5.446s (776)
UATHelper: Packaging (HTML5):   LogCook: Display:             ConvertingBlueprints: 0.152s (776)
UATHelper: Packaging (HTML5):   LogCook: Display:             VerifyCanCookPackage: 0.008s (760)
UATHelper: Packaging (HTML5):   LogCook: Display:         ClearAllCachedCookedPlatformData: 0.031s (780)
UATHelper: Packaging (HTML5):   LogCook: Display:         EnqueueUnsavedPackages: 0.001s (14)
UATHelper: Packaging (HTML5):   LogCook: Display:     GeneratingBlueprintAssets: 0.082s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:     SavingCurrentIniSettings: 0.055s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       ProcessingAccessedStrings: 0.007s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:     SavingAssetRegistry: 0.083s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       BuildChunkManifest: 0.018s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       SaveManifests: 0.004s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       SaveRealAssetRegistry: 0.047s (1)
UATHelper: Packaging (HTML5):   LogCook: Display:       WriteCookerOpenOrder: 0.014s (1)
UATHelper: Packaging (HTML5):   LogCook: Display: Done!
UATHelper: Packaging (HTML5):   LogSavePackage: Display: Took 0.018774s to verify the EDL loading graph.
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Misc Cook Stats
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: ===============
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: ShaderCompiler
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     BlockingTimeSec=0.000002
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     AsyncCompileTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     GlobalBeginCompileShaderTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     GlobalBeginCompileShaderCalls=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ProcessAsyncResultsTimeSec=0.016403
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: GlobalShader.Misc
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ShadersCompiled=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: MeshMaterial.Misc
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ShadersCompiled=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: MaterialShader.Misc
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ShadersCompiled=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.Load
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     NumPackagesLoaded=632
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     LoadPackageTimeSec=19.496380
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.Save
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     NumPackagesSaved=776
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     SavePackageTimeSec=4.620700
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     TagPackageExportsPresaveTimeSec=1.329332
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ResetLoadersForSaveTimeSec=0.003403
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     ResetLoadersForSaveTimeSec=0.003403
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     TagPackageExportsGetObjectsWithOuter=0.005813
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     TagPackageExportsGetObjectsWithMarks=0.001125
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     SerializeImportsTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     SortExportsSeekfreeInnerTimeSec=0.381014
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     SerializeExportsTimeSec=0.467397
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     SerializeBulkDataTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     AsyncWriteTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     MBWritten=355.206671
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.DifferentPackagesSizeMBPerAsset
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.NumberOfDifferencesInPackagesPerAsset
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.PackageDifferencesSizeMBPerAsset
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Package.DiffTotal
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     NumberOfDifferentPackages=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     DifferentPackagesSizeMB=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     NumberOfDifferencesInPackages=0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:     PackageDifferencesSizeMB=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Cook Profile
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: ============
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0.CookWallTimeSec=237.762374
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 0.StartupWallTimeSec=199.800896
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1.CookByTheBookTimeSec=37.960888
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 0.StartCookByTheBookTimeSec=7.434420
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 0. 0.GameCookModificationDelegateTimeSec=0.000041
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1.TickCookOnTheSideTimeSec=30.466437
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1. 0.TickCookOnTheSideLoadPackagesTimeSec=6.845189
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1. 1.TickCookOnTheSideSaveCookedPackageTimeSec=5.502777
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1. 1. 0.TickCookOnTheSideResolveRedirectorsTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1. 2.TickCookOnTheSideBeginPackageCacheForCookedPlatformDataTimeSec=17.774630
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 1. 3.TickCookOnTheSideFinishPackageCacheForCookedPlatformDataTimeSec=0.025962
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 2.TickLoopGCTimeSec=0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 3.TickLoopRecompileShaderRequestsTimeSec=0.000388
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 4.TickLoopShaderProcessAsyncResultsTimeSec=0.000026
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 5.TickLoopProcessDeferredCommandsTimeSec=0.000051
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:  0. 1. 6.TickLoopTickCommandletStatsTimeSec=0.000008
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: DDC Summary Stats
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: =================
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalGetHits    =      1699
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalGets       =      1699
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalGetHitPct  =  1.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: LocalGetHitPct  =  0.808711
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: SharedGetHitPct =  0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: OtherGetHitPct  =  0.191289
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: GetMissPct      =  0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalPutHits    =         0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalPuts       =         0
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: TotalPutHitPct  =  0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: PutMissPct      =  0.000000
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display:
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: DDC Resource Stats
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: =======================================================================================================
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Asset Type                          Total Time (Sec)  GameThread Time (Sec)  Assets Built  MB Processed
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: ----------------------------------  ----------------  ---------------------  ------------  ------------
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Texture (Streaming)                            22.67                   0.00             0        234.10
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: MaterialShader                                  7.80                   7.80             0         14.14
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: PhysX (BodySetup)                               3.84                   3.84             0          4.13
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: StaticMesh                                      0.94                   0.94             0          1.38
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: GlobalShader                                    0.58                   0.58             0          0.42
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: NavCollision                                    0.31                   0.31             0          0.02
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: Texture (Inline)                                0.26                   0.26             0         75.28
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: SkeletalMesh                                    0.02                   0.02             0          3.38
UATHelper: Packaging (HTML5):   LogCookCommandlet: Display: SoundWave                                       0.00                   0.00             0          9.18
UATHelper: Packaging (HTML5):   LogInit: Display:
UATHelper: Packaging (HTML5):   LogInit: Display: Warning/Error Summary (Unique only)
UATHelper: Packaging (HTML5):   LogInit: Display: -----------------------------------
UATHelper: Packaging (HTML5):   LogInit: Display: LogShaderCompilers: Warning: You are compiling shaders for a deprecated platform 'GLSL_ES2_WEBGL'
UATHelper: Packaging (HTML5):   LogInit: Display: CookResults: Warning: Unable to find package for cooking /Game/Maps/Highrise
UATHelper: Packaging (HTML5):   LogInit: Display: LogCook: Warning: Unable to find package for cooking /Game/Maps/Highrise
UATHelper: Packaging (HTML5):   LogInit: Display:
UATHelper: Packaging (HTML5):   LogInit: Display: Success - 0 error(s), 3 warning(s)
UATHelper: Packaging (HTML5):   LogInit: Display:
UATHelper: Packaging (HTML5):   
UATHelper: Packaging (HTML5):   Execution of commandlet took:  38.07 seconds
UATHelper: Packaging (HTML5):   LogGauntlet: Display: Gauntlet Shutdown
UATHelper: Packaging (HTML5): Took 250.2940325s to run UE4Editor-Cmd.exe, ExitCode=0
UATHelper: Packaging (HTML5): ********** COOK COMMAND COMPLETED **********
UATHelper: Packaging (HTML5): ********** STAGE COMMAND STARTED **********
UATHelper: Packaging (HTML5): Creating UE4CommandLine.txt
UATHelper: Packaging (HTML5): Creating Staging Manifest...
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BaseEditor.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BaseEditorKeyBindings.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BaseEditorPerProjectUserSettings.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BaseEditorSettings.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BaseLightmass.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\BasePakFileRules.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\Category.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\Editor.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\EditorTutorials.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\Engine.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\Keywords.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\PortableObjectExport.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\PortableObjectImport.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\PropertyNames.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\RepairData.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\ToolTips.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Config\Localization\WordCount.ini
UATHelper: Packaging (HTML5): Excluding config file C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Config\DefaultCrypto.ini
UATHelper: Packaging (HTML5): Excluding config file C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Config\DefaultEditor.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Platforms\HTML5\Config\BaseHTML5PakFileRules.ini
UATHelper: Packaging (HTML5): Excluding config file D:\ue-engines\4.24-html\myengine\Engine\Platforms\HTML5\Config\Localization\HTML5.ini
UATHelper: Packaging (HTML5): Cleaning Stage Directory: C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Saved\StagedBuilds\HTML5
UATHelper: Packaging (HTML5): Creating pak using staging manifest.
UATHelper: Packaging (HTML5): Executing 1 UnrealPak command...
UATHelper: Packaging (HTML5): Waiting for child processes to complete (0/1)
UATHelper: Packaging (HTML5): Waiting for child processes to complete (1/1)
UATHelper: Packaging (HTML5): Output from: C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Saved\StagedBuilds\HTML5\ShooterGame\Content\Paks\ShooterGame-HTML5.pak -create=D:\ue-engines\4.24-html\myengi
ne\Engine\Programs\AutomationTool\Saved\Logs\PakList_ShooterGame-HTML5.txt -cryptokeys=C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Saved\Cooked\HTML5\ShooterGame\Metadata\Crypto.json -order=C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Build\HTML5\FileOpenOrder\Co
okerOpenOrder.log -compressionformats=  -multiprocess -abslog=D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Saved\Logs\UnrealPak-ShooterGame-HTML5-2021.09.22-17.18.13.txt
UATHelper: Packaging (HTML5):   LogPakFile: Display: Parsing crypto keys from a crypto key cache file
UATHelper: Packaging (HTML5):   LogCompression: Display: FCompression::GetCompressionFormat - Unable to find a module or plugin for compression format -multiprocess
UATHelper: Packaging (HTML5):   LogPakFile: Display: Loading response file D:\ue-engines\4.24-html\myengine\Engine\Programs\AutomationTool\Saved\Logs\PakList_ShooterGame-HTML5.txt
UATHelper: Packaging (HTML5):   LogPakFile: Display: Added 2597 entries to add to pak file.
UATHelper: Packaging (HTML5):   LogPakFile: Display: Loading pak order file C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Build\HTML5\FileOpenOrder\CookerOpenOrder.log...
UATHelper: Packaging (HTML5):   LogPakFile: Display: Finished loading pak order file C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Build\HTML5\FileOpenOrder\CookerOpenOrder.log.
UATHelper: Packaging (HTML5):   LogPakFile: Display: Collecting files to add to pak file...
UATHelper: Packaging (HTML5):   LogPakFile: Display: Collected 2597 files in 0.02s.
UATHelper: Packaging (HTML5):   LogPakFile: Display: Creating pak C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Saved\StagedBuilds\HTML5\ShooterGame\Content\Paks\ShooterGame-HTML5.pak.
UATHelper: Packaging (HTML5):   LogPakFile: Display: Added 2597 files, 386887143 bytes total, time 12.74s.
UATHelper: Packaging (HTML5):   LogPakFile: Display: Encryption - DISABLED
UATHelper: Packaging (HTML5):   LogPakFile: Display: Unreal pak executed in 12.893403 seconds
UATHelper: Packaging (HTML5): UnrealPak terminated with exit code 0
UATHelper: Packaging (HTML5): Copying NonUFSFiles to staging directory: C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Saved\StagedBuilds\HTML5
UATHelper: Packaging (HTML5): ********** STAGE COMMAND COMPLETED **********
UATHelper: Packaging (HTML5): ********** PACKAGE COMMAND STARTED **********
UATHelper: Packaging (HTML5): Package C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\ShooterGame.uproject
UATHelper: Packaging (HTML5): Setting Emscripten SDK for packaging..
UATHelper: Packaging (HTML5): emcc ExitCode: 0
UATHelper: Packaging (HTML5): # Note: If you put paths relative to the home directory, do not forget
UATHelper: Packaging (HTML5): # os.path.expanduser
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Any config setting <KEY> in this file can be overridden by setting the
UATHelper: Packaging (HTML5): # EM_<KEY> environment variable. For example, settings EM_LLVM_ROOT override
UATHelper: Packaging (HTML5): # the setting in this file.
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Note: On Windows, remember to escape backslashes! I.e. LLVM='c:\llvm\'
UATHelper: Packaging (HTML5): # is not valid, but LLVM='c:\\llvm\\' and LLVM='c:/llvm/'
UATHelper: Packaging (HTML5): # are.
UATHelper: Packaging (HTML5): import os
UATHelper: Packaging (HTML5): # This is used by external projects in order to find emscripten.  It is not used
UATHelper: Packaging (HTML5): # by emscripten itself.
UATHelper: Packaging (HTML5): EMSCRIPTEN_ROOT = os.path.expanduser(os.getenv('EMSCRIPTEN', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\emscripten')) # directory
UATHelper: Packaging (HTML5): LLVM_ROOT = os.path.expanduser(os.getenv('LLVM', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\fastcomp\\bin')) # directory
UATHelper: Packaging (HTML5): BINARYEN_ROOT = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream'
UATHelper: Packaging (HTML5): # Add this if you have manually built the JS optimizer executable (in
UATHelper: Packaging (HTML5): # Emscripten/tools/optimizer) and want to run it from a custom location.
UATHelper: Packaging (HTML5): # Alternatively, you can set this as the environment variable
UATHelper: Packaging (HTML5): EMSCRIPTEN_NATIVE_OPTIMIZER = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\bin\\optimizer.exe'
UATHelper: Packaging (HTML5): EMSCRIPTEN_NATIVE_OPTIMIZER = 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\upstream\\bin\\optimizer.exe'
UATHelper: Packaging (HTML5): # Location of the node binary to use for running the JS parts of the compiler.
UATHelper: Packaging (HTML5): # This engine must exist, or nothing can be compiled.
UATHelper: Packaging (HTML5): NODE_JS = os.path.expanduser(os.getenv('NODE', 'D:\\ue-engines\\4.24-html\\myengine\\Engine\\Platforms\\HTML5\\Build\\emsdk\\emsdk-1.39.0\\node\\12.18.1_64bit\\bin\\node.exe')) # executable
UATHelper: Packaging (HTML5): JAVA = 'java' # executable
UATHelper: Packaging (HTML5): # CLOSURE_COMPILER = '..' # define this to not use the bundled version
UATHelper: Packaging (HTML5): ################################################################################
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Test suite options:
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Alternative JS engines to use during testing:
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # SPIDERMONKEY_ENGINE = [os.path.expanduser(os.getenv('SPIDERMONKEY', 'js'))] # executable
UATHelper: Packaging (HTML5): # V8_ENGINE = os.path.expanduser(os.getenv('V8', 'd8')) # executable
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # All JS engines to use when running the automatic tests. Not all the engines in
UATHelper: Packaging (HTML5): # this list must exist (if they don't, they will be skipped in the test runner).
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # JS_ENGINES = [NODE_JS] # add V8_ENGINE or SPIDERMONKEY_ENGINE if you have them installed too.
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # WASMER = os.path.expanduser(os.path.join('~', '.wasmer', 'bin', 'wasmer'))
UATHelper: Packaging (HTML5): # WASMTIME = os.path.expanduser(os.path.join('~', 'wasmtime'))
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Wasm engines to use in STANDALONE_WASM tests.
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # WASM_ENGINES = [] # add WASMER or WASMTIME if you have them installed
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # Other options
UATHelper: Packaging (HTML5): #
UATHelper: Packaging (HTML5): # FROZEN_CACHE = True # never clears the cache, and disallows building to the cache
UATHelper: Packaging (HTML5): h5conf HTML5Platform.Automation: Compressed = False
UATHelper: Packaging (HTML5): h5conf HTML5Platform.Automation: EnableIndexedDB = False
UATHelper: Packaging (HTML5): h5conf HTML5Platform.Automation: Multithreading = False
UATHelper: Packaging (HTML5): h5conf HTML5Platform.Automation: OffscreenCanvas = False
UATHelper: Packaging (HTML5): h5conf HTML5Platform.Automation: LLVMWasmBackend = False
UATHelper: Packaging (HTML5): Running: D:\ue-engines\4.24-html\myengine\Engine\Platforms\HTML5\Build\emsdk\emsdk-1.39.0\python\3.7.4-pywin32_64bit\python.exe "D:\ue-engines\4.24-html\myengine\Engine\Platforms\HTML5\Build\emsdk\emsdk-1.39.0\upstream\emscripten\tools\file_packager.py" "C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Sh
ooter\ShooterGame\Binaries\HTML5\ShooterGame.data" --preload . --js-output="C:\Zlatnaspirala\active-projects\rocket-craft\rocket-craft\versions\4.24-Shooter\ShooterGame\Binaries\HTML5\ShooterGame.data.js" --no-heap-copy
UATHelper: Packaging (HTML5):   Remember to build the main file with  -s FORCE_FILESYSTEM=1  so that it includes support for loading this file package
UATHelper: Packaging (HTML5):   warning: file packager is creating an asset bundle of 388 MB. this is very large, and browsers might have trouble loading it. see https://hacks.mozilla.org/2015/02/synchronous-execution-and-filesystem-access-in-emscripten/
UATHelper: Packaging (HTML5): Took 1.7099999s to run python.exe, ExitCode=0
UATHelper: Packaging (HTML5): Build configuration is Development, so not compressing. Build Shipping configuration to compress files to save space.
UATHelper: Packaging (HTML5): ********** PACKAGE COMMAND COMPLETED **********
UATHelper: Packaging (HTML5): ********** ARCHIVE COMMAND STARTED **********
UATHelper: Packaging (HTML5): Archiving to C:/Users/Nikola Lukic/Desktop/TEST_BUILDS/SHOOTER/html5/no-multi-thread
UATHelper: Packaging (HTML5): ********** ARCHIVE COMMAND COMPLETED **********
UATHelper: Packaging (HTML5): BUILD SUCCESSFUL
UATHelper: Packaging (HTML5): AutomationTool exiting with ExitCode=0 (Success)