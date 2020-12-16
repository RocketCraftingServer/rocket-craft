// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

#include "BrmGameMode.h"
#include "BrmPawn.h"
#include "BrmHud.h"

ABrmGameMode::ABrmGameMode()
{
	DefaultPawnClass = ABrmPawn::StaticClass();
	HUDClass = ABrmHud::StaticClass();
}
