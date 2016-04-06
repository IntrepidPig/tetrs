var searchIndex = {};
searchIndex["tetrs"] = {"doc":"The tetrs library provides a number of low-level tasks related to movement\nof blocks. The code aims to be correct and provide easy extension for new\ninput.","items":[[4,"Rotation","tetrs","Represents all rotation statuses a block can be. This is used both as\na rotation state, and to indicate how much relative movement shoud be\napplied for various functions.\nA rotation state.",null,null],[13,"R0","","",0,null],[13,"R90","","",0,null],[13,"R180","","",0,null],[13,"R270","","",0,null],[4,"Direction","","A movement along one of the four directional axes.",null,null],[13,"None","","",1,null],[13,"Left","","",1,null],[13,"Right","","",1,null],[13,"Up","","",1,null],[13,"Down","","",1,null],[0,"field","","A generic playfield.",null,null],[3,"Field","tetrs::field","A `Field` is simply a 2-D `Vec` with some corresponding options.",null,null],[12,"width","","The width of the field.",2,null],[12,"height","","The height of the field.",2,null],[12,"hidden","","The height of the hidden region of the field.",2,null],[12,"spawn","","The initial spawn of a `Block` on this field.",2,null],[12,"data","","The current field state.",2,null],[8,"FieldBuilder","","Handles building of more complicated fields than can be constructed with\n`new` itself.",null,null],[10,"width","","Alter the width of the field and return the modified field.",3,{"inputs":[{"name":"fieldbuilder"},{"name":"usize"}],"output":{"name":"field"}}],[10,"height","","Alter the height of the field and return the modified field.",3,{"inputs":[{"name":"fieldbuilder"},{"name":"usize"}],"output":{"name":"field"}}],[10,"hidden","","Alter the hidden height of the field and return the modified field.",3,{"inputs":[{"name":"fieldbuilder"},{"name":"usize"}],"output":{"name":"field"}}],[10,"spawn","","Alter the block spawn point of the field and return the modified.",3,null],[11,"default","","",2,{"inputs":[],"output":{"name":"field"}}],[11,"fmt","","",2,{"inputs":[{"name":"field"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"field"}],"output":{"name":"field"}}],[11,"hash","","",2,null],[11,"width","","",2,{"inputs":[{"name":"field"},{"name":"usize"}],"output":{"name":"field"}}],[11,"height","","",2,{"inputs":[{"name":"field"},{"name":"usize"}],"output":{"name":"field"}}],[11,"hidden","","",2,{"inputs":[{"name":"field"},{"name":"usize"}],"output":{"name":"field"}}],[11,"spawn","","",2,null],[11,"new","","Construct a new field object.",2,{"inputs":[],"output":{"name":"field"}}],[11,"clear_lines","","Clear lines from the field and return the number cleared.",2,{"inputs":[{"name":"field"}],"output":{"name":"usize"}}],[11,"freeze","","Freeze a block into place on the field. This takes ownership of the\nblock to ensure it cannot be used again.",2,{"inputs":[{"name":"field"},{"name":"block"}],"output":null}],[11,"at","","Return the value at the specified field location.",2,null],[11,"set","","Return true if the value at the specified location is non-empty.",2,null],[0,"block","tetrs","A single tetrimino.",null,null],[3,"Block","tetrs::block","A struct representing a single tetrimino.",null,null],[12,"x","","X-coordinate of the piece",4,null],[12,"y","","Y-coordinate of the piece",4,null],[12,"id","","Type of the block",4,null],[12,"r","","Rotation state of the block",4,null],[12,"rs","","Rotation system used internally",4,null],[4,"Type","","The identifier for a particular block.",null,null],[13,"I","","",5,null],[13,"T","","",5,null],[13,"L","","",5,null],[13,"J","","",5,null],[13,"S","","",5,null],[13,"Z","","",5,null],[13,"O","","",5,null],[13,"None","","",5,null],[8,"BlockBuilder","","Traits for building a block.",null,null],[10,"position","","Alter the initial position of the block.",6,null],[10,"rotation","","Alter the initial rotation of the block.",6,{"inputs":[{"name":"blockbuilder"},{"name":"rotation"}],"output":{"name":"block"}}],[10,"on_field","","Alter the initial position of the block, setting it to the spawn\nposition as specified by `field`.",6,{"inputs":[{"name":"blockbuilder"},{"name":"field"}],"output":{"name":"block"}}],[10,"rotation_system","","Alter the default RotationSystem used by the block.",6,{"inputs":[{"name":"blockbuilder"},{"name":"r"}],"output":{"name":"block"}}],[11,"eq","","",5,{"inputs":[{"name":"type"},{"name":"type"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"type"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"type"}],"output":{"name":"type"}}],[11,"hash","","",5,null],[11,"to_usize","","",5,{"inputs":[{"name":"type"}],"output":{"name":"usize"}}],[11,"from_usize","","",5,{"inputs":[{"name":"usize"}],"output":{"name":"type"}}],[11,"variants","","Returns all `non-None` `Type` variants.",5,null],[11,"clone","","",4,{"inputs":[{"name":"block"}],"output":{"name":"block"}}],[11,"position","","",4,null],[11,"rotation","","",4,{"inputs":[{"name":"block"},{"name":"rotation"}],"output":{"name":"block"}}],[11,"on_field","","",4,{"inputs":[{"name":"block"},{"name":"field"}],"output":{"name":"block"}}],[11,"rotation_system","","",4,{"inputs":[{"name":"block"},{"name":"r"}],"output":{"name":"block"}}],[11,"new","","Construct a new default `Block` and return it.",4,{"inputs":[{"name":"type"}],"output":{"name":"block"}}],[11,"collision","","Return `true` if the block currently collides with any pieces on the\nfield.",4,{"inputs":[{"name":"block"},{"name":"field"}],"output":{"name":"bool"}}],[11,"shift","","Shift the block one step in the specified direction.",4,{"inputs":[{"name":"block"},{"name":"field"},{"name":"direction"}],"output":{"name":"bool"}}],[11,"shift_extend","","Repeatedly shift a block as far as we can until a collision occurs.\nA HardDrop can be performed for example by calling\n`Block.shift_extend(&amp;field, Direction::Down)`.",4,{"inputs":[{"name":"block"},{"name":"field"},{"name":"direction"}],"output":null}],[11,"rotate_with_offset","","Rotate the block by a specified amount and then apply an offset.",4,null],[11,"rotate","","Rotate the block by the specified amount.",4,{"inputs":[{"name":"block"},{"name":"field"},{"name":"rotation"}],"output":{"name":"bool"}}],[11,"at","","Check if the block occupies a particular `(x, y)` absolute location.",4,null],[11,"ghost","","Return a `Block` which is a ghost of the current.",4,{"inputs":[{"name":"block"},{"name":"field"}],"output":{"name":"block"}}],[11,"data","","Return the used block data for the specified type.",4,null],[0,"controller","tetrs","An abstract controller for specifying actions.",null,null],[3,"Controller","tetrs::controller","A controller stores the internal state as a series of known actions.",null,null],[4,"Action","","Actions which are understood by the controller.",null,null],[13,"MoveLeft","","",7,null],[13,"MoveRight","","",7,null],[13,"MoveDown","","",7,null],[13,"HardDrop","","",7,null],[13,"RotateLeft","","",7,null],[13,"RotateRight","","",7,null],[13,"Hold","","",7,null],[13,"Quit","","",7,null],[11,"hash","","",7,null],[11,"fmt","","",7,{"inputs":[{"name":"action"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"action"}],"output":{"name":"action"}}],[11,"to_usize","","",7,{"inputs":[{"name":"action"}],"output":{"name":"usize"}}],[11,"from_usize","","",7,{"inputs":[{"name":"usize"}],"output":{"name":"action"}}],[11,"default","","",8,{"inputs":[],"output":{"name":"controller"}}],[11,"new","","Return a new controller instance.",8,{"inputs":[],"output":{"name":"controller"}}],[11,"active","","Query if an action is currently active.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":{"name":"bool"}}],[11,"time","","Query how long an action has been active for.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":{"name":"usize"}}],[11,"activate","","Activate the specified action.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":null}],[11,"deactivate","","Deactivate the specified action.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":null}],[11,"update","","Update all active actions and increment their timers.",8,{"inputs":[{"name":"controller"}],"output":null}],[0,"wallkick","tetrs","Implements a wallkick test",null,null],[3,"SRS","tetrs::wallkick","Wallkick",null,null],[11,"new","","Return a new wallkick instance",9,{"inputs":[],"output":{"name":"srs"}}],[11,"test","","Wallkick tests for the specified id and rotation.",9,null],[8,"WallkickTest","","Trait which specifies what wallkick tests must implement. Every wallkick\ntest must implement an iterator with offsets of type (i32, i32).",null,null],[10,"test","","Returns a set of wallkick tests for the specified block and rotation",10,null],[0,"randomizer","tetrs","Implements a randomizer.",null,null],[3,"BagRandomizer","tetrs::randomizer","A generic bag randomizer.",null,null],[3,"MemorylessRandomizer","","A generic memoryless randomizer.\nThis generates a completely arbitrary sequence of `Type`&#39;s.",null,null],[3,"GameboyRandomizer","","A generic memoryless randomizer.\nThis generates a completely arbitrary sequence of `Type`&#39;s.",null,null],[3,"TGM1Randomizer","","A TGM1 randomizer.\nThis generates a completely arbitrary sequence of `Type`&#39;s.",null,null],[3,"TGM2Randomizer","","A TGM2 randomizer.\nThis generates a completely arbitrary sequence of `Type`&#39;s.",null,null],[11,"preview","","",11,{"inputs":[{"name":"bagrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",11,{"inputs":[{"name":"bagrandomizer"}],"output":{"name":"type"}}],[11,"clone","","",11,{"inputs":[{"name":"bagrandomizer"}],"output":{"name":"bagrandomizer"}}],[11,"new","","Generate a new `BagRandomizer` instance.",11,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"preview","","",12,{"inputs":[{"name":"memorylessrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",12,{"inputs":[{"name":"memorylessrandomizer"}],"output":{"name":"type"}}],[11,"clone","","",12,{"inputs":[{"name":"memorylessrandomizer"}],"output":{"name":"memorylessrandomizer"}}],[11,"new","","Return a new `MemorylessRandomizer` instance.",12,{"inputs":[{"name":"usize"}],"output":{"name":"memorylessrandomizer"}}],[11,"preview","","",13,{"inputs":[{"name":"gameboyrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",13,{"inputs":[{"name":"gameboyrandomizer"}],"output":{"name":"type"}}],[11,"clone","","",13,{"inputs":[{"name":"gameboyrandomizer"}],"output":{"name":"gameboyrandomizer"}}],[11,"new","","Return a new `GameboyRandomizer` instance.",13,{"inputs":[{"name":"usize"}],"output":{"name":"gameboyrandomizer"}}],[11,"preview","","",14,{"inputs":[{"name":"tgm1randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",14,{"inputs":[{"name":"tgm1randomizer"}],"output":{"name":"type"}}],[11,"clone","","",14,{"inputs":[{"name":"tgm1randomizer"}],"output":{"name":"tgm1randomizer"}}],[11,"new","","Return a new `TGM1Randomizer` instance.",14,{"inputs":[{"name":"usize"}],"output":{"name":"tgm1randomizer"}}],[11,"preview","","",15,{"inputs":[{"name":"tgm2randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",15,{"inputs":[{"name":"tgm2randomizer"}],"output":{"name":"type"}}],[11,"clone","","",15,{"inputs":[{"name":"tgm2randomizer"}],"output":{"name":"tgm2randomizer"}}],[11,"new","","Return a new `TGM2Randomizer` instance.",15,{"inputs":[{"name":"usize"}],"output":{"name":"tgm2randomizer"}}],[8,"Randomizer","","A randomizer must implement an iterator, plus a preview function which\nreturns a number of lookahead pieces.",null,null],[10,"preview","","Return a vector containing the next `n` pieces that will be retrieved\nby the iterator.",16,{"inputs":[{"name":"randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[10,"next","","Return the next block value in this sequence.",16,{"inputs":[{"name":"randomizer"}],"output":{"name":"type"}}],[0,"rotation","tetrs","This modules provides an interface for dealing with different block offsets.",null,null],[0,"srs","tetrs::rotation","Specifies the block values for the SRS rotation system.",null,null],[3,"SRS","tetrs::rotation::srs","",null,null],[11,"hash","","",17,null],[11,"default","","",17,{"inputs":[],"output":{"name":"srs"}}],[11,"fmt","","",17,{"inputs":[{"name":"srs"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"srs"}],"output":{"name":"srs"}}],[11,"new","","Return a new instance",17,{"inputs":[],"output":{"name":"srs"}}],[11,"data","","",17,null],[0,"arika","tetrs::rotation","Specifies the block values for the Arika rotation system.",null,null],[3,"Arika","tetrs::rotation::arika","",null,null],[11,"hash","","",18,null],[11,"default","","",18,{"inputs":[],"output":{"name":"arika"}}],[11,"fmt","","",18,{"inputs":[{"name":"arika"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",18,{"inputs":[{"name":"arika"}],"output":{"name":"arika"}}],[11,"new","","Return a new instance",18,{"inputs":[],"output":{"name":"arika"}}],[11,"data","","",18,null],[0,"tengen","tetrs::rotation","Specifies the block values for the Tengen rotation system.",null,null],[3,"Tengen","tetrs::rotation::tengen","",null,null],[11,"hash","","",19,null],[11,"default","","",19,{"inputs":[],"output":{"name":"tengen"}}],[11,"fmt","","",19,{"inputs":[{"name":"tengen"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",19,{"inputs":[{"name":"tengen"}],"output":{"name":"tengen"}}],[11,"new","","Return a new instance",19,{"inputs":[],"output":{"name":"tengen"}}],[11,"data","","",19,null],[0,"dtet","tetrs::rotation","Rotation offsrts for the DTET rotation system.",null,null],[3,"DTET","tetrs::rotation::dtet","",null,null],[11,"hash","","",20,null],[11,"default","","",20,{"inputs":[],"output":{"name":"dtet"}}],[11,"fmt","","",20,{"inputs":[{"name":"dtet"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",20,{"inputs":[{"name":"dtet"}],"output":{"name":"dtet"}}],[11,"new","","Return a new instance",20,{"inputs":[],"output":{"name":"dtet"}}],[11,"data","","",20,null],[8,"RotationSystem","tetrs::rotation","The `RotationSystem` trait is implmented by all rotation systems.",null,null],[10,"data","","Returns a static array of offset values for the specified `Type`\nand `Rotation`.",21,null],[11,"min","","Returns a tuple containing the leading empty `(x, y)` columns.",21,null],[11,"max","","Returns an `(x, y)` tuple containing the maximum offsets for the\nspecified block.",21,null],[11,"minp","","Returns the minimum offset of the first piece in a block.",21,null],[0,"engine","tetrs","Implements a high-level engine which composes all the components\ninto one abstract structure.",null,null],[3,"Engine","tetrs::engine","This engine allows for handling of DAS-like features and other things\nwhich are otherwise transparent to sub-components which are only\nmanaged on a per-tick basis (have no concept of state over time).",null,null],[12,"controller","","Controller which is used by the engine",22,null],[12,"randomizer","","The randomizer being used.",22,null],[12,"wallkick","","The wallkick object being used.",22,null],[12,"field","","The field which the game is played on",22,null],[12,"block","","The active block",22,null],[12,"hold","","The current hold block",22,null],[12,"das","","Das value",22,null],[11,"new","","Construct a new engine object and return it.",22,{"inputs":[{"name":"field"},{"name":"wallkicktest"}],"output":{"name":"engine"}}],[11,"update","","The main update phase of the engine.",22,{"inputs":[{"name":"engine"}],"output":null}],[0,"schema","tetrs","Methods for converting to and from a textual field representation.",null,null],[3,"Schema","tetrs::schema","A schema is a simple 2d textual representation of a field and a block.\nIt allows conversion from a string, and also from a `(&amp;Field, &amp;Block)` and\nbridges the gap between these two components.",null,null],[11,"fmt","","",23,{"inputs":[{"name":"schema"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",23,{"inputs":[{"name":"schema"}],"output":{"name":"schema"}}],[11,"from_state","","Construct a schema representation from an game primitives.",23,{"inputs":[{"name":"field"},{"name":"block"}],"output":{"name":"schema"}}],[11,"from_string","","Construct a schema representation from an input string.",23,{"inputs":[{"name":"str"}],"output":{"name":"schema"}}],[11,"to_state","","Constuct state objects from a given schema. This is slightly finicky\nand there are a few cases to consider.",23,null],[11,"to_string","","Construct a visual representation from a given schema.",23,{"inputs":[{"name":"schema"}],"output":{"name":"string"}}],[11,"fmt","","",23,{"inputs":[{"name":"schema"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",23,{"inputs":[{"name":"schema"},{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","tetrs","",0,{"inputs":[{"name":"rotation"},{"name":"rotation"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"rotation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"hash","","",0,null],[11,"to_usize","","",0,{"inputs":[{"name":"rotation"}],"output":{"name":"usize"}}],[11,"from_usize","","",0,{"inputs":[{"name":"usize"}],"output":{"name":"rotation"}}],[11,"variants","","Returns all available `Rotation` variants.",0,{"inputs":[],"output":{"name":"vec"}}],[11,"clockwise","","Returns the next clockwise rotation.",0,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"anticlockwise","","Returns the next anticlockwise rotation.",0,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"eq","","",1,{"inputs":[{"name":"direction"},{"name":"direction"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"direction"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"direction"}],"output":{"name":"direction"}}],[11,"hash","","",1,null],[11,"variants","","Return all `non-None` `Direction` variants.",1,{"inputs":[],"output":{"name":"vec"}}]],"paths":[[4,"Rotation"],[4,"Direction"],[3,"Field"],[8,"FieldBuilder"],[3,"Block"],[4,"Type"],[8,"BlockBuilder"],[4,"Action"],[3,"Controller"],[3,"SRS"],[8,"WallkickTest"],[3,"BagRandomizer"],[3,"MemorylessRandomizer"],[3,"GameboyRandomizer"],[3,"TGM1Randomizer"],[3,"TGM2Randomizer"],[8,"Randomizer"],[3,"SRS"],[3,"Arika"],[3,"Tengen"],[3,"DTET"],[8,"RotationSystem"],[3,"Engine"],[3,"Schema"]]};
initSearch(searchIndex);