    window.onload = function() {

        const settingsApp = { "id": "settings", "name": "Settings", "icon": "/files/images/logo.png", "type": "app", "src": "" };

        const allApps = {
            "apps": [
                
            ],
            "games": [
                { "id": "snake", "name": "Vex 3", "icon": "/files/gms/vex3/vex3.png", "type": "game", "src": "/files/gms/vex3/" },
                { "id": "pacman", "name": "Vex 4", "icon": "/files/gms/vex4/vex4.png", "type": "game", "src": "/files/gms/vex4/" },
                { "id": "flappy-bird", "name": "Vex 5", "icon": "/files/gms/vex5/vex.jpeg", "type": "game", "src": "/files/gms/vex5/" },
                { "id": "2048", "name": "Vex 6", "icon": "/files/gms/vex6/assets/icon.jpeg", "type": "game", "src": "/files/gms/vex6/" }
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
                if (name) { setupData.deviceName = name; }
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
                <img src="${app.icon}" class="w-12 h-12 mb-1 pointer-events-none" alt="${app.name} Icon">
                <span class="text-sm text-center">${app.name}</span>
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

        const createTaskbarItem = (app, isPinned = false) => {
            const taskbarItem = document.createElement('button');
            taskbarItem.id = `taskbar-item-${app.id}`;
            taskbarItem.className = 'taskbar-item p-2 rounded-xl transition-colors duration-200';
            taskbarItem.innerHTML = `<img src="${app.icon}" class="w-8 h-8 pointer-events-none" alt="${app.name} icon">`;
            if(isPinned) {
                taskbarItem.classList.add('hover:bg-gray-200', 'dark:hover:bg-gray-700');
            } else {
                taskbarItem.classList.add('bg-gray-200', 'dark:bg-gray-700');
            }

            taskbarItem.addEventListener('click', () => {
                const win = activeWindows[app.id];
                if (win) {
                    if (win.classList.contains('hidden')) {
                        win.classList.remove('hidden');
                    }
                    bringToFront(win);

                    win.style.left = '0px';
                    win.style.top = '0px';
                } else if (isPinned) {
                    launchApp(app);
                }
            });

            taskbarItem.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                createContextMenu(app.id, 'taskbar-item', e.clientX, e.clientY);
            });

            return taskbarItem;
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
            if (appId === settingsApp.id) return; 
            const index = pinnedApps.findIndex(a => a.id === appId);
            if (index > -1) {
                pinnedApps.splice(index, 1);
                localStorage.setItem('pinnedApps', JSON.stringify(pinnedApps));
                renderPinnedApps();
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
            windowEl.className = `window theme-window absolute rounded-xl shadow-2xl overflow-hidden transition-all duration-300 pointer-events-auto flex flex-col ${setupData.theme}`;
            windowEl.style.width = '700px';
            windowEl.style.height = '500px';
            windowEl.style.top = `${Math.random() * (window.innerHeight - 600) + 50}px`;
            windowEl.style.left = `${Math.random() * (window.innerWidth - 800) + 50}px`;
            bringToFront(windowEl);

            const contentHTML = app.src ?
                `<iframe src="${app.src}" class="w-full h-full border-none"></iframe>` :
                `<div class="p-4 text-center text-gray-500 dark:text-gray-400">Content for ${app.name} goes here.</div>`;

            windowEl.innerHTML = `
                <!-- Window header -->
                <div class="window-drag-handle flex items-center justify-between p-2 rounded-t-xl bg-gray-200 dark:bg-gray-800 cursor-grab">
                    <div class="flex items-center space-x-2">
                        <img src="${app.icon}" class="w-6 h-6" alt="${app.name} Icon">
                        <span class="font-semibold text-sm truncate">${app.name}</span>
                    </div>
                    <!-- Window controls -->
                    <div class="flex space-x-1">
                        <button class="minimize-btn w-3 h-3 bg-yellow-400 rounded-full hover:scale-110 transition-transform"></button>
                        <button class="maximize-btn w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform"></button>
                        <button class="close-btn w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform"></button>
                    </div>
                </div>
                <!-- Window content area -->
                <div class="flex-grow p-2 overflow-auto bg-white dark:bg-gray-700">
                    ${contentHTML}
                </div>
                <!-- Resizer handles -->
                <div class="window-resizer top-left"></div>
                <div class="window-resizer top-right"></div>
                <div class="window-resizer bottom-left"></div>
                <div class="window-resizer bottom-right"></div>
            `;
            windowContainerEl.appendChild(windowEl);
            windowEl.classList.add('fade-in');

            let isDragging = false;
            let isResizing = false;
            let currentResizer = null;
            let offsetX, offsetY;
            let startX, startY, startWidth, startHeight;

            const onMouseDown = (e) => {
                bringToFront(windowEl);
                if (e.target.classList.contains('window-drag-handle')) {
                    isDragging = true;
                    offsetX = e.clientX - windowEl.offsetLeft;
                    offsetY = e.clientY - windowEl.offsetTop;
                } else if (e.target.classList.contains('window-resizer')) {
                    isResizing = true;
                    currentResizer = e.target;
                    startX = e.clientX;
                    startY = e.clientY;
                    startWidth = parseInt(document.defaultView.getComputedStyle(windowEl).width, 10);
                    startHeight = parseInt(document.defaultView.getComputedStyle(windowEl).height, 10);
                }
            };

            const onMouseMove = (e) => {
                if (isDragging) {
                    let x = e.clientX - offsetX;
                    let y = e.clientY - offsetY;
                    windowEl.style.left = `${x}px`;
                    windowEl.style.top = `${y}px`;
                } else if (isResizing) {
                    if (currentResizer.classList.contains('bottom-right')) {
                        windowEl.style.width = `${startWidth + e.clientX - startX}px`;
                        windowEl.style.height = `${startHeight + e.clientY - startY}px`;
                    }

                }
            };

            const onMouseUp = () => {
                isDragging = false;
                isResizing = false;
            };

            windowEl.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            windowEl.querySelector('.close-btn').addEventListener('click', () => {
                closeApp(app.id);
            });

            windowEl.querySelector('.minimize-btn').addEventListener('click', () => {
                windowEl.classList.add('hidden');
            });

            windowEl.querySelector('.maximize-btn').addEventListener('click', () => {

                if (windowEl.style.top === '0px' && windowEl.style.left === '0px' && windowEl.style.width === '100vw' && windowEl.style.height === '100vh') {
                    windowEl.style.top = `${Math.random() * (window.innerHeight - 600) + 50}px`;
                    windowEl.style.left = `${Math.random() * (window.innerWidth - 800) + 50}px`;
                    windowEl.style.width = '700px';
                    windowEl.style.height = '500px';
                } else {
                    windowEl.style.top = '0px';
                    windowEl.style.left = '0px';
                    windowEl.style.width = '100vw';
                    windowEl.style.height = '100vh';
                }
            });

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

            document.getElementById(`settings${setupData.theme.charAt(0).toUpperCase() + setupData.theme.slice(1)}ThemeBox`).classList.add('border-blue-500');
            const currentWallpaperThumb = document.querySelector(`.settings-wallpaper-thumb[data-src="${setupData.wallpaper}"]`);
            if (currentWallpaperThumb) {
                currentWallpaperThumb.classList.add('border-blue-500');
            }

            document.getElementById('settingsTitleInput').value = document.title;
            document.getElementById('settingsFaviconInput').value = document.getElementById('favicon').href;

            let isDragging = false;
            let isResizing = false;
            let currentResizer = null;
            let offsetX, offsetY;
            let startX, startY, startWidth, startHeight;

            const onMouseDown = (e) => {
                bringToFront(windowEl);
                if (e.target.classList.contains('window-drag-handle')) {
                    isDragging = true;
                    offsetX = e.clientX - windowEl.offsetLeft;
                    offsetY = e.clientY - windowEl.offsetTop;
                } else if (e.target.classList.contains('window-resizer')) {
                    isResizing = true;
                    currentResizer = e.target;
                    startX = e.clientX;
                    startY = e.clientY;
                    startWidth = parseInt(document.defaultView.getComputedStyle(windowEl).width, 10);
                    startHeight = parseInt(document.defaultView.getComputedStyle(windowEl).height, 10);
                }
            };

            const onMouseMove = (e) => {
                if (isDragging) {
                    let x = e.clientX - offsetX;
                    let y = e.clientY - offsetY;
                    windowEl.style.left = `${x}px`;
                    windowEl.style.top = `${y}px`;
                } else if (isResizing) {
                    if (currentResizer.classList.contains('bottom-right')) {
                        windowEl.style.width = `${startWidth + e.clientX - startX}px`;
                        windowEl.style.height = `${startHeight + e.clientY - startY}px`;
                    }

                }
            };

            const onMouseUp = () => {
                isDragging = false;
                isResizing = false;
            };

            windowEl.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            windowEl.querySelector('.close-btn').addEventListener('click', () => {
                closeApp('settings');
            });

            windowEl.querySelector('.minimize-btn').addEventListener('click', () => {
                windowEl.classList.add('hidden');
            });

            windowEl.querySelector('.maximize-btn').addEventListener('click', () => {
                if (windowEl.style.top === '0px' && windowEl.style.left === '0px' && windowEl.style.width === '100vw' && windowEl.style.height === '100vh') {
                    windowEl.style.top = `${Math.random() * (window.innerHeight - 600) + 50}px`;
                    windowEl.style.left = `${Math.random() * (window.innerWidth - 800) + 50}px`;
                    windowEl.style.width = '600px';
                    windowEl.style.height = '600px';
                } else {
                    windowEl.style.top = '0px';
                    windowEl.style.left = '0px';
                    windowEl.style.width = '100vw';
                    windowEl.style.height = '100vh';
                }
            });

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
                document.getElementById('settingsDarkThemeBox').classList.add('border-blue-500');
                document.getElementById('settingsLightThemeBox').classList.remove('border-blue-500');
            });
            document.getElementById('settings-light-theme-box').addEventListener('click', () => {
                setupData.theme = 'light';
                localStorage.setItem('userData', JSON.stringify(setupData));
                loadDesktop();
                document.getElementById('settingsLightThemeBox').classList.add('border-blue-500');
                document.getElementById('settingsDarkThemeBox').classList.remove('border-blue-500');
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
                message.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg z-[9999] fade-in';
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
            if(osButton) {
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
                menuItems.push({ text: 'Close', action: () => closeApp(appId) });
            }

            if (type === 'taskbar-item') {
                if (isPinned) {
                    menuItems.push({ text: 'Unpin from taskbar', action: () => unpinApp(appId) });
                } else {
                    menuItems.push({ text: 'Pin to taskbar', action: () => pinApp(appId) });
                }
            } else if (type === 'desktop-icon' && !isPinned) {
                menuItems.push({ text: 'Pin to taskbar', action: () => pinApp(appId) });
            }

            if (appId !== settingsApp.id) {
                 menuItems.push({ text: 'Uninstall', action: () => uninstallApp(appId) });
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

            if (userData) { setupData = userData; }
            if (pinnedAppsData) { pinnedApps = pinnedAppsData; }

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
                </div>
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
                    <img src="${app.icon}" class="w-12 h-12 mb-2" alt="${app.name} Icon">
                    <span class="text-lg font-semibold text-center">${app.name}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 mt-1">${app.type === 'game' ? 'Game' : 'App'}</span>
                    <button class="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200">Install</button>
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