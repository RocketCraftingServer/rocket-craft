// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class BrmServerTarget : TargetRules //Change this line according to the name of your project
{
    public BrmServerTarget(TargetInfo Target) : base(Target) //Change this line according to the name of your project
    {
        Type = TargetType.Server;
         //DefaultBuildSettings = BuildSettingsVersion.V2;
        ExtraModuleNames.Add("Brm"); 
    }
}