// https://maximumroulette.com

using UnrealBuildTool;
using System.Collections.Generic;

public class BrmEditorTarget : TargetRules
{
	public BrmEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "Brm" } );
	}
}
