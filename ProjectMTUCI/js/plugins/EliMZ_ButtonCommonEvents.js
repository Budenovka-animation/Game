//==========================================================================
// EliMZ_ButtonCommonEvents.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦1.7.3♦ Bind common events to keyboard/gamepad buttons!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-button-common-events-for-rpg-maker-mz/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

● Bind common events to keyboard keys or gamepad buttons.
● Remove common events from these keys/buttons.
● Common events can be parallel type(uninterruptedly) or regular ones.
● Can do it through plugin parameters or plugin commands.
● Can choose to overwrite the default keys functions.
● The changes stay on the save file.

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1vJQoLCP-WpSGupGvWHEGqvAAMyahBBES8oF6l0ZkzKw/edit?usp=sharing

============================================================================

@param presetKeys
@text Keyboard CE
@type struct<presetKeysSt>[]
@desc Set here all your default keys/common events.
(Keyboard)
@default []

@param presetKeysGamePad
@text Gamepad CE
@type struct<presetGamePadKeysSt>[]
@desc Set here all your default keys/common events.
(Game Pad)
@default []

@command assign
@text Assign (Keyboard)
@desc Assing a common event to a key.

    @arg key
    @text Keyboard button
    @type select
    @option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
    @desc Type here the keyboard key you want to use. It is not case sensitive.
    @default a

    @arg commonEvent
    @text Common Event Id
    @type common_event
    @desc The common event Id to assign to that key.
    @default 0

    @arg isParallel
    @text Parallel
    @type boolean
    @desc If true, the common event will play like a parallel.
    @default false

    @arg overwrite
    @text Overwrite keys
    @type boolean
    @desc Set to true if you want to overwrite the default keys.
    @default false

@command remove
@text Remove (Keyboard)
@desc Remove a common event of a key.

    @arg key
    @text Keyboard button
    @type select
    @option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
    @desc Choose your key.
    @default a

    @arg restoreKey
    @text Restore Key
    @type boolean
    @desc If true, and that key has a previous key assign to it, the game will restore it to the original function.
    @default true

@command assignGamePad
@text Assign (Game Pad)
@desc Assing a common event to a game pad key.

    @arg key
    @text Game pad button
    @type select
    @option a @option b @option x @option y @option lb @option rb @option lt @option rt @option select @option start @option l3 @option r3 @option up @option down @option left @option right

    @arg commonEvent
    @text Common Event Id
    @type common_event
    @desc The common event Id to assign to that game pad key.
    @default 0

    @arg isParallel
    @text Parallel
    @type boolean
    @desc If true, the common event will play like a parallel.
    @default false

    @arg overwrite
    @text Overwrite keys
    @type boolean
    @desc Set to true if you want to overwrite the default keys.
    @default false

@command removeGamePad
@text Remove (Game Pad)
@desc Remove a common event of a key.

    @arg key
    @text Game pad button
    @type select
    @option a @option b @option x @option y @option lb @option rb @option lt @option rt @option select @option start @option l3 @option r3 @option up @option down @option left @option right

    @arg restoreKey
    @text Restore Key
    @type boolean
    @desc If true, and that key has a previous key assign to it, the game will restore it to the original function.
    @default true

*/

/* ------------------------------ KEYBOARD KEYS ----------------------------- */
{
/*~struct~presetKeysSt:

@param key
@text Keyboard Key
@type select
@option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
@desc The keyboard key. It's not case sensitive.
@default a

@param id
@text Common Event Id
@type common_event
@desc The common event Id.
@default 0

@param isParallel
@text Parallel
@type boolean
@desc If true, the common event will play like a parallel.
@default false

@param overwrite
@text Overwrite keys
@type boolean
@desc Set to true if you want to overwrite the default keys.
@default false

*/
}

