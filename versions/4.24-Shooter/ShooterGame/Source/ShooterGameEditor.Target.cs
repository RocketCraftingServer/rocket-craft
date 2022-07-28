// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class ShooterGameEditorTarget : TargetRules
{
	public ShooterGameEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;

		ExtraModuleNames.Add("ShooterGame");

		// test !!!
		BuildEnvironment = TargetBuildEnvironment.Unique;
		bCompileChaos = true;
		//Note that the following line is not needed for 4.23 or previous versions. 
		//bUseChaos = true;

	}
}
