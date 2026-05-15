/*:
 * @plugindesc v.2.1.0 [MV|MZ] Adds a land vehicles.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Land_Vehicles
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Contacts: https://dk-plugins.ru/contacts
 Version: 2.1.0
 Release: 29.12.2024
 First release: 23.08.2016

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.8+

 ###===========================================================================
 ## Plugin commands (RPG Maker MV)
 ###===========================================================================
 1. Change vehicle BGM: ChangeVehicleBGM [TYPE] [NAME] [VOLUME] [PITCH] [PAN]
 TYPE - Type of vehicle
 NAME - BGM name
 VOLUME - Volume
 PITCH - Pitch
 PAN - Panorama
 Example: ChangeVehicleBGM bike Ship1 90 100 0

 2. Set vehicle location: SetVehicleLocation [TYPE] [MAP ID] [X] [Y]
 TYPE - Type of vehicle
 MAP ID - Map id
 X - The X coordinate
 Y - The Y coordinate
 Example: SetVehicleLocation bike 2 1 1

 3. Change vehicle image: ChangeVehicleImage [TYPE] [NAME] [INDEX]
 TYPE - Type of vehicle
 NAME - Image name
 INDEX - Image index
 Example: ChangeVehicleImage car Vehicle 0

 4. Set vehicle speed: SetVehicleMoveSpeed [TYPE] [SPEED]
 TYPE - Type of vehicle
 SPEED - Speed
 Example: SetVehicleMoveSpeed car 4

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Game Time (https://dk-plugins.ru/game-time/)
 Time system.

 2. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 3. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 4. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###=========================================================================
 ## License and terms of use
 ###=========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Support
 ###=========================================================================
 Become a subscriber on boosty: https://boosty.to/dkplugins
 Become a subscriber on patreon: https://patreon.com/dkplugins
 Donate: https://dk-plugins.ru/donate



 * @command ChangeVehicleBGM
 * @desc Change vehicle BGM
 *
 * @arg type
 * @text Type
 * @desc Vehicle type
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg bgm
 * @text BGM
 * @desc BGM
 * @type struct<VehicleBGM>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @command SetVehicleLocation
 * @desc Set vehicle location
 *
 * @arg type
 * @text Type
 * @desc Vehicle type
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg mapId
 * @text Map Id
 * @desc Map id
 * @type number
 * @min 1
 * @default 1

 * @arg x
 * @text X
 * @desc The X coordinate
 * @type number
 * @min 0
 * @default 0

 * @arg y
 * @text Y
 * @desc The Y coordinate
 * @type number
 * @min 0
 * @default 0

 * @command ChangeVehicleImage
 * @desc Change vehicle image
 *
 * @arg type
 * @text Type
 * @desc Vehicle type
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg characterName
 * @text Graphic file
 * @desc Graphic file
 * @type file
 * @dir img/characters
 * @require 1
 * @default Vehicle

 * @arg characterIndex
 * @text Graphic index
 * @desc Graphic index. Numbering starts from 0.
 * @type number
 * @min 0
 * @default 0

 * @command SetVehicleMoveSpeed
 * @desc Set vehicle speed
 *
 * @arg type
 * @text Type
 * @desc Vehicle type
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg speed
 * @text Speed
 * @desc Vehicle speed
 * @type number
 * @min 1
 * @default 5



 * @param vehicles
 * @text Vehicles
 * @desc List of vehicles
 * @type struct<Vehicle>[]
 * @default []

 * @param saveVehicleDirection
 * @text Save vehicle direction
 * @desc Save vehicle direction when exiting it
 * @type boolean
 * @default false

*/

