// WATS 3020 Mad Libs Assignment

/* For this assignment you must fill in the code below so that it functions
to populate the text of the "Mad Libs" style story in the HTML.

In order to achieve this goal, you will need to write prompt() statements
to collect input from the user. The input you collect will be used to
generate the story. */

/*
let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).', 'default');

let authorName = prompt('What is your full name?', 'default');

let adjective1 = prompt('Please enter an adjective (i.e. a word used to describe something).', 'default');

let vehicle = prompt('Please enter a vehicle (e.g. plane, boat, etc.).', 'default');

let vehiclePart = prompt('Please enter a part of the vehicle you just named.', 'default');

let parking = prompt('Please enter where someone would park the aforementioned vehicle.', 'default');

let precious = prompt('Please name a precious object.', 'default');

let noiseMaker = prompt('Please name something that makes noise.', 'default');

let crowdBehavior = prompt('Please name something that people do together as a group.', 'default');

let adjective2 = prompt('Please enter another adjective (i.e. a word used to describe something).', 'default');

let adjective3 = prompt('Please enter a third adjective (i.e. a word used to describe something).', 'default');

let color = prompt('Please name a color.', 'default');

let familyMember = prompt('Please name a family relationship (e.g. sister, father, etc.).', 'default');

let organ = prompt('Please name an organ (e.g. heart, liver, spleen, etc.).', 'default');

let bodyPart1 = prompt('Please enter the name of a body part.', 'default');

let bodyPart2 = prompt('Please enter the name of another body part.', 'default');

let bodyPart3 = prompt('Please enter the name of a third body part.', 'default');

let thing = prompt('Please name an object.', 'default');

let thing2 = prompt('Please name an object you might give somebody you love.', 'default');

let thing3 = prompt('Please name an object you might give somebody you like.', 'default');

let adjective4 = prompt('Please enter a word used to describe the vehicle.', 'default');

let adjective5 = prompt('Please enter another word to describe the vehicle.', 'default');

/* Section Numbers

The poem we are using has section numbers. Let's allow the user to
generate their own. */

/*
let userNumber = parseInt(prompt('Please enter your favorite number.', 0), 10);

let number2 = userNumber * 2;

let number3 = userNumber + 7;
*/

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

/*

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;

*/