/* ------------------------------ GAMEPAD KEYS ------------------------------ */
{
/*~struct~presetGamePadKeysSt:

@param key
@text Gamepad button
@type select
@option a @option b @option x @option y @option lb @option rb @option lt @option rt @option select @option start @option l3 @option r3 @option up @option down @option left @option right

@param id
@text Common Event Id
@type common_event
@desc The common event Id.
@default 0

@param isParallel
@text Parallel
@type boolean
@desc If true, the common event will play like a parallel.
@default false

@param overwrite
@text Overwrite keys
@type boolean
@desc Set to true if you want to overwrite the default keys.
@default false

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ButtonCommonEvents = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.ButtonCommonEvents = {

    parallelCommonEvents: {},
    regularCommonEvents: {},
    Input: null,

    Parameters: class {
        constructor(parameters){
            this.presetKeys = this.parsePresetKeys(JSON.parse(parameters.presetKeys))
            this.presetKeysGamePad = this.parsePresetKeys(JSON.parse(parameters.presetKeysGamePad))
        }

        parsePresetKeys(parameters){
            const presetKeys = []

            for(const param of parameters){
                presetKeys.push(this.parsePresetParameters(JSON.parse(param)))
            }

            return presetKeys
        }

        parsePresetParameters(param){
            param.key = param.key.toLowerCase()
            param.id = Number(param.id)
            param.isParallel = param.isParallel === "true"
            param.overwrite = param.overwrite === "true"
    
            return param        
        }
    },

    InputManager: class {

        canUpdate(){
            return Input._latestButton && Input.isTriggered(Input._latestButton) && !SceneManager.isFrameSkipping
        }

        update(){
            if(this.canUpdate()){
                this.updateInput()
            }
        }

        updateInput(){
            if(this.canUpdateKeyboard(Input._latestButton)){
                this.updateKeyboard()
            }

            const gamepads = navigator.getGamepads && navigator.getGamepads()
            if(gamepads){
                this.updateAllGamepads(gamepads)
            }
        }

        canUpdateKeyboard(keyName){
            return $eliData.buttonCommonEvents().hasOwnProperty(keyName)
        }

        updateKeyboard(){
            const data = Eli.ButtonCommonEvents.getKeyboardData()[Input._latestButton]

            if(data){
                const commonEventId = data.id

                if(data.isParallel){
                    if(!Eli.ButtonCommonEvents.isPlayingParallelCommonEvent(commonEventId)){
                        this.reserveParallelCommonEvent(commonEventId)
                        this.clearKeyboardInput()
                    }

                }else if(!$gameMap.isEventRunning() && !Eli.ButtonCommonEvents.isPlayingRegularCommonEvent(commonEventId)){
                    this.reserveRegularCommonEvent(commonEventId)
                    this.clearKeyboardInput()
                }
            }
        }

        clearKeyboardInput(){
            Input._currentState[Input._latestButton] = false
            Input._latestButton = null
        }

        updateAllGamepads(gamepads){
            for(const gamepad of gamepads){
                if(gamepad && gamepad.connected){
                    this.updateGamepad(gamepad)
                }
            }
        }

        updateGamepad(gamepad){
            const index = gamepad.index
            const states = Input._gamepadStates[index] || []

            for(let i = 0; i < states.length; i++){
                const key = Input.gamepadMapper[i]

                if(!states[i] || !key) continue

                const data = Eli.ButtonCommonEvents.getGamepadData()[key]

                if(data && Input.isTriggered(key)){
                    const commonEventId = data.id

                    if(data.isParallel && !Eli.ButtonCommonEvents.isPlayingParallelCommonEvent(commonEventId)){
                        this.reserveParallelCommonEvent(commonEventId)
                        this.clearGamepadInput(key, index, i)

                    }else if(!$gameMap.isEventRunning() && !Eli.ButtonCommonEvents.isPlayingRegularCommonEvent(commonEventId)){
                        this.reserveRegularCommonEvent(commonEventId)
                        this.clearGamepadInput(key, index, i)
                    } 
                }
            }
        }

        clearGamepadInput(keyName, gamepadIndex, buttonIndex){
            if(Input._gamepadStates[gamepadIndex]){
                Input._gamepadStates[gamepadIndex][buttonIndex] = false
            }

            if(keyName){
                Input._currentState[keyName] = false
            }

            Input._latestButton = null
        }

        reserveRegularCommonEvent(commonEventId){
            Eli.ButtonCommonEvents.regularCommonEvents[commonEventId] = true
            $gameTemp.reserveCommonEvent(commonEventId)
        }

        reserveParallelCommonEvent(commonEventId){
            Eli.ButtonCommonEvents.parallelCommonEvents[commonEventId] = true
            $gameMap._commonEvents.push(new Game_CommonEvent(commonEventId))
        }


    },

    initialize(){
        Eli.VersionManager.register("EliMZ_ButtonCommonEvents", "1.7.3")
        this.initParameters()
        this.initPluginCommands()
        this.Input = new this.InputManager()
    },

    initParameters(){
        const parameters = PluginManager.parameters("EliMZ_ButtonCommonEvents")
        this.parameters = new this.Parameters(parameters)
    },

    initPluginCommands(){
        const commands = ["assign", "remove", "assignGamePad", "removeGamePad"]
        Eli.PluginManager.registerCommands(this, commands, "EliMZ_ButtonCommonEvents")
    },

    getParam(){
        return this.parameters
    },

    createInitialData(){
        const keyboardData = this.createData("keyboard")
        const gamepadData = this.createData("gamepad")

        return [keyboardData, gamepadData]
    },

    createData(type){
        const initialData = {}

        if(type === "keyboard"){
            var presetKeys = this.getParam().presetKeys
            var codeType = Eli.KeyCodes.keyboard
            var inputObject = Input.keyMapper
        }else{
            var presetKeys = this.getParam().presetKeysGamePad
            var codeType = Eli.KeyCodes.gamepad
            var inputObject = Input.gamepadMapper
        }

        for(const data of presetKeys){
            let oldName = ""
            let keyName = data.key.toLowerCase()
            const keyCode = codeType[keyName]
            
            if(inputObject.hasOwnProperty(keyCode) && !data.overwrite){
                oldName = inputObject[keyCode]
                keyName = inputObject[keyCode]
    
            }else{
                inputObject[keyCode] = keyName
            }

            initialData[keyName] = {id: data.id, isParallel: data.isParallel, oldName: oldName, code: keyCode}
        }

        return initialData
    },

    loadKeyMapperChanges(){
        const keyboardData = this.getKeyboardData()
        const gamepadData = this.getGamepadData()

        for(const keyName in keyboardData){
            const code = keyboardData[keyName]?.code
            if(typeof code === "number"){
                Input.keyMapper[code] = keyName
            }
        }

        for(const keyName in gamepadData){
            const code = gamepadData[keyName]?.code
            if(typeof code === "number"){
                Input.gamepadMapper[code] = keyName
            }
        }
    },

    getKeyboardData(){
        return $eliData.buttonCommonEvents()
    },

    getGamepadData(){
        return $eliData.gamePadCommonEvents()
    },

    setKeyboardData(keyName, commonEventId, isParallel, oldName, keyCode){
        $eliData.buttonCommonEvents()[keyName] = {
            id: commonEventId, 
            isParallel: isParallel, 
            oldName: oldName,
            code: keyCode,
        }
    },

    setGamepadData(keyName, commonEventId, isParallel, oldName, keyCode){
        $eliData.gamePadCommonEvents()[keyName] = {
            id: commonEventId, 
            isParallel: isParallel, 
            oldName: oldName,
            code: keyCode,
        }
    },

    isPlayingParallelCommonEvent(commonEventId){
        return this.parallelCommonEvents[commonEventId]
    },

    isPlayingRegularCommonEvent(commonEventId){
        return this.regularCommonEvents[commonEventId]
    },

/* ----------------------------- PLUGIN COMMANDS ---------------------------- */
    assign(args){
        let oldName = ""
        let keyName = args.key.toLowerCase()
        const commonEventId = Number(Eli.Utils.convertEscapeVariablesOnly(args.commonEvent))
        const isParallel = args.isParallel === "true"
        const overwrite = args.overwrite === "true"
        const keyCode = Eli.KeyCodes.keyboard[keyName]
        
        if(Input.keyMapper.hasOwnProperty(keyCode) && !overwrite){
            oldName = Input.keyMapper[keyCode]
            keyName = Input.keyMapper[keyCode]

        }else{
            oldName = Input.keyMapper[keyCode]
            Input.keyMapper[keyCode] = keyName
        }

        this.setKeyboardData(keyName, commonEventId, isParallel, oldName, keyCode)
    },

    assignGamePad(args){
        let keyName = String(args.key).toLowerCase()
        const commonEventId = Number(Eli.Utils.convertEscapeVariablesOnly(args.commonEvent))
        const isParallel = args.isParallel === "true"
        const overwrite = args.overwrite === "true"
        const keyCode = Eli.KeyCodes.gamepad[keyName]
        let oldName = ""

        if(Input.gamepadMapper.hasOwnProperty(keyCode) && !overwrite){
            oldName = Input.gamepadMapper[keyCode]
            keyName = Input.gamepadMapper[keyCode]

        }else{
            oldName = Input.gamepadMapper[keyCode]
            Input.gamepadMapper[keyCode] = keyName
        }

        this.setGamepadData(keyName, commonEventId, isParallel, oldName, keyCode)
    },

    remove(args){
        const restoreKey = args.restoreKey === "true"
        const keyCode = Eli.KeyCodes.keyboard[args.key.toLowerCase()]
        let keyName = ""
        let oldName = ""

        for(let key in this.getKeyboardData()){
            const obj = this.getKeyboardData()[key]

            if(obj.code === keyCode){
                oldName = obj.oldName
                keyName = key
                break
            }
        }

        if(restoreKey){
            Input.keyMapper[keyCode] = oldName
        }else{
            delete Input.keyMapper[keyCode]
        }
        
        delete this.getKeyboardData()[keyName]
    },

    removeGamePad(args){
        const restoreKey = args.restoreKey === "true"
        const keyCode = Eli.KeyCodes.gamepad[args.key.toLowerCase()]
        let keyName = ""
        let oldName = ""

        for(let key in this.getGamepadData()){
            const obj = this.getGamepadData()[key]

            if(obj.code === keyCode){
                oldName = obj.oldName
                keyName = key
                break
            }
        }

        if(restoreKey && oldName){
            Input.gamepadMapper[keyCode] = oldName
        }else{
            delete Input.gamepadMapper[keyCode]
        }

        delete this.getGamepadData()[keyName]
    },

}

