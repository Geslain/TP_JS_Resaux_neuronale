/**
 * Created by Gess on 07/01/2016.
 */


$(document).ready(function(){

// simple example to get started;
    MIDI.loadPlugin({
        instruments: [ "acoustic_grand_piano"], // or multiple instruments
        onsuccess: function() { }
    });
});