/*:ru
 * @plugindesc v.2.1.0 Добавляет наземный транспорт.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Land_Vehicles
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Контакты: https://dk-plugins.ru/contacts
 Версия: 2.1.0
 Релиз: 29.12.2024
 Первый релиз: 23.08.2016

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.6+
 RPG Maker MZ: 1.8+

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Изменить BGM транспорта: ChangeVehicleBGM [TYPE] [NAME] [VOLUME] [PITCH] [PAN]
 TYPE - Тип транспорта
 NAME - Название BGM
 VOLUME - Громкость
 PITCH - Тон
 PAN - Панорама
 Пример: ChangeVehicleBGM bike Ship1 100 100 0

 2. Переместить транспорт: SetVehicleLocation [TYPE] [MAP ID] [X] [Y]
 TYPE - Тип транспорта
 MAP ID - Номер карты
 X - Координата X
 Y - Координата Y
 Пример: SetVehicleLocation bike 2 1 1

 3. Изменить изображение транспорта: ChangeVehicleImage [TYPE] [NAME] [INDEX]
 TYPE - Тип транспорта
 NAME - Название изображения
 INDEX - Индекс изображения
 Пример: ChangeVehicleImage car Vehicle 0

 4. Изменить скорость транспорта: SetVehicleMoveSpeed [TYPE] [SPEED]
 TYPE - Тип транспорта
 SPEED - Скорость
 Пример: SetVehicleMoveSpeed car 4

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Время (https://dk-plugins.ru/game-time/)
 Система времени.

 2. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 3. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 4. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###=========================================================================
 ## Лицензия и правила использования плагина
 ###=========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Стать подписчиком на boosty: https://boosty.to/dkplugins
 Стать подписчиком на patreon: https://patreon.com/dkplugins
 Поддержать: https://dk-plugins.ru/donate



 * @command ChangeVehicleBGM
 * @desc Изменить BGM транспорта
 *
 * @arg type
 * @text Тип
 * @desc Тип транспорта
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg bgm
 * @text BGM
 * @desc BGM
 * @type struct<VehicleBGM>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @command SetVehicleLocation
 * @desc Установить позицию транспорта
 *
 * @arg type
 * @text Тип
 * @desc Тип транспорта
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg mapId
 * @text Номер карты
 * @desc Номер карты
 * @type number
 * @min 1
 * @default 1

 * @arg x
 * @text X
 * @desc Координата X
 * @type number
 * @min 0
 * @default 0

 * @arg y
 * @text Y
 * @desc Координата Y
 * @type number
 * @min 0
 * @default 0

 * @command ChangeVehicleImage
 * @desc Change vehicle image
 *
 * @arg type
 * @text Тип
 * @desc Тип транспорта
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg characterName
 * @text Графика
 * @desc Графика
 * @type file
 * @dir img/characters
 * @require 1
 * @default Vehicle

 * @arg characterIndex
 * @text Индекс графики
 * @desc Индекс графики. Нумерация начинается с 0.
 * @type number
 * @min 0
 * @default 0

 * @command SetVehicleMoveSpeed
 * @desc Установить скорость транспорта
 *
 * @arg type
 * @text Тип
 * @desc Тип транспорта
 * @type combo
 * @option bike
 * @option car
 * @default bike
 *
 * @arg speed
 * @text Скорость
 * @desc Скорость транспорта
 * @type number
 * @min 1
 * @default 5



 * @param vehicles
 * @text Транспортные средства
 * @desc Список транспортных средств
 * @type struct<Vehicle>[]
 * @default []

 * @param saveVehicleDirection
 * @text Сохранять направление транспорта
 * @desc Сохранять направление транспорта при выходе из него
 * @type boolean
 * @default false

*/

/*~struct~Vehicle:

 * @param type
 * @text Type
 * @desc Vehicle type. Unique for each vehicle!
 * @type combo
 * @option bike
 * @option car
 * @default bike

 * @param mapId
 * @text Map Id
 * @desc Start map id
 * @type number
 * @min 1
 * @default 1

 * @param x
 * @text X
 * @desc Start X coordinate
 * @type number
 * @min 0
 * @default 0

 * @param y
 * @text Y
 * @desc Start Y coordinate
 * @type number
 * @min 0
 * @default 0

 * @param initialDirection
 * @text Initial Direction
 * @desc Initial direction
 * @type select
 * @option Down
 * @value 2
 * @option Left
 * @value 4
 * @option Right
 * @value 6
 * @option Up
 * @value 8
 * @default 4

 * @param switch
 * @text Switch
 * @desc A switch that turns on when the player is using a vehicle
 * @type switch
 * @default 0

 * @param bgm
 * @text BGM
 * @desc Background music
 * @type struct<VehicleBGM>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @param speed
 * @text Speed
 * @desc Speed of vehicle
 * @type number
 * @min 1
 * @default 5

 * @param characterName
 * @text Graphic file
 * @desc Graphic file
 * @type file
 * @dir img/characters
 * @require 1
 * @default Vehicle

 * @param characterIndex
 * @text Graphic index
 * @desc Graphic index. Numbering starts from 0.
 * @type number
 * @min 0
 * @default 0

 * @param includedRegions
 * @text Included Regions
 * @desc Regions where vehicle can move. 0 - All Regions permitted.
 * @type number[]
 * @default ["0"]

 * @param excludedRegions
 * @text Excluded Regions
 * @desc Regions where vehicle can not move. Has priority over included regions.
 * @type number[]
 * @min 1
 * @default []

 * @param visibilitySwitch
 * @text Visibility Switch
 * @desc Vehicle visibility switch
 * @type switch
 * @default 0

 */

