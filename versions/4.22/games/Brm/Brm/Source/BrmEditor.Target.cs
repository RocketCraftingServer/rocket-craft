// https://maximumroulette.com

using UnrealBuildTool;
using System.Collections.Generic;

public class BrmEditorTarget : TargetRules
{
	public BrmEditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;

		ExtraModuleNames.AddRange( new string[] { "Brm" } );
	}
}
