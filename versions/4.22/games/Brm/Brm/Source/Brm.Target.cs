// https://maximumroulette.com

using UnrealBuildTool;
using System.Collections.Generic;

public class BrmTarget : TargetRules
{
	public BrmTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		 //DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "Brm" } );
	}
}