{

const Alias = {}
const Plugin = Eli.ButtonCommonEvents

Plugin.initialize()

/* -------------------------------- SAVE DATA ------------------------------- */
Alias.Eli_SavedContents_initialize = Eli_SavedContents.prototype.initialize
Eli_SavedContents.prototype.initialize = function(){
    Alias.Eli_SavedContents_initialize.call(this)
    this.createButtonCommonEventData()
}

Eli_SavedContents.prototype.createButtonCommonEventData = function(){
    const [keyboardData, gamepadData] = Plugin.createInitialData()
    this.contents.buttonCommonEvents = keyboardData
    this.contents.gamePadCommonEvents = gamepadData
}

Eli_SavedContents.prototype.buttonCommonEvents = function(){
    return this.contents.buttonCommonEvents
}

Eli_SavedContents.prototype.gamePadCommonEvents = function(){
    return this.contents.gamePadCommonEvents
}

/* ------------------------------ DATA MANAGER ------------------------------ */
Alias.DataManager_extractSaveContents = DataManager.extractSaveContents
DataManager.extractSaveContents = function(contents) {
    Alias.DataManager_extractSaveContents.call(this, contents)
    Plugin.loadKeyMapperChanges()
}

/* -------------------------------- SCENE MAP ------------------------------- */
Alias.Scene_Map_update = Scene_Map.prototype.update
Scene_Map.prototype.update = function() {
    Plugin.Input.update()
    Alias.Scene_Map_update.call(this)
}

/* ---------------------------- GAME COMMON EVENT --------------------------- */
Alias.Game_CommonEvent_isActive = Game_CommonEvent.prototype.isActive
Game_CommonEvent.prototype.isActive = function(){
    const alias = Alias.Game_CommonEvent_isActive.call(this)
    return alias || Plugin.isPlayingParallelCommonEvent(this.event().id)
}

/* ----------------------------- PLUGIN COMMANDS ---------------------------- */
Alias.Game_Interpreter_onCommonEventEnd = Game_Interpreter.prototype.onCommonEventEnd
Game_Interpreter.prototype.onCommonEventEnd = function(){
    Alias.Game_Interpreter_onCommonEventEnd.call(this)

    if(Plugin.isPlayingParallelCommonEvent(this._commonEventId)){
        this.endParallelButtonCommonEvent()

    }else if(Plugin.isPlayingRegularCommonEvent(this._commonEventId)){
        this.endRegularButtonCommonEvent()
    }
}

Game_Interpreter.prototype.endParallelButtonCommonEvent = function(){
    const id = this._commonEventId
    const index = $gameMap._commonEvents.findIndex(item => item._commonEventId === id)

    if(index > -1){
        $gameMap._commonEvents.splice(index, 1)
        Plugin.parallelCommonEvents[id] = false
    }

}

Game_Interpreter.prototype.endRegularButtonCommonEvent = function(){
    const id = this._commonEventId
    Plugin.regularCommonEvents[id] = false
}

}