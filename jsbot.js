// Javascript Version of the bot, contributed by @ahmedshabib
// People do crazy stuff. Kindly send him thanks. :)


// Make sure time of initiating startit() is perfect.

var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
    "keydown", // event type : keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // viewArg: should be window
    false, // ctrlKeyArg
    false, // altKeyArg
    false, // shiftKeyArg
    false, // metaKeyArg
    0, // keyCodeArg : unsigned long the virtual key code, else 0
    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);

document.dispatchEvent(keyboardEvent);
function startit()
{
    setTimeout(doit,1000);
    setTimeout(doit,1500);
    setTimeout(doit,2100);
    setTimeout(doit,2600);
    setTimeout(doit,3200);
    setTimeout(doit,3800);
    setTimeout(doit,4400);
    setTimeout(doit,5000);
    setTimeout(doit,5600);
    setTimeout(doit,6200);
    setTimeout(doit,6800);
    setTimeout(doit,7400);
    setTimeout(doit,8000);
    setTimeout(doit,8600);
    setTimeout(doit,9200);
    setTimeout(doit,9800);
    setTimeout(doit,10400);
    setTimeout(doit,11200);
}

function doit()
{
    document.dispatchEvent(keyboardEvent);
}

startit();
