// https://maximumroulette.com

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "EnergyPointCraft.generated.h"

UCLASS()
class BRM_API AEnergyPointCraft : public AActor
{
	GENERATED_BODY()
	
public:	
	// Sets default values for this actor's properties
	AEnergyPointCraft();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:	
	// Called every frame
	virtual void Tick(float DeltaTime) override;

};
