// WATS 3020 Mad Libs Assignment

function madLibs(){
    let honorific = document.getElementById('honorific').value;

    let authorName = document.getElementById('authorName').value;

    let adjective1 = document.getElementById('adjective1').value;

    let vehicle = document.getElementById('vehicle').value;

    let vehiclePart = document.getElementById('vehiclePart').value;

    let parking = document.getElementById('parking').value;

    let precious = document.getElementById('precious').value;

    let noiseMaker = document.getElementById('noiseMaker').value;

    let crowdBehavior = document.getElementById('crowdBehavior').value;

    let adjective2 = document.getElementById('adjective2').value;

    let adjective3 = document.getElementById('adjective3').value;

    let color = document.getElementById('color').value;

    let familyMember = document.getElementById('familyMember').value;

    let organ = document.getElementById('organ').value;

    let bodyPart1 = document.getElementById('bodyPart1').value;

    let bodyPart2 = document.getElementById('bodyPart2').value;

    let bodyPart3 = document.getElementById('bodyPart3').value;

    let thing = document.getElementById('thing').value;

    let thing2 = document.getElementById('thing2').value;

    let thing3 = document.getElementById('thing3').value;

    let adjective4 = document.getElementById('adjective4').value;

    let adjective5 = document.getElementById('adjective5').value;

    let userNumber = parseInt(document.getElementById('userNumber').value);

    let number2 = userNumber * 2;

    let number3 = userNumber + 7;

    let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;

    document.write (`
        
        <h1>${titleText}</h1>

        <pre>
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
        </pre>

        <hr>
        <p>The original text used for this exercise is <a href="http://famouspoetsandpoems.com/poets/walt_whitman/poems/17466">"O Captain! My Captain" by Walt Whitman.</a></p>
    `);

}