/*~struct~Vehicle:ru

 * @param type
 * @text Тип транспорта
 * @desc Тип транспорта. Уникальное значение для каждого транспорта!
 * @type combo
 * @option bike
 * @option car
 * @default bike

 * @param mapId
 * @text Номер карты
 * @desc Стартовый номер карты
 * @type number
 * @min 1
 * @default 1

 * @param x
 * @text Координата X
 * @desc Стартовая координата X
 * @type number
 * @min 0
 * @default 0

 * @param y
 * @text Координата Y
 * @desc Стартовая координата Y
 * @type number
 * @min 0
 * @default 0

 * @param initialDirection
 * @text Начальное направление
 * @desc Начальное направление
 * @type select
 * @option Down
 * @value 2
 * @option Left
 * @value 4
 * @option Right
 * @value 6
 * @option Up
 * @value 8
 * @default 4

 * @param switch
 * @text Переключатель
 * @desc Переключатель, который включается, когда персонаж использует транспорт
 * @type switch
 * @default 0

 * @param bgm
 * @text Фоновая музыка
 * @desc Фоновая музыка
 * @type struct<VehicleBGM>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @param speed
 * @text Скорость
 * @desc Скорость транспорта
 * @type number
 * @min 1
 * @default 5
 *
 * @param characterName
 * @text Графика
 * @desc Графика
 * @type file
 * @dir img/characters
 * @require 1

 * @param characterIndex
 * @text Индекс графики
 * @desc Индекс графики. Нумерация начинается с 0.
 * @type number
 * @min 0
 * @default 0

 * @param includedRegions
 * @text Доступные регионы
 * @desc Регионы, где транспорт может двигаться. 0 - Все регионы разрешены
 * @type number[]
 * @default ["0"]

 * @param excludedRegions
 * @text Недоступные регионы
 * @desc Регионы, где транспорт не может двигаться. Имеет приоритет над доступными регионами.
 * @type number[]
 * @min 1
 * @default []

 * @param Visibility Switch
 * @text Переключатель видимости
 * @desc Переключатель видимости транспорта
 * @type switch
 * @default 0

 */

/*~struct~VehicleBGM:

 * @param name
 * @text File
 * @desc File
 * @type file
 * @dir audio/bgm/

 * @param volume
 * @text Volume
 * @desc Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90

 * @param pitch
 * @text Pitch
 * @desc Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param pan
 * @text Pan
 * @text Panorama
 * @desc Panorama
 * @type number
 * @min -100
 * @max 100
 * @default 0

 */

/*~struct~VehicleBGM:ru

 * @param name
 * @text Файл
 * @desc Файл
 * @type file
 * @dir audio/bgm/

 * @param volume
 * @text Громкость
 * @desc Громкость
 * @type number
 * @min 0
 * @max 100
 * @default 90

 * @param pitch
 * @text Темп
 * @desc Темп
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param pan
 * @text Панорама
 * @desc Панорама
 * @type number
 * @min -100
 * @max 100
 * @default 0

 */

'use strict';

var Imported = Imported || {};
Imported['DK_Land_Vehicles'] = '2.1.0';

