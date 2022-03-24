function wakeDog(name, breed) {
    const string1 = `Wake ${name} the ${breed}`;
    console.log(`Wake ${name} the ${breed}`);
    return string1
  }

  function leashDog(name, breed) {
    const string2 = `Leash ${name} the ${breed}`;
    console.log(`Leash ${name} the ${breed}`);
    return string2
  }

  function walkToPark(name, breed) {
    const string = `Walk to the park with ${name} the ${breed}`;
    console.log(`Walk to the park with ${name} the ${breed}`);
    return string
  }

  function throwFrisbee(name, breed) {
    const string3 = `Throw the frisbee for ${name} the ${breed}`;
    console.log(`Throw the frisbee for ${name} the ${breed}`);
    return string3
  }

  function walkHome(name, breed) {
    const string4 = `Walk home with ${name} the ${breed}`;
    console.log(`Walk home with ${name} the ${breed}`);
    return string4
  }

  function unleashDog(name, breed) {
    const string5 = `Unleash ${name} the ${breed}`;
    console.log(`Unleash ${name} the ${breed}`);
    return string5
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(name, breed) {
      const newArray = [];
    for (let i = 0; i < routine.length; i++) {
       newArray.unshift(routine[i](name, breed))
    }
    return newArray
  }