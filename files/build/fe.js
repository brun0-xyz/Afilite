window.onload = function() {

    const settingsApp = {
        "id": "settings",
        "name": "Settings",
        "icon": "/files/images/logo.png",
        "type": "app",
        "src": ""
    };

    const allApps = {
        "apps": [{
                "id": "Partners",
                "name": "Partners",
                "icon": "/files/images/apps/partners.jpg",
                "type": "app",
                "src": "/files/pages/partners.html"
            }

        ],
        "games": [{
                "id": "hollowknight",
                "name": "Hollow Knight",
                "icon": "/files/gms/hollowknight/new.png",
                "type": "game",
                "src": "/files/gms/hollowknight/"
            },
            {
                "id": "1",
                "name": "1",
                "icon": "/files/gms/1/meta/apple-touch-icon.png",
                "type": "game",
                "src": "/files/gms/1/"
            },
            {
                "id": "1v1space",
                "name": "1v1.space",
                "icon": "/files/gms/1v1space/splash.png",
                "type": "game",
                "src": "/files/gms/1v1space/"
            },
            {
                "id": "2048",
                "name": "2048",
                "icon": "/files/gms/2048/thumb.png",
                "type": "game",
                "src": "/files/gms/2048/"
            },
            {
                "id": "9007199254740992",
                "name": "9007199254740992",
                "icon": "/files/gms/9007199254740992/logo-4.png",
                "type": "game",
                "src": "/files/gms/9007199254740992/"
            },
            {
                "id": "achievementunlocked",
                "name": "Achievement Unlocked",
                "icon": "/files/gms/achievementunlocked/achievementunlocked.png",
                "type": "game",
                "src": "/files/gms/achievementunlocked/"
            },
            {
                "id": "adrenalinechallenge",
                "name": "Adrenaline Challenge",
                "icon": "/files/gms/adrenalinechallenge/adrenalinechallenge.jpg",
                "type": "game",
                "src": "/files/gms/adrenalinechallenge/"
            },
            {
                "id": "among-us",
                "name": "Among Us",
                "icon": "/files/gms/among-us/red.png",
                "type": "game",
                "src": "/files/gms/among-us/"
            },
            {
                "id": "avalanche",
                "name": "Avalanche",
                "icon": "/files/gms/avalanche/avalanche.png",
                "type": "game",
                "src": "/files/gms/avalanche/"
            },
            {
                "id": "backrooms",
                "name": "Backrooms",
                "icon": "/files/gms/backrooms/img/splash.jpg",
                "type": "game",
                "src": "/files/gms/backrooms/"
            },
            {
                "id": "basketball-stars",
                "name": "Basketball Stars",
                "icon": "/files/gms/basketball-stars/assets/images/basketball-stars.png",
                "type": "game",
                "src": "/files/gms/basketball-stars/"
            },
            {
                "id": "battleforgondor",
                "name": "Battle for Gondor",
                "icon": "/files/gms/battleforgondor/3557.jpg",
                "type": "game",
                "src": "/files/gms/battleforgondor/"
            },
            {
                "id": "bigredbutton",
                "name": "Big Red Button",
                "icon": "/files/gms/bigredbutton/bigredbutton.png",
                "type": "game",
                "src": "/files/gms/bigredbutton/"
            },
            {
                "id": "blackknight",
                "name": "Black Knight",
                "icon": "/files/gms/blackknight/blackknight.png",
                "type": "game",
                "src": "/files/gms/blackknight/"
            },
            {
                "id": "bloonstd",
                "name": "Bloons TD",
                "icon": "/files/gms/bloonstd/bloonstd.jpg",
                "type": "game",
                "src": "/files/gms/bloonstd/"
            },
            {
                "id": "bloonstd2",
                "name": "Bloons TD 2",
                "icon": "/files/gms/bloonstd2/bloonstd2.png",
                "type": "game",
                "src": "/files/gms/bloonstd2/"
            },
            {
                "id": "bloonsplayerpack2",
                "name": "Bloons Player Pack 2",
                "icon": "/files/gms/bpp2/bpp2.jpeg",
                "type": "game",
                "src": "/files/gms/bpp2/"
            },
            {
                "id": "bloonsplayerpack3",
                "name": "Bloons Player Pack 3",
                "icon": "/files/gms/bpp3/bpp3.jpeg",
                "type": "game",
                "src": "/files/gms/bpp3/"
            },
            {
                "id": "bloonsplayerpack4",
                "name": "Bloons Player Pack 4",
                "icon": "/files/gms/bpp4/bpp45.jpeg",
                "type": "game",
                "src": "/files/gms/bpp4/"
            },
            {
                "id": "bloonsplayerpack5",
                "name": "Bloons Player Pack 5",
                "icon": "/files/gms/bpp5/bpp5.jpeg",
                "type": "game",
                "src": "/files/gms/bpp5/"
            },
            {
                "id": "bloxors",
                "name": "Bloxors",
                "icon": "/files/gms/bloxors/block.png",
                "type": "game",
                "src": "/files/gms/bloxors/"
            },
            {
                "id": "boxhead2play",
                "name": "Box Head",
                "icon": "/files/gms/boxhead2play/boxhead2play.jpg",
                "type": "game",
                "src": "/files/gms/boxhead2play/"
            },
            {
                "id": "breakingthebank",
                "name": "Breaking the Bank",
                "icon": "/files/gms/breakingthebank/breakingthebank.png",
                "type": "game",
                "src": "/files/gms/breakingthebank/"
            },
            {
                "id": "btts",
                "name": "Big Tower Tiny Square",
                "icon": "/files/gms/btts/images.png",
                "type": "game",
                "src": "/files/gms/btts/"
            },
            {
                "id": "cannon-basketball-4",
                "name": "Cannon Basketball 4",
                "icon": "/files/gms/cannon-basketball-4/img/splash.png",
                "type": "game",
                "src": "/files/gms/cannon-basketball-4/"
            },
            {
                "id": "canyondefense",
                "name": "Canyon Defense",
                "icon": "/files/gms/canyondefense/canyondefense.png",
                "type": "game",
                "src": "/files/gms/canyondefense/"
            },
            {
                "id": "cell-machine",
                "name": "Cell Machine",
                "icon": "/files/gms/cell-machine/img/te9nDu.png",
                "type": "game",
                "src": "/files/gms/cell-machine/"
            },
            {
                "id": "championarcher",
                "name": "Champion Archer",
                "icon": "/files/gms/championarcher/championarcher.png",
                "type": "game",
                "src": "/files/gms/championarcher/"
            },
            {
                "id": "chrome-dino",
                "name": "Chrome Dino",
                "icon": "/files/gms/chrome-dino/icons/icon-256.png",
                "type": "game",
                "src": "/files/gms/chrome-dino/"
            },
            {
                "id": "circlo",
                "name": "circlO",
                "icon": "/files/gms/circlo/img/download.png",
                "type": "game",
                "src": "/files/gms/circlo/"
            },
            {
                "id": "connect3",
                "name": "Connect 3",
                "icon": "/files/gms/connect3/connect3.png",
                "type": "game",
                "src": "/files/gms/connect3/"
            },
            {
                "id": "cookie-clicker",
                "name": "Cookie Clicker",
                "icon": "/files/gms/cookie-clicker/cookie1.jpeg",
                "type": "game",
                "src": "/files/gms/cookie-clicker/"
            },
            {
                "id": "craftmine",
                "name": "CraftMine",
                "icon": "/files/gms/craftmine/images/craftmine.png",
                "type": "game",
                "src": "/files/gms/craftmine/"
            },
            {
                "id": "creativekillchamber",
                "name": "Creative Kill Chamber",
                "icon": "/files/gms/creativekillchamber/creativekillchamber.jpg",
                "type": "game",
                "src": "/files/gms/creativekillchamber/"
            },
            {
                "id": "csgo-clicker",
                "name": "CS:GO Clicker",
                "icon": "/files/gms/csgo-clicker/images/vanguard.png",
                "type": "game",
                "src": "/files/gms/csgo-clicker/"
            },
            {
                "id": "ctr",
                "name": "Cut the Rope",
                "icon": "/files/gms/ctr/logo.png",
                "type": "game",
                "src": "/files/gms/ctr/"
            },
            {
                "id": "ctr-holiday",
                "name": "Cut the Rope Holiday",
                "icon": "/files/gms/ctr-holiday/Holiday_Gift.webp",
                "type": "game",
                "src": "/files/gms/ctr-holiday/"
            },
            {
                "id": "ctr-tr",
                "name": "Cut the Rope Time Travel",
                "icon": "/files/gms/ctr-tr/logo.png",
                "type": "game",
                "src": "/files/gms/ctr-tr/"
            },
            {
                "id": "cubefield",
                "name": "Cubefield",
                "icon": "/files/gms/cubefield/cubefield.jpg",
                "type": "game",
                "src": "/files/gms/cubefield/"
            },
            {
                "id": "cupcake2048",
                "name": "Cupcake 2048",
                "icon": "/files/gms/cupcake2048/favicon.png",
                "type": "game",
                "src": "/files/gms/cupcake2048/"
            },
            {
                "id": "deal-or-no-deal",
                "name": "Deal or No Deal",
                "icon": "/files/gms/deal-or-no-deal/index.jpg",
                "type": "game",
                "src": "/files/gms/deal-or-no-deal/"
            },
            {
                "id": "death-run-3d",
                "name": "Death Run 3D",
                "icon": "/files/gms/death-run-3d/img/death.png",
                "type": "game",
                "src": "/files/gms/death-run-3d/"
            },
            {
                "id": "defend-the-tank",
                "name": "Defend the Tank",
                "icon": "/files/gms/defend-the-tank/images/splash.jpg",
                "type": "game",
                "src": "/files/gms/defend-the-tank/"
            },
            {
                "id": "doge2048",
                "name": "Doge 2048",
                "icon": "/files/gms/doge2048/meta/apple-touch-icon.png",
                "type": "game",
                "src": "/files/gms/doge2048/"
            },
            {
                "id": "DogeMiner",
                "name": "Doge Miner",
                "icon": "/files/gms/DogeMiner/img/dogeminer_300x300.png",
                "type": "game",
                "src": "/files/gms/DogeMiner/"
            },
            {
                "id": "doodle-jump",
                "name": "Doodle Jump",
                "icon": "/files/gms/doodle-jump/doodle.png",
                "type": "game",
                "src": "/files/gms/doodle-jump/"
            },
            {
                "id": "doublewires",
                "name": "Double Wires",
                "icon": "/files/gms/doublewires/doublewires.png",
                "type": "game",
                "src": "/files/gms/doublewires/"
            },
            {
                "id": "draw-the-hill",
                "name": "Draw the Hill",
                "icon": "/files/gms/draw-the-hill/icons/icon-512.png",
                "type": "game",
                "src": "/files/gms/draw-the-hill/"
            },
            {
                "id": "ducklife1",
                "name": "Duck Life",
                "icon": "/files/gms/ducklife1/ducklife.png",
                "type": "game",
                "src": "/files/gms/ducklife1/"
            },
            {
                "id": "ducklife2",
                "name": "Duck Life 2",
                "icon": "/files/gms/ducklife2/ducklife2.png",
                "type": "game",
                "src": "/files/gms/ducklife2/"
            },
            {
                "id": "ducklife3",
                "name": "Duck Life 3",
                "icon": "/files/gms/ducklife3/duck.png",
                "type": "game",
                "src": "/files/gms/ducklife3/"
            },
            {
                "id": "edgenotfound",
                "name": "Edge Not Found",
                "icon": "/files/gms/edgenotfound/edge.png",
                "type": "game",
                "src": "/files/gms/edgenotfound/"
            },
            {
                "id": "elasticman",
                "name": "Elastic Man",
                "icon": "/files/gms/elasticman/elasticman.jpg",
                "type": "game",
                "src": "/files/gms/elasticman/"
            },
            {
                "id": "endlesswar3",
                "name": "Endless War 3",
                "icon": "/files/gms/endlesswar3/endlesswar3.png",
                "type": "game",
                "src": "/files/gms/endlesswar3/"
            },
            {
                "id": "evil-glitch",
                "name": "Evil Glitch",
                "icon": "/files/gms/evil-glitch/evil.png",
                "type": "game",
                "src": "/files/gms/evil-glitch/"
            },
            {
                "id": "exo",
                "name": "Exo",
                "icon": "/files/gms/exo/img/small.jpg",
                "type": "game",
                "src": "/files/gms/exo/"
            },
            {
                "id": "factoryballs",
                "name": "Factory Balls Forever",
                "icon": "/files/gms/factoryballs/images/splash.png",
                "type": "game",
                "src": "/files/gms/factoryballs/"
            },
            {
                "id": "fake-virus",
                "name": "Fake Virus",
                "icon": "/files/gms/fake-virus/icon.png",
                "type": "game",
                "src": "/files/gms/fake-virus/"
            },
            {
                "id": "flappy-2048",
                "name": "Flappy 2048",
                "icon": "/files/gms/flappy-2048/meta/apple-touch-icon.png",
                "type": "game",
                "src": "/files/gms/flappy-2048/"
            },
            {
                "id": "flappy-bird",
                "name": "Flappy Bird",
                "icon": "/files/gms/flappy-bird/assets/thumb.png",
                "type": "game",
                "src": "/files/gms/flappy-bird/"
            },
            {
                "id": "flashtetris",
                "name": "Flash Tetris",
                "icon": "/files/gms/flashtetris/flashtetris.png",
                "type": "game",
                "src": "/files/gms/flashtetris/"
            },
            {
                "id": "game-inside",
                "name": "Game Inside a Game Inside a Game...",
                "icon": "/files/gms/game-inside/img/display.png",
                "type": "game",
                "src": "/files/gms/game-inside/"
            },
            {
                "id": "geodash",
                "name": "Geometry Dash (Scratch)",
                "icon": "/files/gms/geodash/geoscratchicon.png",
                "type": "game",
                "src": "/files/gms/geodash/"
            },
            {
                "id": "getaway-shootout",
                "name": "Getaway Shootout",
                "icon": "/files/gms/getaway-shootout/img/images.jpg",
                "type": "game",
                "src": "/files/gms/getaway-shootout/"
            },
            {
                "id": "gimme-the-airpod",
                "name": "Gimme the Airpod",
                "icon": "/files/gms/gimme-the-airpod/img/logo.png",
                "type": "game",
                "src": "/files/gms/gimme-the-airpod/"
            },
            {
                "id": "glass-city",
                "name": "Glass City",
                "icon": "/files/gms/glass-city/image.png",
                "type": "game",
                "src": "/files/gms/glass-city/"
            },
            {
                "id": "google-snake",
                "name": "Google Snake",
                "icon": "/files/gms/google-snake/img/snake.png",
                "type": "game",
                "src": "/files/gms/google-snake/"
            },
            {
                "id": "grindcraft",
                "name": "Grind Craft",
                "icon": "/files/gms/grindcraft/img/splash.png",
                "type": "game",
                "src": "/files/gms/grindcraft/"
            },
            {
                "id": "hackertype",
                "name": "Hacker Typer",
                "icon": "/files/gms/hackertype/logo192.png",
                "type": "game",
                "src": "/files/gms/hackertype/"
            },
            {
                "id": "hba",
                "name": "Hover Bot Arena",
                "icon": "/files/gms/hba/hoverbotarena.jpg",
                "type": "game",
                "src": "/files/gms/hba/"
            },
            {
                "id": "helicopter",
                "name": "Helicopter",
                "icon": "/files/gms/helicopter/helicopter.png",
                "type": "game",
                "src": "/files/gms/helicopter/"
            },
            {
                "id": "hexempire",
                "name": "Hex Empire",
                "icon": "/files/gms/hexempire/hexempire.jpg",
                "type": "game",
                "src": "/files/gms/hexempire/"
            },
            {
                "id": "HexGL",
                "name": "HexGL",
                "icon": "/files/gms/HexGL/icon_256.png",
                "type": "game",
                "src": "/files/gms/HexGL/"
            },
            {
                "id": "hextris",
                "name": "Hextris",
                "icon": "/files/gms/hextris/images/hextris-logo.png",
                "type": "game",
                "src": "/files/gms/hextris/"
            },
            {
                "id": "idle-breakout",
                "name": "Idle Breakout",
                "icon": "/files/gms/idle-breakout/img/thumbnail.png",
                "type": "game",
                "src": "/files/gms/idle-breakout/"
            },
            {
                "id": "idle-shark",
                "name": "Idle Shark",
                "icon": "/files/gms/idle-shark/img/sharkgame.png",
                "type": "game",
                "src": "/files/gms/idle-shark/"
            },
            {
                "id": "impossiblequiz",
                "name": "Impossible Quiz",
                "icon": "/files/gms/impossiblequiz/impossiblequiz.png",
                "type": "game",
                "src": "/files/gms/impossiblequiz/"
            },
            {
                "id": "interactivebuddy",
                "name": "Interactive Buddy",
                "icon": "/files/gms/interactivebuddy/interactivebuddy.jpg",
                "type": "game",
                "src": "/files/gms/interactivebuddy/"
            },
            {
                "id": "just-one-boss",
                "name": "Just One Boss",
                "icon": "/files/gms/just-one-boss/pv1Gr5.png",
                "type": "game",
                "src": "/files/gms/just-one-boss/"
            },
            {
                "id": "kittencannon",
                "name": "Kitten Cannon",
                "icon": "/files/gms/kittencannon/kittencannon.png",
                "type": "game",
                "src": "/files/gms/kittencannon/"
            },
            {
                "id": "krunker",
                "name": "Krunker",
                "icon": "/files/gms/krunker/img/krunker-io.jpg",
                "type": "game",
                "src": "/files/gms/krunker/"
            },
            {
                "id": "learntofly",
                "name": "Learn To Fly",
                "icon": "/files/gms/learntofly/learntofly.png",
                "type": "game",
                "src": "/files/gms/learntofly/"
            },
            {
                "id": "mario",
                "name": "Mario",
                "icon": "/files/gms/mario/Theme/Mario.gif",
                "type": "game",
                "src": "/files/gms/mario/"
            },
            {
                "id": "matrixrampage",
                "name": "Matrix Rampage",
                "icon": "/files/gms/matrixrampage/matrixrampage.jpg",
                "type": "game",
                "src": "/files/gms/matrixrampage/"
            },
            {
                "id": "meme2048",
                "name": "Meme 2048",
                "icon": "/files/gms/meme2048/img/rickroll.gif",
                "type": "game",
                "src": "/files/gms/meme2048/"
            },
            {
                "id": "minecraft",
                "name": "Eaglercraft",
                "icon": "/files/gms/minecraft/splash.jpeg",
                "type": "game",
                "src": "/files/gms/minecraft/"
            },
            {
                "id": "minecraft-classic",
                "name": "Minecraft Classic",
                "icon": "/files/gms/minecraft-classic/pack.png",
                "type": "game",
                "src": "/files/gms/minecraft-classic/"
            },
            {
                "id": "minesweeper",
                "name": "Minesweeper",
                "icon": "/files/gms/minesweeper/img/minesweeper.png",
                "type": "game",
                "src": "/files/gms/minesweeper/"
            },
            {
                "id": "miniputt",
                "name": "Mini-putt",
                "icon": "/files/gms/miniputt/miniputt.png",
                "type": "game",
                "src": "/files/gms/miniputt/"
            },
            {
                "id": "missiles",
                "name": "Missiles",
                "icon": "/files/gms/missiles/miss.png",
                "type": "game",
                "src": "/files/gms/missiles/"
            },
            {
                "id": "motox3m",
                "name": "MotoX3M",
                "icon": "/files/gms/motox3m/splash.jpg",
                "type": "game",
                "src": "/files/gms/motox3/"
            },
            {
                "id": "motox3m-pool",
                "name": "MotoX3M Pool",
                "icon": "/files/gms/motox3m-pool/splash.jpg",
                "type": "game",
                "src": "/files/gms/motox3m-pool/"
            },
            {
                "id": "motox3m-spooky",
                "name": "MotoX3M Spooky",
                "icon": "/files/gms/motox3m-spooky/splash.jpeg",
                "type": "game",
                "src": "/files/gms/motox3m-spooky/"
            },
            {
                "id": "motox3m-winter",
                "name": "MotoX3M Winter",
                "icon": "/files/gms/motox3m-winter/download.jpeg",
                "type": "game",
                "src": "/files/gms/motox3m-winter/"
            },
            {
                "id": "n-gon",
                "name": "n-gon",
                "icon": "/files/gms/n-gon/bot.png",
                "type": "game",
                "src": "/files/gms/n-gon/"
            },
            {
                "id": "ns-shaft",
                "name": "NS-Shaft",
                "icon": "/files/gms/ns-shaft/favicon.png",
                "type": "game",
                "src": "/files/gms/ns-shaft/"
            },
            {
                "id": "om-bounce",
                "name": "Om Nom Bounce",
                "icon": "/files/gms/om-bounce/assets/icon.jpeg",
                "type": "game",
                "src": "/files/gms/om-bounce/"
            },
            {
                "id": "pandemic2",
                "name": "Pandemic 2",
                "icon": "/files/gms/pandemic2/pandemic2.png",
                "type": "game",
                "src": "/files/gms/pandemic2/"
            },
            {
                "id": "papaspizzaria",
                "name": "Papa's Pizzaria",
                "icon": "/files/gms/papaspizzaria/papaspizzaria.jpg",
                "type": "game",
                "src": "/files/gms/papaspizzaria/"
            },
            {
                "id": "paperio2",
                "name": "Paper.io 2",
                "icon": "/files/gms/paperio2/images/icon512.png",
                "type": "game",
                "src": "/files/gms/paperio2/"
            },
            {
                "id": "papery-planes",
                "name": "Papery Planes",
                "icon": "/files/gms/papery-planes/splash.jpg",
                "type": "game",
                "src": "/files/gms/papery-planes/"
            },
            {
                "id": "particle-clicker",
                "name": "Particle Clicker",
                "icon": "/files/gms/particle-clicker/assets/mobile/original.png",
                "type": "game",
                "src": "/files/gms/particle-clicker/"
            },
            {
                "id": "polybranch",
                "name": "PolyBranch",
                "icon": "/files/gms/polybranch/img/pic1.png",
                "type": "game",
                "src": "/files/gms/polybranch/"
            },
            {
                "id": "portalflash",
                "name": "Portal (Flash)",
                "icon": "/files/gms/portalflash/portaltheflashversion.jpg",
                "type": "game",
                "src": "/files/gms/portalflash/"
            },
            {
                "id": "precision-client",
                "name": "Precision Client (Eaglercraft)",
                "icon": "/files/gms/precision-client/logo.png",
                "type": "game",
                "src": "/files/gms/precision-client/"
            },
            {
                "id": "push-the-square",
                "name": "Push The Square",
                "icon": "/files/gms/push-the-square/img/splash.png",
                "type": "game",
                "src": "/files/gms/push-the-square/"
            },
            {
                "id": "push-your-luck",
                "name": "Push Your Luck",
                "icon": "/files/gms/push-your-luck/assets/img/push.png",
                "type": "game",
                "src": "/files/gms/push-your-luck/"
            },
            {
                "id": "retro-bowl",
                "name": "Retro Bowl",
                "icon": "/files/gms/retro-bowl/img/icon.jpg",
                "type": "game",
                "src": "/files/gms/retro-bowl/"
            },
            {
                "id": "rolly-vortex",
                "name": "Rolly Vortex",
                "icon": "/files/gms/rolly-vortex/icon-256.png",
                "type": "game",
                "src": "/files/gms/rolly-vortex/"
            },
            {
                "id": "rooftop-snipers",
                "name": "Rooftop Snipers",
                "icon": "/files/gms/rooftop-snipers/img/preview.png",
                "type": "game",
                "src": "/files/gms/rooftop-snipers/"
            },
            {
                "id": "sand-game",
                "name": "Sand Game",
                "icon": "/files/gms/sand-game/sand.png",
                "type": "game",
                "src": "/files/gms/sand-game/"
            },
            {
                "id": "slope",
                "name": "Slope",
                "icon": "/files/gms/slope/slope4.jpeg",
                "type": "game",
                "src": "/files/gms/slope/"
            },
            {
                "id": "sm64",
                "name": "Super Mario 64",
                "icon": "/files/gms/sm64/logo.png",
                "type": "game",
                "src": "/files/gms/sm64/"
            },
            {
                "id": "smashkarts",
                "name": "Smash Carts",
                "icon": "/files/gms/smashkarts/images/icon-512.png",
                "type": "game",
                "src": "/files/gms/smashkarts/"
            },
            {
                "id": "smokingbarrels",
                "name": "Smoking Barrels",
                "icon": "/files/gms/smokingbarrels/smokingbarrels.jpg",
                "type": "game",
                "src": "/files/gms/smokingbarrels/"
            },
            {
                "id": "snowbattle",
                "name": "Snowbattle",
                "icon": "/files/gms/snowbattle/img/logo.png",
                "type": "game",
                "src": "/files/gms/snowbattle/"
            },
            {
                "id": "soldier-legend",
                "name": "Soilder Legend",
                "icon": "/files/gms/soldier-legend/images/splash.jpeg",
                "type": "game",
                "src": "/files/gms/soldier-legend/"
            },
            {
                "id": "solitaire",
                "name": "Solitare",
                "icon": "/files/gms/solitaire/screen-shot.png",
                "type": "game",
                "src": "/files/gms/solitaire/"
            },
            {
                "id": "sort-the-court",
                "name": "Sort The Court",
                "icon": "/files/gms/sort-the-court/img/splash.png",
                "type": "game",
                "src": "/files/gms/sort-the-court/"
            },
            {
                "id": "soundboard",
                "name": "Soundboard",
                "icon": "/files/gms/soundboard/img/mlg-favicon.png",
                "type": "game",
                "src": "/files/gms/soundboard/"
            },
            {
                "id": "stack",
                "name": "Stack",
                "icon": "/files/gms/stack/stack.png",
                "type": "game",
                "src": "/files/gms/stack/"
            },
            {
                "id": "stack-bump-3d",
                "name": "Stack Bump 3D",
                "icon": "/files/gms/stack-bump-3d/thumbnail.jpg",
                "type": "game",
                "src": "/files/gms/stack-bump-3d/"
            },
            {
                "id": "stealingthediamond",
                "name": "Stealing The Diamond",
                "icon": "/files/gms/stealingthediamond/stealingthediamond.jpg",
                "type": "game",
                "src": "/files/gms/stealingthediamond/"
            },
            {
                "id": "stickwar",
                "name": "Stick War",
                "icon": "/files/gms/stickwar/stickwar.jpg",
                "type": "game",
                "src": "/files/gms/stickwar/"
            },
            {
                "id": "stormthehouse2",
                "name": "Storm The House 2",
                "icon": "/files/gms/stormthehouse2/stormthehouse2.jpg",
                "type": "game",
                "src": "/files/gms/stormthehouse2/"
            },
            {
                "id": "superhot",
                "name": "Superhot",
                "icon": "/files/gms/superhot/hot.jpg",
                "type": "game",
                "src": "/files/gms/superhot/"
            },
            {
                "id": "swerve",
                "name": "Swerve",
                "icon": "/files/gms/swerve/img/favicon.jpg",
                "type": "game",
                "src": "/files/gms/swerve/"
            },
            {
                "id": "tacticalassassin2",
                "name": "Tactical Assassin 2",
                "icon": "/files/gms/tacticalassasin2/tacticalassassin2.png",
                "type": "game",
                "src": "/files/gms/tacticalassasin2/"
            },
            {
                "id": "tank-trouble-2",
                "name": "Tank Trouble 2",
                "icon": "/files/gms/tank-trouble-2/tank.jpeg",
                "type": "game",
                "src": "/files/gms/tank-trouble-2/"
            },
            {
                "id": "tanuki-sunset",
                "name": "Tanuki Sunset",
                "icon": "/files/gms/tanuki-sunset/img/cover.png",
                "type": "game",
                "src": "/files/gms/tanuki-sunset/"
            },
            {
                "id": "temple-run-2",
                "name": "Temple Run 2",
                "icon": "/files/gms/temple-run-2/img/og-icon.png",
                "type": "game",
                "src": "/files/gms/temple-run-2/"
            },
            {
                "id": "thebattle",
                "name": "The Battle",
                "icon": "/files/gms/thebattle/thebattle.png",
                "type": "game",
                "src": "/files/gms/thebattle/"
            },
            {
                "id": "the-final-earth",
                "name": "The Final Earth",
                "icon": "/files/gms/the-final-earth/images.png",
                "type": "game",
                "src": "/files/gms/the-final-earth/"
            },
            {
                "id": "theheist",
                "name": "The Heist",
                "icon": "/files/gms/theheist/theheist.jpg",
                "type": "game",
                "src": "/files/gms/theheist/"
            },
            {
                "id": "there-is-no-game",
                "name": "There Is No Game",
                "icon": "/files/gms/there-is-no-game/logo.png",
                "type": "game",
                "src": "/files/gms/there-is-no-game/"
            },
            {
                "id": "thisistheonlylevel",
                "name": "This Is The Only Level",
                "icon": "/files/gms/thisistheonlylevel/thisistheonlylevel.png",
                "type": "game",
                "src": "/files/gms/thisistheonlylevel/"
            },
            {
                "id": "tosstheturtle",
                "name": "Toss The Turtle",
                "icon": "/files/gms/tosstheturtle/tosstheturtle.png",
                "type": "game",
                "src": "/files/gms/tosstheturtle/"
            },
            {
                "id": "tube-jumpers",
                "name": "Tube Jumpers",
                "icon": "/files/gms/tube-jumpers/img/shark.jpg",
                "type": "game",
                "src": "/files/gms/tube-jumpers/"
            },
            {
                "id": "tunnel-rush",
                "name": "Tunnel Rush",
                "icon": "/files/gms/tunnel-rush/img/tunnel.jpg",
                "type": "game",
                "src": "/files/gms/tunnel-rush/"
            },
            {
                "id": "tv-static",
                "name": "TV Static",
                "icon": "/files/gms/tv-static/static.png",
                "type": "game",
                "src": "/files/gms/tv-static/"
            },
            {
                "id": "vex3",
                "name": "Vex 3",
                "icon": "/files/gms/vex3/vex3.png",
                "type": "game",
                "src": "/files/gms/vex3/"
            },
            {
                "id": "vex4",
                "name": "Vex 4",
                "icon": "/files/gms/vex4/vex4.png",
                "type": "game",
                "src": "/files/gms/vex4/"
            },
            {
                "id": "vex5",
                "name": "Vex 5",
                "icon": "/files/gms/vex5/vex.jpeg",
                "type": "game",
                "src": "/files/gms/vex5/"
            },
            {
                "id": "vex6",
                "name": "Vex 6",
                "icon": "/files/gms/vex6/assets/icon.jpeg",
                "type": "game",
                "src": "/files/gms/vex6/"
            },
            {
                "id": "webretro-local",
                "name": "Web Retro Local",
                "icon": "/files/gms/webretro-local/assets/icon204.png",
                "type": "game",
                "src": "/files/gms/webretro-local/"
            },
            {
                "id": "wolf3d",
                "name": "Wolfenstein 3D",
                "icon": "/files/gms/wolf3d/art/wolf3d.png",
                "type": "game",
                "src": "/files/gms/wolf3d/"
            },
            {
                "id": "wordle",
                "name": "Wordle",
                "icon": "/files/gms/wordle/img/logo_512x512.png",
                "type": "game",
                "src": "/files/gms/wordle/"
            },
            {
                "id": "worlds-hardest-game",
                "name": "World's Hardest Game",
                "icon": "/files/gms/worlds-hardest-game/images/splash.jpg",
                "type": "game",
                "src": "/files/gms/worlds-hardest-game/"
            },
            {
                "id": "worlds-hardest-game-2",
                "name": "World's Hardest Game 2",
                "icon": "/files/gms/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg",
                "type": "game",
                "src": "/files/gms/worlds-hardest-game-2/"
            },
            {
                "id": "you-are-bezos",
                "name": "You Are Jeff Bezos",
                "icon": "/files/gms/you-are-bezos/img/banner.png",
                "type": "game",
                "src": "/files/gms/you-are-bezos/"
            },
            {
                "id": "gunmayhem",
                "name": "Gun Mayhem",
                "icon": "/files/gms/gunmayhem/icon.png",
                "type": "game",
                "src": "/files/gms/gunmayhem/"
            },
            {
                "id": "gunmayhem2",
                "name": "Gun Mayhem 2",
                "icon": "/files/gms/gunmayhem2/icon2.jpg",
                "type": "game",
                "src": "/files/gms/gunmayhem2/"
            },
            {
                "id": "gunmayhemredux",
                "name": "Gun Mayhem Redux",
                "icon": "/files/gms/gunmayhemredux/redux.jpeg",
                "type": "game",
                "src": "/files/gms/gunmayhemredux/"
            }
        ]
    };

    const defaultSettings = {
        osTitle: 'AfiliteOS',
        osFavicon: '/files/images/logo.png'
    };

    let installedApps = [];
    let pinnedApps = [];
    let currentStep = 1;
    let setupData = {
        deviceName: 'My AfiliteOS',
        profilePic: '/files/images/logo.png',
        theme: 'dark',
        wallpaper: '/files/images/wallpapers/sky.jpeg',
    };
    let activeWindows = {};

    const setupWizardEl = document.getElementById('setup-wizard');
    const desktopEl = document.getElementById('desktop');
    const appContainerEl = document.getElementById('app-container');
    const taskbarEl = document.getElementById('taskbar');
    const openAppsTaskbarEl = document.getElementById('open-apps-taskbar');
    const pinnedAppsTaskbarEl = document.getElementById('pinned-apps-taskbar');
    const windowContainerEl = document.getElementById('window-container');
    const trashBinEl = document.getElementById('trashBin');
    const contextMenuEl = document.getElementById('context-menu');
    let highestZIndex = 1000;

    const switchStep = (from, to) => {
        const fromEl = document.getElementById(`step-${from}`);
        const toEl = document.getElementById(`step-${to}`);
        fromEl.classList.remove('fade-in');
        fromEl.classList.add('fade-out');
        setTimeout(() => {
            fromEl.classList.add('hidden');
            fromEl.classList.remove('fade-out');
            toEl.classList.remove('hidden');
            toEl.classList.add('fade-in');
        }, 500);
    };

    const nextStep = () => {
        if (currentStep === 2) {
            const name = document.getElementById('deviceName').value;
            if (name) {
                setupData.deviceName = name;
            }
        }
        if (currentStep === 4) {
            document.body.className = setupData.theme === 'dark' ? 'dark' : 'light';
            taskbarEl.className = `theme-taskbar fixed bottom-0 left-0 right-0 h-16 flex items-center px-4 rounded-t-2xl shadow-lg transition-colors duration-500 backdrop-blur-md z-[60] ${setupData.theme}`;
        }
        if (currentStep < 6) {
            currentStep++;
            switchStep(currentStep - 1, currentStep);
        }
        if (currentStep === 6) {

            setTimeout(() => {
                localStorage.setItem('isSetupComplete', 'true');
                localStorage.setItem('userData', JSON.stringify(setupData));
                localStorage.setItem('installedApps', JSON.stringify(installedApps));
                localStorage.setItem('pinnedApps', JSON.stringify(pinnedApps));
                loadDesktop();
            }, 2000);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            currentStep--;
            switchStep(currentStep + 1, currentStep);
        }
    };

    const selectTheme = (theme) => {
        setupData.theme = theme;
        document.getElementById('darkThemeBox').classList.remove('border-blue-500');
        document.getElementById('lightThemeBox').classList.remove('border-blue-500');
        document.getElementById(`${theme}ThemeBox`).classList.add('border-blue-500');
    };

    const selectWallpaper = (url) => {
        setupData.wallpaper = url;
        document.querySelectorAll('.wallpaper-thumb').forEach(img => img.classList.remove('border-blue-500'));
        const thumb = document.querySelector(`.wallpaper-thumb[data-src="${url}"]`);
        if (thumb) {
            thumb.classList.add('border-blue-500');
        }
    };

    document.getElementById('profilePicInput').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('profilePreview').src = e.target.result;
                setupData.profilePic = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('wallpaperInput').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                selectWallpaper(e.target.result);
                document.querySelectorAll('.wallpaper-thumb').forEach(img => img.classList.remove('border-blue-500'));
            };
            reader.readAsDataURL(file);
        }
    });

    const createIcon = (app, x, y) => {
        const iconEl = document.createElement('div');
        iconEl.className = 'app-icon flex flex-col items-center justify-center p-4 rounded-xl cursor-grab transition-transform transform hover:scale-105';
        iconEl.style.position = 'absolute';
        iconEl.style.left = `${x}px`;
        iconEl.style.top = `${y}px`;
        iconEl.setAttribute('draggable', 'true');
        iconEl.setAttribute('data-app-id', app.id);
        iconEl.innerHTML = `
                <img src="${app.icon}" class="w-12 h-12 mb-1 pointer-events-none rounded-[15px]" alt="${app.name} Icon">
                <span class="text-sm text-center w-20 truncate" title="${app.name}">${app.name}</span>
            `;
        appContainerEl.appendChild(iconEl);

        iconEl.addEventListener('click', (e) => {
            e.stopPropagation();
            launchApp(app);
        });

        iconEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            createContextMenu(app.id, 'desktop-icon', e.clientX, e.clientY);
        });

        iconEl.addEventListener('dragstart', (e) => {

            if (app.id === settingsApp.id) {
                e.preventDefault();
                return;
            }

            e.dataTransfer.setData('application/x-afiliteos-app-id', app.id);
            iconEl.classList.add('dragging');
            trashBinEl.classList.add('active');
        });
        iconEl.addEventListener('dragend', () => {
            iconEl.classList.remove('dragging');
            trashBinEl.classList.remove('active');
        });

        return iconEl;
    };

    trashBinEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    trashBinEl.addEventListener('drop', (e) => {
        e.preventDefault();

        const appId = e.dataTransfer.getData('application/x-afiliteos-app-id').trim();
        if (appId) {
            const appIndex = installedApps.findIndex(app => app.id === appId);
            if (appIndex > -1) {
                installedApps.splice(appIndex, 1);
                localStorage.setItem('installedApps', JSON.stringify(installedApps));
                renderApps();
            }
        }
    });

    const renderApps = () => {
        appContainerEl.innerHTML = '';

        const iconSize = 80;
        const padding = 20;
        const containerWidth = appContainerEl.offsetWidth;
        const iconsPerRow = Math.floor(containerWidth / (iconSize + padding));

        installedApps.forEach((app, index) => {
            const col = index % iconsPerRow;
            const row = Math.floor(index / iconsPerRow);
            const x = padding + col * (iconSize + padding);
            const y = padding + row * (iconSize + padding);
            createIcon(app, x, y);
        });
    };

    const renderPinnedApps = () => {
        pinnedAppsTaskbarEl.innerHTML = '';
        pinnedApps.forEach(app => {
            const taskbarItem = createTaskbarItem(app, true);
            pinnedAppsTaskbarEl.appendChild(taskbarItem);
        });
    };

    const bringToFront = (windowEl) => {
        if (!windowEl) return;
        highestZIndex++;
        windowEl.style.zIndex = highestZIndex;

        document.querySelectorAll('.window').forEach(win => win.classList.remove('active-window'));
        windowEl.classList.add('active-window');
    };

    const createTaskbarItem = (app) => {

        if (document.getElementById(`taskbar-item-${app.id}`)) {
            return document.getElementById(`taskbar-item-${app.id}`);
        }

        const taskbarItem = document.createElement('button');
        taskbarItem.id = `taskbar-item-${app.id}`;
        taskbarItem.className = 'taskbar-item p-2 rounded-xl transition-colors duration-200';
        taskbarItem.innerHTML = `<img src="${app.icon}" class="w-8 h-8 rounded-[15px]" alt="${app.name}">`;

        taskbarItem.addEventListener('click', () => {
            const win = activeWindows[app.id];
            if (win) {
                if (win.classList.contains('hidden')) {
                    win.classList.remove('hidden');
                }
                bringToFront(win);
            } else {
                launchApp(app);
            }
        });

        taskbarItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            createContextMenu(app.id, 'taskbar-item', e.clientX, e.clientY);
        });

        return taskbarItem;
    };

    const closeWindow = (appId) => {
        const win = activeWindows[appId];
        if (win) win.classList.add('hidden');

        if (!pinnedApps.find(a => a.id === appId)) {
            const taskbarItem = document.getElementById(`taskbar-item-${appId}`);
            if (taskbarItem) taskbarItem.remove();
            delete activeWindows[appId];
        }
    };

    const closeApp = (appId) => {
        const windowEl = activeWindows[appId];
        if (windowEl) {
            windowEl.classList.add('window-close-anim');
            setTimeout(() => {
                windowEl.remove();
                delete activeWindows[appId];
            }, 300);
        }
        const taskbarItem = document.getElementById(`taskbar-item-${appId}`);
        if (taskbarItem && !pinnedApps.some(app => app.id === appId)) {
            taskbarItem.remove();
        }
        hideContextMenu();
    };

    const pinApp = (appId) => {
        const app = [...allApps.apps, ...allApps.games, settingsApp].find(a => a.id === appId);
        if (app && !pinnedApps.some(a => a.id === appId)) {
            pinnedApps.push(app);
            localStorage.setItem('pinnedApps', JSON.stringify(pinnedApps));
            renderPinnedApps();
        }
        hideContextMenu();
    };

    const unpinApp = (appId) => {
        const index = pinnedApps.findIndex(a => a.id === appId);
        if (index > -1) {
            pinnedApps.splice(index, 1);
            localStorage.setItem('pinnedApps', JSON.stringify(pinnedApps));
            renderPinnedApps();
        }

        if (!activeWindows[appId]) {
            const taskbarItem = document.getElementById(`taskbar-item-${appId}`);
            if (taskbarItem) taskbarItem.remove();
        }

        hideContextMenu();
    };

    const createDraggableWindow = (app) => {
        const windowId = `window-${app.id}`;
        if (document.getElementById(windowId)) {
            bringToFront(document.getElementById(windowId));
            return;
        }

        const windowEl = document.createElement('div');
        windowEl.id = windowId;
        windowEl.className = `window theme-window absolute rounded-xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col ${setupData.theme}`;
        windowEl.style.width = '700px';
        windowEl.style.height = '500px';

        let currentX = (window.innerWidth - 700) / 2;
        let currentY = (window.innerHeight - 500) / 2;
        windowEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        bringToFront(windowEl);

        const contentHTML = app.src ?
            `<iframe src="${app.src}" class="w-full h-full border-none"></iframe>` :
            `<div class="p-4 text-center text-gray-500 dark:text-gray-400">Content for ${app.name} goes here.</div>`;

        windowEl.innerHTML = `
        <div class="window-drag-handle flex items-center justify-between p-3 rounded-t-xl bg-gray-200 dark:bg-gray-800 cursor-grab select-none" style="touch-action: none;">
            <div class="flex items-center space-x-2">
                <img src="${app.icon}" class="w-7 h-7" alt="${app.name} Icon">
                <span class="font-semibold text-sm truncate">${app.name}</span>
            </div>
            <div class="flex space-x-2">
                <button class="minimize-btn w-9 h-9 bg-yellow-400 rounded-full hover:scale-110 transition-transform"></button>
                <button class="maximize-btn w-9 h-9 bg-green-500 rounded-full hover:scale-110 transition-transform"></button>
                <button class="close-btn w-9 h-9 bg-red-500 rounded-full hover:scale-110 transition-transform"></button>
            </div>
        </div>
        <div class="flex-grow p-2 overflow-auto bg-white dark:bg-gray-700">
            ${contentHTML}
        </div>
        <div class="window-resizer bottom-right"></div>
    `;
        windowContainerEl.appendChild(windowEl);

        windowEl.style.opacity = "0";
        windowEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(0.9)`;
        windowEl.style.transition = "opacity 0.25s ease, transform 0.25s ease";

        requestAnimationFrame(() => {
            windowEl.style.opacity = "1";
            windowEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
        });

        let isDragging = false;
        let dragOffsetX = 0,
            dragOffsetY = 0;

        const dragHandle = windowEl.querySelector('.window-drag-handle');

        const startDrag = (clientX, clientY) => {
            if (windowEl.classList.contains('maximized')) return;
            bringToFront(windowEl);
            isDragging = true;
            dragOffsetX = clientX - currentX;
            dragOffsetY = clientY - currentY;
        };

        const moveDrag = (clientX, clientY) => {
            if (!isDragging) return;
            currentX = clientX - dragOffsetX;
            currentY = clientY - dragOffsetY;
            windowEl.style.transition = "none";
            windowEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        };

        const endDrag = () => {
            isDragging = false;
        };

        dragHandle.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
        document.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
        document.addEventListener('mouseup', endDrag);

        dragHandle.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            startDrag(t.clientX, t.clientY);
            e.preventDefault();
        }, {
            passive: false
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const t = e.touches[0];
            moveDrag(t.clientX, t.clientY);
            e.preventDefault();
        }, {
            passive: false
        });

        document.addEventListener('touchend', endDrag);

        const addButtonEvents = (element, handler) => {
            element.addEventListener('click', handler);
            element.addEventListener('touchend', (e) => {
                e.preventDefault();
                handler();
            });
        };

        const closeBtn = windowEl.querySelector('.close-btn');
        addButtonEvents(closeBtn, () => {
            windowEl.style.transition = "opacity 0.25s ease, transform 0.25s ease";
            windowEl.style.opacity = "0";
            windowEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(0.9)`;

            setTimeout(() => {
                closeApp(app.id);
                if (activeWindows[app.id]) delete activeWindows[app.id];
                windowEl.remove();
            }, 250);
        });

        const minimizeBtn = windowEl.querySelector('.minimize-btn');
        addButtonEvents(minimizeBtn, () => {
            windowEl.classList.add('hidden');
        });

        const maximizeBtn = windowEl.querySelector('.maximize-btn');
        const toggleMaximize = () => {
            if (windowEl.classList.contains('maximized')) {
                windowEl.classList.remove('maximized');
                windowEl.style.transition = "all 0.25s ease";
                windowEl.style.width = '700px';
                windowEl.style.height = '500px';
                currentX = (window.innerWidth - 700) / 2;
                currentY = (window.innerHeight - 500) / 2;
                windowEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
            } else {
                windowEl.classList.add('maximized');
                windowEl.style.transition = "all 0.25s ease";
                windowEl.style.width = '100vw';
                windowEl.style.height = '100vh';
                currentX = 0;
                currentY = 0;
                windowEl.style.transform = `translate(0px, 0px)`;
            }
        };

        addButtonEvents(maximizeBtn, toggleMaximize);

        let tapCount = 0;
        let tapTimer;
        dragHandle.addEventListener('touchend', (e) => {
            e.preventDefault();
            tapCount++;
            if (tapCount === 1) {
                tapTimer = setTimeout(() => {
                    tapCount = 0;
                }, 300);
            } else if (tapCount === 2) {
                clearTimeout(tapTimer);
                tapCount = 0;
                toggleMaximize();
            }
        });

        dragHandle.addEventListener('dblclick', toggleMaximize);

        activeWindows[app.id] = windowEl;
    };

    const createSettingsWindow = () => {
        const windowId = 'window-settings';
        const existingWindow = document.getElementById(windowId);
        if (existingWindow) {
            bringToFront(existingWindow);
            existingWindow.classList.remove('hidden');
            return;
        }

        const windowEl = document.createElement('div');
        windowEl.id = windowId;
        windowEl.className = `window theme-window absolute rounded-xl shadow-2xl overflow-hidden transition-all duration-300 pointer-events-auto flex flex-col ${setupData.theme}`;
        windowEl.style.width = '600px';
        windowEl.style.height = '600px';
        windowEl.style.top = `${Math.random() * (window.innerHeight - 600) + 50}px`;
        windowEl.style.left = `${Math.random() * (window.innerWidth - 800) + 50}px`;
        bringToFront(windowEl);

        windowEl.innerHTML = `
                <!-- Window header -->
                <div class="window-drag-handle flex items-center justify-between p-2 rounded-t-xl bg-gray-200 dark:bg-gray-800 cursor-grab">
                    <div class="flex items-center space-x-2">
                        <img src="${settingsApp.icon}" class="w-6 h-6" alt="Settings Icon">
                        <span class="font-semibold text-sm truncate">${settingsApp.name}</span>
                    </div>
                    <!-- Window controls -->
                    <div class="flex space-x-1">
                        <button class="minimize-btn w-3 h-3 bg-yellow-400 rounded-full hover:scale-110 transition-transform"></button>
                        <button class="maximize-btn w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform"></button>
                        <button class="close-btn w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform"></button>
                    </div>
                </div>
                <!-- Window content area -->
                <div class="flex-grow p-4 overflow-y-auto bg-white dark:bg-gray-700">
                    <h2 class="text-2xl font-bold mb-4">Device Settings</h2>

                    <!-- Profile Section -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-2">Profile</h3>
                        <div class="flex items-center space-x-4">
                            <img id="settingsProfilePic" class="w-24 h-24 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600" src="${setupData.profilePic}" alt="Profile Picture">
                            <div>
                                <label for="settingsProfilePicInput" class="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300">
                                    Change Profile Picture
                                </label>
                                <input type="file" id="settingsProfilePicInput" accept="image/*" class="hidden">
                            </div>
                        </div>
                    </div>

                    <!-- Favicon & Title Section -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-2">Favicon & Title</h3>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <label for="settingsTitleInput" class="block mb-1 text-sm font-medium">OS Title:</label>
                                <input type="text" id="settingsTitleInput" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" placeholder="AfiliteOS">
                            </div>
                            <div>
                                <label for="settingsFaviconInput" class="block mb-1 text-sm font-medium">Favicon URL:</label>
                                <input type="text" id="settingsFaviconInput" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" placeholder="Paste image URL or Data URL">
                            </div>
                            <div class="flex space-x-2">
                                <button id="saveFaviconTitleBtn" class="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300">Save</button>
                                <button id="resetFaviconTitleBtn" class="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors duration-300">Reset</button>
                            </div>
                        </div>
                        <h4 class="text-md font-semibold mt-4 mb-2">Presets</h4>
                        <div class="flex flex-wrap gap-2">
                            <div class="p-2 cursor-pointer border rounded-lg hover:border-blue-500 transition-colors duration-200 preset-item" 
                                data-title="IXL | Math, Language Arts, Science, Social Studies, and Spanish" 
                                data-favicon="/files/images/cloaks/ixl.png">
                                <img src="/files/images/cloaks/ixl.png" alt="logo" class="w-8 h-8 mx-auto">
                                <span class="block text-xs text-center">IXL</span>
                            </div>
                             <div class="p-2 cursor-pointer border rounded-lg hover:border-blue-500 transition-colors duration-200 preset-item" 
                                data-title="Google" 
                                data-favicon="/files/images/cloaks/google.webp">
                                <img src="/files/images/cloaks/google.webp" alt="logo" class="w-8 h-8 mx-auto">
                                <span class="block text-xs text-center">Google</span>
                            </div>
                             <div class="p-2 cursor-pointer border rounded-lg hover:border-blue-500 transition-colors duration-200 preset-item" 
                                data-title="Log in to Schoology" 
                                data-favicon="/files/images/cloaks/powerschool.png">
                                <img src="/files/images/cloaks/powerschool.png" alt="logo" class="w-8 h-8 mx-auto">
                                <span class="block text-xs text-center">Schoology</span>
                            </div>
                        </div>
                    </div>

                    <!-- Wallpaper Section -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-2">Wallpaper</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4" id="settingsWallpaperThumbs">
                             <img src="/files/images/wallpapers/green.jpg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/green.jpg">
                             <img src="/files/images/wallpapers/mount.jpg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/mount.jpg">
                             <img src="/files/images/wallpapers/pink.jpg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/pink.jpg">
                             <img src="/files/images/wallpapers/purp.jpg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/purp.jpg">
                             <img src="/files/images/wallpapers/sky.jpeg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/sky.jpeg">
                             <img src="/files/images/wallpapers/tree.jpg" class="wallpaper-thumb settings-wallpaper-thumb w-full h-auto rounded-xl shadow-md cursor-pointer border-4 border-transparent transition-all duration-300" data-src="/files/images/wallpapers/tree.jpg">
                        </div>
                        <label for="settingsWallpaperInput" class="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300">
                             Upload Custom Wallpaper
                        </label>
                        <input type="file" id="settingsWallpaperInput" accept="image/*" class="hidden">
                    </div>

                    <!-- Theme Section -->
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Theme</h3>
                        <div class="flex space-x-4">
                            <div class="flex flex-col items-center cursor-pointer" id="settings-dark-theme-box">
                                <div id="settingsDarkThemeBox" class="w-20 h-20 rounded-xl bg-gray-900 border-4 border-transparent transition-all duration-300"></div>
                                <span class="mt-2 text-sm font-medium">Dark</span>
                            </div>
                            <div class="flex flex-col items-center cursor-pointer" id="settings-light-theme-box">
                                <div id="settingsLightThemeBox" class="w-20 h-20 rounded-xl bg-white border-4 border-transparent transition-all duration-300"></div>
                                <span class="mt-2 text-sm font-medium">Light</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Resizer handles -->
                <div class="window-resizer top-left"></div>
                <div class="window-resizer top-right"></div>
                <div class="window-resizer bottom-left"></div>
                <div class="window-resizer bottom-right"></div>
            `;
        windowContainerEl.appendChild(windowEl);
        windowEl.classList.add('fade-in');

        activeWindows.settings = windowEl;

        document.getElementById(
            `settings${setupData.theme.charAt(0).toUpperCase() + setupData.theme.slice(1)}ThemeBox`
        ).classList.add("border-blue-500");

        const currentWallpaperThumb = document.querySelector(
            `.settings-wallpaper-thumb[data-src="${setupData.wallpaper}"]`
        );
        if (currentWallpaperThumb) currentWallpaperThumb.classList.add("border-blue-500");

        document.getElementById("settingsTitleInput").value = document.title;
        document.getElementById("settingsFaviconInput").value =
            document.getElementById("favicon").href;

        try {
            const cs = getComputedStyle(windowEl);
            if (cs.position === "static") windowEl.style.position = "absolute";
            windowEl.style.transition = "none";
            windowEl.style.willChange = "left, top, width, height";
            windowEl.style.touchAction = "none";
        } catch (err) {}

        [".close-btn", ".minimize-btn", ".maximize-btn"].forEach((sel) => {
            const btn = windowEl.querySelector(sel);
            if (btn) {
                btn.style.width = "36px";
                btn.style.height = "36px";
                btn.style.fontSize = "20px";
                btn.style.display = "flex";
                btn.style.alignItems = "center";
                btn.style.justifyContent = "center";
                btn.style.cursor = "pointer";
                btn.style.userSelect = "none";
                btn.style.touchAction = "manipulation";
            }
        });

        const dragHandle = windowEl.querySelector(".window-drag-handle");
        if (dragHandle) {
            dragHandle.style.padding = "12px";
            dragHandle.style.cursor = "grab";
            dragHandle.style.userSelect = "none";
            dragHandle.style.touchAction = "none";
        }

        let draggingPointerId = null;
        let dragStartX = 0,
            dragStartY = 0,
            dragStartLeft = 0,
            dragStartTop = 0;
        let resizingPointerId = null;
        let resizeStartX = 0,
            resizeStartY = 0,
            resizeStartWidth = 0,
            resizeStartHeight = 0;

        function onPointerDown(e) {
            bringToFront(windowEl);

            if (e.target.classList.contains("window-drag-handle")) {
                windowEl.setPointerCapture(e.pointerId);
                draggingPointerId = e.pointerId;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                const rect = windowEl.getBoundingClientRect();
                dragStartLeft = rect.left + window.scrollX;
                dragStartTop = rect.top + window.scrollY;
                document.body.style.userSelect = "none";
                windowEl.style.cursor = "grabbing";
            } else if (e.target.classList.contains("window-resizer")) {
                windowEl.setPointerCapture(e.pointerId);
                resizingPointerId = e.pointerId;
                resizeStartX = e.clientX;
                resizeStartY = e.clientY;
                const cs = getComputedStyle(windowEl);
                resizeStartWidth = parseInt(cs.width, 10);
                resizeStartHeight = parseInt(cs.height, 10);
                document.body.style.userSelect = "none";
                windowEl.style.cursor = "nwse-resize";
            }
        }

        function onPointerMove(e) {
            if (draggingPointerId !== null && e.pointerId === draggingPointerId) {
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                windowEl.style.left = dragStartLeft + dx + "px";
                windowEl.style.top = dragStartTop + dy + "px";
                return;
            }

            if (resizingPointerId !== null && e.pointerId === resizingPointerId) {
                const newW = Math.max(
                    120,
                    resizeStartWidth + (e.clientX - resizeStartX)
                );
                const newH = Math.max(
                    80,
                    resizeStartHeight + (e.clientY - resizeStartY)
                );
                windowEl.style.width = newW + "px";
                windowEl.style.height = newH + "px";
                return;
            }
        }

        function onPointerUpOrCancel(e) {
            if (draggingPointerId !== null && e.pointerId === draggingPointerId) {
                try {
                    windowEl.releasePointerCapture(e.pointerId);
                } catch (err) {}
                draggingPointerId = null;
                windowEl.style.cursor = "";
                document.body.style.userSelect = "";
            }
            if (resizingPointerId !== null && e.pointerId === resizingPointerId) {
                try {
                    windowEl.releasePointerCapture(e.pointerId);
                } catch (err) {}
                resizingPointerId = null;
                windowEl.style.cursor = "";
                document.body.style.userSelect = "";
            }
        }

        windowEl.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUpOrCancel);
        document.addEventListener("pointercancel", onPointerUpOrCancel);

        const closeBtn = windowEl.querySelector(".close-btn");
        if (closeBtn) closeBtn.addEventListener("click", () => closeApp("settings"));

        const minBtn = windowEl.querySelector(".minimize-btn");
        if (minBtn) minBtn.addEventListener("click", () => windowEl.classList.add("hidden"));

        const maxBtn = windowEl.querySelector(".maximize-btn");
        if (maxBtn) {
            maxBtn.addEventListener("click", () => {

                windowEl.style.transition = "top 0.25s ease, left 0.25s ease, width 0.25s ease, height 0.25s ease";

                if (
                    windowEl.style.top === "0px" &&
                    windowEl.style.left === "0px" &&
                    windowEl.style.width === "100vw" &&
                    windowEl.style.height === "100vh"
                ) {

                    windowEl.style.top = `${
        Math.random() * (window.innerHeight - 600) + 50
      }px`;
                    windowEl.style.left = `${
        Math.random() * (window.innerWidth - 800) + 50
      }px`;
                    windowEl.style.width = "600px";
                    windowEl.style.height = "600px";
                } else {

                    windowEl.style.top = "0px";
                    windowEl.style.left = "0px";
                    windowEl.style.width = "100vw";
                    windowEl.style.height = "100vh";
                }

                setTimeout(() => {
                    windowEl.style.transition = "none";
                }, 300);
            });
        }

        document.getElementById('settingsProfilePicInput').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const newPic = e.target.result;
                    setupData.profilePic = newPic;
                    localStorage.setItem('userData', JSON.stringify(setupData));
                    document.getElementById('settingsProfilePic').src = newPic;
                    document.querySelector('#osButton img').src = newPic;
                };
                reader.readAsDataURL(file);
            }
        });

        document.querySelectorAll('.settings-wallpaper-thumb').forEach(img => {
            img.addEventListener('click', () => {
                const newWallpaper = img.dataset.src;
                setupData.wallpaper = newWallpaper;
                localStorage.setItem('userData', JSON.stringify(setupData));
                loadDesktop();
                document.querySelectorAll('.settings-wallpaper-thumb').forEach(thumb => thumb.classList.remove('border-blue-500'));
                img.classList.add('border-blue-500');
            });
        });

        document.getElementById('settingsWallpaperInput').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const newWallpaper = e.target.result;
                    setupData.wallpaper = newWallpaper;
                    localStorage.setItem('userData', JSON.stringify(setupData));
                    loadDesktop();
                    document.querySelectorAll('.settings-wallpaper-thumb').forEach(thumb => thumb.classList.remove('border-blue-500'));
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('settings-dark-theme-box').addEventListener('click', () => {
            setupData.theme = 'dark';
            localStorage.setItem('userData', JSON.stringify(setupData));
            loadDesktop();

            document.getElementById('settings-dark-theme-box').classList.add('border-blue-500');
            document.getElementById('settings-light-theme-box').classList.remove('border-blue-500');
        });

        document.getElementById('settings-light-theme-box').addEventListener('click', () => {
            setupData.theme = 'light';
            localStorage.setItem('userData', JSON.stringify(setupData));
            loadDesktop();

            document.getElementById('settings-light-theme-box').classList.add('border-blue-500');
            document.getElementById('settings-dark-theme-box').classList.remove('border-blue-500');
        });

        document.getElementById('saveFaviconTitleBtn').addEventListener('click', () => {
            const newTitle = document.getElementById('settingsTitleInput').value;
            const newFavicon = document.getElementById('settingsFaviconInput').value;

            localStorage.setItem('osTitle', newTitle);
            localStorage.setItem('osFavicon', newFavicon);

            updateFaviconAndTitle();
        });

        document.getElementById('resetFaviconTitleBtn').addEventListener('click', () => {
            localStorage.setItem('osTitle', defaultSettings.osTitle);
            localStorage.setItem('osFavicon', defaultSettings.osFavicon);

            document.getElementById('settingsTitleInput').value = defaultSettings.osTitle;
            document.getElementById('settingsFaviconInput').value = defaultSettings.osFavicon;

            updateFaviconAndTitle();
        });

        document.querySelectorAll('.preset-item').forEach(item => {
            item.addEventListener('click', () => {
                const presetTitle = item.dataset.title;
                const presetFavicon = item.dataset.favicon;

                document.getElementById('settingsTitleInput').value = presetTitle;
                document.getElementById('settingsFaviconInput').value = presetFavicon;

                localStorage.setItem('osTitle', presetTitle);
                localStorage.setItem('osFavicon', presetFavicon);
                updateFaviconAndTitle();
            });
        });
    };

    const updateFaviconAndTitle = () => {
        const currentTitle = localStorage.getItem('osTitle') || defaultSettings.osTitle;
        const currentFavicon = localStorage.getItem('osFavicon') || defaultSettings.osFavicon;

        document.title = currentTitle;
        document.getElementById('favicon').href = currentFavicon;
    };

    const launchApp = (app) => {
        if (app.id === 'settings') {
            createSettingsWindow();
        } else if (!activeWindows[app.id]) {
            createDraggableWindow(app);
            const taskbarItem = createTaskbarItem(app);
            openAppsTaskbarEl.appendChild(taskbarItem);
        } else {
            const windowEl = activeWindows[app.id];
            windowEl.classList.remove('hidden');
            bringToFront(windowEl);
        }
    };

    const installApp = (appId) => {
        const app = [...allApps.apps, ...allApps.games].find(a => a.id === appId);
        if (app && !installedApps.some(a => a.id === appId)) {
            installedApps.push(app);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            renderApps();
            document.getElementById('storeModal').remove();

            const message = document.createElement('div');
            message.className = 'fixed top-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-xl shadow-lg z-[9999] fade-in';
            message.style.backgroundColor = '#374151';
            message.textContent = `${app.name} installed successfully!`;
            document.body.appendChild(message);
            setTimeout(() => {
                message.classList.add('fade-out');
                setTimeout(() => message.remove(), 500);
            }, 2000);
        }
    };

    const loadDesktop = () => {
        const desktopBg = `url('${setupData.wallpaper}')`;
        desktopEl.style.backgroundImage = desktopBg;
        document.body.className = setupData.theme === 'dark' ? 'dark' : 'light';
        taskbarEl.className = `theme-taskbar fixed bottom-0 left-0 right-0 h-16 flex items-center px-4 rounded-t-2xl shadow-lg transition-colors duration-500 backdrop-blur-md z-[60] ${setupData.theme}`;

        const osButton = document.getElementById('osButton');
        if (osButton) {
            osButton.innerHTML = `<img src="${settingsApp.icon}" class="w-8 h-8 rounded-xl pointer-events-none" alt="OS Icon">`;
        }

        setupWizardEl.classList.add('fade-out');
        setTimeout(() => {
            setupWizardEl.classList.add('hidden');
            desktopEl.classList.remove('hidden');
            desktopEl.classList.add('fade-in');
            renderApps();
            renderPinnedApps();
        }, 500);
    };

    const createContextMenu = (appId, type, x, y) => {
        hideContextMenu();

        const app = [...allApps.apps, ...allApps.games, settingsApp].find(a => a.id === appId);
        if (!app) return;

        const isPinned = pinnedApps.some(a => a.id === appId);
        const isOpen = activeWindows[app.id];

        let menuItems = [];
        if (isOpen) {
            menuItems.push({
                text: 'Close',
                action: () => closeApp(appId)
            });
        }

        if (type === 'taskbar-item') {
            if (isPinned) {
                menuItems.push({
                    text: 'Unpin from taskbar',
                    action: () => unpinApp(appId)
                });
            } else {
                menuItems.push({
                    text: 'Pin to taskbar',
                    action: () => pinApp(appId)
                });
            }
        } else if (type === 'desktop-icon' && !isPinned) {
            menuItems.push({
                text: 'Pin to taskbar',
                action: () => pinApp(appId)
            });
        }

        if (appId !== settingsApp.id) {
            menuItems.push({
                text: 'Uninstall',
                action: () => uninstallApp(appId)
            });
        }

        if (menuItems.length === 0) return;

        contextMenuEl.innerHTML = menuItems.map(item => `<div class="context-menu-item">${item.text}</div>`).join('');
        contextMenuEl.style.left = `${x}px`;
        contextMenuEl.style.top = `${y}px`;
        contextMenuEl.classList.remove('hidden');

        contextMenuEl.querySelectorAll('.context-menu-item').forEach((item, index) => {
            item.addEventListener('click', menuItems[index].action);
        });
    };

    const uninstallApp = (appId) => {

        const appIndex = installedApps.findIndex(app => app.id === appId);
        if (appIndex > -1) {
            installedApps.splice(appIndex, 1);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            renderApps();
        }

        const pinIndex = pinnedApps.findIndex(app => app.id === appId);
        if (pinIndex > -1) {
            pinnedApps.splice(pinIndex, 1);
            localStorage.setItem('pinnedApps', JSON.stringify(pinnedApps));
            renderPinnedApps();
        }

        closeApp(appId);

        hideContextMenu();
    };

    const hideContextMenu = () => {
        contextMenuEl.classList.add('hidden');
    };

    document.addEventListener('click', hideContextMenu);
    document.addEventListener('contextmenu', (e) => {
        if (!e.target.closest('.app-icon') && !e.target.closest('.taskbar-item')) {
            hideContextMenu();
        }
    });

    document.getElementById('start-setup-btn').addEventListener('click', nextStep);
    document.getElementById('step2-next-btn').addEventListener('click', nextStep);
    document.getElementById('step2-back-btn').addEventListener('click', prevStep);
    document.getElementById('step3-next-btn').addEventListener('click', nextStep);
    document.getElementById('step3-back-btn').addEventListener('click', prevStep);
    document.getElementById('step4-next-btn').addEventListener('click', nextStep);
    document.getElementById('step4-back-btn').addEventListener('click', prevStep);
    document.getElementById('step5-next-btn').addEventListener('click', nextStep);
    document.getElementById('step5-back-btn').addEventListener('click', prevStep);

    document.getElementById('dark-theme-box').addEventListener('click', () => selectTheme('dark'));
    document.getElementById('light-theme-box').addEventListener('click', () => selectTheme('light'));

    document.querySelectorAll('.wallpaper-thumb').forEach(img => {
        img.addEventListener('click', () => selectWallpaper(img.dataset.src));
    });

    window.addEventListener('resize', renderApps);

    const isSetupComplete = localStorage.getItem('isSetupComplete');
    if (isSetupComplete === 'true') {
        const userData = JSON.parse(localStorage.getItem('userData'));
        let installedAppsData = JSON.parse(localStorage.getItem('installedApps'));
        const pinnedAppsData = JSON.parse(localStorage.getItem('pinnedApps'));

        if (!installedAppsData || !installedAppsData.find(app => app.id === settingsApp.id)) {
            installedApps = [settingsApp, ...(installedAppsData || [])];
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
        } else {
            installedApps = installedAppsData;
        }

        if (userData) {
            setupData = userData;
        }
        if (pinnedAppsData) {
            pinnedApps = pinnedAppsData;
        }

        setupWizardEl.classList.add('hidden');
        desktopEl.classList.remove('hidden');
        loadDesktop();
    } else {

        installedApps = [settingsApp, ...allApps.apps.slice(0, 2)];
        setupWizardEl.classList.remove('hidden');
        desktopEl.classList.add('hidden');

        selectTheme('dark');
        selectWallpaper('/files/images/wallpapers/sky.jpeg');
    }

    updateFaviconAndTitle();

    document.getElementById('osButton').addEventListener('click', () => {
        const profile = JSON.parse(localStorage.getItem('userData'));
        const modal = document.createElement('div');
        modal.id = 'profileModal';
        modal.className = `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50 fade-in`;
        modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-sm w-full relative text-center">
                    <button id="closeProfileModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <img src="${profile.profilePic}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" alt="Profile Picture">
                    <h3 class="text-2xl font-bold mb-2">${profile.deviceName}</h3>
                    <p class="text-gray-600 dark:text-gray-400">Theme: <span class="capitalize">${profile.theme}</span></p>
                    <p class="text-gray-600 dark:text-gray-400">Installed Apps: ${installedApps.length}</p>
                    <p class="text-gray-600 dark:text-gray-400" >Created by Brunys :)</p>
                    <p class="text-gray-600 dark:text-gray-400" >Hosted by Exodus <a href="https://mexi.rest">@ neo</a></p>
            `;
        document.body.appendChild(modal);
        document.getElementById('closeProfileModal').addEventListener('click', () => modal.remove());
    });

    document.getElementById('storeButton').addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.id = 'storeModal';
        modal.className = `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50 fade-in`;
        modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-3xl w-full h-3/4 relative flex flex-col">
                    <button id="closeStoreModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <h3 class="text-2xl font-bold mb-6 text-center">Afilite Store</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto pr-4" id="storeAppsContainer">
                    </div>
                </div>
            `;
        document.body.appendChild(modal);

        const storeAppsContainer = document.getElementById('storeAppsContainer');
        [...allApps.apps, ...allApps.games].forEach(app => {
            const appDiv = document.createElement('div');
            appDiv.className = 'flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-transform duration-200 cursor-pointer';
            appDiv.innerHTML = `
                    <img src="${app.icon}" class="w-12 h-12 mb-2 rounded-[15px]" alt="${app.name} Icon">
                    <span class="text-lg font-semibold text-center">${app.name}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 mt-1">${app.type === 'game' ? 'Game' : 'App'}</span>
                    <button 
                    class="mt-2 px-4 py-1 text-white rounded-lg text-sm transition-colors duration-200"
                    style="background-color: #1f2937;"
                    onmouseover="this.style.backgroundColor='#171f2bff'"
                    onmouseout="this.style.backgroundColor='#1f2937'">
                    Install
                    </button>
                `;
            appDiv.addEventListener('click', () => installApp(app.id));
            storeAppsContainer.appendChild(appDiv);
        });

        document.getElementById('closeStoreModal').addEventListener('click', () => modal.remove());
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.id = 'searchModal';
        modal.className = `fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4 z-50 fade-in`;
        modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl max-w-md w-full mt-24 relative">
                    <button id="closeSearchModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <input type="text" id="searchInput" class="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search installed apps...">
                    <div id="searchResults" class="mt-2 space-y-2"></div>
                </div>
            `;
        document.body.appendChild(modal);
        document.getElementById('searchInput').focus();
        document.getElementById('closeSearchModal').addEventListener('click', () => modal.remove());

        document.getElementById('searchInput').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = '';
            const results = installedApps.filter(app => app.name.toLowerCase().includes(query));
            if (results.length > 0) {
                results.forEach(app => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer';
                    resultItem.innerHTML = `<img src="${app.icon}" class="w-6 h-6" alt="${app.name} icon"><span>${app.name}</span>`;
                    resultItem.addEventListener('click', () => {
                        launchApp(app);
                        modal.remove();
                    });
                    resultsContainer.appendChild(resultItem);
                });
            } else if (query) {
                resultsContainer.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400">No results found.</p>`;
            }
        });
    });
};