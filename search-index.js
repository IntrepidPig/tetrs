var searchIndex = {};
searchIndex["tetrs"] = {"doc":"The tetrs library provides a number of low-level tasks for required for\ntetris gameplay. This library aims to be correct and provide easy extension\nfor new frontends/rotation-systems etc.","items":[[0,"schema","tetrs","Methods for converting to and from a textual field representation.",null,null],[3,"Schema","tetrs::schema","A schema is a simple 2d textual representation of a field and a block.\nIt allows conversion from a string, and also from a `(&amp;Field, &amp;Block)` and\nbridges the gap between these two components.",null,null],[12,"width","","The current width of the schema",0,null],[12,"height","","The current height of the schema",0,null],[11,"fmt","","",0,{"inputs":[{"name":"schema"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"schema"}],"output":{"name":"schema"}}],[11,"from_state","","Construct a schema representation from an game primitives.",0,{"inputs":[{"name":"field"},{"name":"block"}],"output":{"name":"schema"}}],[11,"from_string","","Construct a schema representation from an input string.",0,{"inputs":[{"name":"str"}],"output":{"name":"schema"}}],[11,"to_state","","Constuct state objects from a given schema. This is slightly finicky\nand there are a few cases to consider.",0,null],[11,"to_string","","Construct a visual representation from a given schema.",0,{"inputs":[{"name":"schema"}],"output":{"name":"string"}}],[11,"fmt","","",0,{"inputs":[{"name":"schema"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"schema"},{"name":"self"}],"output":{"name":"bool"}}],[0,"field","tetrs","A tetris playfield.",null,null],[3,"Field","tetrs::field","A `Field` is simply a 2-D `Vec` with some corresponding options.",null,null],[12,"width","","The width of the field.",1,null],[12,"height","","The height of the field.",1,null],[12,"hidden","","The height of the hidden region of the field.",1,null],[12,"spawn","","The initial spawn of a `Block` on this field.",1,null],[12,"data","","The current field state.",1,null],[3,"FieldOptions","","Optional values which can be set when initializing a `Field`.",null,null],[12,"width","","",2,null],[12,"height","","",2,null],[12,"hidden","","",2,null],[12,"spawn","","",2,null],[11,"fmt","","",1,{"inputs":[{"name":"field"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"field"}],"output":{"name":"field"}}],[11,"hash","","",1,null],[11,"fmt","","",2,{"inputs":[{"name":"fieldoptions"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deserialize","","",2,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",2,{"inputs":[{"name":"fieldoptions"},{"name":"__s"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"fieldoptions"}}],[11,"new","","Construct a `Field` object with default values.",1,{"inputs":[],"output":{"name":"field"}}],[11,"with_options","","Construct a `Field` object with specific values.",1,{"inputs":[{"name":"fieldoptions"}],"output":{"name":"field"}}],[11,"clear_lines","","Clear lines from the field and return the number cleared.",1,{"inputs":[{"name":"field"}],"output":{"name":"usize"}}],[11,"freeze","","Freeze a block into place on the field. This takes ownership of the\nblock to ensure it cannot be used again.",1,{"inputs":[{"name":"field"},{"name":"block"}],"output":null}],[11,"get","","Return the value at the specified field location.",1,null],[11,"occupies","","Return true if the value at the specified location is non-empty.",1,null],[0,"block","tetrs","Defines a single tetrimino and actions for modifying it.",null,null],[3,"Block","tetrs::block","A struct representing a single tetrimino.",null,null],[12,"x","","X-coordinate of the piece",3,null],[12,"y","","Y-coordinate of the piece",3,null],[12,"id","","Id of the block",3,null],[12,"r","","Rotation state of the block",3,null],[12,"rs","","Rotation system used to calculate block offsets.",3,null],[3,"BlockOptions","","Optional values which can be set when initializing a `Block`.",null,null],[12,"x","","",4,null],[12,"y","","",4,null],[12,"rotation","","",4,null],[12,"rotation_system","","",4,null],[4,"Id","","The identifier for a particular `Block`.",null,null],[13,"I","","",5,null],[13,"T","","",5,null],[13,"L","","",5,null],[13,"J","","",5,null],[13,"S","","",5,null],[13,"Z","","",5,null],[13,"O","","",5,null],[13,"None","","",5,null],[4,"Rotation","","Represents all rotation statuses a block can be. This is used both as\na rotation state, and to indicate how much relative movement shoud be\napplied for various functions.",null,null],[13,"R0","","",6,null],[13,"R90","","",6,null],[13,"R180","","",6,null],[13,"R270","","",6,null],[4,"Direction","","A movement along one of the four directional axes.",null,null],[13,"Left","","",7,null],[13,"Right","","",7,null],[13,"Up","","",7,null],[13,"Down","","",7,null],[11,"eq","","",5,{"inputs":[{"name":"id"},{"name":"id"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"id"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"id"}],"output":{"name":"id"}}],[11,"hash","","",5,null],[11,"to_usize","","",5,{"inputs":[{"name":"id"}],"output":{"name":"usize"}}],[11,"from_usize","","",5,{"inputs":[{"name":"usize"}],"output":{"name":"id"}}],[11,"variants","","Returns all `Id` variants known.",5,null],[11,"eq","","",6,{"inputs":[{"name":"rotation"},{"name":"rotation"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"rotation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"hash","","",6,null],[11,"default","","",6,{"inputs":[],"output":{"name":"rotation"}}],[11,"to_usize","","",6,{"inputs":[{"name":"rotation"}],"output":{"name":"usize"}}],[11,"from_usize","","",6,{"inputs":[{"name":"usize"}],"output":{"name":"rotation"}}],[11,"variants","","Returns all known `Rotation` variants.",6,{"inputs":[],"output":{"name":"vec"}}],[11,"clockwise","","Returns the next clockwise rotation.",6,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"anticlockwise","","Returns the next anticlockwise rotation.",6,{"inputs":[{"name":"rotation"}],"output":{"name":"rotation"}}],[11,"eq","","",7,{"inputs":[{"name":"direction"},{"name":"direction"}],"output":{"name":"bool"}}],[11,"fmt","","",7,{"inputs":[{"name":"direction"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"direction"}],"output":{"name":"direction"}}],[11,"hash","","",7,null],[11,"variants","","Return all known `Direction` variants.",7,{"inputs":[],"output":{"name":"vec"}}],[11,"clone","","",3,{"inputs":[{"name":"block"}],"output":{"name":"block"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"blockoptions"}}],[11,"new","","Construct a `Block` object with default values.",3,{"inputs":[{"name":"id"},{"name":"field"}],"output":{"name":"block"}}],[11,"with_options","","Construct a `Block` object with specific values.",3,{"inputs":[{"name":"id"},{"name":"field"},{"name":"blockoptions"}],"output":{"name":"block"}}],[11,"collides_at_offset","","Return whether the block collides with `field` at the specified offset.",3,null],[11,"collides","","Return whether the current `Block` collides with `field` at its current\nposition.",3,{"inputs":[{"name":"block"},{"name":"field"}],"output":{"name":"bool"}}],[11,"shift","","Shift the block one step in the specified direction.",3,{"inputs":[{"name":"block"},{"name":"field"},{"name":"direction"}],"output":{"name":"bool"}}],[11,"shift_extend","","Repeatedly shift a block as far as we can until a collision occurs.",3,{"inputs":[{"name":"block"},{"name":"field"},{"name":"direction"}],"output":null}],[11,"rotate_at_offset","","Rotate the block by a specified amount and then apply an offset.",3,null],[11,"rotate","","Rotate the block by the specified amount.",3,{"inputs":[{"name":"block"},{"name":"field"},{"name":"rotation"}],"output":{"name":"bool"}}],[11,"occupies","","Check if the block occupies a particular `(x, y)` absolute location.",3,null],[11,"ghost","","Returns a new `Block` which is the current blocks ghost.",3,{"inputs":[{"name":"block"},{"name":"field"}],"output":{"name":"block"}}],[0,"controller","tetrs","An abstract controller for specifying actions.",null,null],[3,"Controller","tetrs::controller","A controller stores the internal state as a series of known actions.",null,null],[12,"time","","The length each action has occured for in ticks.",8,null],[12,"active","","Which actions are currently active.",8,null],[4,"Action","","Actions which are understood by the controller.",null,null],[13,"MoveLeft","","",9,null],[13,"MoveRight","","",9,null],[13,"MoveDown","","",9,null],[13,"HardDrop","","",9,null],[13,"RotateLeft","","",9,null],[13,"RotateRight","","",9,null],[13,"Hold","","",9,null],[13,"Quit","","",9,null],[6,"CTarray","","&#39;Controller Time&#39; array.",null,null],[6,"CAarray","","&#39;Controller Active&#39; array",null,null],[11,"hash","","",9,null],[11,"fmt","","",9,{"inputs":[{"name":"action"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"action"}],"output":{"name":"action"}}],[11,"to_usize","","",9,{"inputs":[{"name":"action"}],"output":{"name":"usize"}}],[11,"from_usize","","",9,{"inputs":[{"name":"usize"}],"output":{"name":"action"}}],[11,"default","","",8,{"inputs":[],"output":{"name":"controller"}}],[11,"new","","Return a new controller instance.",8,{"inputs":[],"output":{"name":"controller"}}],[11,"active","","Query if an action is currently active.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":{"name":"bool"}}],[11,"time","","Query how long an action has been active for.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":{"name":"u64"}}],[11,"activate","","Activate the specified action.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":null}],[11,"deactivate","","Deactivate the specified action.",8,{"inputs":[{"name":"controller"},{"name":"action"}],"output":null}],[11,"deactivate_all","","Deactivate all actions.",8,{"inputs":[{"name":"controller"}],"output":null}],[11,"update","","Update all active actions and increment their timers.",8,{"inputs":[{"name":"controller"}],"output":null}],[0,"wallkick","tetrs","A module for specifying wallkick tests.",null,null],[3,"SRS","tetrs::wallkick","",null,null],[3,"Empty","","",null,null],[3,"Simple","","",null,null],[3,"DTET","","",null,null],[3,"TGM","","",null,null],[3,"TGM3","","",null,null],[5,"new","","Factory function for constructing rotation systems from name.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"new","","Returns a static instance to this wallkick.",10,{"inputs":[],"output":{"name":"srs"}}],[11,"test","","",10,null],[11,"new","","Returns a static instance to this wallkick.",11,{"inputs":[],"output":{"name":"empty"}}],[11,"test","","",11,null],[11,"new","","Returns a static instance to this wallkick.",12,{"inputs":[],"output":{"name":"simple"}}],[11,"test","","",12,null],[11,"new","","Returns a static instance to this wallkick.",13,{"inputs":[],"output":{"name":"dtet"}}],[11,"test","","",13,null],[11,"new","","Returns a static instance to this wallkick.",14,{"inputs":[],"output":{"name":"tgm"}}],[11,"test","","",14,null],[11,"new","","Returns a static instance to this wallkick.",15,{"inputs":[],"output":{"name":"tgm3"}}],[11,"test","","",15,null],[8,"Wallkick","","The `Wallkick` trait must be implemented by all wallkicks.",null,null],[10,"test","","Wallkick tests for the specified id and rotation.",16,null],[0,"randomizer","tetrs","Implements a randomizer.",null,null],[3,"BagRandomizer","tetrs::randomizer","A generic bag randomizer.",null,null],[3,"MemorylessRandomizer","","A generic memoryless randomizer.\nThis generates a completely arbitrary sequence of `Id`&#39;s.",null,null],[3,"GameboyRandomizer","","A generic memoryless randomizer.\nThis generates a completely arbitrary sequence of `Id`&#39;s.",null,null],[3,"TGM1Randomizer","","A TGM1 randomizer.\nThis generates a completely arbitrary sequence of `Id`&#39;s.",null,null],[3,"TGM2Randomizer","","A TGM2 randomizer.\nThis generates a completely arbitrary sequence of `Id`&#39;s.",null,null],[5,"new","","Factory function for generating randomizers.",null,{"inputs":[{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"preview","","",17,{"inputs":[{"name":"bagrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",17,{"inputs":[{"name":"bagrandomizer"}],"output":{"name":"id"}}],[11,"clone","","",17,{"inputs":[{"name":"bagrandomizer"}],"output":{"name":"bagrandomizer"}}],[11,"new","","Generate a new `BagRandomizer` instance.",17,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"preview","","",18,{"inputs":[{"name":"memorylessrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",18,{"inputs":[{"name":"memorylessrandomizer"}],"output":{"name":"id"}}],[11,"clone","","",18,{"inputs":[{"name":"memorylessrandomizer"}],"output":{"name":"memorylessrandomizer"}}],[11,"new","","Return a new `MemorylessRandomizer` instance.",18,{"inputs":[{"name":"usize"}],"output":{"name":"memorylessrandomizer"}}],[11,"preview","","",19,{"inputs":[{"name":"gameboyrandomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",19,{"inputs":[{"name":"gameboyrandomizer"}],"output":{"name":"id"}}],[11,"clone","","",19,{"inputs":[{"name":"gameboyrandomizer"}],"output":{"name":"gameboyrandomizer"}}],[11,"new","","Return a new `GameboyRandomizer` instance.",19,{"inputs":[{"name":"usize"}],"output":{"name":"gameboyrandomizer"}}],[11,"preview","","",20,{"inputs":[{"name":"tgm1randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",20,{"inputs":[{"name":"tgm1randomizer"}],"output":{"name":"id"}}],[11,"clone","","",20,{"inputs":[{"name":"tgm1randomizer"}],"output":{"name":"tgm1randomizer"}}],[11,"new","","Return a new `TGM1Randomizer` instance.",20,{"inputs":[{"name":"usize"}],"output":{"name":"tgm1randomizer"}}],[11,"preview","","",21,{"inputs":[{"name":"tgm2randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[11,"next","","",21,{"inputs":[{"name":"tgm2randomizer"}],"output":{"name":"id"}}],[11,"clone","","",21,{"inputs":[{"name":"tgm2randomizer"}],"output":{"name":"tgm2randomizer"}}],[11,"new","","Return a new `TGM2Randomizer` instance.",21,{"inputs":[{"name":"usize"}],"output":{"name":"tgm2randomizer"}}],[8,"Randomizer","","A randomizer must implement an iterator, plus a preview function which\nreturns a number of lookahead pieces.",null,null],[10,"preview","","Return a vector containing the next `n` pieces that will be retrieved\nby the iterator.",22,{"inputs":[{"name":"randomizer"},{"name":"usize"}],"output":{"name":"vec"}}],[10,"next","","Return the next block value in this sequence.",22,{"inputs":[{"name":"randomizer"}],"output":{"name":"id"}}],[0,"rotation_system","tetrs","This modules provides an interface for dealing with different block offsets.",null,null],[5,"new","tetrs::rotation_system","Factory function for constructing a rotation system from name.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[0,"srs","","Specifies the block values for the SRS rotation system.",null,null],[3,"SRS","tetrs::rotation_system::srs","",null,null],[11,"new","","Return a new instance",23,{"inputs":[],"output":{"name":"srs"}}],[11,"data","","",23,null],[0,"ars","tetrs::rotation_system","Specifies the block values for the Arika rotation system.",null,null],[3,"ARS","tetrs::rotation_system::ars","",null,null],[11,"new","","Return a new instance",24,{"inputs":[],"output":{"name":"ars"}}],[11,"data","","",24,null],[0,"tengen","tetrs::rotation_system","Specifies the block values for the Tengen rotation system.",null,null],[3,"Tengen","tetrs::rotation_system::tengen","",null,null],[11,"new","","Return a new instance",25,{"inputs":[],"output":{"name":"tengen"}}],[11,"data","","",25,null],[0,"dtet","tetrs::rotation_system","Rotation offsets for the DTET rotation system.",null,null],[3,"DTET","tetrs::rotation_system::dtet","",null,null],[11,"new","","Return a new instance",26,{"inputs":[],"output":{"name":"dtet"}}],[11,"data","","",26,null],[8,"RotationSystem","tetrs::rotation_system","The `RotationSystem` trait is implmented by all rotation systems.",null,null],[10,"data","","Returns a static array of offset values for the specified `Id`\nand `Rotation`.",27,null],[11,"minp","","Returns the minimum offset of the first piece in a block.",27,null],[11,"min","","Returns a tuple containing the leading empty `(x, y)` columns.",27,null],[11,"max","","Returns an `(x, y)` tuple containing the maximum offsets for the\nspecified block.",27,null],[0,"engine","tetrs","Implements a high-level engine which composes all the components\ninto one abstract structure.",null,null],[3,"EngineSettings","tetrs::engine","Stores configurable options which alter how the engine works.",null,null],[3,"EngineOptions","","Struct for initializing an `Engine`",null,null],[12,"field_options","","",28,null],[12,"randomizer_name","","",28,null],[12,"randomizer_lookahead","","",28,null],[12,"rotation_system_name","","",28,null],[12,"wallkick_name","","",28,null],[12,"mspt","","",28,null],[12,"engine_settings","","",28,null],[3,"Engine","","Stores the internal engine details.",null,null],[12,"co","","Controller which is used by the engine",29,null],[12,"rd","","The randomizer being used.",29,null],[12,"wk","","The wallkick object being used.",29,null],[12,"rs","","The rotation system used by this engine.",29,null],[12,"fd","","The field which the game is played on",29,null],[12,"bk","","The active block",29,null],[12,"hd","","The current hold block (this doesn&#39;t store an actual block right now)",29,null],[12,"op","","Settings used internally by the engine",29,null],[12,"st","","Statistics of the current game",29,null],[12,"hs","","The input history of the game",29,null],[12,"running","","Is the game running",29,null],[12,"mspt","","How many milliseconds occur per game tick.",29,null],[12,"tick_count","","How many ticks have elapsed this game",29,null],[11,"default","","",30,{"inputs":[],"output":{"name":"enginesettings"}}],[11,"default","","",28,{"inputs":[],"output":{"name":"engineoptions"}}],[11,"update","","The main update phase of the engine.",29,{"inputs":[{"name":"engine"}],"output":null}],[11,"new","","Construct a new `Engine` from an `EngineOptions` instance.",29,{"inputs":[{"name":"engineoptions"}],"output":{"name":"engine"}}],[0,"utility","tetrs","Contains helper methods which expose more specific functions for\nparticular primitives.",null,null],[8,"BlockHelper","tetrs::utility","Helper traits for the `Block` struct.",null,null],[10,"rotate_with_wallkick","","Rotate a `Block` using the specified `Wallkick` class.",31,{"inputs":[{"name":"blockhelper"},{"name":"field"},{"name":"wallkick"},{"name":"rotation"}],"output":{"name":"bool"}}],[11,"rotate_with_wallkick","tetrs::block","",3,{"inputs":[{"name":"block"},{"name":"field"},{"name":"wallkick"},{"name":"rotation"}],"output":{"name":"bool"}}],[0,"statistics","tetrs","Stores statistics about an individual game.",null,null],[3,"Statistics","tetrs::statistics","`Statistics` is a &#39;dumb&#39; struct, and does not provide any methods\nupon it. Its primary use is as a namespacing tool to avoid\nover-complicating struct such as `Engine`.",null,null],[12,"lines","","How many lines have been cleared",32,null],[12,"pieces","","How many pieces have been placed",32,null],[12,"singles","","Total single line clears",32,null],[12,"doubles","","Total double line clears",32,null],[12,"triples","","Total triple line clears",32,null],[12,"fours","","Total tetrises",32,null],[11,"default","","",32,{"inputs":[],"output":{"name":"statistics"}}],[11,"new","","Construct a new `Statistics` object.",32,{"inputs":[],"output":{"name":"statistics"}}],[0,"import","tetrs","Convenience module providing default imports.",null,null],[0,"history","","Module which provides history management tools.",null,null],[3,"Event","tetrs::history","An individual event in a history sequence.",null,null],[3,"History","","Manages the history state of a particular game.",null,null],[11,"fmt","","",33,{"inputs":[{"name":"event"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",34,{"inputs":[],"output":{"name":"history"}}],[11,"new","","Construct a new empty history sequence",34,{"inputs":[],"output":{"name":"history"}}],[11,"update","","Update the history state with a controller snapshot.",34,{"inputs":[{"name":"history"},{"name":"controller"}],"output":null}],[11,"get_sequence","","Return the current event sequence",34,null],[14,"schema_assert_eq!","tetrs","Tests if two schema are equal.",null,null]],"paths":[[3,"Schema"],[3,"Field"],[3,"FieldOptions"],[3,"Block"],[3,"BlockOptions"],[4,"Id"],[4,"Rotation"],[4,"Direction"],[3,"Controller"],[4,"Action"],[3,"SRS"],[3,"Empty"],[3,"Simple"],[3,"DTET"],[3,"TGM"],[3,"TGM3"],[8,"Wallkick"],[3,"BagRandomizer"],[3,"MemorylessRandomizer"],[3,"GameboyRandomizer"],[3,"TGM1Randomizer"],[3,"TGM2Randomizer"],[8,"Randomizer"],[3,"SRS"],[3,"ARS"],[3,"Tengen"],[3,"DTET"],[8,"RotationSystem"],[3,"EngineOptions"],[3,"Engine"],[3,"EngineSettings"],[8,"BlockHelper"],[3,"Statistics"],[3,"Event"],[3,"History"]]};
initSearch(searchIndex);