(function() {

    //===========================================================================
    // initialize parameters
    //===========================================================================

    const parameters = PluginManager.parameters('DK_Land_Vehicles');
    const params = {
        saveVehicleDirection: JSON.parse(parameters.saveVehicleDirection),
        vehicles: JSON.parse(parameters.vehicles).map((json) => {
            const data = JSON.parse(json);

            data.mapId = parseInt(data.mapId);
            data.x = parseInt(data.x);
            data.y = parseInt(data.y);
            data.speed = parseInt(data.speed);
            data.switch = parseInt(data.switch);
            data.initialDirection = parseInt(data.initialDirection);
            data.includedRegions = JSON.parse(data.includedRegions).map(id => parseInt(id));
            data.excludedRegions = JSON.parse(data.excludedRegions).map(id => parseInt(id));
            data.characterIndex = parseInt(data.characterIndex);
            data.visibilitySwitch = parseInt(data.visibilitySwitch);

            if (data.bgm) {
                data.bgm = JSON.parse(data.bgm);
            }

            return data;
        })
    };

    //===========================================================================
    // Game_Interpreter
    //===========================================================================

    const LandVehicles_Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        LandVehicles_Game_Interpreter_pluginCommand.apply(this, arguments);

        switch (command) {
            case 'ChangeVehicleBGM': {
                const type = args[0];
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    vehicle.setBgm({
                        name: args[1],
                        volume: Number(args[2]),
                        pitch: Number(args[3]),
                        pan: Number(args[4]),
                    });
                } else {
                    throw new Error(`ChangeVehicleBGM: Vehicle with type = ${type} not found!`);
                }

                break;
            }
            case 'SetVehicleLocation': {
                const type = args[0];
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    const mapId = Number(args[1]);
                    const x = Number(args[2]);
                    const y = Number(args[3]);

                    vehicle.setLocation(mapId, x, y);
                } else {
                    throw new Error(`SetVehicleLocation: Vehicle with type = ${type} not found!`);
                }

                break;
            }
            case 'ChangeVehicleImage': {
                const type = args[0];
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    const name = args[1];
                    const index = Number(args[2]);

                    vehicle.setImage(name, index);
                } else {
                    throw new Error(`ChangeVehicleImage: Vehicle with type = ${type} not found!`);
                }

                break;
            }
            case 'SetVehicleMoveSpeed': {
                const type = args[0];
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    vehicle.setMoveSpeed(Number(args[1]));
                } else {
                    throw new Error(`SetVehicleMoveSpeed: Vehicle with type = ${type} not found!`);
                }

                break;
            }
        }
    };

    if (Utils.RPGMAKER_NAME === 'MZ') {

        PluginManager.registerCommand('DK_Land_Vehicles',
            'ChangeVehicleBGM', (args) => {
                const type = args.type;
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    const bgm = JSON.parse(args.bgm);

                    bgm.volume = Number(bgm.volume);
                    bgm.pitch = Number(bgm.pitch);
                    bgm.pan = Number(bgm.pan);

                    vehicle.setBgm(bgm);
                } else {
                    throw new Error(`ChangeVehicleBGM: Vehicle with type = ${type} not found!`);
                }
            });

        PluginManager.registerCommand('DK_Land_Vehicles',
            'SetVehicleLocation', (args) => {
                const type = args.type;
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    const mapId = Number(args.mapId);
                    const x = Number(args.x);
                    const y = Number(args.y);

                    vehicle.setLocation(mapId, x, y);
                } else {
                    throw new Error(`SetVehicleLocation: Vehicle with type = ${type} not found!`);
                }
            });

        PluginManager.registerCommand('DK_Land_Vehicles',
            'ChangeVehicleImage', (args) => {
                const type = args.type;
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    const name = args.characterName;
                    const index = Number(args.characterIndex);

                    vehicle.setImage(name, index);
                } else {
                    throw new Error(`ChangeVehicleImage: Vehicle with type = ${type} not found!`);
                }
            });

        PluginManager.registerCommand('DK_Land_Vehicles',
            'SetVehicleMoveSpeed', (args) => {
                const type = args.type;
                const vehicle = $gameMap.vehicle(type);

                if (vehicle) {
                    vehicle.setMoveSpeed(Number(args.speed));
                } else {
                    throw new Error(`SetVehicleMoveSpeed: Vehicle with type = ${type} not found!`);
                }
            });

    }

    //===========================================================================
    // Game_CharacterBase
    //===========================================================================

    const LandVehicles_Game_CharacterBase_isCollidedWithVehicles =
        Game_CharacterBase.prototype.isCollidedWithVehicles;
    Game_CharacterBase.prototype.isCollidedWithVehicles = function(x, y) {
        return LandVehicles_Game_CharacterBase_isCollidedWithVehicles.apply(this, arguments)
            || this.isCollidedWithLandVehicles(x, y);
    };

    Game_CharacterBase.prototype.isCollidedWithLandVehicles = function(x, y) {
        const vehicles = $gameMap.vehicles();

        for (let i = 0; i < vehicles.length; i++) {
            const vehicle = vehicles[i];

            if (vehicle.isLandVehicle() && vehicle.opacity() > 0 && vehicle.posNt(x, y)) {
                return true;
            }
        }

        return false;
    };

    //===========================================================================
    // Game Player
    //===========================================================================

    const LandVehicles_Game_Player_triggerTouchActionD1 =
        Game_Player.prototype.triggerTouchActionD1;
    Game_Player.prototype.triggerTouchActionD1 = function(x1, y1) {
        if (this.isCollidedWithLandVehicles(x1, y1)) {
            if (TouchInput.isTriggered() && this.getOnOffVehicle()) {
                return true;
            }
        }

        return LandVehicles_Game_Player_triggerTouchActionD1.apply(this, arguments);
    };

    const LandVehicles_Game_Player_triggerTouchActionD2 =
        Game_Player.prototype.triggerTouchActionD2;
    Game_Player.prototype.triggerTouchActionD2 = function(x2, y2) {
        if (this.isCollidedWithLandVehicles(x2, y2)) {
            if (TouchInput.isTriggered() && this.getOnVehicle()) {
                return true;
            }
        }

        return LandVehicles_Game_Player_triggerTouchActionD2.apply(this, arguments);
    };

    Game_Player.prototype.isInLandVehicle = function() {
        return !this.isInBoat() && !this.isInShip() && !this.isInAirship() &&
            this._vehicleType !== 'walk' && !this.isMoveRouteForcing();
    };

    const LandVehicles_Game_Player_isInVehicle = Game_Player.prototype.isInVehicle;
    Game_Player.prototype.isInVehicle = function() {
        return LandVehicles_Game_Player_isInVehicle.apply(this, arguments)
            || this.isInLandVehicle();
    };

    const LandVehicles_Game_Player_getOnVehicle = Game_Player.prototype.getOnVehicle;
    Game_Player.prototype.getOnVehicle = function() {
        const direction = this.direction();
        const x2 = $gameMap.roundXWithDirection(this.x, direction);
        const y2 = $gameMap.roundYWithDirection(this.y, direction);
        const type = $gameMap.landVehicleType(x2, y2);

        if (type) {
            this._vehicleType = type;
        }

        return LandVehicles_Game_Player_getOnVehicle.apply(this, arguments);
    };

    //===========================================================================
    // Game Vehicle
    //===========================================================================

    const LandVehicles_Game_Vehicle_initialize =
        Game_Vehicle.prototype.initialize;
    Game_Vehicle.prototype.initialize = function() {
        LandVehicles_Game_Vehicle_initialize.apply(this, arguments);

        if (this.isLandVehicle()) {
            const vehicle = this.vehicle();

            if (vehicle) {
                this.setDirection(vehicle.initialDirection || 4);
            }
        }
    };

    const LandVehicles_Game_Vehicle_initMoveSpeed =
        Game_Vehicle.prototype.initMoveSpeed;
    Game_Vehicle.prototype.initMoveSpeed = function() {
        if (this.isLandVehicle()) {
            const vehicle = this.vehicle();

            if (vehicle) {
                this.setMoveSpeed(vehicle.speed);
            }
        } else {
            LandVehicles_Game_Vehicle_initMoveSpeed.apply(this, arguments);
        }
    };

    const LandVehicles_Game_Vehicle_vehicle =
        Game_Vehicle.prototype.vehicle;
    Game_Vehicle.prototype.vehicle = function() {
        return LandVehicles_Game_Vehicle_vehicle.apply(this, arguments)
            || params.vehicles.find(v => v.type === this._type) || null;
    };

    const LandVehicles_Game_Vehicle_loadSystemSettings =
        Game_Vehicle.prototype.loadSystemSettings;
    Game_Vehicle.prototype.loadSystemSettings = function() {
        if (!this.isLandVehicle()) {
            return LandVehicles_Game_Vehicle_loadSystemSettings.apply(this, arguments);
        }

        const vehicle = this.vehicle();

        if (!vehicle) {
            throw new Error(`Land vehicle with type = ${this._type} not found!`);
        }

        this._mapId = vehicle.mapId;

        this.setPosition(vehicle.x, vehicle.y);
        this.setImage(vehicle.characterName, vehicle.characterIndex);
    };

    const LandVehicles_Game_Vehicle_playBgm =
        Game_Vehicle.prototype.playBgm;
    Game_Vehicle.prototype.playBgm = function() {
        if (this.isLandVehicle()) {
            const vehicle = this.vehicle();
            const bgm = this._bgm || (vehicle ? vehicle.bgm : null);

            if (bgm && bgm.name) {
                AudioManager.playBgm(bgm);
            }
        } else {
            LandVehicles_Game_Vehicle_playBgm.apply(this, arguments);
        }
    };

    const LandVehicles_Game_Vehicle_update =
        Game_Vehicle.prototype.update;
    Game_Vehicle.prototype.update = function() {
        LandVehicles_Game_Vehicle_update.apply(this, arguments);

        const vehicle = this.vehicle();

        if (vehicle && vehicle.visibilitySwitch > 0) {
            if ($gameSwitches.value(vehicle.visibilitySwitch)) {
                this.setOpacity(255);
            } else {
                this.setOpacity(0);
            }
        }
    };

    const LandVehicles_Game_Vehicle_isMapPassable =
        Game_Vehicle.prototype.isMapPassable;
    Game_Vehicle.prototype.isMapPassable = function(x, y, d) {
        if (this.isLandVehicle()) {
            const vehicle = this.vehicle();

            if (!vehicle) {
                return false;
            }

            const x2 = $gameMap.roundXWithDirection(x, d);
            const y2 = $gameMap.roundYWithDirection(y, d);
            const includedRegions = vehicle.includedRegions || [0];
            const excludedRegions = vehicle.excludedRegions || [];
            const regionId = $gameMap.regionId(x2, y2);

            return $gameMap.isPassable(x2, y2)
                && (includedRegions.includes(regionId) || includedRegions.includes(0))
                && !excludedRegions.includes(regionId);
        } else {
            return LandVehicles_Game_Vehicle_isMapPassable.apply(this, arguments);
        }
    };

    Game_Vehicle.prototype.isLandVehicle = function() {
        return !this.isBoat() && !this.isShip() && !this.isAirship();
    };

    const LandVehicles_Game_Vehicle_resetDirection =
        Game_Vehicle.prototype.resetDirection;
    Game_Vehicle.prototype.resetDirection = function() {
        if (this.isLandVehicle() && params.saveVehicleDirection) {
            return;
        }

        LandVehicles_Game_Vehicle_resetDirection.apply(this, arguments);
    };

    const LandVehicles_Game_Vehicle_getOn = Game_Vehicle.prototype.getOn;
    Game_Vehicle.prototype.getOn = function() {
        LandVehicles_Game_Vehicle_getOn.apply(this, arguments);

        const vehicle = this.vehicle();

        if (vehicle && vehicle.switch > 0) {
            $gameSwitches.setValue(vehicle.switch, true);
        }
    };

    const LandVehicles_Game_Vehicle_getOff = Game_Vehicle.prototype.getOff;
    Game_Vehicle.prototype.getOff = function() {
        LandVehicles_Game_Vehicle_getOff.apply(this, arguments);

        const vehicle = this.vehicle();

        if (vehicle && vehicle.switch > 0) {
            $gameSwitches.setValue(vehicle.switch, false);
        }
    };

    //===========================================================================
    // Game_Map
    //===========================================================================

    const LandVehicles_Game_Map_createVehicles =
        Game_Map.prototype.createVehicles;
    Game_Map.prototype.createVehicles = function() {
        LandVehicles_Game_Map_createVehicles.apply(this, arguments);

        params.vehicles.forEach((vehicle) => {
            this._vehicles.push(new Game_Vehicle(vehicle.type));
        });
    };

    Game_Map.prototype.landVehicleType = function(x, y) {
        const vehicle = this.vehicles().find(v => v.opacity() > 0 && v.pos(x, y));
        return (vehicle ? vehicle._type : null);
    };

    const LandVehicles_Game_Map_vehicle =
        Game_Map.prototype.vehicle;
    Game_Map.prototype.vehicle = function(type) {
        const vehicle = LandVehicles_Game_Map_vehicle.apply(this, arguments);

        if (vehicle) {
            return vehicle;
        }

        const vehicles = this.vehicles();

        if (Number.isFinite(type)) {
            return vehicles[type];
        }

        return vehicles.find(v => v._type === type) || null;
    };

})();
